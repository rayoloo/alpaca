import audiofile from '../assets/Swipe.mp3'

const Swipe = () => {
	const audio = new Audio(audiofile)
	audio.volume = 0.25
	audio.loop = false
	audio.play()
}

export default Swipe