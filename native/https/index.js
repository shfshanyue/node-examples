const https = require('https');

https.get('https://icanhazip.com', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  })

  res.on('end', () => {
    console.log(data)
  })

}).on('error', (e) => {
  console.error(e);
});
