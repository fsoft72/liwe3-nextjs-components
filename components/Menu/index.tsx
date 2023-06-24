import React, { createContext, useState } from 'react';
import classes from './index.module.scss';

interface MenuProps {
	children?: React.ReactNode;
	isOpen: boolean;
}

interface MenuContextProps {
	isOpen: boolean;
	toggleMenu: () => void;
}

// This context is used to handle the state of the menu open / close
const MenuContext = createContext<MenuContextProps>( {
	isOpen: false,
	toggleMenu: () => { },
} );

const Menu = ( { children, isOpen = false }: MenuProps ) => {
	const [ menuOpen, setMenuOpen ] = useState( isOpen );

	return (
		<MenuContext.Provider value={{ isOpen: menuOpen, toggleMenu: () => setMenuOpen( !menuOpen ) }}>
			<div className={classes.menu}>
				{children}
			</div>
		</MenuContext.Provider>
	);
};

interface MenuHandlerProps {
	label: string;
	onToggle?: ( isOpen: boolean ) => void;
}

const MenuHandler = ( { label, onToggle }: MenuHandlerProps ) => {
	const { toggleMenu, isOpen } = React.useContext( MenuContext );

	const _toggleMenu = () => {
		toggleMenu();
		onToggle && onToggle( isOpen );
	};

	return (
		<div className={classes.handler}>
			<button onClick={_toggleMenu}>
				{label}
			</button>
		</div>
	);
};

interface MenuListProps {
	children?: React.ReactNode;
}

const MenuList = ( { children }: MenuListProps ) => {
	const { isOpen } = React.useContext( MenuContext );
	return (
		<div className={classes.list} style={{ display: isOpen ? 'block' : 'none' }}>
			{children}
		</div>
	);
};

interface MenuItemProps {
	children?: React.ReactNode;
}

const MenuItem = ( { children }: MenuItemProps ) => {
	return (
		<div className={classes.item}>
			{children}
		</div>
	);
};

export default Menu;
export { Menu, MenuHandler, MenuList, MenuItem, };