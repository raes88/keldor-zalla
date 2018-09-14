const Productos = require('./productos.model.js');

/**
 * Load producto and append to req.
 */
function load(req, res, next, id) {
  Productos.get(id)
    .then((producto) => {
      req.producto = producto; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get producto
 * @returns {Productos}
 */
function get(req, res) {
  return res.json(req.producto);
}

/**
 * Create new producto
 * @property {string} req.body.producName - The producName of producto.
 * @property {string} req.body.mobileNumber - The mobileNumber of producto.
 * @returns {Productos}
 */
function create(req, res, next) {
  console.log('created')
  Productos.findOne({ producName: req.body.producName }, (err, producto) => {
    if (!producto) {
      console.log('created')
      const newProduc = new Productos(req.body);
      newProduc.save()
        .then(savedProduc => res.json(savedProduc))
        .catch(e => next(e));
    }
    if (producto) {
      return res.status(500).send({
        message: 'El producto  ya existe'
      });
    }
  });
}

/*
  Productos.findById(nombre, (err, producto) => {
        if (!producto) return res.status(404).send({
          _user: save()
            .then(savedUser => res.json(savedUser))
            .catch(e => next(e)),
          get productor() {
            return this._user;
          },
          set producto(value) {
            this._user = value;
          },
        })
        if (producto) return res.status(500).send({
          message: 'El usuario  ya existe'
        });
      }
*/


/**
 * Update existing producto
 * @property {string} req.body.producName - The producName of producto.
 * @property {string} req.body.mobileNumber - The mobileNumber of producto.
 * @returns {Productos}
 */
function update(req, res, next) {
  const producto = req.producto;
  producto.producName = req.body.producName;
  producto.categoria = req.body.categoria;
  producto.producPrecio = req.body.producPrecio;
  producto.distribuidor = req.body.distribuidor;
  producto.producCoste = req.body.producCoste;
  producto.producDescripcion = req.body.producDescripcion;
  producto.producImagen = req.body.producImagen;
  producto.modifFecha = new Date();

  producto.save()
    .then(savedProduc => res.json(savedProduc))
    .catch(e => next(e));
}

/**
 * Get producto list.
 * @property {number} req.query.skip - Number of productos to be skipped.
 * @property {number} req.query.limit - Limit number of productos to be returned.
 * @returns {Productos[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Productos.list({ limit, skip })
    .then(productos => res.json(productos))
    .catch(e => next(e));
}

/**
 * Delete producto.
 * @returns {Productos}
 */
function remove(req, res, next) {
  const producto = req.producto;
  producto.remove()
    .then(deletedProduc => res.json(deletedProduc))
    .catch(e => next(e));
}

module.exports = { load, get, create, update, list, remove };
