db.employees.find(
    {location:{$exists:false}}
);             //it gives values where location field is not there

db.employees.find(
    {location:{$exists:true}}
); 

db.employees.find(
    {department:{$in:["HR","Admin"]}}
);             //it will give records where dept in hr and admin

db.employees.find(
    {department:{$nin:["HR","Admin"]}}
);             //not in 