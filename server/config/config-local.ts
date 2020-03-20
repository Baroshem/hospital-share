export default () => ({
    application: {
        name: 'hack-the-crisis'
    },
    server: {
        port: parseInt(process.env.PORT, 10) || 3000
    },
    database: {
        postgres: {
            host: "localhost",
            port: 6002,
            username: "postgres",
            password: "postgres",
            dbname: "hack-the-crisis"
        }
    }
});
