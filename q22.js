//Arrays

db.employees.updateMany(
    {},
    {$push:{points:5}}
);           //creates points array with value 5

db.employees.updateMany(
    {},
    {$push:{points:7}}
);            //inserts 7 into points array

db.employees.updateMany(
    {},
    {$addToSet:{points:9}}
);           // adds to existing array 

db.employees.updateMany(
    {},
    {$push:{hobies:"Movies"}}
); 

db.employees.updateMany(
    {},
    {$addToSet:{hobies:"Movies"}}
);          //for unique arrays without duplicates

db.employees.updateMany(
    {},
    {$addToSet:{hobies:"Music"}}
); 

db.employees.updateMany(
    {},
    {$addToSet:{hobies:"Sports"}}
); 

 db.employees.updateMany(
    {email:"ayan@gmail.com"},
    {$pull:{hobies:"Music"}}
);           //pull removes values from array

db.employees.updateMany(
    {},
    {$pull:{points:{$gte:7}}}
);