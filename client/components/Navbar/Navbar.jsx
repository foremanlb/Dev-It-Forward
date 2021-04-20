import React from 'react'
import {Link} from "react"

export default function Navbar() {
  return (
    <div className="navbar">
      <Link><button>Profile</button></Link>
      <Link><button>Home</button></Link>
    </div>
  )
}
