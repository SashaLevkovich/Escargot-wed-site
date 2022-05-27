import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Slaider.module.scss'

import slaideData from './slaideData';
import SlaiderContent from './SlaiderContent';
import Dots from './Dots';

const len = slaideData.length - 1;

const Slaider = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [anim, setAnim] = useState(false)
	
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
		}, 5000);
		return () => clearInterval(interval);
	}, [activeIndex]);
	
	
	return (
		<div className={styles.slaider}>
			<div className={ styles['slaider__container'] }>
				<div className={styles['slaider__body']}>
					<div className={ styles['slaider__title'] }>
						Популярные блюда
					</div>
					<div className={styles['slider__container']}>
						<CSSTransition in={anim} timeout={200} classNames={ styles['my-node'] }>
							<SlaiderContent activeIndex={activeIndex} slaideData={slaideData}/>
						</CSSTransition>
						<Dots
							activeIndex={activeIndex}
							slaideData={slaideData}
							onclick={(activeIndex) => setActiveIndex(activeIndex)}
							onClick={()=>setAnim(true)}
						/>
					</div>
				</div>
			</div>
	</div>
	);
};

export default Slaider;