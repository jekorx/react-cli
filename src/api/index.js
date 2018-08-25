const baseURL = 'https://cnodejs.org/api/v1/'

const config = {
  mode: 'cors'
}

export default {
  async get (url) {
    return JSON.parse(await fetch(`${baseURL}${url}`, {
      ...config,
      method: 'GET'
    }).then(res => res.text()))
  },
  async post (url, data) {
    return JSON.parse(await fetch(`${baseURL}${url}`, {
      ...config,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(data).toString()
    }).then(res => res.text()))
  }
}
