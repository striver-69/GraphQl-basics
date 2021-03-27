import {GraphQLServer} from 'graphql-yoga'

//String Boolean, Int, Float, ID (5 Scaler type in GraphQL)

//Type Definitions (Schema)
const typeDefs=`
  type Query {
    greeting(name: String,position: String) :String!
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
    },
    greeting(parent,args,ctx,info){
      if(args.name&&args.position){
        return `hello ${args.name} You are my favourite ${agrs.position}`
      }
      return `hello `
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