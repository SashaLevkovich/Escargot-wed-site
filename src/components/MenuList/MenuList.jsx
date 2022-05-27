import React from 'react';

import styles from './MenuList.module.scss'

import line from '../../assets/img/menu/line.svg'

const MenuList = ( { key, img, title, dish, price }) => {
	return (
		<div key={key} className={styles['list']}>
			<div className={ styles['list__container'] }>
				<div className={ styles['list__body'] }>
					<div className={ styles['list__img'] }>
						<img src={img} alt="pic" />
					</div>
					<div className={ styles['list__title'] }>
						{title}
					</div>
					
					<div className={styles['text']}>
						<div className={ styles['text__dish'] }>
							<ul>
								{dish.map((item) => (
									<div className={ styles.dish }>
										{ item }
										<img src={line} alt="" />
									</div>
									))}
							</ul>
						</div>
						
						<div className={ styles['text__price'] }>
							<ul>
								{price.map((item) => (
									<div className={ styles.price }>
										{ item } руб.
									</div>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuList;