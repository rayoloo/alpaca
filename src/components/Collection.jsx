import React from 'react'
import '../styles/Collection.css'
import { useNavigate } from 'react-router-dom'
import { useMultiLayerPageReveal } from 'react-multilayer-page-reveal'
import Swipe from './Swipe'
import cards from '../cardsdata.json'

const Collection = () => {
	const { reveal } = useMultiLayerPageReveal()
	const navigate = useNavigate()
	const bestShowId = [7, 29, 41, 63, 75, 113, 123, 145]

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
									className='cardImage'
									src={getImageUrl('../images/' + i + '.png')}
									alt={i + 'of  150 alpaca'}
								/>
							</div>
						)
					})}
				</div>
			</div>
			<div className='footer-text'>
				<h1 onClick={handleReveal}>View The Collection</h1>
			</div>
		</div>
	)
}

export default Collection
