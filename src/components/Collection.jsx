import React from 'react'
import '../styles/Collection.css'

const Collection = () => {
	return (
		<div className='Collection'>
			<div className='collection-header'>
				<h1>Some of our favorites</h1>
			</div>
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
				<h1>View The Collection</h1>
			</div>
		</div>
	)
}

export default Collection
