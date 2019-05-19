#!/bin/sh
#
#
#

sed -i "s/^ipaddress =.*/ipaddress=$HOST/" deploy.conf
sed -i "s/^address =.*/address=$MYSQL_ADDR/" deploy.conf
sed -i "s/^port =.*/port=$MYSQL_PORT/" deploy.conf
sed -i "s/^username =.*/username=$MYSQL_USER/" deploy.conf
sed -i "s/^password =.*/password=$MYSQL_PASSWORD/" deploy.conf

# 启动Inception
#/opt/inception/bin/Inception --defaults-file=/opt/inception/inc.cnf &

# 启动Yearning
python3 manage.py runserver 0.0.0.0:8000 --insecure