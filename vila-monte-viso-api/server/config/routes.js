import express from 'express'
import clientRoute from '../modules/client/client.route'
import userRoute from '../modules/user/user.route'
import authRoute from '../modules/auth/auth.route'
import scheduleRoute from '../modules/schedule/schedule.route'
import entryRoute from '../modules/entry/entry.route'
import messageRoute from '../modules/message/message.route'
import bannerRoute from '../modules/banner/banner.route'
import sectionRoute from '../modules/section/section.route'
import productRoute from '../modules/product/product.route'
import serviceRoute from '../modules/service/service.route'

const router = express.Router()

router.get('/health-check', (req, res) =>
  res.send('OK')
)

router.use('/clients', clientRoute)
router.use('/users', userRoute)
router.use('/schedules', scheduleRoute)
router.use('/auth', authRoute)
router.use('/entries', entryRoute)
router.use('/messages', messageRoute)
router.use('/banners', bannerRoute)
router.use('/sections', sectionRoute)
router.use('/products', productRoute)
router.use('/services', serviceRoute)

export default router
