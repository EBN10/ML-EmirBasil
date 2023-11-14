const express=require('express'); // Requiero el modulo express
const path= require('path'); // Guardo en la variable la funcion express
const app=express() // Requiero el modulo nativo path
const publicPath= path.resolve(__dirname,'./public');

app.use(express.static(publicPath));


//Creando Rutas

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
});
app.get("/public/css/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/css/style.css"));
})
app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'));
})
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

//Levantando el Servidor
const port= process.env.PORT || 3030;
app.listen(port,() =>{
    console.log(`Servidor corriendo en el puerto ${port}`);
})