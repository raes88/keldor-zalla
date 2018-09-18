const Joi = require('joi');

module.exports = {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required(),
      role: Joi.string().valid(['ADMIN', 'CLIENT']).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
      email: Joi.string().email().required(),
      direccion: Joi.object({
        calle: Joi.string().required(),
        cp: Joi.number().required(),
        numero: Joi.number().required(),
        provincia: Joi.string().required(),
        localidad: Joi.string().required()
      })
    }
  },

  // POST /api/productos
  createProduc: {
    body: {
      producName: Joi.string().required(),
      categoria: Joi.string(),
      producPrecio: Joi.number().required(),
      distribuidor: Joi.string(),
      producCoste: Joi.number().required(),
      producDescripcion: Joi.string().required(),
      producImagen: Joi.string(),
    }
  },

// UPDATE /api/productos/:productoId
  updateProducto: {
   body: {
      producName: Joi.string().required(),
      categoria: Joi.string(),
      producPrecio: Joi.number().required(),
      distribuidor: Joi.string(),
      producCoste: Joi.number().required(),
      producDescripcion: Joi.string().required(),
      producImagen: Joi.string(),
    },
    params: {
      productoId: Joi.string().hex().required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required(),
      role: Joi.string().valid(['ADMIN', 'CLIENT']).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
      email: Joi.string().email().required(),
      direccion: Joi.object({
        calle: Joi.string().required(),
        cp: Joi.number().required(),
        numero: Joi.number().required(),
        provincia: Joi.string().required(),
        localidad: Joi.string().required()
      })
    },
    params: {
      userId: Joi.string().hex().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
    }
  }
};
