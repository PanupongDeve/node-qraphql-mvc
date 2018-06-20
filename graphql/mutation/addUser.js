const graphql = require('graphql');
const {GraphQLString} = graphql;
const UserActions = require('../../ConnectDB/UserActions');
const UserType = require('../type/userType');

const addUser = {
    type: UserType,
    args: {
      username: { type: GraphQLString }
    },
    async resolve(parentValue, data) {
      return await UserActions.createUser(data);
    }
  }

module.exports = addUser