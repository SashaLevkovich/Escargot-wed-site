import React from 'react';
import Posts from './Posts/Posts';

import styles from './Offer.module.scss';
import 'aos/dist/aos.css'


import {posts} from './OfferProp'
import { useEffect } from 'react';
import Aos from 'aos';

const Offer = () => {
	useEffect(()=>{
		Aos.init({duration:2000})
	}, [])
	
	return (
		<div className={styles['offer']}>
			<div className={styles['offer__container']}>
				<div className={styles['offer__body']}>
					<div className={styles['offer__title']}>
					Наш ресторан предлагает вам
					</div>
					<div  className={styles['offer__posts']}>
					{posts.map((post, index) => {
						return (
							<Posts
								key={`post ${index}`}
								index={index}
								rev={ post.class }
								{...post }
								
							/>
						);
					})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Offer;