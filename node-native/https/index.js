const https = require('https')

https.get('https://icanhazip.com', {
  
}, (res) => {
  const ip = res.socket.remoteAddress
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
  console.log('ip', ip)
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  })

  res.on('end', () => {
    console.log(data)
  })

}).on('error', (e) => {
  console.error(e);
})
