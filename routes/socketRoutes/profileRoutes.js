const ProfileController = require('../../controller/SocketController/ProfileController');

const follow = async (io, socket) => {
    socket.on('user_follow', ProfileController.follow(io, socket));
}


const unfollow = async (io, socket) => {
    socket.on('user_unfollow', ProfileController.unfollow(io, socket));
}


const editProfile = async (io, socket) => {
    socket.on('user_follow', ProfileController.editProfile(io, socket));
}

const searchName = async (io, socket) => {
    socket.on('user_searchName', ProfileController.searchName(io, socket));
}

const viewPeople = async (io, socket) => {
    socket.on('user_viewPeople', ProfileController.viewPeople(io, socket));
}

module.exports = async (io, socket) => {
    follow(io, socket);
    unfollow(io, socket);
    editProfile(io, socket);
    searchName(io, socket);
    viewPeople(io, socket);
}
