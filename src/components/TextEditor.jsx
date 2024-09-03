import React, { useRef, useEffect } from 'react';

const TextEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    // Set the initial content of the editor based on the value prop
    if (editorRef.current) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const handleInput = () => {
    // Emit the updated content whenever the user changes the content
    if (onChange) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const toggleStyle = (styleClass) => {
    if (window.getSelection) {
      const sel = window.getSelection();
      if (sel.rangeCount) {
        const range = sel.getRangeAt(0);
        const selectedText = range.toString();

        // Check if the selected text already has the style class
        let parentElement = range.commonAncestorContainer.parentElement;

        if (parentElement.classList && parentElement.classList.contains(styleClass)) {
          // If the class is present, remove it
          parentElement.classList.remove(styleClass);
        } else {
          // If the class is not present, apply it
          const span = document.createElement('span');
          span.className = styleClass;
          span.textContent = selectedText;

          // Surround the selected text with the new span element
          range.deleteContents();
          range.insertNode(span);
        }

        // Deselect text after applying or removing the style
        sel.removeAllRanges();

        // Trigger onChange with updated content
        handleInput();
      }
    }
  };

  const clearFormatting = () => {
    if (window.getSelection) {
      const sel = window.getSelection();
      if (sel.rangeCount) {
        const range = sel.getRangeAt(0);
        const selectedText = range.toString();

        // Remove all spans within the selection
        const span = document.createElement('span');
        span.textContent = selectedText;

        range.deleteContents();
        range.insertNode(span);

        sel.removeAllRanges();

        // Trigger onChange with updated content
        handleInput();
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="mb-4">
        <button onClick={() => toggleStyle('text-5xl')} className="mr-2 p-1 bg-gray-200 rounded">H1</button>
        <button onClick={() => toggleStyle('text-4xl')} className="mr-2 p-1 bg-gray-200 rounded">H2</button>
        <button onClick={() => toggleStyle('text-3xl')} className="mr-2 p-1 bg-gray-200 rounded">H3</button>
        <button onClick={() => toggleStyle('text-2xl')} className="mr-2 p-1 bg-gray-200 rounded">H4</button>
        <button onClick={() => toggleStyle('font-bold')} className="mr-2 p-1 bg-gray-200 rounded">Bold</button>
        <button onClick={() => toggleStyle('font-semibold')} className="mr-2 p-1 bg-gray-200 rounded">Semibold</button>
        <button onClick={clearFormatting} className="mr-2 p-1 bg-gray-200 rounded">Clear Formatting</button>
      </div>
      <div
        ref={editorRef}
        contentEditable={true}
        className="border p-4 rounded shadow-md min-h-[200px] text-xl"
        style={{ outline: 'none' }}
        onInput={handleInput}
      >
        {/* Initial content will be set through the useEffect */}
      </div>
    </div>
  );
};

export default TextEditor;
