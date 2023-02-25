import React, { useState } from 'react'
import { FaDiscord, FaTwitter, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)
	return (
		<div className='header'>
			<div>
				<h1>Paca Land</h1>
			</div>
			<div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li>
						<FaDiscord
							size={30}
							style={click ? { color: 'white' } : { color: 'black' }}
						/>
					</li>
					<li>
						<FaTwitter
							size={30}
							style={click ? { color: 'white' } : { color: 'black' }}
						/>
					</li>
				</ul>
			</div>
			<div className='hamburger' onClick={handleClick}>
				{click ? (
					<FaTimes size={20} style={{ color: 'white' }} />
				) : (
					<FaBars size={20} style={{ color: 'black' }} />
				)}
			</div>
		</div>
	)
}

export default Navbar
