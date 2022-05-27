import React from 'react';
import Welcome from '../../components/Welcome/Welcome';
import Pic from '../../components/Pic/Pic';
import Land from '../../components/Land/Land';
import Offer from '../../components/Offer/Offer';
import Slaider from '../../components/Slaider/Slaider';

const Main = () => {
	return (
		<div>
			<Welcome />
			<Pic />
			<Land />
			<Offer />
			<Slaider />
		</div>
	);
};

export default Main;