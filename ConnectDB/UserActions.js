const User = require('../models/users');
const connectDb = require('../utils/connectDB');

const getUsers = async () => {
    const users = await connectDb.getDB(User);
    return users;
}

const getUser = async (id) => {
    const user = await connectDb.getDBById(User, id);
    return user;
}

const createUser = async (data) => {
    const user = await connectDb.postDB(User, data);
    return user;
}

const updateUser = async (id, data) => {
    const userUpdate = await connectDb.updateDBById(User, id, data);
    return userUpdate;
}

const removeUser = async (id) => {
    try {
        if(await connectDb.removeDB(User, {_id: id})) {
            const user = await getUsers(User);
            return user;
        } else {
            throw "Err Database"
        }
    } catch (error) {
        return {
            error
        }
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    removeUser
}