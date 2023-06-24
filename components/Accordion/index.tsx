import React, { createContext, useState } from 'react';
import classes from './index.module.scss';

interface AccordionProps {
	children?: React.ReactNode;
	openItem?: number;
}

interface AccordionContextProps {
	currentItem?: number;
	openItem?: number;
	open: ( index: number ) => void;
}

// This context is used to handle the state of the menu open / close
const AccordionContext = createContext<AccordionContextProps>( {
	openItem: -1,
	open: ( index: number ) => { },
} );

const Accordion = ( { children, openItem = -1 }: AccordionProps ) => {
	const [ openedItem, setOpenedItem ] = useState( openItem );

	const handleOpen = ( index: number ) => {
		if ( index === openedItem ) {
			setOpenedItem( -1 );
		} else {
			setOpenedItem( index );
		}
	};

	return (
		<AccordionContext.Provider value={{ openItem: openedItem, open: handleOpen }}>
			<div className={classes.accordion}>
				{children}
			</div>
		</AccordionContext.Provider>
	);
};

interface AccordionSectionProps {
	title?: string;
	index: number;
	children?: React.ReactNode;
}

const AccordionSection = ( { children, title, index }: AccordionSectionProps ) => {
	const { openItem, open } = React.useContext( AccordionContext );
	const isOpen = openItem === index;

	return (
		<div className={classes.section}>
			<div className={classes.title} onClick={() => open( index )}>
				{title}
				<div>
					{openItem === index ? '-' : '+'}
				</div>
			</div>
			{isOpen && <div className={`${ classes.content } ${ isOpen ? classes.open : '' }`}>{children}</div>}
		</div >
	);
};

export { Accordion, AccordionSection };