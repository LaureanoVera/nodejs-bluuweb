const express = require("express");
const app = express();
const port = 3000

// static
app.use(express.static(__dirname + '/public'))

// get
app.get('/', (req, res) => {
  res.send('Mi respuesta desde express')
})

app.get('/servicios', (req, res) => {
  res.send('Estas en la pagina de servicios')
})

// 404 error
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Server on port ${port}`);
})