const ChatController = require('../../controller/SocketController/ChatController');

const postMessages = async (io, socket) => {
    socket.on('user_sendMessages', ChatController.sendMessages(io, socket));
}

const getMessages = async (io, socket) => {
    socket.on('user_getMessages', ChatController.getMessages(io, socket));
}

const createRoom = async (io, socket) => {
    socket.on('user_createRoom', ChatController.createRoom(io, socket));
}





module.exports = async (io, socket) => {
    postMessages(io, socket);
    getMessages(io, socket);
    createRoom(io, socket);
}