db.employees.updateOne(
    {email:"dan@gmail.com"},
    {$set:{department:"HR"}},
    {upsert:true} //upsert is the combination of update and insert
);

db.employees.updateOne(
    {email:"dan@gmail.com"},
    {$set:{salary:2000,department:"Admin"}},
    {upsert:true} 
);

db.employees.updateOne(
    {email:"dan@gmail.com"},
    {$set:
        {name:"Dan",
        email:"dan@gmail.com",
        department:"Admin",
        salary:2000,
        location:["FL","LA"],
        date:Date(),
    }},
    {upsert:true} 
);

