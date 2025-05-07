# whi_web_task
Web report of inspection task

## Dependency

```
pip install Flask
```

## Run

First, make sure the mongodb server is running
```
roslaunch whi_mongodb_server mongodb_server.launch
```

Then start this web server:
```
roslaunch whi_web_task whi_web_task.launch
```

Now the report can be viewed from a browser with the robot's IP and port 5000
```
http://<robot_ip>:5000/
```

![image](https://github.com/user-attachments/assets/1636ef10-7556-442e-9c24-44012a59f40e)

