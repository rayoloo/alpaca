import React, { useState } from 'react'
import '../styles/Enter.css'
import { useMultiLayerPageReveal } from 'react-multilayer-page-reveal'
import { useNavigate } from 'react-router-dom'
import Swipe from './Swipe'

const EnterPage = () => {
	const [style, setStyle] = useState({ display: 'none' })
	const [styleHover, setStyleHover] = useState({ transform: 'scale(1.00)' })

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
		<div>
			<div className='Icon'>
				<img
					style={styleHover}
					src={getImageUrl('../assets/EnterIcon.png')}
					alt='alpaca'
					width={250}
					height={250}
				/>
			</div>
			<div
				className='overlay'
				onClick={handleReveal}
				onMouseEnter={e => {
					setStyle({ display: 'block' })
					setStyleHover({ transform: 'scale(1.10)' })
				}}
				onMouseLeave={e => {
					setStyle({ display: 'none' })
					setStyleHover({ transform: 'scale(1.00)' })
				}}
			/>

			<p style={style} className='textPos'>
				<span style={{ color: '#9400D3' }}>C</span>
				<span style={{ color: '#4B0082' }}>L</span>
				<span style={{ color: '#0000FF' }}>I</span>
				<span style={{ color: '#00FF00' }}>C</span>
				<span style={{ color: '#F5E600' }}>K</span>{' '}
				<span style={{ color: '#FF7F00' }}>T</span>
				<span style={{ color: '#FF0000' }}>O</span>{' '}
				<span style={{ color: '#9400D3' }}>E</span>
				<span style={{ color: '#4B0082' }}>N</span>
				<span style={{ color: '#0000FF' }}>T</span>
				<span style={{ color: '#00FF00' }}>E</span>
				<span style={{ color: '#FF0000' }}>R</span>
			</p>
		</div>
	)
}

export default EnterPage
