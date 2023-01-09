import { useEditor, EditorContent } from '@tiptap/react';
import Mention from '@tiptap/extension-mention';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { lowlight } from 'lowlight';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
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
import { useState } from 'react';
import SlackAreaMenuBar from './internals/MenuBar';

const SlackArea = () => {
	const [ editorState, setEditorState ] = useState<Record<string, any>>( {} );


	const editor = useEditor( {
		extensions: [
			Document,
			Paragraph,
			Text,
			Bold,
			Italic,
			Strike,
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

		onTransaction ( { editor, transaction } ) {
			let res: Record<string, any> = {};

			editor.isActive( 'bold' ) && ( res.bold = true );
			editor.isActive( 'italic' ) && ( res.italic = true );
			editor.isActive( 'strike' ) && ( res.strike = true );

			console.log( "==== EDITOR: ", res );

			setEditorState( res );
		},

	} );

	return (
		<>
			<SlackAreaMenuBar editor={editor} editorState={editorState} />
			<EditorContent className={classes.slackEditor} editor={editor} />

			<i className="fa-solid fa-check"></i>
		</>
	);
};

export default SlackArea;