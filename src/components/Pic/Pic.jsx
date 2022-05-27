import React, { useEffect } from 'react';

import  styles from './Pic.module.scss';
import 'aos/dist/aos.css'

import Aos from 'aos';

import img from '../../assets/img/pic1.svg'

const Pic = () => {

	useEffect(()=>{
		Aos.init({duration:5000})
	}, [])
	
	return (
		<div data-aos={'zoom-in-down'} className={ `${ styles.pic } ${styles.mb}`}>
			<div className={styles['pic__container']}>
				<div className={styles['pic__body']}>
					<div className={styles['pic__title']}>
						Добро пожаловать
					</div>
					<img className={styles.img} src={ img } alt="img" />
				</div>
			</div>
		</div>
	);
};

export default Pic;