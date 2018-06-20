const graphql = require('graphql');
const {GraphQLString, GraphQLNonNull, GraphQLID} = graphql;
const UserActions = require('../../ConnectDB/UserActions');
const UserType = require('../type/userType');

const updateUser = {
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
  }

module.exports = updateUser