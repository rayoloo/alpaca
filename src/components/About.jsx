import React from 'react'
import '../styles/About.css'
import picture from '../assets/111.gif'

const About = () => {
	return (
		<div className='About'>
			<div className='Container'>
				<div className='DisplayPictures'>
					<img src={picture} />
				</div>
				<div className='Textbox'>
					<h1 className='text-title'>Campaign</h1>
					<p className='text'>
						Ordinal Alpaca is made up of 150 Alpacas roaming the BTC Chain! Each
						Alpaca is handcrafted to feel special and fun. Our mission is to
						create fun stuff and to keep our holders satisfied! Over a hundred
						different hand drawn traits ready to put a smile on your face.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
