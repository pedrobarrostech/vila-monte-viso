'use strict'

import sequelize from 'sequelize'
import models from '../../models/index'
import { saveResizeImage, deleteImage, generateId } from '../../helpers/image.helper'

async function listActives (req, res, next) {
  try {
    const data = await models.Banner
      .findAll({
        where: {
          active: 1
        },
        order: sequelize.col('order')
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
    const data = await models.Banner.findAll({})
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
    const data = await models.Banner
      .find({
        where: {
          id: req.params.bannerId
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
    const data = await models.Banner
      .find({
        where: {
          id: req.params.bannerId
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
    await saveResizeImage(req.body.image.value, req.body.image.filename, generatedId, 1440)

    const banner = {
      name: req.body.name,
      image: `uploads/thumbs/${generatedId}${req.body.image.filename}`,
      order: req.body.order,
      active: req.body.active
    }

    const data = await models.Banner.create(banner)
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
    const banner = await models.Banner
      .find({
        where: {
          id: req.params.bannerId
        }
      })
    if (banner) {
      const generatedId = generateId()
      await saveResizeImage(req.body.image.value, req.body.image.filename, generatedId, 1440)

      const data = await banner
        .updateAttributes({
          name: req.body.name,
          image: `uploads/thumbs/${generatedId}${req.body.image.filename}`,
          order: req.body.order,
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
    const banner = await models.Banner
    .find({
      where: {
        id: req.params.bannerId
      }
    })

    const data = await models.Banner
      .destroy({
        where: {
          id: req.params.bannerId
        }
      })

    deleteImage(banner.image)

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
