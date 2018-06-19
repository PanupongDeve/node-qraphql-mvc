const Users = require('../models/users');
const connectDb = require('../utils/connectDB');

const storeUserFromAuth = async (data) => {
    await connectDb.postDB(Users, data);
}

const isExistingUser = async (data) => {
    let existUser = false;
    const request = {
        User_ID: data.User_ID
    }

    const users = await connectDb.getDBByElement(Users, request);
    if(users.length > 0) {
        existUser = true;
    }
    return existUser;
}

const getUserByUserID = async (data) => {
    const request = {
        User_ID: data.User_ID
    }
    return await connectDb.getDBByElement(Users, request);
}



module.exports = {
    storeUserFromAuth,
    isExistingUser,
    getUserByUserID
}