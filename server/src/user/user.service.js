const fs = require('fs').promises;
const path = require('path')
const userDto = require('./user.dto')

const readDatabase = async () => fs.readFile(path.join(process.env.DB_PATH))

const parseDatabase = async () => JSON.parse(String(await readDatabase()));

const create = async body => {
    const parseJSON = await parseDatabase()
    const alreadyExists = parseJSON.some(i => i.username === body.username)
    if (alreadyExists) return false;
    const uniqueId = `id${(+new Date).toString(16)}`;
    parseJSON.push({id: uniqueId, ...body})
    await fs.writeFile(path.join(process.env.DB_PATH), JSON.stringify(parseJSON))
    return {message: "Success registration", id: uniqueId}
}

const login = async body => {
    const parseJSON = await parseDatabase()
    const login = parseJSON.find(user => user.username === body.username && user.password === body.password)
    if (!login) return false;
    return {message: "Success login", id: login.id}
}

const findById = async id => {
    const parseJSON = await parseDatabase()
    const findOne = parseJSON.find(user => user.id === id)
    if (!findOne) return false;
    return new userDto(findOne);
}

const updateByID = async (id, body) => {
    const parseJSON = await parseDatabase()
    const findOneAndUpdate = parseJSON.find(user => user.id === id)
    if (!findOneAndUpdate) return false
    findOneAndUpdate.email = body.email || findOneAndUpdate.email
    findOneAndUpdate.firstName = body.firstName || findOneAndUpdate.firstName
    findOneAndUpdate.lastName = body.lastName || findOneAndUpdate.lastName
    console.log(1)
    console.log(parseJSON)
    await fs.writeFile(path.join(process.env.DB_PATH), JSON.stringify(parseJSON))
    return {message: "Success update", id: findOneAndUpdate.id}
}

const deleteById = async id => {
    const parseJSON = await parseDatabase()
    const findOneAndDelete = await findById(id)
    if (!findOneAndDelete) return false
    const deleteOne = parseJSON.filter(i => i.id !== id)
    await fs.writeFile(path.join(process.env.DB_PATH), JSON.stringify(deleteOne))
    return {message: "Success deleted", id: findOneAndDelete.id}
}

const uploadAvatarById = async (id, file) => {
    const parseJSON = await parseDatabase()
    const findOneAndUploadAvatar = parseJSON.find(user => user.id === id)
    if (!findOneAndUploadAvatar) return false;
    findOneAndUploadAvatar.avatar = file
    await fs.writeFile(path.join(process.env.DB_PATH), JSON.stringify(parseJSON))
    return {message: "Success upload", id: findOneAndUploadAvatar.id, avatar: file}
}

const getAvatarById= async id => {
    const findOneAndSendAvatar = await findById(id)
    if (!findOneAndSendAvatar) return false;
    const avatar = await fs.readFile(path.join(process.env.IMAGE_PATH + "\\" + findOneAndSendAvatar.avatar.filename))
    return {image: avatar, avatarData: findOneAndSendAvatar.avatar}
}

module.exports = {
    create,
    login,
    findById,
    updateByID,
    deleteById,
    uploadAvatarById,
    getAvatarById
}