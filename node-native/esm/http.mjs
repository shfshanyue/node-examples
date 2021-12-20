import fs from 'fs/promises'

fs.stat('/').then(stats => console.log(stats))
