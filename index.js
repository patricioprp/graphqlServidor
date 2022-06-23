import express from "express";
//graphlq
import { graphqlHTTP } from "express-graphql";
import {schema} from "./data/shema";

const app = express();

app.get('/',(req,res) => {
    res.send('Todo ok');
});


app.use('/graphql',graphqlHTTP({
    //que schema va a utilizar
    schema,
    //utilizar graphiql
    graphiql:true
}));

app.listen(8000, () => console.log('El servidor esta funciionando'));