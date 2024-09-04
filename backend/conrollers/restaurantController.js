const Restaurant = require('../models/Restaurant');

const createRestaurant = async (req, res) => {
    const body = req.body;
    try {
        const restaurant = new Restaurant(body);
        const result = await restaurant.save();
        res.status(201)
            .json({ message: "Restaurant created", result });
    } catch (err) {
        res.status(500)
            .json({ message: "Internal server error" });
    }
}

const getRestaurants = async (req, res) => {
    try {
        const results = await Restaurant.find({});
        res.status(200)
            .json({ message: "success", data: results });
    } catch (err) {
        res.status(500)
            .json({ message: "Internal server error" });
    }
}

const updateRestaurantById = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const updateDoc = { $set: { ...body } };
        updateDoc.updatedAt = Date.now();
        await Restaurant.findByIdAndUpdate(id, updateDoc);
        res.status(200)
            .json({ message: "Restaurant data updated" });
    } catch (err) {
        res.status(500)
            .json({ message: "Internal server error" });
    }
}

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        await Restaurant.findByIdAndDelete(id);
        res.status(200)
            .json({ message: "Restaurant deleted" });
    } catch (err) {
        res.status(500)
            .json({ message: "Internal server error" });
    }
}
module.exports = {
    createRestaurant,
    getRestaurants,
    updateRestaurantById,
    deleteById
}