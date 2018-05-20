module.exports = {
    create: ( req, res, next ) => {
        const database = req.app.get('db');
        const { name, description, price, image_url } = req.body;

        database.create_product([ name, description, price, image_url ]).then( () => res.status(200).send()).catch( () => res.status(500).send());
    },

    getOne: ( req, res, next ) => {
        const database = req.app.get('db');
        const { params } = req;

        database.read_product([ params.id ]).then( product => res.status(200).send(product)).catch( () => res.status(500).send());
    },

    getAll: ( req, res, next ) => {
        const database = req.app.get('db');

        database.read_products().then( products => res.status(200).send(products)).catch( () => res.status(500).send());
    },

    update: ( req, res, next ) => {
        const database = req.app.get('db');
        const { params, query } = req;
        
        database.update_product([ params.id, query.desc ]).then( () => res.status(200).send()).catch( () => res.status(500).send());
    },

    delete: ( req, res, next ) => {
        const database = req.app.get('db');
        const { params } = req;

        database.delete_product([ params.id ]).then( () => res.status(200).send()).catch( () => res.status(200).send()).catch( () => res.status(500).send());
    }
};