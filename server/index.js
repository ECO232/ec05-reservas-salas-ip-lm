const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const {validateUser} = require()

let users=[]
users.push({
  name:"Lolita",
  last:"Bueno",
  id:"1234567890"
})


app.get('/users/:id', (req, res) => {
  console.log("params:",req.params)
  const requestID =req.params.id
  let requiredUser=null;
  for(let index=0; index<users.length;index++){
    console.log(users[index].id===requestID,users[index].id,requestID)
    if(users[index].id===requestID){
      requiredUser=users[index];
    }
  }
  console.log (requiredUser)
  res.json(requiredUser)
})

app.post('/users', (req, res) => {
  const userValidationResult = validateUser(req.body)
  console.log("result", userValidationResult.error)

  if(userValidationResult.error){
    return res.status(400).send(
      {message:JSON.parse(userValidationResult.error.message)}
    )
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})