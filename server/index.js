const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const {validateUser} = require('./schemas/user')
const {validateRoom} = require('./schemas/room')

let users=[]

users.push({
  name:"Lolita",
  last:"Bueno",
  id:"1234567890"
})

const room=[
  {
    name:'room 202',
    location:'Library',
    schedules: [
      {
        start:'9:00AM',
        finish:'10:00AM',
        isAvailable:true,
        userName:'',
        id:''
      },
      {
        start:'10:00AM',
        finish:'11:00AM',
        isAvailable:true,
        userName:'',
        id:''
      },
      {
        start:'11:00AM',
        finish:'12:00PM',
        isAvailable:true,
        userName:'',
        id:''
      }
    ]
  },

  {
    name:'room 203',
    location:'Library',
    schedules: []
  },
  {
    name:'room 204',
    location:'Library',
    schedules: []
  },
  {
    name:'room 205',
    location:'Library',
    schedules: []
  },
  {
    name:'room 206',
    location:'Library',
    schedules: []
  }

]


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

  let newUser = {
    name:userValidationResult.data.name,
    last:userValidationResult.data.last,
    id:userValidationResult.data.last
  }
  users.push(newUser)
  res.status(201).send({"message":"Creación Exitosa!", "user":newUser})
})



app.get('/', (req, res) => {
  res.send("Reserva tu sala")
})

app.delete('users/:id', (req, res) => {
  const idToDelete = req.params.id;
  let indexToDelete = users.findIndex(user=>user.id==idToDelete)
  let userDeleted = users.splice(indexToDelete, 1)
  res.send("Se eliminó correctamente el usuario con id:" + userDeleted[0].id)
})

app.use("", (req, res) => {
  res.status(404).send("No encontramos el recurso solicitado")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})