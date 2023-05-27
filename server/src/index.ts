import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { createConnection } from 'typeorm'

const main = async () => {
    await createConnection({
        type: "mysql",
        database: `${process.env.DATABASE}`,
        username:`${process.env.ROOT}`,
        password: `${process.env.PASSWORD}`,
        logging: true,
        synchronize: false,
        entities: []
    })
    console.log('process', process.env.DATABASE_TYPE)
    const app = express()
    app.use(cors())
    app.use(express.json())
    // app.use("/graphql", graphqlHTTP({
    //     schema,
    //     graphiql: true
    // }))

    app.listen(3001, () => {
        console.log('server running on port 3001')
    })
}

main().catch(err => {
    console.log('error', err)
})