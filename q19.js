//Query operators

db.employees.find(
    {department:"HR"}
);

db.employees.find(
    {department:{$eq:"HR"}}
);            //same as above query but using equals operator

db.employees.find(
    {salary:{$eq:2000}}
);

db.employees.find(
    {salary:{$gt:2000}}
);          //gt is greater than

db.employees.find(
    {salary:{$gte:2000}}
);           //gte is greater than or equal to

db.employees.find(
    {salary:{$lt:3056}}
);             //lt is less than

db.employees.find(
    {salary:{$lte:3056}}
);               //lte is less than or equal to

db.employees.find(
    {department:{$ne:"HR"}}
);                //not equal to

db.employees.find(
    {department:{$not:"HR"}}
);            //not equal to