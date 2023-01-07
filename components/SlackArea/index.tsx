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


const SlackArea = () => {
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
		content: '<p>Hello World! 🌎️</p>',
	} );

	return (
		<EditorContent className={classes.slackEditor} editor={editor} />
	);
};

export default SlackArea;