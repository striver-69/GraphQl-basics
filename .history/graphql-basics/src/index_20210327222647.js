import {GraphQLServer} from 'graphql-yoga'

//String Boolean, Int, Float, ID (5 Scaler type in GraphQL)

//Type Definitions (Schema)
const typeDefs=`
  type Query {
    id:ID
    name:String!
    age:Int!
    employed:Boolean!
    gpa:Float,
    title:String!
    price:Float!
    releaseYear:Int
    rating:Float
    inStock:Boolean
  }
`

//Resolvers
const resolvers={
  Query:{
    id(){
      return 'abcd123'
    },
    name(){
      return 'Chiru'
    },
    age(){
      return 21
    },
    employed(){
      return true
    },
    gpa(){
      return 8.47
    },
    title(){
      return 'Lost Ring'
    },
    price(){
      return 1500.44
    },
    releaseYear(){
      return 2012
    },
    rating(){
      return 5
    },
    inStock(){
      return true
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