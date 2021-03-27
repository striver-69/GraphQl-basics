import {GraphQLServer} from 'graphql-yoga'

const users=[{
  id:'1',
  name:'dwdwdw',
  email:'fefef',
  age:27
},{
  id:'2',
  name:'efgegwewe',
  email:'efegegege0',
  age:26
},{
  id:'3',
  name:'ram',
  email:'fef',
  email:'efefWEE',
  age:23
}]

//String Boolean, Int, Float, ID (5 Scaler type in GraphQL)

//Type Definitions (Schema)
const typeDefs=`
  type Query {
    users(query:String):[User!]!
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
    users(parent,args,ctx,info){
      if(!args.query){
        return users
      }
      return users.filter((user)=>{
        return user.name.toLocaleLowerCase().includes(args.query.toLowerCase())
      })
    },
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
    // greeting(parent,args,ctx,info){
    //   if(args.name&&args.position){
    //     return `hello ${args.name} You are my favourite ${args.position}`
    //   }
    //   return `hello `
    // },
    // add(parent,args,ctx,info){
    //   if(!args.numbers.length ===0 ){
    //     return 0
    //   }
    //   return args.numbers.reduce((accumulator,currentvalue)=>{
    //     return accumulator+currentvalue
    //   })
    // },
    // grades(parent,args,ctx,info){
    //   return [89,90,91]
    // }
  }
}

const server=new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(()=>{
  console.log('Server is up')
})