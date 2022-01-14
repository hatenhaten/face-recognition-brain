import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt>
				<div className='br2 shadow-2 tilt'>
					<h1>👀</h1>
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;
