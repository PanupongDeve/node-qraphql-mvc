const connectDB = require('../../utils/connectDB');
const mongoose = require('mongoose');

const User = require('../../models/users');
const Post = require('../../models/posts');
const Comment = require('../../models/comment');
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
        const friend = await connectDB.postDB(User, {username: 'wisit'});
        const post = await connectDB.postDB(Post, { caption: 'Hello', userId: user._id});
        const comment = await connectDB.postDB(Comment, { content: 'ทำดีๆ', postId: post._id, userId: friend._id });
        post.comments.push(comment);
        await post.save();
       


      });
      
    afterAll(async () => {
        const {  users, posts, followings, comments } = mongoose.connection.collections;
    
        await users.drop();
        await posts.drop();
        await comments.drop();
        await followings.drop();
    })
    
    it('showComments is Working', async () => {
        const post_init = await connectDB.getDBByElement(Post, {caption: 'Hello'});

        const comments = await FeedActions.showCommentsByPostId(post_init[0]._id);
    
        expect(comments[0].content).toBe('ทำดีๆ');
    });

    
    
    
})
