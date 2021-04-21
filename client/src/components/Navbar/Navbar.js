import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
      <Link><button>Profile</button></Link>
      <Link to='/' ><button>Home</button></Link>
    </div>
  )
}

export default Navbar