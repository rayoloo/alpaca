import React, { useEffect, useState } from 'react'
import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs'
import '../styles/Player.css'
import audiofile from '../assets/Happy.mp3'

const Player = () => {
	const [audio] = useState(new Audio(audiofile))
	const [playing, setPlaying] = useState(false)
	const toggle = () => setPlaying(!playing)

	useEffect(() => {
		audio.volume = 0.1
		audio.loop = true
		playing ? audio.play() : audio.pause()
	}, [playing])

	useEffect(() => {
		audio.addEventListener('ended', () => setPlaying(false))
		return () => {
			audio.removeEventListener('ended', () => setPlaying(false))
		}
	}, [])

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
