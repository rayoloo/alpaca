import React, { useState } from 'react'
import { FaDiscord, FaTwitter, FaBars, FaTimes } from 'react-icons/fa'
import '../styles/Navbar.css'

const Navbar = () => {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)
	return (
		<div className='header'>
			<div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li>
						<FaDiscord size={30} style={{ color: 'white' }} />
					</li>
					<li>
						<FaTwitter size={30} style={{ color: 'white' }} />
					</li>
				</ul>
			</div>
			<div className='hamburger' onClick={handleClick}>
				{click ? (
					<FaTimes size={20} style={{ color: 'white' }} />
				) : (
					<FaBars size={20} style={{ color: 'white' }} />
				)}
			</div>
		</div>
	)
}

export default Navbar
