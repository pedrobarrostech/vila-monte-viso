import jimp from 'jimp'
import fs from 'fs'

function saveResizeImage (data, fileName, id, width = 256) {
  const fileDest = `uploads/${fileName}`
  const resizedImgLocation = `uploads/thumbs/${id}${fileName}`
  const thumbFileAdminLocation = `../artwork-admin/src/assets/uploads/thumbs/${id}${fileName}`
  const thumbFileLocation = `../artwork-landing-page/src/template/uploads/thumbs/${id}${fileName}`
  fs.writeFile(fileDest, data, { encoding: 'base64' }, function (errWriteFile) {
    jimp.read(fileDest, function (errResizeFile, img) {
      if (errResizeFile) throw errResizeFile
      img
        .resize(width, jimp.AUTO)
        .write(resizedImgLocation)
    })

    jimp.read(fileDest, function (errResizeFile, img) {
      if (errResizeFile) throw errResizeFile
      img
        .resize(50, jimp.AUTO)
        .write(thumbFileAdminLocation)
    })

    jimp.read(fileDest, function (errResizeFile, img) {
      if (errResizeFile) throw errResizeFile
      img
        .resize(width, jimp.AUTO)
        .write(thumbFileLocation)
    })
    if (errWriteFile) throw errWriteFile
  })
}

function deleteImage (src) {
  fs.unlinkSync(src)
  fs.unlinkSync(`../artwork-admin/src/assets/${src}`)
}

function generateId () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9)
}

export default { saveResizeImage, deleteImage, generateId }

