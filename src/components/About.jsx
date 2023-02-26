import React from 'react'
import '../styles/About.css'
import picture from '../assets/1.gif'

const About = () => {
	return (
		<div className='About'>
			<div className='Container'>
				<div className='DisplayPictures'>
					<img src={picture} />
				</div>
				<div className='Textbox'>
					<h1 className='text-title'>Title</h1>
					<p className='text'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
						massa tincidunt dui ut ornare lectus sit amet. Laoreet non curabitur
						gravida arcu. Vel pharetra vel turpis nunc eget lorem dolor sed.
						Magnis dis parturient montes nascetur ridiculus mus. Velit dignissim
						sodales ut eu sem integer vitae. Neque laoreet suspendisse interdum
						consectetur libero. Arcu cursus vitae congue mauris rhoncus aenean.
						Rhoncus urna neque viverra justo nec.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
