import classes from './MentionList.module.scss';

import React, { forwardRef, useEffect, useImperativeHandle, useState, } from 'react';

// eslint-disable-next-line react/display-name
export default forwardRef( ( props, ref ) => {
	const [ selectedIndex, setSelectedIndex ] = useState( 0 );

	const selectItem = index => {
		const item = props.items[ index ];

		if ( item ) {
			props.command( { id: item } );
		}
	};

	const upHandler = () => {
		setSelectedIndex( ( selectedIndex + props.items.length - 1 ) % props.items.length );
	};

	const downHandler = () => {
		setSelectedIndex( ( selectedIndex + 1 ) % props.items.length );
	};

	const enterHandler = () => {
		selectItem( selectedIndex );
	};

	useEffect( () => setSelectedIndex( 0 ), [ props.items ] );

	useImperativeHandle( ref, () => ( {
		onKeyDown: ( { event } ) => {
			if ( event.key === 'ArrowUp' ) {
				upHandler();
				return true;
			}

			if ( event.key === 'ArrowDown' ) {
				downHandler();
				return true;
			}

			if ( event.key === 'Enter' ) {
				enterHandler();
				return true;
			}

			return false;
		},
	} ) );

	return (
		<div className={classes.items}>
			{props.items.length
				? props.items.map( ( item, index ) => (
					<button
						className={`${classes.item} ${ index === selectedIndex ? classes.selected : '' }`}
						key={index}
						onClick={() => selectItem( index )}
					>
						{item}
					</button>
				) )
				: <div className={classes.item}>No result</div>
			}
		</div>
	);
} );