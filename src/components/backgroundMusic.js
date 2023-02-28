import { useEffect, useState } from 'react'
import audiofile from '../assets/Happy.mp3'

const backgroundMusic = () => {
	const [audio] = useState(new Audio(audiofile))
	const [playing, setPlaying] = useState(false)
	const toggle = () => setPlaying(!playing)

	useEffect(() => {
		audio.volume = 0.25
		audio.loop = true
		playing ? audio.play() : audio.pause()
	}, [playing])

	return [playing, toggle]
}

export default backgroundMusic
