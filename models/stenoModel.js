var mongoose = require('mongoose');
var stenoSchema = new mongoose.Schema({
    name: String,
    model: Number,
    battery_life: Number,
    features: Object,
    product_details: Array,
    product_is_in_shopping_cart: Function,
    user_sets_opinion: Boolean,
    code_loads_incorrectly: InternalError,
    object_is_wrong_type: TypeError,
    num_page_currently_loaded: Number,
    user_shopping_pattern: RegExp,
    frontend_item_logic: Arguments,
});
