let SERVER_JS = [{
    refName: ['MongoDB','REST'],
    filename: 'server.js',
    content: `
    const express = require('express');
    const logger = require('morgan');
    const path = require('path');
    const db = require('./config/connection')
    const routes = require('./routes')
    const PORT = process.env.PORT || 3001;

    const cors = require('cors');
    const corsOptions = {
        origin: 'http://localhost:3000'
    }

    const app = express();

    app.use(logger("dev"));

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/build')));
    }

    app.use(routes)
    app.use(cors(corsOptions))

    db.once('open', () => {
        console.log('Database  Connection Opened');
        app.listen(PORT, () => console.log('🌎 Listening at https://localhost:'+ PORT))

    }
`
},{
    refName: ['MongoDB','GraphQL'], 
    filename: 'server.js',
    content:`
    const express = require('express');
    const path = require('path');
    const db = require('./config/connection');
    const logger = require('morgan');
    require('dotenv').config();
    
    const cors = require('cors');
    const corsOptions = {
            origin: 'http://localhost:3000'
        }
        // importing ApolloServer
    const { ApolloServer } = require('apollo-server-express');
    
    // importing typeDefs and resolvers
    const { typeDefs, resolvers } = require('./schemas')
    // COMMENT BACK IN IF USING JWT or Other AUTH_MIDDLEWARE
    // const { authMiddleware } = require('./utils/auth')
    
    const app = express();
    const PORT = process.env.PORT || 3001;
    
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        // context: authMiddleware
    })
    
    // applying Apollo middleware here
    server.applyMiddleware({ app });
    
    app.use(logger("dev"));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    
    // if we're in production, serve client/build as static assets
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/build')));
    }
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
    
    app.use(cors(corsOptions))
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log('🌍 Now listening on localhost:'+PORT)
            console.log('Use GraphQL at http://localhost:'+PORT+server.graphqlPath);
        });
    
    });
`
}]