import React from 'react';

import styles from './Welcome.module.scss';

import Flower from '../../assets/img/flower.svg'
import { Link } from 'react-router-dom';


const Welcome = () => {

	return (
		<div className={styles.welcome}>
			<div className={styles['welcome__container']}>
				<div className={styles['welcome__body']}>
					<div  className={styles['welcome__title']}>
						<div className={styles['welcome__label']}>Ресторан</div>
						<div className={styles['welcome__name']}>Escargot</div>
					</div>
					
					<div  className={styles[ 'welcome__img']}>
						<img src={Flower} alt="logo" />
					</div>
					
					
						<Link to={'/menu'}>
							<div className={styles['welcome__btn']}>
							Меню
							</div>
						</Link>
					
				</div>
			</div>
		</div>
	);
};

export default Welcome;