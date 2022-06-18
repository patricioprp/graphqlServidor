import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Cliente{
        id: ID
        nombre: String
        apellido: String
        empresa: String
        email: String
        edad: Int
        tipo: TipoCliente
        pedidos: [Pedido]
        emails: [Email]
    }

    type Pedido{
        producto: String
        precio: Int
    }

    type Email{
        email: String
    }

    """ Asigna la categoria del cliente"""
    enum TipoCliente{
        BASICO
        PREMIUM
    }
    type Query{
        getCliente(id: ID): Cliente
    }

    input PedidoInput{
        producto: String
        precio: Int        
    }

    input EmailInput{
        email: String
    }

    """ Campos para los clientes nuevos"""
    input ClienteInput{
        id: ID
        nombre: String!
        apellido: String!
        empresa: String!
        email: String!
        edad: Int!
        tipo: TipoCliente!
        pedidos: [PedidoInput]
        emails: [EmailInput]
    }

    """ Mutations para crear nuevos clientes """
    type Mutation{
        #Nombre del resolver, Input con datos y valor que retorna
        """ Te permite crear nuevos clientes"""
        crearCliente(input: ClienteInput) : Cliente
    }
`);

export default schema;