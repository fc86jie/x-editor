// import Bold from '@tiptap/extension-bold'; // 加粗
// import Italic from '@tiptap/extension-italic'; // 斜体
// import Strike from '@tiptap/extension-strike';
import Highlight from '@tiptap/extension-highlight'; // 背景
import Underline from '@tiptap/extension-underline'; // 下划线
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react';
// BubbleMenu包含Bold、Italic、Strike
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import { ITextEditorProps } from '../../types/TextEditor';
import './index.scss';

const TextEditor: React.FC<ITextEditorProps> = ({ content, enableMenu = true }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      // Bold,
      // Italic,
      // Strike,
      Underline,
      Highlight.configure({
        multicolor: true,
      }),
    ],
    content,
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      {enableMenu && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}>
            bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}>
            italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active' : ''}>
            strike
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'is-active' : ''}>
            underline
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={editor.isActive('highlight') ? 'is-active' : ''}>
            highlight
          </button>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
    </>
  );
};

export default TextEditor;
