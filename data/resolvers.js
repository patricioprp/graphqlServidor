import mongoose from "mongoose";
import {Clientes} from "./db"


export const resolvers = {
    Query:{
        getCliente:({id})=>{
            return new Cliente(id,clienteDB[id]);
        },
    },
    Mutation:{
        crearCliente: (root,{input}) =>{
            const nuevoCliente = new Clientes({
                nombre : input.nombre,
                apellido : input.apellido,
                empresa : input.empresa,
                emails : input.emails,
                edad : input.edad,
                tipo : input.tipo,
                pedidos : input.pedidos
            });
            nuevoCliente.id = nuevoCliente._id;
            return new Promise((resolve,object) => {
                nuevoCliente.save((error) => {
                    if(error) rejects(error)
                    else resolve(nuevoCliente)
                });
            });
        },
        actualizarCliente: (root,{input}) => {
            return new Promise((resolve,objetc) =>{
                Clientes.findOneAndUpdate({_id : input.id},input,{new:true},(error,cliente)=>{
                    if(error) rejects(error)
                    else resolve(cliente)
                });
            });
        }
    }
}
