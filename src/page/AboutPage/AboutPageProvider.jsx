import React, { useEffect } from 'react';
import { useState } from 'react';
import { local } from '../About/data/localData';
import { bar } from '../About/data/barData';
import { des } from '../About/data/desData';

const AboutPageProvider = ({id, render }) => {
	const [info, setInfo] = useState([]);
	
	useEffect( () => {
		if ( id == 0 )
		{
			setInfo(local)
		}
		if ( id == 1 )
		{
			setInfo(bar)
		}
		if ( id == 2 )
		{
			setInfo(des)
		}
	}, [])

	return (
		<>
			{render(info)}
		</>
	);
};

export default AboutPageProvider;