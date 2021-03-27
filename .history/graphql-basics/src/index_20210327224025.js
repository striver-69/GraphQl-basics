import {GraphQLServer} from 'graphql-yoga'

//String Boolean, Int, Float, ID (5 Scaler type in GraphQL)

//Type Definitions (Schema)
const typeDefs=`
  type Query {
    me: User!
    post:Post!
  }

  type User {
    id: ID!
    name: String!
    email:String
    age:Int
  }

  type Post{
    id:ID!
    title:String!
    body:String!
    published:Boolean
  }
`

//Resolvers
const resolvers={
  Query:{
    me(){
      return {
        id:'123098',
        name:'Chiru',
        email:'grregre',
        age:21
      }
    },
    post(){
      return {
        id:'1615efe',
        title:'Rabjwd',
        body:'Ia ma boy',
        published:true
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