db.employees.find({},{_id:0,name:1})

db.employees.find({},{_id:1,name:1})

db.employees.find({},{name:1,email:1})

db.employees.find({},{_id:0,name:1,email:1})

db.employees.find({},{_id:0,name:1,department:1})

db.employees.find(
    {email:"amy@gmail.com"},
    {_id:0,name:1,department:1}
);

db.employees.find(
    {email:"amy@gmail.com"},
    {_id:0,name:1,department:1,email:1}
);

db.employees.insertOne({
    name : "Jason George",
    email : "jason@gmail.com",
    address : {city : "Jacksonville", state : "FL"},
    department : "HR",
    salary : 1000,
    location : ["FL","TX"],
    date : Date()
  });

  db.employees.find({location:"FL"})

  db.employees.find({location:"TX"})

  db.employees.find({},{name:1,department:"$department"})

