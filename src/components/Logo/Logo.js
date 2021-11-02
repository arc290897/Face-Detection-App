import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Logoo from './Logo.png';

const Logo = () =>{
	return(
		<div style={{marginLeft:"50px",textAlign:"center"}}>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 70 }} style={{ height: 200, width: 200 }} >
 				<div className="Tilt-inner">
 					<img src={Logoo} alt="Logo" />
 				</div>
			</Tilt>
		</div>
		)
}

export default Logo;