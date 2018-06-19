
const passport = require('passport');
const AuthController = require('../controller/AuthController');

module.exports = (app) =>{
   
   app.get(
      '/auth/google', 
      passport.authenticate('google',{
         scope: ['profile','email']
      })
   );
   app.get(
       '/auth/facebook',
       passport.authenticate('facebook',{
           scope: ['email','public_profile']

       })
   );
   app.get('/auth/facebook/callback', passport.authenticate('facebook'), AuthController.redirectApp)
   app.get('/auth/google/callback', passport.authenticate('google'), AuthController.redirectApp);
   app.get('/api/app', AuthController.sendToken);
   app.get('/api/logout', AuthController.logout);



}