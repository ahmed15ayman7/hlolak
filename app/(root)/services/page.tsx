import React, { Suspense } from 'react'
import Service from './Service'
function SearchBarFallback() {
  return <></>
}
const Page = () => {
  return (
    <Suspense fallback={<SearchBarFallback />} >
      <Service/>
    </Suspense>
  )
}

export default Page