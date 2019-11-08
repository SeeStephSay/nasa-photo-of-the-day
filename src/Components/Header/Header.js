/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../HeroImage/HeroImage';
import HeroImage from '../HeroImage/HeroImage';

const Header = () => {
	return (
		<header>
			<nav className='header-nav'>
				<a className='nav-link' href='#'>
					Home
				</a>
				<a className='nav-link' href='#'>
					About
				</a>
				<a className='nav-link' href='#'>
					Blog
				</a>
				<a className='nav-link' href='#'>
					Contact
				</a>
			</nav>
			<HeroImage />
		</header>
	);
};

export default Header;
