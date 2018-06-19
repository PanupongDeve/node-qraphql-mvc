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
        const {  users, posts, shares } = mongoose.connection.collections;

        Promise.all([
            await users.drop(),
            await posts.drop(),
            await shares.drop(),
                 
        ])
        
        
    })
    
    it('share is Working', async () => {
        const post_init = await connectDB.getDBByElement(Post, {caption: 'เราต้านะ'});
        const user = await connectDB.getDBByElement(User, {username: 'panupong'});
        const shareData = { postId: post_init[0]._id, userId: user[0]._id , caption: 'ต้าแชร์งงในงง'};
        const new_post = await FeedActions.share(shareData);
        console.log(new_post);
        expect(typeof new_post).toBe('object');
    });

    
    
    
})
