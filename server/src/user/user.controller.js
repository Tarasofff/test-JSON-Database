const Router = require('express').Router;
const router = Router();
const log = require('../logger/logger.connect');
const userService = require('./user.service');
const multer = require('multer');
const storageConfig = require('../web/multer.config');
const path = require('path');

router.post('/register', async (req, res) => {
    try {
        log.debug("user.controller.js: Create user req.body= ", req.body)
        if (!req.body.username || !req.body.email || !req.body.firstName || !req.body.lastName || !req.body.password) return res.status(400).json({message: "Bad Request"});

        const registration = await userService.create(req.body)
        if(!registration) return res.status(400).json({message: 'Username already exists, please type unique username'});
        log.debug("user.controller.js: Create user= ", registration)

        return res.status(201).json(registration);
    } catch (error) {
        log.error("user.controller.js: Create user error= ", error);
        res.status(500).json({message: "Internal server error"});
    }
});

router.post('/login', async (req, res) => {
    try {
        log.debug("user.controller.js: Login user req.body= ", req.body)
        if (!req.body.username || !req.body.password) return res.status(400).json({message: "Bad Request"});

        const login = await userService.login(req.body)
        if(!login) return res.status(404).json({message: "User not find"});
        log.debug("user.controller.js: Login user= ", login)

        return res.status(200).json(login);
    } catch (error) {
        log.error("user.controller.js: Login user error= ", error);
        res.status(500).json({message: "Internal server error"});
    }
});

router.post('/user/:id/avatar', multer({
    storage: storageConfig, fileFilter(req, file, callback) {
        let extension = path.extname(file.originalname);
        if (extension !== '.jpg' && extension !== '.jpeg' && extension !== '.gif')  return callback(new Error('Only jpeg/gif'))
        callback(null, true) }}).single('image'), async (req, res) => {
    try {
        const {file} = req

        log.debug("user.controller.js: User id= ", req.params.id, "file data: ", file)
        if (!file) return res.status(400).json({message: 'Bad Request'})

        const upload = await userService.uploadAvatarById(req.params.id, file)
        if (!upload) return res.status(404).json({message: "User not find"});

        return res.status(201).json(upload);
    } catch (error) {
        log.error("user.controller.js: Create user error= ", error);
        res.status(500).json({message: "Internal server error"});
    }
});

router.get('/user/:id', async (req, res) => {
    try {
        log.debug("user.controller.js: Get user id= ", req.params.id)

        const user = await userService.findById(req.params.id)
        if(!user) return res.status(404).json({message: "User not find"});
        log.debug("user.controller.js:  user data= ", user)

        return res.status(200).json(user);
    } catch (error) {
        log.error("user.controller.js: Create user error= ", error);
        res.status(500).json({message: "Internal server error"});
    }
});

router.get('/user/:id/avatar', async (req, res) => {
    try {
        const { attachment } = req.query
        const downloadFlag = attachment === 'true'? 'attachment' : 'inline';
        log.debug("user.controller.js: Get avatar user id= ", req.params.id, "flag =", downloadFlag)

        const avatar = await userService.getAvatarById(req.params.id)
        if(!avatar) return res.status(404).json({message: "User not find"});
        log.debug("user.controller.js:  user avatar= ", avatar)

        res.setHeader('Content-Type', `${avatar.avatarData.mimetype}`)
        res.setHeader("Content-Disposition", `${downloadFlag};filename=` + avatar.avatarData.originalname)
        return res.status(200).end(avatar.image)
    } catch (error) {
        log.error("user.controller.js: Get avatar user error= ", error);
        res.status(500).json({message: "Internal server error"});
    }
});

router.put('/user/:id', async (req, res) => {
    try {
        log.debug("user.controller.js: Update user id= ", req.params.id, "req.body= ", req.body)

        const update = await userService.updateByID(req.params.id, req.body)
        if (!update) return res.status(404).json({message: "User not find"});
        log.debug("user.controller.js: updated user data= ", update)

        return res.status(201).json(update);
    } catch (error) {
        log.error("user.controller.js: Update user error= ", error);
        res.status(500).json({message: "Internal server error"});
    }
});

router.delete('/user/:id', async (req, res) => {
    try {
        log.debug("user.controller.js: Delete user id= ", req.params.id)

        const deletedUser = await userService.deleteById(req.params.id)
        if (!deletedUser) return res.status(404).json({message: "User not find"});
        log.debug("user.controller.js: Deleted user= ", deletedUser)

        return res.status(200).json(deletedUser);
    } catch (error) {
        log.error("user.controller.js: Delete user error= ", error);
        res.status(500).json({message: "Internal server error"});
    }
});

module.exports = router;