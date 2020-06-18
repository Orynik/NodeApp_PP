const {Router} = require('express')
const router = Router()

const education = require("./education")
const api = require("./api")
const teacher = require("./teacher")

router.use("/education",education)
router.use("/api",api)
router.use("/teachers",teacher)

router.get('/',  async (req,res) => {
    res.render('index',{
        title: "Главная страница",
    })
})

module.exports = router;