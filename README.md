# ToiletFinder

## Getting Started (For teammates):
After cloning the project, install necessary node_modules:
```
npm install
```
Run the server:
```
npm start
```
Have fun, Phuc~~

Use these commands to spin up docker mysql server

create database: 
```
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=password -d mysql/mysql-server:5.7
```

MySQL log: 
```
docker exec -it mysql mysql -uroot -p
```
Fix perms:
```
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'password'
```