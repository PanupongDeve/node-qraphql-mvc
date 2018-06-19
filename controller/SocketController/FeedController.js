
const FeedActions = require('../../ConnectDB/FeedActions');

const Todo = (io, socket) => {
    return async (data) => {
        try {
            if(typeof(data) !== 'object') {
                // middleware
              throw "msg is must object"
            } else {
           
              io.emit('postMessage', newMessage);
            }
        } catch (error) {
            // send Error For user
            console.log(error);
            io.emit('postMessage', error);
        }
    }
  }


const postsBoard = (io, socket) => {
    return async (data) => {
        try {
            if(false) {
                // middleware
                throw "msg is must object"
            } else {
                
                io.emit('postMessage', newMessage);
            }
        } catch (error) {
            // send Error For user
            console.log(error);
            io.emit('postMessage', error);
        }
    }
}

const showBoards = (io, socket) => {
    return async (userId) => {
        try {
            if(false) {
                // middleware
                throw "msg is must object"
            } else {
                const posts = FeedActions.showBoards(userId);
                io.emit('server_showBoards', { posts });
            }
        } catch (error) {
            // send Error For user
            console.log(error);
            io.emit('postMessage', error);
        }
    }
}

const like = (io, socket) => {
    return async (data) => {
        try {
            if(false) {
                // middleware
                throw "msg is must object"
            } else {
                
                io.emit('postMessage', newMessage);
            }
        } catch (error) {
            // send Error For user
            console.log(error);
            io.emit('postMessage', error);
        }
    }
}

const disLike = (io, socket) => {
    return async (data) => {
        try {
            if(false) {
                // middleware
                throw "msg is must object"
            } else {
            
                io.emit('postMessage', newMessage);
            }
        } catch (error) {
            // send Error For user
            console.log(error);
            io.emit('postMessage', error);
        }
    }
}

const share = (io, socket) => {
    return async (data) => {
        try {
            if(false) {
                // middleware
                throw "msg is must object"
            } else {
            
                io.emit('postMessage', newMessage);
            }
        } catch (error) {
            // send Error For user
            console.log(error);
            io.emit('postMessage', error);
        }
    }
}


  
  
  module.exports = {
    Todo,
    postsBoard,
    like,
    disLike,
    share,
    showBoards
  }