const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./rootQueyType');
const RootMutation = require('./rootMutations');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutation
});
