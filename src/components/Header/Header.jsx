import React, { useState } from 'react';
import NavMenu from '../NavMenu/NavMenu';

import NavIcon from '../../assets/img/NavIcon.svg';

import styles from './Header.module.scss';

import { items } from '../NavMenu/NavMenuProp';
import { Link, NavLink } from 'react-router-dom';

const Header = ()=>{
	const [menuActive, setMenuActive] = useState(false);
	return(
		<>
			<header>
				<nav>
					<div onClick={()=>setMenuActive(!menuActive)} className={menuActive ? `${styles['burgerBtn']} ${styles.active}` :  styles['burgerBtn'] }>
						<span />
					</div>
					<NavLink className={styles.logo} to={'/'}>Escargot</NavLink>
					<Link to={'/menu'} className={styles.menu}>
						<img src={NavIcon} alt="Menu" />
					</Link>
				</nav>
			</header>
		<NavMenu active={menuActive} setMenuActive={setMenuActive} header={'Escargot'}  items={items}/>
		</>
		
	)
}

export default Header;