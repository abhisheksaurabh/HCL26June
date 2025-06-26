
1.Data Model:
1.1 Staff:

name: String,
 role: String,
 department: String,
1.2: Shifts:
       
   staffId: (“taking ref erence from staff ” ,create type as obejctID) ,
  date: Date,
  startTime: String,
  endTime: String
1.3:Attandence:

 staffId: (“taking ref erence from staff ” ,create type as obejctID) ,
  date: Date,
  status: { type: String, enum: ['Present', 'Absent', 'Late'], default: 'Absent' }
2.Technology Stack:
MongoDB
ExpressJs
NodeJS
Angular

Others:
Zod,
bcryptjs,
middlware(lib from expressjs),
JWT : Authentication
Mongoose: MongoDB object modeling
API Testing : Postman
DevOps: Jenkins/ Github
Package Manage:npm
3:List API
     3.1:Staff list
     3.2:Attandence
     3.3:shift route
     3.4:staff route

