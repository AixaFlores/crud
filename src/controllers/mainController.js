const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = require('../utils/toThousand');
const toDiscount = require('../utils/toDiscount');

const controller = {
	index: (req, res) => {
		// Do the magic
		return res.render('index', {
			visited : products.filter(product => product.category === 'visited'),
			insale : products.filter(product => product.category === 'in-sale'),
			toThousand,
			toDiscount
		});
	},
	search: (req, res) => {
		// Do the magic
			return res.render('results', {
			products : products.filter(product => product.name.toLowerCase().includes(req.query.keywords.toLowerCase())),
			toDiscount,
			toThousand,
			keywords : req.query.keywords

		})
	
	},
};

module.exports = controller;
