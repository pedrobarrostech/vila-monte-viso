'use strict'

import { saveResizeImage, generateId } from '../../helpers/image.helper'
import models from '../../models/index'

async function list (req, res, next) {
  try {
    const data = await models.Section.findAll({})
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
    const data = await models.Section
      .find({
        where: {
          id: req.params.sectionId
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
    const data = await models.Section
      .find({
        where: {
          id: req.params.sectionId
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
    await saveResizeImage(req.body.image.value, req.body.image.filename, generatedId, 720)

    const section = {
      name: req.body.name,
      image: `uploads/thumbs/${generatedId}${req.body.image.filename}`,
      description: req.body.description,
      info: req.body.info
    }

    const data = await models.Section.create(section)
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
    const section = await models.Section
      .find({
        where: {
          id: req.params.sectionId
        }
      })
    if (section) {
      const generatedId = generateId()
      await saveResizeImage(req.body.image.value, req.body.image.filename, generatedId, 720)

      const data = await section
        .updateAttributes({
          name: req.body.name,
          image: `uploads/thumbs/${generatedId}${req.body.image.filename}`,
          description: req.body.description,
          info: req.body.info
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
    const data = await models.Section
      .destroy({
        where: {
          id: req.params.sectionId
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

export default {
  load,
  list,
  get,
  create,
  update,
  remove
}
