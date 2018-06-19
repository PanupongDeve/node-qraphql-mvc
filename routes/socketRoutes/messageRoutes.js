const MessageController = require('../../controller/SocketController/MessageController');

const chatMessages = async (io, socket) => {
    socket.on('chat message', MessageController.chatMessages(io, socket));
}

module.exports = async (io, socket) => {
    chatMessages(io, socket);
}