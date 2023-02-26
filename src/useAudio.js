import { useState, useEffect } from 'react'

const useAudio = url => {
	const [audio] = useState(new Audio(url))

	const quickplay = () => {
		audio.volume = 0.2
		audio.loop = false
		audio.play()
	}

	return [quickplay]
}

export default useAudio
