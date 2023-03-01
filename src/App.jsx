import './App.css'

import { MultiLayerPageRevealProvider } from 'react-multilayer-page-reveal'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import EnterPage from './components/EnterPage'
import MainPage from './components/MainPage'
import MainCollection from './components/MainCollection'
import Navbar from './components/Navbar'
import { useLayoutEffect } from 'react'

function App() {
	const Wrapper = ({ children }) => {
		const location = useLocation()
		useLayoutEffect(() => {
			document.documentElement.scrollTo(0, 0)
		}, [location.pathname])
		return children
	}

	return (
		<BrowserRouter>
			<Wrapper>
				<MultiLayerPageRevealProvider
					preset='triple-woosh'
					direction='cornerTopLeft'
					layerColors={['#f6ea7bff', '#ffba52ff', '#ee82ee']}>
					<Navbar />
					<Routes>
						<Route path='/' element={<EnterPage />} />
						<Route path='/home' element={<MainPage />} />
						<Route path='/collection' element={<MainCollection />} />
					</Routes>
				</MultiLayerPageRevealProvider>
			</Wrapper>
		</BrowserRouter>
	)
}

export default App
