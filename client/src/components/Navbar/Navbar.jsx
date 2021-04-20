import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar">
      <Link><button>Profile</button></Link>
      <Link><button>Home</button></Link>
    </div>
  )
}
