import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-tsparticles';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
	apiKey: 'a68e8f272db14527a8d91a6b0dd54a3a',
});

const particlesOptions = {
	background: {
		color: {
			value: 'transparent',
		},
	},
	fpsLimit: 60,
	interactivity: {
		events: {
			onClick: {
				enable: true,
				mode: 'push',
			},
			onHover: {
				enable: false,
				mode: 'repulse',
			},
			resize: true,
		},
		modes: {
			bubble: {
				distance: 400,
				duration: 2,
				opacity: 0.8,
				size: 40,
			},
			push: {
				quantity: 4,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
		},
	},
	particles: {
		color: {
			value: '#ffffff',
		},
		links: {
			color: '#ffffff',
			distance: 150,
			enable: true,
			opacity: 0.5,
			width: 1,
		},
		collisions: {
			enable: true,
		},
		move: {
			direction: 'none',
			enable: true,
			outMode: 'bounce',
			random: false,
			speed: 1,
			straight: false,
		},
		number: {
			density: {
				enable: true,
				area: 800,
			},
			value: 80,
		},
		opacity: {
			value: 0.1,
		},
		shape: {
			type: 'circle',
		},
		size: {
			random: true,
			value: 5,
		},
	},
	detectRetina: true,
};

const particlesInit = main => {
	console.log(main);
};

const particlesLoaded = container => {
	console.log(container);
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
		};
	}

	onInputChange = event => {
		console.log(event.target.value);
	};

	onButtonSubmit = () => {
		console.log('click');
		app.models.predict('a403429f2ddf4b49b307e318f00e528b', 'https://samples.clarifai.com/face-det.jpg').then(
			function(response) {
				console.log(response);
			},
			function(err) {},
		);
	};

	render() {
		return (
			<div className='App'>
				<Particles className='particles' id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={particlesOptions} />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
				{/*
        <FaceRecognition /> */}
			</div>
		);
	}
}

export default App;
