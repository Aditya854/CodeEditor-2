import { VscServerProcess } from "react-icons/vsc";
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
         
          <div className='text-lg font-bold align-middle'>
          <VscServerProcess className='inline pr-2 text-3xl' />
            {title}
          </div>
        </div>

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <button className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </button>
            <button className='btn btn-ghost btn-sm rounded-btn'>
              About
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Code Editor',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar