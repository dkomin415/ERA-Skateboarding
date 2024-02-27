import express from 'express';
// import graphqlHTTP from 'express-graphql';
import routes from './routes/index.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// express config
app.use(cors());
// app.use('/graphql', graphqlHTTP({

// }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// turn on routes
// app.use(routes);

// builds client
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// db connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ERA-Skateboarding?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// logs mongo queries being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 connected on localhost${PORT}`));