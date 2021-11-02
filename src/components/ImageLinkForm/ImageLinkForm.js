import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onSubmit,onInputChange}) =>{
	return(
		<div className="tc">
			<p className="f3">FaceAi will detect face in your picture! try it now</p>
			<div style={{width:"700px",margin:"auto"}} className="background">
				<input type="text" placeholder="Paste your image url" className="w-70 pa2" onChange={onInputChange}/>
				<button className="w-30 grow f4 ph3 pv2 dib white bg-light-purple" onClick={onSubmit}>Detect</button>
			</div>
		</div>
		)
}

export default ImageLinkForm;