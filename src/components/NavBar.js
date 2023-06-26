import { Link } from 'react-scroll';

export default function NavBar () {

  return (
      <div className="fixed bottom-20 right-4 text-pGold tracking-widest font-bold leading-10 flex flex-col items-center w-1/6">
        <div>
        <Link to="Home" smooth={true} duration={500} className='hover:text-black hover:font-bold whitespace-nowrap'>
          <h2>Home</h2>
        </Link>
        <Link to="Services" smooth={true} duration={500} className='hover:text-black hover:font-bold whitespace-nowrap'>
          <h2>Services</h2>
        </Link>
        <Link to="Skills" smooth={true} duration={500} className='hover:text-black hover:font-bold whitespace-nowrap'>
          <h2>Skills</h2>
        </Link>
        <Link to="Projects" smooth={true} duration={500} className='hover:text-black hover:font-bold whitespace-nowrap'>
          <h2>Projects</h2>
        </Link>
        <Link to="About-Me" smooth={true} duration={500} className='hover:text-black hover:font-bold whitespace-nowrap'>
          <h2>About Me</h2>
        </Link>
        </div>
      </div>
  )
}
