import React from 'react'
import '../styles/MainCollection.css'
import { useMultiLayerPageReveal } from 'react-multilayer-page-reveal'
import { useNavigate } from 'react-router-dom'
import Swipe from './Swipe'

const MainCollection = () => {
	const { reveal } = useMultiLayerPageReveal()
	const navigate = useNavigate()

	function handleReveal() {
		Swipe()
		reveal(() => {
			navigate('/home')
		}, 750)
	}
	return (
		<div className='MainCollection'>
			<div className='home' onClick={handleReveal}>
				<h1>Home</h1>
			</div>
			<div className='container'>
				<div className='container-header'>
					<h1>Title</h1>
				</div>
				<div className='grid-container'>
					<p>6 columns</p>
					<p>74 rows</p>
				</div>
			</div>
		</div>
	)
}

export default MainCollection
