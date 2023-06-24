import classes from './index.module.scss';

interface MenuProps {
	children?: React.ReactNode;
}

const Menu = ( { children }: MenuProps ) => {
	return (
		<div className={classes.menu}>
			{children}
		</div>
	);
};

interface MenuHandlerProps {
	children?: React.ReactNode;
}

const MenuHandler = ( { children }: MenuHandlerProps ) => {
	return (
		<div className={classes.handler}>
			{children}
		</div>
	);
};

interface MenuListProps {
	children?: React.ReactNode;
}

const MenuList = ( { children }: MenuListProps ) => {
	return (
		<div className={classes.list}>
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

interface MenuIconProps {
	children?: React.ReactNode;
}

const MenuIcon = ( { children }: MenuIconProps ) => {
	return (
		<div className={classes.icon}>
			{children}
		</div>
	);
};

const MenuText = () => {
};

const MenuDropdown = () => {
};

const MenuDropdownItem = () => {

};

export default Menu;
export { Menu, MenuHandler, MenuList, MenuItem, MenuIcon, MenuText, MenuDropdown, MenuDropdownItem };