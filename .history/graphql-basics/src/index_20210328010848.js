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

const posts=[{
  id:'1',
  title:'a',
  body:'jkl',
  published:true,
  author:'1'
},{
  id:'2',
  title:'b',
  body:'jklghjrgue',
  published:false,
  author:'1'
},{
  id:'3',
  title:'c',
  body:'omeigfigrgtt',
  published:false,
  author:'2'
}]

//String Boolean, Int, Float, ID (5 Scaler type in GraphQL)

//Type Definitions (Schema)
const typeDefs=`
  type Query {
    users(query:String):[User!]!
    posts(query:String):[Post!]!
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
    author:User!
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
    posts(parent,args,ctx,info){
      if(!args.query){
        return posts
      }
      return posts.filter((post)=>{
        const isTitleMatch=post.title.toLowerCase().includes(args.query.toLocaleLowerCase())
        const isBodyMatch=post.body.toLowerCase().includes(args.query.toLocaleLowerCase())
        return isBodyMatch || isTitleMatch

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
    }
  },
  Post:{
    author(parent,args,ctx,info){
      users.find((user)=>{
        return user.id === parent.author
      })
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