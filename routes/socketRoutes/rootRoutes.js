const ChatRoutes = require('./ChatRoutes');
const FeedRoutes = require('./FeedRoutes');
const MessagesRoutes = require('./messageRoutes');
const ProfileRoutes = require('./profileRoutes');


module.exports = async (io, socket) => {
    ChatRoutes(io, socket);
    FeedRoutes(io, socket);
    MessagesRoutes(io, socket);
    ProfileRoutes(io, socket);
}