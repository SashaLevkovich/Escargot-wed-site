import React, { useEffect } from 'react';

import styles from './Land.module.scss';
import 'aos/dist/aos.css';

import Aos from 'aos';

import landPic from '../../assets/img/land.png';

const Land = () => {
	useEffect(()=>{
		Aos.init({duration:5000})
	}, [])
	
	return (
		<div data-aos={'top-bottom'} className={styles.land} >
			<div className={styles['land__container']}>
				<div className={styles['land__body']}>
					<div className={styles['land__title']}>
						Открытие уникальной атмосферы нашего ресторана
					</div>
					
					<div className={styles['land__pic']}>
						<img data-aos={'fade-down'} src={landPic} alt="land" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Land;