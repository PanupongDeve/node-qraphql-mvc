const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList } = graphql;
const UserType = require('./userType');
const UserActions = require('../ConnectDB/UserActions');
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLString }
      },
      async resolve(parentValue, data) {
        return await UserActions.createUser(data);
      }
    },
    updateUser: {
        type: UserType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            username: { type: GraphQLString }
        },
        async resolve(parentValue, dataClient) {
            const id = dataClient.id;
            const data = {
                username : dataClient.username
            }

            return await UserActions.updateUser(id, data);
        }
      },
    deleteUser: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLID } },
      async resolve(parentValue, { id }) {
        return await UserActions.removeUser(id)
      }
    }
  }
});

module.exports = mutation;
