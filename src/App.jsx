import './App.css';
import Rate from './Rating';
import Rating_mc from './Rating_mc';
import React, {useState} from "react";

function App() {

	const [rating, setRating] = useState(0);
	return (

		<>
		<Rate rating={rating} onRating={(rate) => setRating(rate)}/>

		<Rating_mc />
		</>
	);
}

export default App;