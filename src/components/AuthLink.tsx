'use client'

import { useState } from 'react'
import Link from 'next/link'

function AuthLink() {
  const [isAuthenticated] = useState<boolean>(false)

  return isAuthenticated ? (
    <>
      <Link href="/write">Write</Link>
      <span className="cursor-pointer">Logout</span>
    </>
  ) : (
    <Link href="/login">Login</Link>
  )
}

export default AuthLink
