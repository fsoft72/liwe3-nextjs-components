import classes from './index.module.scss';

interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;

	sx?: Record<string, any>;
}

const Toolbar = ( { children, sx }: ToolbarProps ) => {
	return (
		<div className={classes.toolbar} style={sx}>
			{children}
		</div>
	);
};

const Separator = () => {
	return (
		<div className={classes.separator} />
	);
};

export default Toolbar;
export { Separator };