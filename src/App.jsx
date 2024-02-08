import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginFormPage from './pages/LoginFormPage';
import './index.css';
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<LoginFormPage />} />
		</Routes>
	);
}

export default App;
