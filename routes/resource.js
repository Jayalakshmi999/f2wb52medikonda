var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Bakery_controller = require('../controllers/bakeries'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/bakeries', Bakery_controller.Bakery_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/bakeries/:id', Bakery_controller.Bakery_delete); 
 
// PUT request to update Costume. 
router.put('/bakeries/:id', Bakery_controller.Bakery_update_put); 
 
// GET request for one Costume. 
router.get('/bakeries/:id', Bakery_controller.Bakery_detail); 
 
// GET request for list of all Costume items. 
router.get('/bakeries', Bakery_controller.Bakery_list); 
 
module.exports = router; 