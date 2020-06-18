const {Router} = require('express')
const teacher = require("../models/teacherModels.js")
const router = Router()

router.get("/", async (req,res) => {
    const teachers = await teacher.find()

    res.render("teachers/index",{
        title: "Учителя",
        teachers
    })
})

router.get("/create",(req,res)=>{
    res.render("teachers/create",{
        title: "Добавление вида обучения"
    })
})

router.get("/details/:id", async (req,res) => {
    const Teacher = await teacher.findById(req.params.id)

    res.render("teachers/details",{
        title: "Подробнее",
        teacher: Teacher
    })
})

router.get("/delete/:id", async (req,res) =>{
    const Teacher = await teacher.findById(req.params.id)

    res.render("teachers/delete",{
        title: "Подробнее",
        teacher: Teacher
    })
})

router.get("/edit/:id", async (req,res) =>{
    const Teacher = await teacher.findById(req.params.id)

    res.render("teachers/edit",{
        title: "Подробнее",
        teacher: Teacher
    })
})

module.exports = router