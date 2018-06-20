const graphql = require('graphql');
const {GraphQLNonNull , GraphQLID} = graphql;
const UserActions = require('../../ConnectDB/UserActions');
const UserType = require('../type/userType');

const user = {
    type: UserType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve(parentValue, {id}) {
        return await UserActions.getUser(id);
    }
}

module.exports = user