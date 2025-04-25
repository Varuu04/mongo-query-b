//use db-kia

//db.createCollection("cars")

db.cars.insertOne({name:"m1"})
db.cars.deleteOne({name:""})
db.cars.find();

db.cars.insertMany(
    [
    {},
    {model:"m1"},
    {model:"m2"},
    {model:"m3"}
    ]
);

db.cars.updateMany({},{$set:{price:20000}})

db.cars.updateOne({model:"m2"},{$inc:{price:20000}})

db.cars.updateMany({},{$set:{date:Date()}})

db.cars.updateOne(
    {model:"m1"},
    {$set:{variant:["v1","v2","v3"]}}
);

db.cars.updateOne(
    {model:"m1"},
    {$set:{variant:["v1"]}}
)

db.cars.updateMany({},{$set:{rating:5}})

db.cars.updateMany(
    {},
    {$set:{variant:"v1"}}
)
