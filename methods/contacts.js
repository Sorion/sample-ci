// Contacts.js

var _ = require('lodash');
var router = require('express').Router();

module.exports = function(api){
	router.get('/', function(req, res, next){
		res.send(api.models.contacts);
	});
	
	router.get('/:name', function(req, res, next){
		var contacts = _.filter(api.models.contacts, {name: req.params.name});
		res.send(contacts);
	});
	

    router.post('/:name', function(req, res, next){
        var contact = {name: req.params.name};
        var contacts = _.filter(api.models.contacts, contact);
        if (contacts.length > 0)
            return res.status(403).send('name already exists');


        api.models.contacts.push(contact);
        res.send(contact);
    });
	
	router.put('/:name/:new', function(req, res, next){
		var count = 0;
		api.models.contacts = _.map(api.models.contacts, function(contact){
			if(contact.name === req.params.name){
				count ++;
				contact.name = req.params.new;
			}
			
			return contact;
		});
		res.send({count: count});
	});
	
	router.delete('/:name', function(req, res, next){
		var count = 0;
		_.remove(api.models.contacts, function(contact){
			if(contact.name === req.params.anme){
				count ++;
				return true;
			}
			return false
		});
		res.send({count: count});
		
	});
	
	return router;
}