const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const UserType = require('./userType');
const UserActions = require('../ConnectDB/UserActions');
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      async resolve() {
        return await UserActions.getUsers();
      }
    },
    user: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      async resolve(parentValue, { id }) {
        return await UserActions.getUser(id);
      }
    }
    
  })
});

module.exports = RootQuery;
