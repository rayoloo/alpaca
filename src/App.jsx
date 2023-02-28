import './App.css'
import { MultiLayerPageRevealProvider } from 'react-multilayer-page-reveal'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EnterPage from './components/EnterPage'
import MainPage from './components/MainPage'
import MainCollection from './components/MainCollection'
import Navbar from './components/Navbar'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <EnterPage />,
		},
		{
			path: '/home',
			element: <MainPage />,
		},
		{
			path: '/collection',
			element: <MainCollection />,
		},
	])

	return (
		<MultiLayerPageRevealProvider
			preset='triple-woosh'
			direction='cornerTopLeft'
			layerColors={['#f6ea7bff', '#ffba52ff', '#ee82ee']}>
			<Navbar />
			<RouterProvider router={router} />
		</MultiLayerPageRevealProvider>
	)
}

export default App
