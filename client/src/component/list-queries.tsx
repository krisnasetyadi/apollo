import React from 'react'
import { GET_ALL_USERS } from '../graphql/queries'
import { useQuery } from "@apollo/client"

export default function ListOfUsers() {
    const {data, error, loading} = useQuery(GET_ALL_USERS)
    if (data){
        console.log('data', data)
    }
    return (
        <div>
            {data && data.getAllUsers.map((user: any) => {
                return <div>{user.name} / {user.username}</div>
            })}
        </div>
    )
}