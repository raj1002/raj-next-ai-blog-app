import { Editor } from '@tiptap/react';
import React from 'react'
import ListItem from '@tiptap/extension-list-item'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

type Props = {
    editor: Editor | null;
}

const EditorMenuBar = ({ editor }: Props) => {
    if (!editor) {
      return null
    }
  
    return (
      <div className='flex justify-between items-center'>
        <div className='flex justify-between items-center gap-4'>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active bg-wh-500 text-wh-50 rounded-md' : 'p-1'}
        >
          <b> Bold </b>
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active bg-wh-500 text-wh-50 rounded-md' : 'p-1'}
        >
          <i> Italic </i>
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active bg-wh-500 text-wh-50 rounded-md' : 'p-1'}
        >
          Paragraph
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active bg-wh-500 text-wh-50 rounded-md' : 'p-1'}
        >
          H<span className='text-xs'>1</span>
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active bg-wh-500 text-wh-50 rounded-md' : 'p-1'}
        >
          H<span className='text-xs'>2</span>
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active bg-wh-500 text-wh-50 rounded-md' : 'p-1'}
        >
         H<span className='text-xs'>3</span>
        </button>
        </div>
      </div>
    )
  }

export default EditorMenuBar;