import React from "react";

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

const TestPage = () => {
    return (
    <>
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
				<p>Paragraph with some <small>small text</small> text here</p>
			</div>
			<div className="liweCol4">
				<h4>Blockquote</h4>
				<p>Paragraph with some <blockquote>&rdquo;blockquoted text&rdquo;</blockquote> text here</p>
			</div>
			<div className="liweCol4">
				<h4>KBD Keyboard input</h4>
				<p>Paragraph with some <kbd>CTRL + ALT + CANC</kbd> text here</p>
			</div>
			<div className="liweCol4">
				<h4>Pre</h4>
				<p>Paragraph with some <pre>Text in a pre element is displayed in a fixed-width<br/> font, and it preserves both      spaces and line breaks</pre> text here</p>
			</div>
			<div className="liweCol4">
				<h4>Strong</h4>
				<p>Paragraph with some <strong>strong text</strong> text here</p>
			</div>
			<div className="liweCol4">
				<h4>Lead</h4>
				<p>Paragraph with some <span className="liweLead">lead text</span> text here</p>
			</div>
		</div>
	</div>
    </>
    );
}

export default TestPage;