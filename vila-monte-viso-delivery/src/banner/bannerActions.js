import { URL_API } from '../config'
const URL = `${URL_API}banners/active`

export const FETCH_BANNERS = 'FETCH_BANNERS'

export function fetchBanners () {
  return {
    type: FETCH_BANNERS,
    payload: {
      request: {
        url: URL
      }
    }
  }
}
