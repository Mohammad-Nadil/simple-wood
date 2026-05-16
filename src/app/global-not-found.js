import Link from 'next/link'
import React from 'react'

const globalNotFound = () => {
  return (
    <div>
        <h1 className="text-9xl" >404</h1>
        <h1>Not Found</h1>
        <Link href="/">Back to Home</Link>
    </div>
  )
}

export default globalNotFound
