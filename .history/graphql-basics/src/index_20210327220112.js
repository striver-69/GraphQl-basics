import {GraphQLServer} from 'graphql-yoga'

//Type Definitions (Schema)
const typeDefs=`
  type Query {
    hello: String!
    name:String!
    Phone:Integer
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
    },
    Phone(){
      return 5
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