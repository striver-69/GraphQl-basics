import {GraphQLServer} from 'graphql-yoga'

//Type Definitions (Schema)
const typeDefs=`
  type Query {
    hello: String!
    name:String!
    location:String!,
    bio:String!
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
    location(){
      return 'InDia'
    },
    bio(){
      return 'I am  a boy'
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