#!/usr/bin/env python3
from flask import *
from flask import Flask, send_from_directory
import sqlite3, hashlib, os
from werkzeug.utils import secure_filename
import rospy
from whi_mongodb_server.srv import MongoQuery
import json

app = Flask(__name__)
app.secret_key = 'random string'
UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = set(['jpeg', 'jpg', 'png', 'gif'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/webimages/<path:filename>')
def webimages(filename):
    image_path = "/home/nvidia/webdata/images/"
    return send_from_directory(image_path, filename)

@app.route('/tasks/data/pointId', methods=['POST'])
def get_task_point():
    getreq = request.json
    _id = getreq["id"]
    print('id:', _id)

    #查询当前页数据
    findquery = {
        "_id": _id
    }
    query_str = json.dumps(findquery)
    resp = mongo_client("find", "inspection_data", query_str)
    if not resp.status:
        print("mongodb find error ,please check")
        return False
    one_data = json.loads(resp.result)

    print('one_data is:',one_data)

    return one_data

@app.route('/tasklist', methods=['POST'])
def get_task_list():
    getreq = request.json
    pageNum = getreq["pageNum"]
    print('pageNum:', pageNum)
    page_size = 12
    skip = (pageNum - 1) * page_size

    #查询当前页数据
    findquery = {
        "skip": skip,
        "limit": page_size
    }
    query_str = json.dumps(findquery)
    resp = mongo_client("find_limit", "inspection_data", query_str)
    if not resp.status:
        print("mongodb find error ,please check")
        return False
    list_data = json.loads(resp.result)

    # 查询所有数据个数 , 计算页数

    query_str = "{}"
    resp = mongo_client("find_count", "inspection_data", query_str)
    if not resp.status:
        print("mongodb find error ,please check")
        return False
    else :
        print("mongodb find success")
    print('find_count:',resp.result)

    total_count = int(resp.result) 
    totalPages = (total_count + page_size - 1) // page_size
    
    result = {}
    result["content"] = list_data
    result["totalPages"] = totalPages
    #print(result)

    return result

@app.route("/")
def root():
    
    #image = "/webimages/image_20250305162934689754.jpg"
    '''
    findquery = {
        '$and': [
            {'current_time': {'$gt': start_time}},
            {'current_time': {'$lt': end_time}},
            {'task_name': onetask}
        ]
    }
    query_str = json.dumps(findquery)
    '''
    
    query_str = "{}"
    resp = mongo_client("find", "inspection_data", query_str)
    if not resp.status:
        print("mongodb find error ,please check")
        return False
    list_data = json.loads(resp.result)

    outlen = 30
    if len(list_data) < 30:
        outlen = len(list_data)
    some_list_data = list_data[:outlen]

    for i in range(len(some_list_data)):
        item_str = some_list_data[i].replace("'", '"')  
        item = json.loads(item_str)
        item["state_prob"] = str(round(float(item["state_prob"]), 2))
        some_list_data[i] = item


    return render_template('index.html',list_data = some_list_data)


def allowed_file(filename):
    return '.' in filename and \
            filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

def mongo_client(action, collection_name, data):
    try:
        rospy.wait_for_service('process_db_action')
        mongo_query = rospy.ServiceProxy('process_db_action', MongoQuery)
        resp = mongo_query(action, collection_name, data)
        return resp
        pass
    except rospy.ServiceException as e:
        print("Service call failed: %s" % e)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False)
