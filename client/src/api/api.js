import axios from "axios";

const createUser = async (firstName, lastName, email, username, password) => axios.post('http://localhost:3000/api/register',{firstName, lastName, email, username, password})
    .then(res => console.log(res.data))

const login = async (username, password) => axios.post('http://localhost:3000/api/login', {username, password})
    .then(res => console.log(res.data))

const upload = async (id, file) => axios.post(`http://localhost:3000/api/user/${id}/avatar`, file)
    .then(res => console.log(res.data))

const getUserData = async id => axios.get(`http://localhost:3000/api/user/${id}`)
    .then(res => console.log(res.data))

const userAvatar = async id => axios.get(`http://localhost:3000/api/user/${id}/avatar`)

const deleteById = async id => axios.delete(`http://localhost:3000/api/user/${id}`)
    .then(res => console.log(res.data))

const update = async (id, firstName, lastName, email) => axios.put(`http://localhost:3000/api/user/${id}`, {firstName, lastName, email})
    .then(res => console.log(res.data))

export {createUser, login, getUserData, deleteById, upload, userAvatar, update}