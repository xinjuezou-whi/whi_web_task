#!/usr/bin/env python3
from flask import *
from flask import Flask, send_from_directory
import sqlite3, hashlib, os
from werkzeug.utils import secure_filename
import rospy
from whi_mongodb_server.srv import MongoQuery
import json
from datetime import datetime
from fpdf import FPDF

app = Flask(__name__)
app.secret_key = 'random string'
UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = set(['jpeg', 'jpg', 'png', 'gif'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
save_image_path_ = "testimage"
save_report_path_ = "testwebreport"

@app.route('/webimages/<path:filename>')
def webimages(filename):
    image_path = save_image_path_     # "/home/nvidia/webdata/images/"
    return send_from_directory(image_path, filename)

@app.route('/webreports/<path:filename>')
def reports(filename):
    image_path = save_report_path_     
    return send_from_directory(image_path, filename)

@app.route('/tasks/data/pointId', methods=['POST'])
def get_task_point():
    getreq = request.json
    _id = getreq["id"]
    #print('id:', _id)

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

    return one_data

@app.route('/get_report', methods=['POST'])
def get_report_fun():
    getreq = request.json
    start_time = getreq["start_time"]
    end_time = getreq["end_time"]
    print("start_time:", start_time)
    print("end_time:", end_time)
    date_format = "%Y-%m-%d %H:%M:%S"
    dt_start = datetime.strptime(start_time, date_format)
    start_time_ts = dt_start.timestamp()
    dt_end = datetime.strptime(end_time, date_format)
    end_time_ts = dt_end.timestamp()
    print("start_time_ts:", start_time_ts)
    print("end_time_ts:", end_time_ts)
    start_time_ts = int(start_time_ts)
    end_time_ts = int(end_time_ts)


    result = {}
    findquery = {
        '$and': [
            {'current_time': {'$gt': start_time_ts}},
            {'current_time': {'$lt': end_time_ts}},
        ]
    }
    query_str = json.dumps(findquery)

    resp = mongo_client("find_count", "inspection_data", query_str)
    if not resp.status:
        print("mongodb find error ,please check")
        return False
    else :
        print("mongodb find success")
    print('find_count:',resp.result)
    total_count = int(resp.result) 
    if total_count == 0:
        print("find data , count == 0 ; return")
        result["count"] = 0
        return result

    resp = mongo_client("find", "inspection_data", query_str)
    if not resp.status:
        print("mongodb find error ,please check")
        return False
    list_data = json.loads(resp.result)

    # -------------------  生成报告 -----------------------------
    print("start web report")
    current_dir = os.path.dirname(os.path.abspath(__file__))

    pdf = FPDF(format=(280, 300))   # 单位默认为mm    210x297
    pdf.add_page()
    pdf.add_font("chinese", style="", fname=os.path.join(current_dir, "font/msyh.ttf"), uni=True)
    logo_url = os.path.join(current_dir, "font/logo.jpg")
    pdf.image(logo_url, x=0, y=0, w=30)
    pdf.ln()
    gx = pdf.get_x()
    pdf.set_x(gx+20)
    pdf.set_font("chinese", size=20)
    pdf.cell(200, 10, txt="巡检报告", ln=True, align='C')
    gy = pdf.get_y()
    pdf.set_y(gy+20)
    pdf.set_font("chinese", size=14)

    item_str = list_data[0].replace("'", '"')              #这里直接把单引号替换为双引号  ,因为单引号并非json数据
    item = json.loads(item_str)
    start_time = int(item["header"]["stamp"]["secs"])
    item_str = list_data[-1].replace("'", '"')          
    item = json.loads(item_str)
    end_time = int(item["header"]["stamp"]["secs"])
    if start_time > end_time:
        print("start_time > end_time , maybe something wrong ,please check")
        return True
    
    # 报告头 ----------------------------------------------------------------

    firstdate = datetime.fromtimestamp(start_time)
    first_datestr = firstdate.strftime('%Y-%m-%d')
    first_dateallstr = firstdate.strftime('%Y-%m-%d %H:%M:%S')

    lastdate = datetime.fromtimestamp(end_time)
    last_dateallstr = lastdate.strftime('%Y-%m-%d %H:%M:%S')

    header_widths = [50, 75, 50, 75]
    header_height = 15
    pdf.cell(header_widths[0], header_height, "变电站", 1, 0, 'C')
    pdf.cell(header_widths[1], header_height, "变电站1", 1, 0, 'C')
    pdf.cell(header_widths[2], header_height, "电压等级", 1, 0, 'C')
    pdf.cell(header_widths[3], header_height, "35kv", 1, 0, 'C')
    pdf.ln()
    pdf.cell(header_widths[0], header_height, "巡视日期", 1, 0, 'C')
    pdf.cell(header_widths[1], header_height, first_datestr, 1, 0, 'C')
    pdf.cell(header_widths[2], header_height, "变电站类别", 1, 0, 'C')
    pdf.cell(header_widths[3], header_height, "", 1, 0, 'C')
    pdf.ln()
    pdf.cell(header_widths[0], header_height, "巡视任务", 1, 0, 'C')
    pdf.cell(header_widths[1], header_height, "任务名称", 1, 0, 'C')
    pdf.cell(header_widths[2], header_height, "环境信息", 1, 0, 'C')
    pdf.cell(header_widths[3], header_height, "", 1, 0, 'C')    
    pdf.ln()
    pdf.cell(header_widths[0], header_height, "开始时间", 1, 0, 'C')
    pdf.cell(header_widths[1], header_height, first_dateallstr, 1, 0, 'C')
    pdf.cell(header_widths[2], header_height, "结束时间", 1, 0, 'C')
    pdf.cell(header_widths[3], header_height, last_dateallstr, 1, 0, 'C')   
    pdf.ln()
    pdf.cell(header_widths[0], header_height, "审核人", 1, 0, 'C')
    pdf.cell(header_widths[1], header_height, "", 1, 0, 'C')
    pdf.cell(header_widths[2], header_height, "审核时间", 1, 0, 'C')
    pdf.cell(header_widths[3], header_height, "", 1, 0, 'C')   
    pdf.ln()
    pdf.cell(header_widths[0], header_height, "设备型号", 1, 0, 'C')
    pdf.cell(header_widths[1], header_height, "NaviBOT Lr2 ", 1, 0, 'C')
    pdf.cell(header_widths[2], header_height, "设备信息", 1, 0, 'C')
    pdf.cell(header_widths[3], header_height, "", 1, 0, 'C')
    pdf.ln()
    gy = pdf.get_y()
    pdf.set_y(gy+20)

    # 表格内容----------------------------------------------------------

    #pdf.cell(30, 10, "任务名称", 1, 0, 'C')
    #pdf.cell(50, 10, onetask, 1, 0, 'C')
    #pdf.ln()

    count = 0

    widths = [10, 30, 30, 30, 40, 30, 30, 50]
    pdf.cell(widths[0], 10, "序号", 1)
    pdf.cell(widths[1], 10, "区域", 1)
    pdf.cell(widths[2], 10, "检测时间", 1)
    pdf.cell(widths[3], 10, "柜体名称", 1)
    pdf.cell(widths[4], 10, "设备名称", 1)
    pdf.cell(widths[5], 10, "检测结果", 1)
    pdf.cell(widths[6], 10, "准确率", 1)
    pdf.cell(widths[7], 10, "图片", 1)
    pdf.ln()
    cellheight =37.5

    for item in list_data:
        count += 1
        if isinstance(item, str):  # 如果 item 是字符串
            item_str = item.replace("'", '"')              #这里直接把单引号替换为双引号  ,因为单引号并非json数据
            item = json.loads(item_str)
        pdf.cell(widths[0], cellheight, str(count), 1, 0, 'C')
        pdf.cell(widths[1], cellheight, "区域1", 1, 0, 'C')
        date1 = datetime.fromtimestamp(item["header"]["stamp"]["secs"])

        datestr = date1.strftime('%Y-%m-%d \n %H:%M:%S')
        #pdf.cell(widths[1], cellheight, datestr, 1)
        pdf.multi_cell(widths[2], 12.5, datestr, 1, 'L')            # 这里设置 multi_cell height 为12.5 ，与普通的cell等高
        multi_y = pdf.get_y()
        pdf.set_xy(pdf.get_x() + widths[0] + widths[1] + widths[2], multi_y - cellheight)   # 这里 y 直接减 cellheight ,是对于换页情况的设置
        pdf.cell(widths[3], cellheight, item["cabinet_id"], 1, 0, 'C')
        pdf.cell(widths[4], cellheight, item["cls"], 1, 0, 'C')
        pdf.cell(widths[5], cellheight, item["state"], 1, 0, 'C')
        pdf.cell(widths[6], cellheight, str(round(float(item["state_prob"]), 2)), 1, 0, 'C')
        gx = pdf.get_x()
        gy = pdf.get_y()
        img_url = item["img_url"]
        img_file = save_image_path_ + img_url
        pdf.image(img_file, x=gx, y=gy, w=50)
        pdf.set_y(gy)
        pdf.ln()

    current_time = datetime.now().strftime("%Y%m%d%H%M%S")
    file_name = f"web_report_{current_time}.pdf"
    full_path = os.path.join(save_report_path_, file_name)
    pdf.output(full_path)
    print("output pdf report.")

    result["count"] = total_count
    result["file_name"] = file_name
    return result


@app.route('/tasklist', methods=['POST'])
def get_task_list():
    getreq = request.json
    pageNum = getreq["pageNum"]
    #print('pageNum:', pageNum)
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
    #print('find_count:',resp.result)

    total_count = int(resp.result) 
    totalPages = (total_count + page_size - 1) // page_size
    
    result = {}
    result["content"] = list_data
    result["totalPages"] = totalPages

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
    rospy.init_node("whi_web_task", anonymous=True)
    save_image_path_ = rospy.get_param("~inspection_img_url")
    save_report_path_ = rospy.get_param("~save_report_path")
    print("save_image_path is: ",save_image_path_);

    app.run(host='0.0.0.0', debug=False)
