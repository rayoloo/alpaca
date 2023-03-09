import audiofile from '../assets/Swipe.mp3'

const Swipe = () => {
	const audio = new Audio(audiofile)
	audio.volume = 0.07
	audio.loop = false
	audio.play()
}

export default Swipe
