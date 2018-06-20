const graphql = require('graphql');
const { GraphQLObjectType} = graphql;

const addUser = require('./mutation/addUser');
const updateUser = require('./mutation/updateUser');
const deleteUser = require('./mutation/deleteUser');

const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser,
    updateUser,
    deleteUser
  }
});

module.exports = RootMutation;
