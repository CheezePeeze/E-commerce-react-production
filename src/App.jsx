import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUpForm from './pages/SignUpForm';
import './index.css';
import Product from './pages/Product';
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/sign-up" element={<SignUpForm />} />
			<Route path="/product/:id" element={<Product />} />
		</Routes>
	);
}

export default App;
