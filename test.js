var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',  // 旧版本docker这里需要填写ip
  user     : 'root',
  password : '123456',
});

connection.connect();
// 永远不要在MySQL使用 utf8，而要使用 utf8mb4
// 设置 MySQL 使用 utf8mb4

// CREATE TABLE IF NOT EXISTS user
connection.query('CREATE DATABASE IF NOT EXISTS user DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_520_ci;', function (error, results, fields) {
  if (error) throw error;
  console.log('创建数据库');
  console.log(results);
  // console.log('The solution is: ', results[0].solution);
});
connection.query('use user;')
connection.query(`CREATE TABLE IF NOT EXISTS user(
  name text,
  age int
);`, function (error, results, fields) {
  if (error) throw error;
  console.log('创建数据库');
  console.log(results);
  // console.log('The solution is: ', results[0].solution);
});

connection.end();