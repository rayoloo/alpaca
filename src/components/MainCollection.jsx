import React from 'react'
import '../styles/MainCollection.css'
import { useMultiLayerPageReveal } from 'react-multilayer-page-reveal'
import { useNavigate } from 'react-router-dom'
import Swipe from './Swipe'
import cards from '../cardsdata.json'

const MainCollection = () => {
	const { reveal } = useMultiLayerPageReveal()
	const navigate = useNavigate()

	function handleReveal() {
		Swipe()
		reveal(() => {
			navigate('/home')
		}, 750)
	}
	const getImageUrl = name => {
		return new URL(name, import.meta.url).href
	}
	return (
		<div className='MainCollection'>
			<div className='home' onClick={handleReveal}>
				<h1>Home</h1>
			</div>
			<div className='container'>
				<div className='container-header'>
					<h1>Alpaca Collection</h1>
				</div>
				<div className='grid-main'>
					{cards.map(alpaca => {
						return (
							<div className='grid-items'>
								<img
									className='cardImage'
									src={getImageUrl('/images/' + alpaca.name + '.jpg')}
									alt={alpaca.name + 'of  150 alpaca'}
								/>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default MainCollection
