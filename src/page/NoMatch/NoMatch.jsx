import React from 'react';

import styles from './NoMatch.module.scss'
import { Link } from 'react-router-dom';

const NoMatch = () => {
	return (
		<div  className={styles['nomatch']}>
			<div className={ styles['nomatch__container'] }>
				<div className={ styles['nomatch__body'] }>
					<div className={ styles['nomatch__404']}>
						404
					</div>
					<div className={ styles['nomatch__text'] }>
						Страница не найдена! Пожалуйста вернитесь на главную
					</div>
					
					<Link to={'/'}>
						<div className={styles['nomatch__btn']}>
							Главная
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NoMatch;