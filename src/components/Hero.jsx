import React from 'react'
import TextLoop from 'react-text-loop'
import '../styles/Hero.css'

const Hero = () => {
	return (
		<div className='Hero'>
			<div className='Speechbox'>
				<p className='speech'>
					<TextLoop>
						<span>Hello</span>
						<span>Bonjour</span>
						<span>Salut</span>
						<span>Hola</span>
						<span>Nǐn hǎo</span>
					</TextLoop>
				</p>
			</div>
		</div>
	)
}

export default Hero
