import React, { useRef, useEffect, useState } from "react";

const TextEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const [customColor, setCustomColor] = useState("#000000");

  // Function to wrap selected text with a tag and apply Tailwind class
  const applyStyle = (tag, className) => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();

    if (selectedText) {
      const wrapper = document.createElement(tag); // Create the desired tag
      wrapper.className = className; // Apply Tailwind class
      wrapper.textContent = selectedText; // Set the selected text as content
      range.deleteContents(); // Remove the selected text
      range.insertNode(wrapper); // Insert the wrapped text
      selection.removeAllRanges(); // Clear the selection
    }
  };

  // Apply inline styles like bold, italic, underline
  const applyInlineStyle = (style) => {
    document.execCommand(style, false, null);
  };

  // Apply text color based on className (Tailwind CSS)
  const applyTextColor = (className) => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();

    if (selectedText) {
      const wrapper = document.createElement("span");
      wrapper.className = className; // Apply the Tailwind text color class
      wrapper.textContent = selectedText;
      range.deleteContents();
      range.insertNode(wrapper);
      selection.removeAllRanges();
    }
  };

  // Apply custom color
  const applyCustomColor = () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();

    if (selectedText) {
      const wrapper = document.createElement("span");
      wrapper.style.color = customColor; // Apply custom color via inline style
      wrapper.textContent = selectedText;
      range.deleteContents();
      range.insertNode(wrapper);
      selection.removeAllRanges();
    }
  };

  // Handle text alignment
  const applyAlignment = (alignment) => {
    document.execCommand("justify" + alignment);
  };

  // Handle input (edit) events
  const handleInput = () => {
    const content = editorRef.current.innerHTML;
    onChange(content); // Trigger parent state update
  };

  // Ensure that on every render, the editor contains the updated value
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Style Controls */}
      <div className="mb-4">
        {/* Heading and Text Style Buttons */}
        <button
          onClick={() =>
            applyStyle("h1", "text-4xl sm:text-3xl md:text-4xl lg:text-5xl")
          }
          className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
        >
          H1
        </button>
        <button
          onClick={() =>
            applyStyle("h2", "text-3xl sm:text-2xl md:text-3xl lg:text-4xl")
          }
          className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
        >
          H2
        </button>
        <button
          onClick={() =>
            applyStyle("h3", "text-2xl sm:text-xl md:text-2xl lg:text-3xl")
          }
          className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
        >
          H3
        </button>
        <button
          onClick={() =>
            applyStyle("h4", "text-xl sm:text-lg md:text-xl lg:text-2xl")
          }
          className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
        >
          H4
        </button>
        <button
          onClick={() => applyStyle("p", "text-base sm:text-sm md:text-base")}
          className="bg-gray-500 text-white px-4 py-2 mr-2 rounded"
        >
          Normal Text
        </button>
        <button
          onClick={() => applyStyle("p", "text-sm sm:text-xs md:text-sm")}
          className="bg-gray-500 text-white px-4 py-2 mr-2 rounded"
        >
          Small Text
        </button>

        {/* Inline Style Buttons */}
        <button
          onClick={() => applyInlineStyle("bold")}
          className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
        >
          Bold
        </button>
        <button
          onClick={() => applyInlineStyle("italic")}
          className="bg-yellow-500 text-white px-4 py-2 mr-2 rounded"
        >
          Italic
        </button>
        <button
          onClick={() => applyInlineStyle("underline")}
          className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
        >
          Underline
        </button>

        {/* Alignment Buttons */}
        <button
          onClick={() => applyAlignment("Left")}
          className="bg-purple-500 text-white px-4 py-2 mr-2 rounded"
        >
          Left
        </button>
        <button
          onClick={() => applyAlignment("Center")}
          className="bg-purple-500 text-white px-4 py-2 mr-2 rounded"
        >
          Center
        </button>
        <button
          onClick={() => applyAlignment("Right")}
          className="bg-purple-500 text-white px-4 py-2 mr-2 rounded"
        >
          Right
        </button>

        {/* Text Color Buttons */}
        <button
          onClick={() => applyTextColor("text-red-500")}
          className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
        >
          Red
        </button>
        <button
          onClick={() => applyTextColor("text-green-500")}
          className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
        >
          Green
        </button>

        {/* Custom Color Picker */}
        <input
          type="color"
          value={customColor}
          onChange={(e) => setCustomColor(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded mr-2"
        />
        <button
          onClick={applyCustomColor}
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          Apply Custom Color
        </button>
      </div>

      {/* Editable Text Area */}
      <div
        ref={editorRef}
        contentEditable
        className="p-4 border border-gray-300 min-h-[300px] bg-white"
        onInput={handleInput}
      ></div>
    </div>
  );
};

export default TextEditor;
