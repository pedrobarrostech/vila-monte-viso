'use strict'

import { saveResizeImage, deleteImage, generateId } from '../../helpers/image.helper'
import models from '../../models/index'

async function listActives (req, res, next) {
  try {
    const data = await models.Product
      .findAll({
        where: {
          active: 1
        }
      })
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function list (req, res, next) {
  try {
    const data = await models.Product.findAll({})
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function get (req, res, next) {
  try {
    const data = await models.Product
      .find({
        where: {
          id: req.params.productId
        }
      })
    res.json({
      data
    })
  } catch (err) {
    next(err)
  }
}

async function load (req, res, next, id) {
  try {
    const data = await models.Product
      .find({
        where: {
          id: req.params.productId
        }
      })
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function create (req, res, next) {
  try {
    const generatedId = generateId()
    await saveResizeImage(req.body.image.value, req.body.image.filename, generatedId)

    const product = {
      name: req.body.name,
      image: `uploads/thumbs/${generatedId}${req.body.image.filename}`,
      description: req.body.description,
      active: req.body.active
    }

    const data = await models.Product.create(product)
    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

async function update (req, res, next) {
  try {
    const product = await models.Product
      .find({
        where: {
          id: req.params.productId
        }
      })
    if (product) {
      const generatedId = generateId()
      await saveResizeImage(req.body.image.value, req.body.image.filename, generatedId)

      const data = await product
        .updateAttributes({
          name: req.body.name,
          image: `uploads/thumbs/${generatedId}${req.body.image.filename}`,
          description: req.body.description,
          active: req.body.active
        })

      res.json({
        success: true,
        data
      })
    }
  } catch (err) {
    next(err)
  }
}

async function remove (req, res, next) {
  try {
    const product = await models.Product
      .find({
        where: {
          id: req.params.productId
        }
      })

    const data = await models.Product
      .destroy({
        where: {
          id: req.params.productId
        }
      })

    deleteImage(product.image)

    res.json({
      success: true,
      data
    })
  } catch (err) {
    next(err)
  }
}

export default {
  listActives,
  load,
  list,
  get,
  create,
  update,
  remove
}
