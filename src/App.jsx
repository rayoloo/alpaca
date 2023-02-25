import { useState } from 'react'
import './App.css'
import {
	MultiLayerPageRevealProvider,
	useMultiLayerPageReveal,
} from 'react-multilayer-page-reveal'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EnterPage from './components/EnterPage'
import MainPage from './components/MainPage'

function App() {
	const { reveal } = useMultiLayerPageReveal()
	const [click, setClick] = useState(false)

	const handleClick = () => {
		setClick(true)
		reveal(() => {
			console.log('hello')
		}, 750)
	}

	const router = createBrowserRouter([
		{
			path: '/',
			element: <EnterPage />,
		},
		{
			path: '/home',
			element: <MainPage />,
		},
	])

	return (
		<MultiLayerPageRevealProvider
			preset='triple-woosh'
			direction='cornerTopLeft'
			layerColors={['#f6ea7bff', '#ffba52ff', '#e683a9ff']}>
			<RouterProvider router={router} />
		</MultiLayerPageRevealProvider>
	)
}

export default App
