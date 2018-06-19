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
            
        const friend1 = await connectDB.postDB(User, {username: 'him'});
        const friend_post_1 = await connectDB.postDB(Post, {caption: 'thank you friend1', userId: friend1});
        await friend1.posts.push(friend_post_1);
        await friend1.save();

        const friend2 = await connectDB.postDB(User, {username: 'peen'});
        const friend_post_2 = await connectDB.postDB(Post, {caption: 'thank you friend2', userId: friend2});
        await friend2.posts.push(friend_post_2);
        await friend2.save();

        const friend3 = await connectDB.postDB(User, {username: 'pun'});
        const friend_post_3 = await connectDB.postDB(Post, {caption: 'thank you friend3', userId: friend3});
        await friend3.posts.push(friend_post_3);
        await friend3.save();

        const friend4 = await connectDB.postDB(User, {username: 'mink'});
        const friend_post_4 = await connectDB.postDB(Post, {caption: 'thank you friend4', userId: friend4});
        await friend4.posts.push(friend_post_4);
        await friend4.save();

        const post = await connectDB.postDB(Post, {caption: 'thank you'});
        const post2 = await connectDB.postDB(Post, {caption: 'thank you2'});
        const following1 = await connectDB.postDB(Following, { userId: friend1 });
        const following2 = await connectDB.postDB(Following, { userId: friend2 });
        const following3 = await connectDB.postDB(Following, { userId: friend3 });
        const following4 = await connectDB.postDB(Following, { userId: friend4 });

        post.userId = user;
        await post.save();
        await user.posts.push(post);
        await user.posts.push(post2);
        await user.followings.push(following1);
        await user.followings.push(following2);
        await user.followings.push(following3);
        await user.followings.push(following4);
        await user.save();

        const users = await connectDB.getDB(User);
        const posts = await connectDB.getDB(Post);


      });
      
    afterAll(async () => {
        const {  users, posts, followings } = mongoose.connection.collections;
    
        await users.drop();
        await posts.drop();
        await followings.drop();
    })
    
    it('ShowBard  is Working', async () => {
        const users = await connectDB.getDBByElement(User, {username: 'panupong'});
        const posts = await FeedActions.showBoards(users[0]._id);
        const result = { posts };
        console.log(result);
        expect(typeof result).toBe("object");
    });

    
    
    
})
