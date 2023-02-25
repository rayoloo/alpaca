import React from 'react'
import '../styles/Collection.css'

const Collection = () => {
	return (
		<div className='Collection'>
			<div className='Container'>
				<div className='grid'>
					<a href='http://google.com' target='_blank'>
						<div className='grid-item'></div>
					</a>
					<div className='grid-item'></div>
					<div className='grid-item'></div>
					<div className='grid-item'></div>
					<div className='grid-item'></div>
					<div className='grid-item'></div>
					<div className='grid-item'></div>
					<div className='grid-item'></div>
				</div>
			</div>
			<div className='footer-text'>
				<h1>Visit Collection</h1>
			</div>
		</div>
	)
}

export default Collection
