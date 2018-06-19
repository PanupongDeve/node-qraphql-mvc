const connectDB = require('../../utils/connectDB');
const mongoose = require('mongoose');

const User = require('../../models/users');
const Post = require('../../models/posts');
const Following = require('../../models/following');
const FeedActions = require('../FeedActions');

jest.setTimeout(30000);

describe('connectDB Testing', () => {
    beforeAll(async () => {
        const db = require('../../config/db');
        mongoose.connect(db.mongoTestUri);
        const dbConnection = mongoose.connection;
    
        // if ERROR
        dbConnection.on('error', console.error.bind(console, 'connection error:'));
        dbConnection.once('open', () => {
            console.log('Database connection!!');
        });
    
        const user = await connectDB.postDB(User, {username: 'panupong'});
            
       


      });
      
    afterAll(async () => {
        const {  users, posts, followings } = mongoose.connection.collections;
    
        await users.drop();
        await posts.drop();
        await followings.drop();
    })
    
    it('postsBoard  is Working', async () => {
        const users = await connectDB.getDBByElement(User, {username: 'panupong'});
        const data = { caption: 'Hello', userId: users[0]._id};
        const user = await FeedActions.postsBoard(data);
        console.log(user);
        expect(user.posts[0].caption).toBe('Hello');
    });

    
    
    
})
