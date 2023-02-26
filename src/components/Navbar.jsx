import React, { useState } from 'react'
import { FaDiscord, FaTwitter, FaBars, FaTimes } from 'react-icons/fa'
import '../styles/Navbar.css'
import Player from './Player'

const Navbar = () => {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)
	return (
		<div className='header'>
			<div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li>
						<FaDiscord className='icon' size={30} />
					</li>
					<li>
						<FaTwitter className='icon' size={30} />
					</li>
				</ul>
				<Player />
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
