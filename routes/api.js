const {Router} = require('express')
const education = require("../models/educationModels")
const teacher = require("../models/teacherModels")
const router = Router()

//education

router.post("/education/create", async (req,res) =>{
    const Education = new education({
        NameOfEducation: req.body.NameOfEducation,
        Price: req.body.Price,
    })

    await Education.save();

    res.redirect("/education/")
})

router.post("/education/delete",async (req,res) => {
    education.findByIdAndDelete(req.body._id).then(
        () => {
            res.redirect("/education")
        }
    )
})

router.post("/education/edit",async (req,res) => {
    education.updateOne(req.body._id,req.body).then(
        () => {
            res.redirect("/education")
        }
    )
})

//teacher

router.post("/teacher/create", async (req,res) =>{
    const Teacher = new teacher({
        LastName: req.body.LastName,
        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        Age: req.body.Age,
        Post: req.body.Post,
        Specialization: req.body.Specialization,
    })

    await Teacher.save();

    res.redirect("/teachers/")
})

router.post("/teacher/delete",async (req,res) => {
    teacher.findByIdAndDelete(req.body._id).then(
        () => {
            res.redirect("/teachers")
        }
    )
})

router.post("/teacher/edit",async (req,res) => {
    teacher.updateOne(req.body._id,req.body).then(
        () => {
            res.redirect("/teachers")
        }
    )
})

module.exports = router