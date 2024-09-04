const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantModel = new Schema(
    {
        restaurantsName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        gstNo: {
            type: String,
            required: true
        },
        products: {
            type: [Schema.Types.Mixed],
            default: []
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }
)

module.exports = mongoose.model('restaurants', RestaurantModel);