import { useEffect, useState } from 'react'
import audiofile from '../assets/Happy.mp3'

const BackgroundMusic = () => {
	const [audio] = useState(new Audio(audiofile))
	const [playing, setPlaying] = useState(false)
	const toggle = () => setPlaying(!playing)

	useEffect(() => {
		audio.volume = 0.1
		audio.loop = true
		playing ? audio.play() : audio.pause()
	}, [playing])

	return [playing, toggle]
}
