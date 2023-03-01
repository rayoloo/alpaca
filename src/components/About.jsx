import React from 'react'
import '../styles/About.css'
import picture from '../assets/111.gif'
import AccordionComponent from './AccordionComponent'

const About = () => {
	return (
		<div className='About'>
			<div className='About-Container'>
				<div className='DisplayPicture'>
					<img src={picture} />
				</div>
				<div className='About-textbox'>
					<h1 className='About-title'>Campaign</h1>
					<p className='About-text'>
						Ordinal Alpaca is made up of 150 Alpacas roaming the BTC Chain! Each
						Alpaca is handcrafted to feel special and fun. Our mission is to
						create fun stuff and to keep our holders satisfied! Over a hundred
						different hand drawn traits ready to put a smile on your face.
					</p>
				</div>
			</div>
			<AccordionComponent />
		</div>
	)
}

export default About
