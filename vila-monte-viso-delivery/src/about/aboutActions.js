import { URL_API } from '../config'
const URL = `${URL_API}sections/1`

export const FETCH_ABOUT = 'FETCH_ABOUT'

export function fetchAbout () {
  return {
    type: FETCH_ABOUT,
    payload: {
      request: {
        url: URL
      }
    }
  }
}
