/*global window*/
const cookie = require('js-cookie')

module.exports = () => {
if (!window) return null
  const path = window.location.pathname
  const inTenSeconds = new Date(new Date().getTime() + 10 * 1000)
  const inThirtyMinutes = new Date(new Date().getTime() + 30 * 60 * 1000)

  if(cookie.get(path)) {
    return false
  } else {
    cookie.set(path, path, { expires: inThirtyMinutes })
    return true
  }
}
