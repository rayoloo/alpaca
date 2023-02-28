import React from 'react'
import '../styles/Collection.css'
import { useNavigate } from 'react-router-dom'
import { useMultiLayerPageReveal } from 'react-multilayer-page-reveal'
import Swipe from './Swipe'

const Collection = () => {
	const { reveal } = useMultiLayerPageReveal()
	const navigate = useNavigate()
	const bestShowId = [148, 29, 41, 50, 75, 106, 126, 51]

	function handleReveal() {
		Swipe()
		reveal(() => {
			navigate('/collection')
		}, 750)
	}
	const getImageUrl = name => {
		return new URL(name, import.meta.url).href
	}
	return (
		<div className='Collection'>
			<div className='collection-header'>
				<h1>Some of our favorites</h1>
			</div>
			<div className='Container'>
				<div className='grid'>
					{bestShowId.map(i => {
						return (
							<div className='grid-item'>
								<img
									className='cardImage-small'
									src={getImageUrl('../images/' + i + '.jpg')}
									alt={i + 'of  150 alpaca'}
								/>
							</div>
						)
					})}
				</div>
			</div>
			<div className='footer-text'>
				<p onClick={handleReveal}>View The Collection</p>
			</div>
		</div>
	)
}

export default Collection
