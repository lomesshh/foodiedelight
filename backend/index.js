const express = require('express');
const app = express();

require('dotenv').config();
require('./db');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

const restaurantsRoutes = require('./routes/restaurantRoutes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('restaurants api running new deploy');
});

// /restaurants
app.use('/restaurants', restaurantsRoutes);

app.listen(8080, () => {
    console.log('Server is listenin on PORT :' + PORT);
})
