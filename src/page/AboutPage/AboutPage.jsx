import React from 'react';

import {useParams} from 'react-router-dom';

import AboutPageProvider from './AboutPageProvider';
import RenderAboutPage from './RenderAboutPage';

const AboutPage = ( ) => {
	
	const { id } = useParams();
	
	return (
		<>
		<AboutPageProvider
			id={id}
			render={(data)=> <RenderAboutPage about={data}/> }/>
		</>
	);
};

export default AboutPage;