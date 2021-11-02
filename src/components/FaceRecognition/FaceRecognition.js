import React from 'react';
import './FaceRecognition.css';

const FaceRecognition  = ({imageUrl,box}) =>{
	return(
		<div style={{textAlign:"center"}}>
			<div style={{position:"relative",display:"inline-block"}}>
				<img src={imageUrl} alt=""
				id="inputImage" 
				style={{width:"500px",height:"auto",margin:"0"}}
				/>
				<div className="bounding-box" 
				style={{top:box.topRow,right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}}>
				</div>
			</div>
		</div>
		)
}

export default FaceRecognition;