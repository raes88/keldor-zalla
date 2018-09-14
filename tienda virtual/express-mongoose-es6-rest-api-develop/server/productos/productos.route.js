const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const producCtrl = require('./productos.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/productos - Get list of productos */
  .get(producCtrl.list)

  /** POST /api/productos - Create new producto */
  .post(validate(paramValidation.createProduc), producCtrl.create);

router.route('/:productoId')
  /** GET /api/productos/:productoId - Get producto */
  .get(producCtrl.get)

  /** PUT /api/productos/:productoId - Update producto */
  .put(validate(paramValidation.updateProducto), producCtrl.update)

  /** DELETE /api/productos/:productoId - Delete producto */
  .delete(producCtrl.remove);

/** Load producto when API with productoId route parameter is hit */
router.param('productoId', producCtrl.load);

module.exports = router;
