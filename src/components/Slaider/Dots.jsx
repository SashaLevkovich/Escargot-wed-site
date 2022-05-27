import React from 'react';

import styles from './Slaider.module.scss';

const Dots = ({activeIndex, onclick, slaideData  }) => {
	return (
		<div className={styles['all-dots']}>
			{slaideData.map((slaid, idx)=>
				<div
					 key={`sl key ${idx}`}
				     className={activeIndex === idx ? `${styles['dot']} ${styles['active-dot']}` : styles['dot']}
					 onClick={ ()=> onclick(idx) }
				>
				{slaid.title}
				</div>
			)}
			
		</div>
	);
};

export default Dots;