const TestPage = () => {

	const styles = {
		'cell': {
			minWidth: 100,
			minHeight: 100,
			borderColor: 'black',
			borderStyle: 'solid',
			borderWidth: 1,
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
		}
	}

    return (
		<div className="liweContainer">
			<div className="liweRow">
				<h1>Theme reference</h1>
			</div>
			<div className="liweRow flexStart">
				<h2>Colors</h2>
			</div>
			<div className="liweRow">
				<div className="liweCol6 light">
					<div className="liweRow">
						<h2>Light theme colors</h2>
					</div>
					<div className="liweRow">
						<div className="liweCol3 liweBgPrimary" style={styles.cell}>Primary</div>
						<div className="liweCol3 liweBgPrimaryDark" style={styles.cell}>Primary Dark</div>
						<div className="liweCol3 liweBgPrimaryLight" style={styles.cell}>Primary Light</div>
						<div className="liweCol3 liweBgPrimaryComp" style={styles.cell}>Primary Complementary</div>
					</div>
					<div className="liweRow">
						<div className="liweCol3 liweBgSecondary" style={styles.cell}>Secondary</div>
						<div className="liweCol3 liweBgSecondaryDark" style={styles.cell}>Secondary Dark</div>
						<div className="liweCol3 liweBgSecondaryLight" style={styles.cell}>Secondary Light</div>
						<div className="liweCol3 liweBgSecondaryComp" style={styles.cell}>Secondary Complementary</div>
					</div>
					<div className="liweRow">
						<div className="liweCol3 liweBgSuccess" style={styles.cell}>Success</div>
						<div className="liweCol3 liweBgDanger" style={styles.cell}>Danger</div>
						<div className="liweCol3 liweBgWarning" style={styles.cell}>Warning</div>
						<div className="liweCol3 liweBgInfo" style={styles.cell}>Info</div>
					</div>
					<div className="liweRow">
						<div className="liweCol3 liweBgMain" style={styles.cell}>Main Background Color</div>
						<div className="liweCol3 liweBgDark" style={styles.cell}>Dark</div>
						<div className="liweCol3 liweBgLight" style={styles.cell}>Light</div>
					</div>
				</div>
				<div className="liweCol6 dark">
					<div className="liweRow">
						<h2>Dark theme colors</h2>
					</div>
					<div className="liweRow">
						<div className="liweCol3 liweBgPrimary" style={styles.cell}>Primary</div>
						<div className="liweCol3 liweBgPrimaryDark" style={styles.cell}>Primary Dark</div>
						<div className="liweCol3 liweBgPrimaryLight" style={styles.cell}>Primary Light</div>
						<div className="liweCol3 liweBgPrimaryComp" style={styles.cell}>Primary Complementary</div>
					</div>
					<div className="liweRow">
						<div className="liweCol3 liweBgSecondary" style={styles.cell}>Secondary</div>
						<div className="liweCol3 liweBgSecondaryDark" style={styles.cell}>Secondary Dark</div>
						<div className="liweCol3 liweBgSecondaryLight" style={styles.cell}>Secondary Light</div>
						<div className="liweCol3 liweBgSecondaryComp" style={styles.cell}>Secondary Complementary</div>
					</div>
					<div className="liweRow">
						<div className="liweCol3 liweBgSuccess" style={styles.cell}>Success</div>
						<div className="liweCol3 liweBgDanger" style={styles.cell}>Danger</div>
						<div className="liweCol3 liweBgWarning" style={styles.cell}>Warning</div>
						<div className="liweCol3 liweBgInfo" style={styles.cell}>Info</div>
					</div>
					<div className="liweRow">
						<div className="liweCol3 liweBgMain" style={styles.cell}>Main Background Color</div>
						<div className="liweCol3 liweBgDark" style={styles.cell}>Dark</div>
						<div className="liweCol3 liweBgLight" style={styles.cell}>Light</div>
					</div>
				</div>
			</div>
			<div className="liweRow flexStart">
				<h2>Typography</h2>
			</div>
			<div className="liweRow flexStart">
				<ul>
					<li><h1>H1 text here</h1></li>
					<li><h2>H1 text here</h2></li>
					<li><h3>H3 text here</h3></li>
					<li><h4>H4 text here</h4></li>
					<li><h5>H5 text here</h5></li>
					<li><h6>H6 text here</h6></li>
				</ul>			
			</div>
			<div className="liweRow flexStart">
				<div className="liweCol4">
					<h4>Paragraph</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div className="liweCol4">
					<h4>Code</h4>
					<code>10. write your code here;<br/>20. and here();</code>
				</div>
				<div className="liweCol4">
					<h4>Small</h4>
					<div>Paragraph with some <small>small text</small> text here</div>
				</div>
				<div className="liweCol4">
					<h4>Blockquote</h4>
					<div>Paragraph with some <blockquote>&rdquo;blockquoted text&rdquo;</blockquote> text here</div>
				</div>
				<div className="liweCol4">
					<h4>KBD Keyboard input</h4>
					<div>Paragraph with some kbd <kbd>CTRL+ALT+CANC</kbd> text here</div>
				</div>
				<div className="liweCol4">
					<h4>Pre</h4>
					<div>Paragraph with some <pre>Text in a pre element is displayed in a fixed-width<br/> font, and it preserves both      spaces and line breaks</pre> text here</div>
				</div>
				<div className="liweCol4">
					<h4>Strong</h4>
					<div>Paragraph with some <strong>strong text</strong> text here</div>
				</div>
				<div className="liweCol4">
					<h4>Lead</h4>
					<div>Paragraph with some <span className="liweLead">lead text</span> text here</div>
				</div>
			</div>
			<div className="liweRow flexStart">
				<h2>Basic Grid</h2>
			</div>
			<div className="liweRow">
				<div className="liweCol12">
					<h4>How it works</h4>
					<div>Rows must be placed within a <code>&lt;div&gt;</code> with the <code>.liweRow</code> class.</div>
					<div>Use rows to create horizontal groups of columns.</div>
					<div>Content should be placed within columns, and only columns may be immediate children of rows.</div>
					<div>Predefined classes like <code>.liweCol4</code> and <code>.liweCol6</code> are available for quickly making grid layouts.</div>
					<div>Columns create gutters (gaps between column content) via margin. That margin is offset in rows for the first and last column via negative margin on <code>.liweRow</code>.</div>
					<div>The negative margin is why the examples below are outdented. It&apos;s so that content within grid columns is lined up with non-grid content. Gutters can be <b>customized</b> in <code>styles/layout.scss</code>.</div>
					<div>Grid columns are created by specifying the number of 12 available columns (this number can be <b>customized</b> in <code>styles/layout.scss</code>) you wish to span. For example, three equal columns would use three <code>.liweCol4</code>.</div>
					<div>If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.</div>
					<div><span className="liweLead liweBgWarning liweTxtLight">TODO:</span> Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, e.g. applying any <code>.liweCol-md-*</code> class to an element will not only affect its styling on medium devices but also on large devices if a <code>.liweCol-lg-*</code> class is not present.</div>
				</div>
			</div>
		</div>
    );
}

export default TestPage;