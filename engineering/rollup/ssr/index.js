const isServer = process.env.BROWSER === true
let encode, decode

if (isServer) {
  encode = (str) => {
    return Buffer.from(str).toString('base64')
  }

  decode = (str) => {
    return Buffer.from(str, 'base64').toString()
  }
} else {
  encode = btoa
  decode = atob
}

export { encode, decode }