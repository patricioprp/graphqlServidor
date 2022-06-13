import express from "express";
//graphlq
import { graphqlHTTP } from "express-graphql";
import schema from "./shema";

const app = express();

app.get('/',(req,res) => {
    res.send('Todo ok');
});

//el resolver
const root = {cliente: () => {
    return{
        id:"094039403904930",
        nombre: "Patricio",
        apellido: "Polito",
        empresa: "SERTIC",
        email: "correo@correo.com"
    }
}};

app.use('/graphql',graphqlHTTP({
    //que schema va a utilizar
    schema,
    //los datos se pasan como rootValue
    rootValue:root,
    //utilizar graphiql
    graphiql:true
}));

app.listen(8000, () => console.log('El servidor esta funciionando'));