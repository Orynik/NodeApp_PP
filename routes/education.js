const {Router} = require('express')
const education = require("../models/educationModels")
const router = Router()

router.get("/",async (req,res)=>{
    const educations = await education.find()

    res.render("educations/index",{
        title: "Виды обучения",
        educations : educations,
    })
})

router.get("/create",(req,res)=>{
    res.render("educations/create",{
        title: "Добавление вида обучения"
    })
})

router.get("/details/:id", async (req, res) => {

    const educations = await education.findById(req.params.id)

    res.render("educations/details",{
        title: "Подробнее",
        education: educations
    })
});

router.get("/delete/:id", async (req,res) =>{
    const educations = await education.findById(req.params.id)

    res.render("educations/delete",{
        title: "Удалить",
        education: educations
    })
})

router.get("/edit/:id", async (req,res) =>{
    const educations = await education.findById(req.params.id)

    res.render("educations/edit",{
        title: "Редактировать",
        education: educations
    })
})

module.exports = router;