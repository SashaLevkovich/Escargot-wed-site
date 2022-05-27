import React from 'react';

import styles from './Slaider.module.scss'
import { Link } from 'react-router-dom';


const SlaiderContent = ({activeIndex, slaideData}) => {
	return (
		<section>
			{slaideData.map((slide, index) => (
				<div
					key={index}
					className={index === activeIndex ? `${ styles['slides']} ${styles.active}` :  styles['slides'] }
				>
					<div className={styles['slides__container']}>
						<div className={styles['slides__body']}>
							<div className="slides__img">
								<img src={slide.img} alt="pic" />
							</div>
							<div className={ styles[ 'slides__menu' ] }>
								<div className={styles['menu__title']}>
									<ul>
										<div className={styles['menu']}><Link to={'/menu'}>{slide.dish1}</Link></div>
										<div className={styles['menu']}><Link to={'/menu'}>{slide.dish2}</Link></div>
										<div className={styles['menu']}><Link to={'/menu'}>{slide.dish3}</Link></div>
										<div className={styles['menu']}><Link to={'/menu'}>{slide.dish4}</Link></div>
										<div className={styles['menu']}><Link to={'/menu'}>{slide.dish5}</Link></div>
									</ul>
								</div>
								
								<div className={styles['menu__price']}>
									<ul>
										<div>{slide.price1}руб.</div>
										<div>{slide.price2}руб.</div>
										<div>{slide.price3}руб.</div>
										<div>{slide.price4}руб.</div>
										<div>{slide.price5}руб.</div>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default SlaiderContent;