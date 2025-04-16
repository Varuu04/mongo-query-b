db.employees.find({
    $or:[
        {salary:{$gt:2000}},
        {department:{$eq:"HR"}}
    ],
});      //any of the condition should match

db.employees.find({
    $and:[
        {salary:{$gt:2000}},
        {department:{$eq:"HR"}}
    ],
});              //both of the conditions should match

