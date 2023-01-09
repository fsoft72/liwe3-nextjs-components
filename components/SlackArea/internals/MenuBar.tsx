import { useState } from 'react';
import ArrowUTurn from '../../../icons/ArrowUTurn';
import CodeBracket from '../../../icons/CodeBracket';
import CodeBracketSquare from '../../../icons/CodeBracketSquare';
import LinkIcon from '../../../icons/LinkIcon';
import ListOrdered from '../../../icons/ListOrdered';
import ListUnordered from '../../../icons/ListUnordered';
import ToggleButton from '../../ToggleButton';
import Toolbar, { Separator } from '../../Toolbar';

interface SlackAreaMenuBarProps {
	editor: any;
	editorState: Record<string, any>;
};

const SlackAreaMenuBar = ( { editor, editorState }: SlackAreaMenuBarProps ) => {
	return (
		<Toolbar sx={{ gap: '2px', padding: '8px' }}>
			<ToggleButton sx={{ width: '32px', height: '32px' }} toggled={editorState.bold} onClick={() => { editor.chain().focus().toggleBold().run(); }}><b>B</b></ToggleButton>
			<ToggleButton sx={{ width: '32px', height: '32px' }} toggled={editorState.italic} onClick={() => { editor.chain().focus().toggleItalic().run(); }}><i>I</i></ToggleButton>
			<ToggleButton sx={{ width: '32px', height: '32px' }} toggled={editorState.strike} onClick={() => { editor.chain().focus().toggleStrike().run(); }}><strike>S</strike></ToggleButton>
			<Separator />
			<ToggleButton sx={{ width: '32px', height: '32px' }} onClick={() => console.log( 'link' )} toggled={editorState.link}> <LinkIcon /> </ToggleButton>
			<Separator />
			<ToggleButton sx={{ width: '32px', height: '32px' }} onClick={() => console.log( 'ul' )} toggled={editorState.ulist}> <ListUnordered /></ToggleButton>
			<ToggleButton sx={{ width: '32px', height: '32px' }} onClick={() => console.log( 'ol' )} toggled={editorState.olist}><ListOrdered /></ToggleButton>
			<Separator />
			<ToggleButton sx={{ width: '32px', height: '32px' }} onClick={() => console.log( 'quote' )} toggled={editorState.quote}><ArrowUTurn /></ToggleButton>
			<Separator />
			<ToggleButton sx={{ width: '32px', height: '32px' }} onClick={() => console.log( 'code' )} toggled={editorState.code}><CodeBracket /></ToggleButton>
			<ToggleButton sx={{ width: '32px', height: '32px' }} onClick={() => console.log( 'codeblock' )} toggled={editorState.codeblock}><CodeBracketSquare /></ToggleButton>
			<Separator />
		</Toolbar>
	);
};

export default SlackAreaMenuBar;