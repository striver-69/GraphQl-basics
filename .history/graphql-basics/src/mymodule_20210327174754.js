//Named Export
const message="Some message from my module"
const location='Jamshedpur'
const name='Chiru'

const getGreeting=()=>{
  return `welcome to the course ${name}`
}

export {message,location,getGreeting}