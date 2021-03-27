import {GraphQLServer} from 'graphql-yoga'

//Type Definitions (Schema)
const typeDefs=`
  type Query {
    hello: String!
  }
`

//Resolvers
const resolvers={
  Query:{
    hello(){
      return 'This is my first query'
    }
  }
}

const server=new GraphQLServer({
  typeDefs,
  resolvers
})