const url = 'https://api.coincap.io/v2'

const getAssets = () =>
  fetch(`${url}/assets?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data)

const getAsset = (coin) =>
  fetch(`${url}/assets/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data)

const getAssetHistory = (coin) => {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)

  const start = now.getTime()

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data)
}

const getMarkets = async (coin) => {
  try {
    let response = await fetch(`${url}/assets/${coin}/markets?limit=5`)
    response = await response.json()

    return response.data
  } catch (error) {
    console.info('No se ha encontrado el proveedor')
  }
}

const getExchange = async (id) => {
  try {
    let response = await fetch(`${url}/exchanges/${id}`)
    response = await response.json()

    return response.data
  } catch (error) {
    console.info('No se ha encontrado el proveedor')
  }
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
}
