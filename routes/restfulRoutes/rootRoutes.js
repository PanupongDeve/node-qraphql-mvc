const mobileRoutes = require('./mobileRoutes');
const testQueryRoutes = require('./testQueryRoutes');


module.exports = (app) => {
    mobileRoutes(app);
    testQueryRoutes(app);
  
}