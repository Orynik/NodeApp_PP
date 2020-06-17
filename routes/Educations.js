const {Router} = require('express')
const education = require("../models/educationModels")
const router = Router()

router.get('/',  async (req,res) => {
    res.render('index',{
        title: "Главная страница",
    })
})

router.get("/education/create",(req,res)=>{
    res.render("educations/create",{
        title: "Добавление вида обучения"
    })
})

router.post("/create", async (req,res) =>{
    const Education = new education({
        NameOfEducation: req.body.NameOfEducation,
        Price: req.body.Price,
    })

    await Education.save();

    res.redirect("/education/")
})

router.get("/education",async (req,res)=>{
    const educations = await education.find()

    res.render("educations/index",{
        title: "Виды обучения",
        educations : educations,
    })
})

router.get("/education/details/:id", async (req, res) => {

    const educations = await education.findById(req.params.id)

    res.render("educations/details",{
        title: "Подробнее",
        education: educations
    })
});

router.get("/education/delete/:id", async (req,res) =>{
    const educations = await education.findById(req.params.id)

    res.render("educations/delete",{
        title: "Удалить",
        education: educations
    })
})

router.post("/delete",async (req,res) => {
    education.findByIdAndDelete(req.body._id).then(
        () => {
            res.redirect("/education")
        }
    )
})

router.get("/education/edit/:id", async (req,res) =>{
    const educations = await education.findById(req.params.id)

    res.render("educations/edit",{
        title: "Редактировать",
        education: educations
    })
})

router.post("/edit",async (req,res) => {
    education.findByIdAndUpdate(req.body._id,req.body).then(
        () => {
            res.redirect("/education")
        }
    )
})

module.exports = router;