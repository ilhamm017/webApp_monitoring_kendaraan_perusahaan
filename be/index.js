const Hapi = require('@hapi/hapi')
const { userRoutes } = require('./routes/user')

const server = Hapi.server({
    port: 8000,
    host: '0.0.0.0'
}) 

async function startServer() {
    await server.start()
    console.log(`server berjalan pada `, server.info.uri)
}

server.route(userRoutes)

startServer().catch((err) => {
    console.error(`Error memulai server: `,err);
})