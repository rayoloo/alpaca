import React, { useEffect, useState } from 'react'
import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs'
import '../styles/Player.css'
import audiofile from '../assets/Happy.mp3'

const useAudio = url => {
	const [audio] = useState(new Audio(url))
	const [playing, setPlaying] = useState(false)
	const toggle = () => setPlaying(!playing)

	useEffect(() => {
		audio.volume = 0.25
		audio.loop = true
		playing ? audio.play() : audio.pause()
	}, [playing])

	return [playing, toggle]
}

const Player = () => {
	const [playing, toggle] = useAudio(audiofile)

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
