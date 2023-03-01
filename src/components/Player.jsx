import React from 'react'
import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs'
import '../styles/Player.css'
import BackgroundMusic from './BackgroundMusic'

const Player = () => {
	const [playing, toggle] = BackgroundMusic()

	return (
		<div onClick={toggle}>
			{playing ? (
				<BsPauseFill className='iconPlayer' size={35} />
			) : (
				<BsFillPlayFill className='iconPlayer' size={35} />
			)}
		</div>
	)
}

export default Player
