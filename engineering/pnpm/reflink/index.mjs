import { reflinkFile } from '@reflink/reflink'
import { link, writeFile } from 'fs/promises'

await writeFile('./source.md', Array.from(Array(10000), x => 'hishanyue\n'))
for (let i = 0; i < 100; i++) {
  await reflinkFile('source.md', `target-${i}.md`)
  // await link('source.md', `hard-target-${i}.md`)
}
