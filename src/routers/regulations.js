const express = require('express')
const router = new express.Router()
const Dashboard = require('../models/admin')
const RegDocument = require('../models/regDocument')
const auth = require('../middleware/auth')

//Dashboard functions
router.post('/regDocuments', auth(Dashboard), async (req, res) => {
    const regDocument = new RegDocument({
        ...req.body
    })

    try {
        await regDocument.save()
        res.status(201).send(regDocument)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/regDocuments/:id', auth(Dashboard), async (req, res) => {
    const _id = req.params.id
    try {
        const regDocument = await RegDocument.findOneAndDelete({_id})
        if (!regDocument) {
            return res.status(404).send()
        }
        res.send(regDocument)
    } catch (e) {
        res.status(500).send()
    }
})

//get all regDocuments to show them to visitors
router.get('/regDocuments', auth(Dashboard), async (req, res) => {
    try {
        const regDocuments = await RegDocument.find({})
        if (!regDocuments) {
            return res.status(404).send()
        }
        res.send(regDocuments)
    }catch (e) {
        res.status(500).send()
    }
})

router.get('/regDocuments/last', auth(Dashboard), async (req, res) => {
    try {
        const regDocument = await RegDocument.find({}).sort({_id:-1}).limit(1)
        if (!regDocuments) {
            return res.status(404).send()
        }
        res.send(regDocuments)
    }catch (e) {
        res.status(500).send()
    }
}

module.exports = router