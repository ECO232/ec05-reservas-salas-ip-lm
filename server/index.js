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
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})