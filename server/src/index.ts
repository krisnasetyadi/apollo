import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { createConnection } from 'typeorm'
import { schema } from './schema'
import { Users } from './entities/users'
const main = async () => {

    await createConnection({
        type: "mysql",
        database: `${process.env.DATABASE || 'graphqlcrud'}`,
        username:`${process.env.ROOT || 'root'}`,
        password: `${process.env.PASSWORD || 'qwerty123'}`,
        logging: true,
        synchronize: false,
        entities: [Users]
    })

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.listen(3001, () => {
        console.log('server running on port 3001')
    })
}

main().catch(err => {
    console.log('error', err)
})