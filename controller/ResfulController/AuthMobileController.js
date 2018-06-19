const AuthActions = require('../../ConnectDB/AuthActions');
const toolsToken = require('../../utils/toolsToken');
const moment = require('../../utils/moment');


const authFacebook = async (req, res) => {
        try {
            
            //---- Check User from Google Auth-------
            const data = {
                username: req.body.email,
                username: req.body.email.toLowerCase(),
                displayName: req.body.name,
                email: req.body.email,
                cover_img: 'https://dealstreetwebsite.s3.amazonaws.com/uploads/2015/04/YuuZoo-500x364-e1429866772894.jpg',
                profile_img: '',
                posts: [],
                chats: [],
                followers: [],
                following: [],
                external_ID: req.body.id,
                create_date: moment().format(),
                update_date: moment().format()
            }
        
        console.log('facebook', data);
        const existingUser = await AuthActions.isExistingUser(data);
        if(!existingUser) {
            await AuthActions.storeUserFromAuth(data)
        }

        //---- getUser From DataBase---------
        const user = await AuthActions.getUserByUserID(data)

        //------ Generate Token------------

        const data_to_token = {
            profile: user,
            secret: toolsToken.secretKeyServer
        }

        const token = toolsToken.generateToken(data_to_token);
        
        //---- send Token and User detail to Mobile -------
        res.send({ user, token });

        } catch (error) {
            console.log(error);
            await res.status(400).send({ error })
        }      
}

const authGoogle = async (req, res) => {
    try {

        //---- Check User from Google Auth-------
        const data = {
            username: req.body.Email,
            username: req.body.Email.toLowerCase(),
            displayName: req.body.DisplayName,
            email: req.body.Email,
            cover_img: 'https://dealstreetwebsite.s3.amazonaws.com/uploads/2015/04/YuuZoo-500x364-e1429866772894.jpg',
            profile_img: req.body.Photo,
            posts: [],
            chats: [],
            followers: [],
            following: [],
            external_ID: req.body.User_ID,
            create_date: moment().format(),
            update_date: moment().format()
        }

        const existingUser = await AuthActions.isExistingUser(data);
        if(!existingUser) {
            await AuthActions.storeUserFromAuth(data)
        }

        //---- getUser From DataBase---------
        const user = await AuthActions.getUserByUserID(data)

        //------ Generate Token------------

        const data_to_token = {
            profile: user,
            secret: toolsToken.secretKeyServer
        }

        const token = toolsToken.generateToken(data_to_token);

        //---- send Token and User detail to Mobile -------
        res.send({ user, token });

    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }      
}




module.exports = {
    authFacebook,
    authGoogle
}

