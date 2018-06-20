const graphql = require('graphql');
const {GraphQLID, GraphQLList} = graphql;
const UserActions = require('../../ConnectDB/UserActions');
const UserType = require('../type/userType');

const deleteUser  = {
    type: new GraphQLList(UserType),
    args: { id: { type: GraphQLID } },
    async resolve(parentValue, { id }) {
      return await UserActions.removeUser(id)
    }
  }

module.exports = deleteUser