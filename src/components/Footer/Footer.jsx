import React from 'react';

import styles from './Footer.module.scss'
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<div className={styles['footer__container']}>
				<div className={styles['footer__body']}>
					<div className={styles.left}>
						<div className={styles.address}>
							<div className={styles['address__title']}>
								Адрес
							</div>
							<div className={styles['address__text']}>
								Минск
							</div>
							<div className={styles['address__text']}>
								ул. Старовиленская 16
							</div>
						</div>
						<div className={styles.timetable}>
							<div className={styles['timetable__title']}>
								Расписание
							</div>
							
							<div className={ styles['timetable__text'] }>
								Пн - Пт
							</div>
							
							<div className={ styles['timetable__text'] }>
								8:00 - 00:00
							</div>
							
							<div className={ styles['timetable__text'] }>
								Сб - Вс
							</div>
							
							<div className={ styles['timetable__text'] }>
								8:00 - 23:00
							</div>
							
							
						</div>
					</div>
					
					<div className={styles.right}>
					<div className={styles['right__container']}>
						<div className={styles['right__body']}>
							<div className={styles['right__title']}>
								Подписывайтесь на нас
							</div>
							
							<div className={styles['right__links']}>
								<Link to={'/'} className={styles['link']}>Instagram</Link>
								<Link to={'/'} className={styles['link']}>FaceBook</Link>
								<Link to={'/'} className={styles['link']}>Twitter</Link>
							</div>
						</div>
					</div>
					</div>
				</div>
				<div className={styles["cop"]}>
				Levkovich 2021
			</div>
			
			</div>
		</footer>
	);
};

export default Footer;