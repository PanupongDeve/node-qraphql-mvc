const TestqueryController = require('../../controller/ResfulController/TestqueryController');
const AuthMiddlewares = require('../../middlewares/ResfulMiddlewares/AuthMiddlewares');

module.exports = (app) =>{
   
   app.post('/api/testQuery',AuthMiddlewares.checkToken, TestqueryController.testQuery);

}