var mongoose =
require('mongoose');
module.exports = mongoose.model ('Stenotype',
{
    name : {type : String, default: ' '}

});
