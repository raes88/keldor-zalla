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
  versionKey: false,
  producImagen: {
    type: String,
  }

});

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
        const err = new APIError('No such producto exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List users in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
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
