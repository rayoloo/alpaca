import './App.css'
import { MultiLayerPageRevealProvider } from 'react-multilayer-page-reveal'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EnterPage from './components/EnterPage'
import MainPage from './components/MainPage'

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
	])

	return (
		<MultiLayerPageRevealProvider
			preset='triple-woosh'
			direction='cornerTopLeft'
			layerColors={['#f6ea7bff', '#ffba52ff', '#ee82ee']}>
			<RouterProvider router={router} />
		</MultiLayerPageRevealProvider>
	)
}

export default App
