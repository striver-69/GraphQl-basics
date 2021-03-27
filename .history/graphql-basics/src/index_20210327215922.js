import {GraphQLServer} from 'graphql-yoga'

//Type Definitions (Schema)
const typeDefs=`
  type Query {
    hello: String!
    name:String!
  }
`

//Resolvers
const resolvers={
  Query:{
    hello(){
      return 'This is my first query'
    },
    name(){
      return 'Pubg'
    }

  }
}

const server=new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(()=>{
  console.log('Server is up')
})