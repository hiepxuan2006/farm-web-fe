import React, { Fragment } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function TextEditor(props) {
    const { label, state, onChange } = props
    const handleEditorChange = (state) => {
        onChange(state);
    };

    return (
        <Fragment >
            <label style={{ fontSize: '18px', display: 'block', margin: '20px 0' }}>{label}</label>
            <Editor
                editorState={state}
                wrapperClassName='demo-wrapper'
                editorClassName='demo-editor'
                onEditorStateChange={handleEditorChange}
                editorStyle={{ minHeight: '300px', fontSize: '16px', borderRadius: '7px', border: '1px solid #e2e3e4', overflowWrap: 'normal' }}
            />
        </Fragment>
    );
}

export default TextEditor;
