import { useEditor, EditorContent } from '@tiptap/react';
import Mention from '@tiptap/extension-mention';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { lowlight } from 'lowlight';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import py from 'highlight.js/lib/languages/python';


// import StarterKit from '@tiptap/starter-kit';
import suggestion from './suggestions';

lowlight.registerLanguage( 'html', html );
lowlight.registerLanguage( 'css', css );
lowlight.registerLanguage( 'js', js );
lowlight.registerLanguage( 'ts', ts );
lowlight.registerLanguage( 'py', py );

import classes from './index.module.scss';
import Toolbar, { Separator } from '../Toolbar';
import ToggleButton from '../ToggleButton';
import { useState } from 'react';
import LinkIcon from '../../icons/LinkIcon';
import ListUnordered from '../../icons/ListUnordered';
import ListOrdered from '../../icons/ListOrdered';
import ArrowUTurn from '../../icons/ArrowUTurn';
import CodeBracket from '../../icons/CodeBracket';
import CodeBracketSquare from '../../icons/CodeBracketSquare';

const SlackArea = () => {
	const [ bold, setBold ] = useState( false );
	const [ italic, setItalic ] = useState( false );
	const [ strike, setStrike ] = useState( false );

	const toggleBold = () => {
		setBold( !bold );
	};

	const toggleItalic = () => {
		setItalic( !italic );
	};

	const toggleStrike = () => {
		setStrike( !strike );
	};

	const editor = useEditor( {
		extensions: [
			Document,
			Paragraph,
			Text,
			// StarterKit,
			Mention.configure( {
				HTMLAttributes: {
					class: 'mention',
				},
				suggestion,
			} ),
			CodeBlockLowlight.configure( {
				lowlight,
			} ),
		],
		content: '<p>Hello World!</p>',
	} );

	return (
		<>
			<Toolbar sx={{ gap: '2px', padding: '8px' }}>
				<ToggleButton sx={{ width: '32px', height: '32px' }} onClick={toggleBold} toggled={bold}><b>B</b></ToggleButton>
				<ToggleButton sx={{ width: '32px', height: '32px' }} onClick={toggleItalic} toggled={italic}><i>I</i></ToggleButton>
				<ToggleButton sx={{ width: '32px', height: '32px' }} onClick={toggleStrike} toggled={strike}><strike>S</strike></ToggleButton>
				<Separator />
				<ToggleButton sx={{ width: '32px', height: '32px' }} onClick={toggleStrike} toggled={strike}> <LinkIcon /> </ToggleButton>
				<Separator />
				<ToggleButton sx={{ width: '32px', height: '32px' }} onClick={toggleStrike} toggled={strike}> <ListUnordered /></ToggleButton>
				<ToggleButton sx={{ width: '32px', height: '32px' }} onClick={toggleStrike} toggled={strike}><ListOrdered /></ToggleButton>
				<Separator />
				<ToggleButton sx={{ width: '32px', height: '32px' }} onClick={toggleStrike} toggled={strike}><ArrowUTurn /></ToggleButton>
				<Separator />
				<ToggleButton sx={{ width: '32px', height: '32px' }} onClick={toggleStrike} toggled={strike}><CodeBracket /></ToggleButton>
				<ToggleButton sx={{ width: '32px', height: '32px' }} onClick={toggleStrike} toggled={strike}><CodeBracketSquare /></ToggleButton>
				<Separator />
			</Toolbar>
			<EditorContent className={classes.slackEditor} editor={editor} />

			<i className="fa-solid fa-check"></i>
		</>
	);
};

export default SlackArea;