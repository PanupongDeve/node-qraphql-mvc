const AuthMobileController = require('../../controller/ResfulController/AuthMobileController');
const AuthMiddlewares = require('../../middlewares/ResfulMiddlewares/AuthMiddlewares');

module.exports = (app) =>{
   
   app.post('/api/facebook', AuthMobileController.authFacebook);
   app.post('/api/google', AuthMobileController.authGoogle);

}