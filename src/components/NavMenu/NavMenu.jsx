import React from 'react';
import {Link} from 'react-router-dom';

import {FiInstagram} from 'react-icons/fi';
import {FaTelegramPlane} from 'react-icons/fa';
import {BsTelephone} from 'react-icons/bs';

import styles from './NavMenu.module.scss'

const NavMenu = ({header, items, active, setMenuActive  }) => {
	if ( active ) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "visible";
	}
	return (
		<div className={active ? `${styles['nav-menu']} ${styles.active}` :  styles['nav-menu'] } onClick={()=>setMenuActive(false)}>
			<div className={styles['nav-menu__container']}>
					 <div className={ styles['nav-menu__content'] }>
						 <Link to={'/'} className={ styles['nav-menu__header']}>{header}</Link>
						 <ul>
							 {items.map((item, idx) =>
								<li key={`menu item ${idx}`}>
									<Link to={item.href}>{item.value}</Link>
								</li>
							 )}
						 </ul>
					 </div>
				
					 <div className={styles['nav-menu__links']}>
						 <FiInstagram className={styles['link']}/>
						 <FaTelegramPlane className={styles['link']}/>
						 <BsTelephone className={styles['link']}/>
					 </div>
			</div>
		</div>
	);
};

export default NavMenu;