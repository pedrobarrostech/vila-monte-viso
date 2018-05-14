import { URL_API } from '../config'
const URL = `${URL_API}services/active`

export const FETCH_SERVICES = 'FETCH_SERVICES'

export function fetchServices () {
  return {
    type: FETCH_SERVICES,
    payload: {
      request: {
        url: URL
      }
    }
  }
}
