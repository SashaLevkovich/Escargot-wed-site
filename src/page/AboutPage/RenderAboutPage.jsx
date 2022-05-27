import React, { useEffect } from 'react';

import styles from '../../components/Offer/Posts/Posts.module.scss';
import stylesAbout from  './AboutPage.module.scss';
import 'aos/dist/aos.css'

import { Link, NavLink } from 'react-router-dom';

import Aos from 'aos';
import { BsArrowLeft } from 'react-icons/bs';



const RenderAboutPage = ({about}) => {
	useEffect(()=>{
		Aos.init({duration:2000})
	}, [])
	return (
		<>
			<div  className={stylesAbout['about__container']}>
				<div className={ stylesAbout['about__body'] }>
					<div className={ stylesAbout[ 'menu__title' ] }>
						<Link to={'/'} className={ stylesAbout['menu__back'] }>
							<BsArrowLeft />
						</Link>
						О нас</div>
					{about.map((item, idx) => (
						<div data-aos={'zoom-in-down'} key={`abput page idx ${idx}`} className={`${styles['posts']} ${stylesAbout['about-posts']}`}>
							<div className={styles['posts__container']}>
								<div className={`${styles['posts__body']} ${styles[`${item.class}`]}`}>
									<div className={`${styles['posts__img']}`}>
										<img src={`${item.img}`} alt="post" />
									</div>
									
									<div className={styles['posts__text']}>
										<div className={styles['posts__disc']}>
											{item.text}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		
		</>
	);
};

export default RenderAboutPage;