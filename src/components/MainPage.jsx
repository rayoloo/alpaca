import React from 'react'

import About from './About'
import Collection from './Collection'
import Hero from './Hero'
import Navbar from './Navbar'

const MainPage = () => {
	return (
		<div className='Hero'>
			<Navbar />
			<Hero />
			<About />
			<Collection />
		</div>
	)
}

export default MainPage
