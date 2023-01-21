import React from 'react';
import MarkdownIt from 'markdown-it';

function NotePreview(props) {
    const MarkdownIT = new MarkdownIt("commonmark", {
        breaks: true,
    });
    const result = MarkdownIT.render(props.content);
    return (
        //map result collection to html 
        <div className="previewContainer">
            <div dangerouslySetInnerHTML={{ __html: result }} />
        </div>
    );
}

export default NotePreview;