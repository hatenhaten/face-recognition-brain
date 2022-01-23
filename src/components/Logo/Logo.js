import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain2.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt tiltMaxAngleX={40} tiltMaxAngleY={40}>
				<div className='br2 shadow-2 tilt'>
					<div className='pa3'><img style={{paddingTop: '5px'}} src={brain} alt="brain"></img></div>
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;
