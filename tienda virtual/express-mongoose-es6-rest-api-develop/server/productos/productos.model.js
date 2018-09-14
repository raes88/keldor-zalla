const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');


const UserSchema = new mongoose.Schema({
  producName: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
  },
  producPrecio: {
    type: Number,
    required: true
  },
  distribuidor: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  producCoste: {
    type: Number,
    required: true
  },
  producDescripcion: {
    type: String,
    required: true
  },
  producImagen: {
    type: String,
  },
  modifFecha: {
    type: Date,
    default: Date.now,
    required: true
  }
}, { versionKey: false });

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
UserSchema.method({});

/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Get user
   * @param {ObjectId} id - The objectId of producto.
   * @returns {Promise<Productos, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((producto) => {
        if (producto) {
          return producto;
        }
        const err = new APIError('El producto no existe!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List productos in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of productos to be skipped.
   * @param {number} limit - Limit number of productos to be returned.
   * @returns {Promise<Productos[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef Productos
 */
module.exports = mongoose.model('Productos', UserSchema);
