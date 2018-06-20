const graphql = require('graphql');
const { GraphQLObjectType} = graphql;

const users = require('./query/users');
const user = require('./query/user');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    users,
    user  
  })
});

module.exports = RootQuery;
