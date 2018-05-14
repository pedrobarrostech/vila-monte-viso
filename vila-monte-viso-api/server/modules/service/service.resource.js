'use strict'

import { saveResizeImage, deleteImage, generateId } from '../../helpers/image.helper'
import models from '../../models/index'

async function listActives (req, res, next) {
  try {
    const data = await models.Service
      .findAll({
        where: {
          active: 1
        },
        limit: 3
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
    const data = await models.Service.findAll({})
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
    const data = await models.Service
      .find({
        where: {
          id: req.params.serviceId
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
    const data = await models.Service
      .find({
        where: {
          id: req.params.serviceId
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
    let imageSrc = null
    if (req.body.image) {
      const generatedId = generateId()
      imageSrc = `uploads/thumbs/${generatedId}${req.body.image.filename}`
      await saveResizeImage(req.body.image.value, req.body.image.filename, generatedId)
    }

    const service = {
      name: req.body.name,
      image: imageSrc,
      description: req.body.description,
      active: req.body.active
    }

    const data = await models.Service.create(service)
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
    const service = await models.Service
      .find({
        where: {
          id: req.params.serviceId
        }
      })
    if (service) {
      if (req.body.image) {
        const generatedId = generateId()
        await saveResizeImage(req.body.image.value, req.body.image.filename, generatedId)
      }

      const data = await service
        .updateAttributes({
          name: req.body.name,
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
    const product = await models.Service
      .find({
        where: {
          id: req.params.serviceId
        }
      })

    const data = await models.Service
      .destroy({
        where: {
          id: req.params.serviceId
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
