import { useState } from 'react'
import './App.css'
import EnterPage from './components/EnterPage'
import MainPage from './components/MainPage'

function App() {
	const [click, setClick] = useState(false)

	const handleClick = () => {
		setClick(true)
	}

	return (
		<div className='Main'>
			{click ? <MainPage /> : <EnterPage clickFunction={handleClick} />}
		</div>
	)
}

export default App
