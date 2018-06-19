const connectDB = require('../../utils/connectDB');
const mongoose = require('mongoose');

const User = require('../../models/users');
const Post = require('../../models/posts');
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
        
        const post = await connectDB.postDB(Post, { caption: 'เราต้านะ', userId: user._id});

        await post.save();
       


      });
      
    afterAll(async () => {
        const {  users, posts, followings, comments, likes } = mongoose.connection.collections;
        
        await likes.drop();
        await users.drop();
        await posts.drop();
        await comments.drop();
        await followings.drop();
        
    })
    
    it('like is Working', async () => {
        const post_init = await connectDB.getDBByElement(Post, {caption: 'เราต้านะ'});
        const friend = await connectDB.postDB(User, {username: 'wisit'});
        const like = { postId: post_init[0]._id, userId: friend._id};
        const post = await FeedActions.like(like);
        console.log(post);
        expect(typeof post.likes[0].userId).toBe('object');
    });

    
    
    
})
