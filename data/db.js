import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clientes',{useNewUrlParser:true});

const clienteSchema = new mongoose.Schema({

    nombre: String,
    apellido: String,
    empresa:  String,
    emails:  Array,
    edad: Number,
    tipo: String,
    pedidos: Array


});

const Clientes = mongoose.model('Clientes',clienteSchema);
export {Clientes};
