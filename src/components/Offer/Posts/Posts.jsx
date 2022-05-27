import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Posts.module.scss';

import 'aos/dist/aos.css'
import Aos from 'aos';

const Posts = ( { index, text, title, img, rev }) => {
	useEffect(()=>{
		Aos.init({duration:10000})
	}, [])
	
	return (
		<div key={index} className={styles['posts']}>
			<div data-aos={'zoom-in-down'} className={styles['posts__container']}>
				<div  className={`${styles['posts__body']} ${styles[`${rev}`]}`}>
					<div className={`${styles['posts__img']}`}>
						<img src={`${img}`} alt="post" />
					</div>
					
					<div  className={styles['posts__text']}>
						<div className={styles['posts__title']}>
							{title}
						</div>
						<div className={styles['posts__disc']}>
							{text}
						</div>
						<div  className={ styles[ 'posts__btn' ] }>
							<NavLink to={`/about/${index}`} className={ styles[ 'btn' ] }>
								Читать
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	);
};

export default Posts;