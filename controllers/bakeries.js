var Bakery = require('../models/baker'); 
 
// List of all Costumes 
exports.Bakery_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Bakery list'); 
}; 
 
// for a specific Costume. 
exports.Bakery_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Bakery detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.Bakery_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Bakery create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.Bakery_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Bakery delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.Bakery_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Bakery update PUT' + req.params.id); 
}; 