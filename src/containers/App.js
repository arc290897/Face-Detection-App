import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo.js';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import tachyons from 'tachyons'; 
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';  


const particlesEffect={
		            		particles: {
		            			line_linked: {
		            				shadow: {
		            					enable: true,
		            					color: "#3CA9D1",
		            					blur: 5
		            				}
		            			}
		            		}
		            	}



const app = new Clarifai.App({
 apiKey: '0accb9f60f0d4b389a657ec6276b8407'
});



class App extends React.Component{
	constructor(){
		super();
		this.state={
			input:"",
			imageUrl:"",
			box:{}
		}
	}

	calculateFaceLocation = (data) =>{
		const clarifaiFace=(data.outputs[0].data.regions[0].region_info.bounding_box);
		const image=document.getElementById("inputImage");
		const width=Number(image.width);
		const height=Number(image.height);
		let mainData={
			leftCol:clarifaiFace.left_col * width,
			topRow:clarifaiFace.top_row * height,
			rightCol:width-(clarifaiFace.right_col*width),
			bottomRow:height-(clarifaiFace.bottom_row * height)
		}
		this.displayFaceBox(mainData);
	}

	displayFaceBox = (box) =>{
		this.setState({box:box});
	}

	onSubmit = () =>{
		this.setState({imageUrl:this.state.input})
		app.models
				.predict(
					'a403429f2ddf4b49b307e318f00e528b',this.state.input
					).then(responce=>{
						this.calculateFaceLocation(responce);
					})
					.catch(err=>console.log(err))
	}

	onInputChange = (event) =>{
		this.setState({input:event.target.value})
	}
	render(){
		return(
			<div>
				<Navigation />
				<Logo />
				<ImageLinkForm onSubmit={this.onSubmit} onInputChange={this.onInputChange}/>
				<Particles params={particlesEffect} className="particles"/>
				<FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
			</div>
		)
	}
}

export default App;