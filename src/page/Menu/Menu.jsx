import React from 'react';

import styles from './Menu.module.css';

import { menus } from './data/menuData';

import MenuList from '../../components/MenuList/MenuList';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<div className={styles['menu']}>
			<div className={ styles['menu__container'] }>
				<div className={ styles['menu__body'] }>
					<div className={ styles[ 'menu__title' ] }>
						<Link to={'/'} className={ styles['menu__back'] }>
							<BsArrowLeft />
						</Link>
						Меню</div>
					<div className={styles['menu__list']}>
						{menus.map((menu, idx) =>{
							return (
								<MenuList
									key={`menu list ${idx}`}
									img={menu.img}
									{ ...menu }
								/>
							)
						})
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;