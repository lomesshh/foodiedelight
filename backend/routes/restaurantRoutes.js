const { createRestaurant,
    getRestaurants,
    updateRestaurantById,
    deleteById } = require('../conrollers/restaurantController');

const router = require('express').Router();

router.post('/', createRestaurant);
router.get('/', getRestaurants);
router.put('/:id', updateRestaurantById);
router.delete('/:id', deleteById);

module.exports = router