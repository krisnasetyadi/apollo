import { GraphQLList } from 'graphql'
import { UserType } from '../types/user'
import { Users } from '../../entities/users'


export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
    return Users.find()
    }

}