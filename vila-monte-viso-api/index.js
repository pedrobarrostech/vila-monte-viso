import config from './server/config/env'
import app from './server/config/express'

const debug = require('debug')('express-sequelize-es7-rest-api:index')

app.listen(config.port, () => {
  debug(`server started on port ${config.port} (${config.env})`)
})

export default app
