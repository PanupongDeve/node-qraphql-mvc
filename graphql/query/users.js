const graphql = require('graphql');
const { GraphQLList } = graphql;
const UserActions = require('../../ConnectDB/UserActions');
const UserType = require('../type/userType');

const users = {
    type: new GraphQLList(UserType),
    async resolve() {
      return await UserActions.getUsers();
    }
  }

module.exports = users