import './App.css';
import Rate from './Rating';
import React, {useState} from "react";
// import Rate from './Ratings_own';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

	const [rating, setRating] = useState(0);
	return (
		<Rate rating={rating} onRating={(rate) => setRating(rate)}/>
	);
}

export default App;