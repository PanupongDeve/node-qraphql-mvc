const FeedController = require('../../controller/SocketController/FeedController');

const postsBoard = async (io, socket) => {
    socket.on('user_postsBoard', FeedController.postsBoard(io, socket));
}

const showBoards = async (io, socket) => {
    socket.on('user_showBoards', FeedController.showBoards(io, socket));
}

const like = async (io, socket) => {
    socket.on('user_like', FeedController.like(io, socket));
}

const disLike = async (io, socket) => {
    socket.on('user_disLike', FeedController.disLike(io, socket));
}

const share = async (io, socket) => {
    socket.on('user_share', FeedController.share(io, socket));
}


const postMessages = async (io, socket) => {
    socket.on('user_sendMessages', ChatController.sendMessages(io, socket));
}

module.exports = async (io, socket) => {
    postsBoard(io, socket);
    like(io, socket);
    disLike(io, socket);
    share(io, socket);
    showBoards(io, socket);
}
