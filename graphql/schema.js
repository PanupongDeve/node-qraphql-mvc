const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./rootQueyType');

module.exports = new GraphQLSchema({
  query: RootQueryType
});
