
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/key');
const mongoose =  require('mongoose');

const User = mongoose.model('users');
// module.exports = (app )=>{
//   app.use( passport.initialize());
//   app.use( passport.session());
// }
//token auth user is user =>create cookie 
passport.serializeUser((user, done) => {


  done(null, user.id);
});
//get cookie for check user is user
passport.deserializeUser((id, done) =>{
  User.findById(id).then(user =>{
      done(null,user);
  });
});


passport.use(new GoogleStrategy({
   clientID : keys.googleClientID,
   clientSecret: keys.googleClientSecret,
   callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile,done) =>{
  console.log("ac:" ,accessToken)
  console.log("refresh:",refreshToken)
  console.log("Profile:", profile)
   User.findOne({ ExternalID: profile.id}).then(existingUser=>{
         if(existingUser){
            done( null, existingUser); 
         }else {
            new User({ExternalID: profile.id,
                            displayName: profile.displayName,
                            Photo:profile.photos[0].value }).save().then(users => done(null,users));
         }
      });
   }))

passport.use(new FacebookStrategy({
  clientID: keys.facebookClientID,
  clientSecret: keys.facebookClientSecret,
  callbackURL:  '/auth/facebook/callback',
  profileFields: ["id", "birthday", "email", "first_name", "gender", "last_name","displayName","profileUrl"]
}, (accessToken, refreshToken, profile,done) =>{
  console.log("ac:" ,accessToken)
  console.log("refresh:",refreshToken)
  console.log("Profile:",  profile)
  User.findOne({ExternalID: profile.id}).then(existingUser =>{
    if(existingUser){
      done(null,existingUser);
    }else{
      new User({ExternalID: profile.id,
        displayName: profile.displayName,
        }).save().then(users => done(null,users));
    }
  });
}))
