import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../types/user";
import { Users } from "../../entities/users";
import { MessageType } from "../types/messages";
export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { name, username, password } = args
        await Users.insert({
            name,
            username, 
            password
        })
        return args
    }
}

export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        username: {type: GraphQLString},
        oldPassword: {type: GraphQLString},
        newPassword: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const { username, oldPassword, newPassword  } = args
        const user = await Users.findOne({ username: username })
        if(!user) {
            throw new Error('Username doesnt exist') 
        }
        const userPassword = user?.password
       
        if (oldPassword === userPassword) {
            await Users.update(
             { username: username }, 
             { password: newPassword })
            return { successfull: true, message: 'password updated'  }
        } else {
            throw new Error('Password do not match')
        }
    }
}

export const DELETE_USER = {
    type: MessageType,
    args: {
        id: { type: GraphQLID  }
    },
    async resolve(parent: any, args: any) {
       const id = args.id
       await Users.delete(id)
       return  {
        succesfull: true,
        message: 'Delete successfull'
       }
    }
}
