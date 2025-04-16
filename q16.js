db.employees.updateMany(
    {department:"HR"},
    {$set:{points:5}}
);
db.employees.find();

db.employees.updateMany(
    {},
    {$inc:{points:20}}
);

db.employees.updateMany(
    {email:"amy@gmail.com"},
    {$inc:{points:1}}
);//every time you run this query the points will get incremented by 1
db.employees.find({email:"amy@gmail.com"});