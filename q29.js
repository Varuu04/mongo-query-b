path to install:
https://www.mongodb.com/try/download/database-tools

set path in environment variables:
c drive>program files>mongodb>tools>100>bin

on command prompt
mongodump -d mydb-b -o c:\bck

mongosh
db.dropDatabase("mydb-b")

on command prompt
mongorestore -d mydb-b c:\bck\mydb-b

mongosh
