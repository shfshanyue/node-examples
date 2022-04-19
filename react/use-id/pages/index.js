import { useId } from 'react'

export default function IndexPage() {
  const date = new Date().toJSON()
  const random = Math.random()
  const id = useId()
  const id2 = useId()

  console.log(date, random, id, id2)

  return (
    <div>
      <div>Date: {date}</div>
      <div>Random: {random}</div>
      <div>useId: {id}</div>
      <div>useId2: {id2}</div>
    </div>
  );
}
