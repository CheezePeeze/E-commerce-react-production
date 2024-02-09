import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUpForm from './pages/SignUpForm';
import './index.css';
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/sign-up" element={<SignUpForm />} />
		</Routes>
	);
}

export default App;
