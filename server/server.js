//server creation
const express = require("express");
const app = express();

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});


/*const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.route');
const logger = require('./utils/logger');

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});*/