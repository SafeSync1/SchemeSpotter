const Express = require('express');
const R = Express.Router();

var admin = require("firebase-admin");

var serviceAccount = require("./services.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const usersDb = admin.firestore().collection('Schems1'); 
const db = admin.firestore();

R.post('/Insert',async(req, res)=>{
      const body = req.body;
      const doc = usersDb.doc(body.Sname);
      await doc.set({
        Sname: body.Sname,
        Age: body.Age,
        ApplicationProcess: body.ApplicationProcess,
        Benefits: body.Benefits,
        Details: body.Details,
        DocumentsRequired: body.DocumentsRequired,
        FamilyIncome: body.FamilyIncome,
        ParentIncome: body.ParentIncome,
        State: body.State,
        PersonalIncome: body.PersonalIncome,
        Occupation: body.Occupation,
        Gender: body.Gender,
        Minority: body.Minority,
        Bpl: body.Bpl,
        Category: body.Category,
        DifferentlyAbled: body.DifferentlyAbled,
        Student: body.Student,
        MaritalStatus: body.MaritalStatus,
        AreaOfResidence: body.AreaOfResidence,
        Destitute: body.Destitute,
        EmployementStatus: body.EmployementStatus
      })
      res.status(201).json({status: 201})
})

module.exports = R;