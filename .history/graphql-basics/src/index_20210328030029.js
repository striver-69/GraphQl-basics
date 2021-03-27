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
  author:'1',
  commentId:'1'
},{
  id:'2',
  title:'b',
  body:'jklghjrgue',
  published:false,
  author:'1',
  commentId:'1'
},{
  id:'3',
  title:'c',
  body:'omeigfigrgtt',
  published:false,
  author:'2',
  commentId:'1'
}]

const comments=[{
  id:'1',
  text:'comment1',
  author:'1',
  postId:'1'
},{
  id:'2',
  text:'comment2',
  author:'1',
  postId:'1'
},{
  id:'3',
  text:'comment3',
  author:'2',
  postId:'2'
},{
  id:'4',
  text:'Helper',
  author:'2',
  postId:'3'
},{
  id:'5',
  text:'helper2',
  author:'3',
  postId:'2'
}]

//String Boolean, Int, Float, ID (5 Scaler type in GraphQL)

//Type Definitions (Schema)
const typeDefs=`
  type Query {
    users(query:String):[User!]!
    posts(query:String):[Post!]!
    comments(query:String):[Comment!]!
    me: User!
    post:Post!
  }

  type Comment {
    id:ID!
    text:String!
    author:User!
    postId:Post!
  }

  type User {
    id: ID!
    name: String!
    email:String
    age:Int
    posts:[Post!]!
    comments:[Comment!]!
  }

  type Post{
    id:ID!
    title:String!
    body:String!
    published:Boolean
    author:User!
    commentId:[Comment!]!
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
    comments(parent,args,ctx,info){
      if(!args.query){
        return comments
      }
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
      return users.find((user)=>{
        return user.id === parent.author
      })
    },
    commentId(parent,args,ctx,info){
      return comments.map((comment)=>{
        return comment.id === parent.commentId
      })
    }
  },
  User:{
    posts(parent,args,ctx,info){
      return posts.filter((post)=>{
        return parent.id === post.author
      })
    }
  },
  User:{
    comments(parent,args,ctx,info){
      return comments.filter((comment)=>{
        return comment.author === parent.id
      })
    }
  },
  Comment:{
    author(parent,args,ctx,info){
      return users.find((user)=>{
        return user.id === parent.author
      })
    },
    postId(parent,args,ctx,info){
      return posts.find((post)=>{
        return post.id === parent.postId
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