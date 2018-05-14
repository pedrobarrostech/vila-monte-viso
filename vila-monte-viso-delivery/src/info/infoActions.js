import { URL_API } from '../config'
const URL = `${URL_API}sections/2`

export const FETCH_INFO = 'FETCH_INFO'

export function fetchInfo () {
  return {
    type: FETCH_INFO,
    payload: {
      request: {
        url: URL
      }
    }
  }
}
