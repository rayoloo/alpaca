import React, { useEffect, useState } from 'react'
import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs'
import '../styles/Player.css'
import backgroundMusic from './backgroundMusic'

const Player = () => {
	const [playing, toggle] = backgroundMusic()

	return (
		<div onClick={toggle}>
			{playing ? (
				<BsPauseFill className='iconPlayer' size={40} />
			) : (
				<BsFillPlayFill className='iconPlayer' size={40} />
			)}
		</div>
	)
}

export default Player
