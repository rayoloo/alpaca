import React, { useState } from 'react'
import '../App.css'

const EnterPage = props => {
	const [style, setStyle] = useState({ display: 'none' })
	const [styleHover, setStyleHover] = useState({ transform: 'scale(1.00)' })

	return (
		<div>
			<div className='App'>
				<img
					style={styleHover}
					src={
						'https://cdn.discordapp.com/attachments/1023022985583542345/1078798924254544084/Layer_18.png'
					}
					alt='alpaca'
					width={250}
					height={250}
				/>
			</div>
			<div
				className='overlay'
				onClick={props.clickFunction}
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
				<span style={{ color: '#FFFF00' }}>K</span>{' '}
				<span style={{ color: '#FF7F00' }}>T</span>
				<span style={{ color: '#FF0000' }}>O</span>{' '}
				<span style={{ color: '#9400D3' }}>E</span>
				<span style={{ color: '#4B0082' }}>N</span>
				<span style={{ color: '#0000FF' }}>T</span>
				<span style={{ color: '#00FF00' }}>E</span>
				<span style={{ color: '#FFFF00' }}>R</span>
			</p>
		</div>
	)
}

export default EnterPage
