import React, { useState, useEffect } from 'react'
import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs'
import '../styles/Player.css'

const useAudio = url => {
	const [audio] = useState(new Audio(url))
	const [playing, setPlaying] = useState(false)

	const toggle = () => setPlaying(!playing)

	useEffect(() => {
		playing ? audio.play() : audio.pause()
	}, [playing])

	useEffect(() => {
		audio.addEventListener('ended', () => setPlaying(false))
		return () => {
			audio.removeEventListener('ended', () => setPlaying(false))
		}
	}, [])

	return [playing, toggle]
}

const Player = () => {
	const url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
	const [playing, toggle] = useAudio(url)

	return (
		<div onClick={toggle}>
			{playing ? (
				<BsPauseFill className='iconPlayer' size={30} />
			) : (
				<BsFillPlayFill className='iconPlayer' size={30} />
			)}
		</div>
	)
}

export default Player
