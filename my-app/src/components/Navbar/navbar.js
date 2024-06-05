import './navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/kb_logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="desktopMenu">
           <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link> 
           <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
           <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Connect</Link>
        </div>
    </nav>
  )
}

export default Navbar;
