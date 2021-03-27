import {GraphQLServer} from 'graphql-yoga'

//String Boolean, Int, Float, ID (5 Scaler type in GraphQL)

//Type Definitions (Schema)
const typeDefs=`
  type Query {
    me: User!
  }

  type User {
    id: ID!
    name: String!
    email:String
    age:Int
  }
`

//Resolvers
const resolvers={
  Query:{
    me(){
      return {
        id:'123098',
        naem:'Chiru',
        email:'grregre',
        age:21
      }
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