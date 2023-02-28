import React from 'react'

import About from './About'
import Collection from './Collection'
import Describe from './Describe'
import Hero from './Hero'
import Navbar from './Navbar'

const MainPage = props => {
	return (
		<div className='Hero'>
			<Hero />
			<About />
			<Describe />
			<Collection />
		</div>
	)
}

export default MainPage
