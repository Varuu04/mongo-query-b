db.employees.updateOne(
    {email:"amy@gmail.com"},
    {$set:{department:"Admin"}}
);

db.employees.find();

db.employees.find(
    {department:"HR"}
);

db.employees.find(
    {department:"HR",location:"OH"}
);

db.employees.find(
    {department:"HR",location:"OH"},
    {_id:0,name:1,email:1}
);

db.employees.find(
    {department:"HR",location:"FL"},
    {_id:0,name:1,email:1}
);

db.employees.updateOne(
    {email:"jason@gmail.com"},
    {$set:{email:"jason@yahoo.com"}}
);