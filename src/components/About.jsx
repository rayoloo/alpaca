import React from 'react'
import '../styles/About.css'
import picture from '../assets/111.gif'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import Card from 'react-bootstrap/Card'

function CustomToggle({ children, eventKey }) {
	const decoratedOnClick = useAccordionButton(eventKey, () =>
		console.log('totally custom!'),
	)

	return (
		<button
			type='button'
			style={{ backgroundColor: '#373737' }}
			onClick={decoratedOnClick}>
			{children}
		</button>
	)
}

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
			<div>
				<div>
					<h2 className='faq'>F A Q</h2>
				</div>
				<div
					style={{
						padding: '2rem',
						paddingBottom: '5rem',
					}}>
					<Accordion alwaysOpen>
						<Accordion.Item eventKey='0'>
							<Accordion.Header>How many are there?</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey='1'>
							<Accordion.Header>how do i get one?</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey='3'>
							<Accordion.Header>What is it?</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey='4'>
							<Accordion.Header>Future</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</div>
		</div>
	)
}

export default About
