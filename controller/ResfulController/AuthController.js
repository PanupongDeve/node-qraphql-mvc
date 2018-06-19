
const toolsToken = require('../../utils/toolsToken');


const redirectApp = async (req, res) => {
        try {
            res.redirect('/api/app');     
        } catch (error) {
            console.log(error);
            await res.status(400).send({ error })
        }
        
}

const sendToken = async (req, res) => {
    try {
        const data = {
            profile: req.user,
            secret: toolsToken.secretKeyServer
        }

        const token = toolsToken.generateToken(data);
        res.send({ token, user: req.user});
    } catch (error) {
        await res.status(400).send({ error })
    }
}

const logout = async (req, res) => {
    await req.logout();
    const msg = 'logout Success'
    res.send({msg});
}




module.exports = {
    redirectApp,
    sendToken,
    logout
}

