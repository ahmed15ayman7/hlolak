"use client"
import { Suspense } from 'react'
function SearchBarFallback() {
  return <></>
}
const Page = () => {

  return (
    <Suspense fallback={<SearchBarFallback />} >
      <h1>jhfhfj</h1>
    </Suspense>
  )
}
export default Page
export const dynamic = 'force-dynamic'