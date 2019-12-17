var express = require('express');
var router = express.Router();
const adminController = require('./controllers/adminController')

router.post('/findplayer', (req, res) => {
    adminController.findPlayer(req.body)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.status(err.status).json(err)
        })
})

router.post('/updateplayer', (req, res) => {
    adminController.updatePlayer(req.body)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/createplater', (req, res) => {
    adminController.createPlayer(req.body)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(err.status).json(err)
        })
})

router.get('/getallitems', (req, res) => {
    adminController.getAllItems()
        .then(items => {
            res.json(items)
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/createitem', (req, res) => {
    adminController.createItem(req.body)
        .then(item => {
            res.json(item)
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/updateitem', (req, res) => {
    adminController.updateItem(req.body)
        .then(updateItem => {
            res.json(updateItem)
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/createquest', (req, res) => {
    adminController.createQuest(req.body)
        .then(quest => {
            res.json(quest)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/getrealmquests', (req, res) => {
    adminController.getRealmQuests(req.query)
        .then(quests => {
            res.json(quests)
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/updatequest', (req, res) => {
    adminController.updateQuest(req.body)
    .then(updateQuest => {
        res.json(updateQuest)
    })
    .catch(err => {
        res.json(err)
    })
})

router.post('/deletequest', (req, res) => {
    adminController.deleteQuest(req.body)
        .then(payload => {
            res.json(payload)
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/deleteitem', (req, res) => {
    adminController.deleteItem(req.body)
        .then(payload => {
            res.json(payload)
        })
        .catch(err => {
            res.json(err)
        })
        
})

router.post('/createskill', (req, res) => {
    adminController.createSkill(req.body)
        .then(skill => {
            res.json(skill)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/getallskills', (req, res) => {
    adminController.getAllSkills()
        .then(skills => {
            res.json(skills)
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/updateskill', (req, res) => {
    adminController.updateSkill(req.body)
        .then(updateSkill => {
            res.json(updateSkill)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router;