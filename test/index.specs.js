var api = require('../index.js');

beforeEach(function(){
	api.models.contacts = [];
	api.models.contacts.push({name: 'exist'})
});