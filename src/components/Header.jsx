import React, {  useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '../components/Menu';
import MyOrder from '../containers/MyOrder';
import AppContext from "../context/AppContext";
import styles from '../styles/Header.module.scss';

import menu from '../assets/icons/icon_menu.svg';
import logo from '../assets/logos/logo_yard_sale.svg';
import shoppingCart from '../assets/icons/icon_shopping_cart.svg';

const Header = () => {
	const { state, toggleOrder, toggleMenu } = useContext(AppContext);

	return (
		<>
			<nav className={styles.Nav}>
				<Image src={menu} alt="menu" className={styles.menu} />
				<div className={styles['navbar-left']}>
					<Link href="/" passHref>
						<Image src={logo} alt="logo" className={styles['nav-logo']} />
					</Link>
					<ul>
						<li>
							<Link href="/">Info</Link>
						</li>
						<li>
							<Link href="/">Clothes</Link>
						</li>
						<li>
							<Link href="/">Electronics</Link>
						</li>
						<li>
							<Link href="/">Furnitures</Link>
						</li>
						<li>
							<Link href="/">Toys</Link>
						</li>
						<li>
							<Link href="/">Others</Link>
						</li>
					</ul>
				</div>
				<div className={styles['navbar-right']}>
					<ul>
						<li
							className={(styles['more-clickable-area'], styles['navbar-email'], styles.pointer)}
							onClick={() => toggleMenu()}
							aria-hidden="true"
						>
							platzi@example.com
						</li>
						<li
							className={styles['navbar-shopping-cart']}
							onClick={() => toggleOrder()}
							aria-hidden="true"
						>
							<Image className={(styles['more-clickable-area'], styles.pointer)} src={shoppingCart} alt="shopping cart" />
							{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
						</li>
					</ul>
				</div>
				{state.menuIsOpen && <Menu />}
			</nav>
			{state.orderIsOpen && <MyOrder />}
		</>
	);
};

export default Header;