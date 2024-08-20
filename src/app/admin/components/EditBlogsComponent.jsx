"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EditBlogsComponent = ({ blog , slugs, setBlog }) => {
 

    const handleInputChange = (e, index, type, accordionIndex = null) => {
        const { name, value } = e.target;

        if (type === 'sections') {
            const updatedSections = [...blog.sections];

            if (accordionIndex !== null) {
                updatedSections[index].sections[accordionIndex][name] = value;
            } else {
                updatedSections[index][name] = value;
            }

            setBlog({ ...blog, sections: updatedSections });
        } else {
            setBlog({ ...blog, [name]: value });
        }
    };

    const handleAddSection = () => {
        setBlog({
            ...blog,
            sections: [...(blog?.sections || []), { type: 'content', content: '', order: (blog?.sections?.length || 0) + 1 }],
        });
    };

    const handleRemoveSection = (index) => {
        const updatedSections = blog?.sections?.filter((_, i) => i !== index);
        setBlog({ ...blog, sections: updatedSections });
    };

    const handleAddAccordionSection = (index) => {
        const updatedSections = [...(blog?.sections || [])];
        updatedSections[index].sections = [
            ...(updatedSections[index]?.sections || []),
            { type: 'content', content: '', order: (updatedSections[index]?.sections?.length || 0) + 1 },
        ];
        setBlog({ ...blog, sections: updatedSections });
    };

    const handleRemoveAccordionSection = (index, accordionIndex) => {
        const updatedSections = [...(blog?.sections || [])];
        updatedSections[index].sections = updatedSections[index]?.sections?.filter((_, i) => i !== accordionIndex);
        setBlog({ ...blog, sections: updatedSections });
    };

    const moveSection = (index, direction) => {
        const updatedSections = [...(blog?.sections || [])];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;

        if (targetIndex < 0 || targetIndex >= updatedSections.length) return;

        const temp = updatedSections[targetIndex];
        updatedSections[targetIndex] = updatedSections[index];
        updatedSections[index] = temp;

        updatedSections[targetIndex].order = targetIndex + 1;
        updatedSections[index].order = index + 1;

        setBlog({ ...blog, sections: updatedSections });
    };

    if (!blog) {
        return <div>Loading...</div>; // Add a loading state or a spinner here
    }

    return (
        <form className="space-y-4 p-4 bg-white shadow-md rounded-lg">
            <div>
                <label className="block text-gray-700">Title</label>
                <input
                    type="text"
                    name="title"
                    value={blog?.title || ''}
                    onChange={(e) => handleInputChange(e)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div>
                <label className="block text-gray-700">Main Image URL</label>
                <input
                    type="text"
                    name="mainImage"
                    value={blog?.mainImage || ''}
                    onChange={(e) => handleInputChange(e)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="space-y-4">
                {blog?.sections?.map((section, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-md">
                        <div className="flex justify-between items-center mb-2">
                            <div className="text-lg font-medium">Section {index + 1}</div>
                            <div className="space-x-2">
                                <button
                                    type="button"
                                    onClick={() => moveSection(index, 'up')}
                                    className="bg-blue-500 text-white px-2 py-1 rounded-md"
                                >
                                    Up
                                </button>
                                <button
                                    type="button"
                                    onClick={() => moveSection(index, 'down')}
                                    className="bg-blue-500 text-white px-2 py-1 rounded-md"
                                >
                                    Down
                                </button>
                            </div>
                        </div>

                        <label className="block text-gray-700">Section Type</label>
                        <select
                            name="type"
                            value={section.type}
                            onChange={(e) => handleInputChange(e, index, 'sections')}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="content">Content</option>
                            <option value="image">Image</option>
                            <option value="button">Button</option>
                            <option value="accordion">Accordion</option>
                        </select>

                        {section.type === 'content' && (
                            <div className="mt-2">
                                <label className="block text-gray-700">Content</label>
                                <textarea
                                    name="content"
                                    value={section.content || ''}
                                    onChange={(e) => handleInputChange(e, index, 'sections')}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                ></textarea>
                            </div>
                        )}

                        {section.type === 'image' && (
                            <div className="mt-2">
                                <label className="block text-gray-700">Image URL</label>
                                <input
                                    type="text"
                                    name="content"
                                    value={section.content || ''}
                                    onChange={(e) => handleInputChange(e, index, 'sections')}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        )}

                        {section.type === 'button' && (
                            <div className="mt-2 space-y-2">
                                <div>
                                    <label className="block text-gray-700">Button Text</label>
                                    <input
                                        type="text"
                                        name="text"
                                        value={section.text || ''}
                                        onChange={(e) => handleInputChange(e, index, 'sections')}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Link</label>
                                    <input
                                        type="text"
                                        name="link"
                                        value={section.link || ''}
                                        onChange={(e) => handleInputChange(e, index, 'sections')}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        )}

                        {section.type === 'accordion' && (
                            <div className="mt-2">
                                {section.sections?.map((accSection, accIndex) => (
                                    <div key={accIndex} className="mb-4 border p-2 rounded">
                                        <label className="block text-gray-700">Accordion Section {accIndex + 1} Type</label>
                                        <select
                                            name="type"
                                            value={accSection.type}
                                            onChange={(e) => handleInputChange(e, index, 'sections', accIndex)}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                        >
                                            <option value="content">Content</option>
                                            <option value="image">Image</option>
                                        </select>

                                        {accSection.type === 'content' && (
                                            <div className="mt-2">
                                                <label className="block text-gray-700">Content</label>
                                                <textarea
                                                    name="content"
                                                    value={accSection.content || ''}
                                                    onChange={(e) => handleInputChange(e, index, 'sections', accIndex)}
                                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                                ></textarea>
                                            </div>
                                        )}

                                        {accSection.type === 'image' && (
                                            <div className="mt-2">
                                                <label className="block text-gray-700">Image URL</label>
                                                <input
                                                    type="text"
                                                    name="content"
                                                    value={accSection.content || ''}
                                                    onChange={(e) => handleInputChange(e, index, 'sections', accIndex)}
                                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                                />
                                            </div>
                                        )}

                                        <button
                                            type="button"
                                            onClick={() => handleRemoveAccordionSection(index, accIndex)}
                                            className="mt-4 bg-red-500 text-white p-2 rounded-md"
                                        >
                                            Remove Accordion Section
                                        </button>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => handleAddAccordionSection(index)}
                                    className="mt-4 bg-green-500 text-white p-2 rounded-md"
                                >
                                    Add Accordion Section
                                </button>
                            </div>
                        )}

                        <button
                            type="button"
                            onClick={() => handleRemoveSection(index)}
                            className="mt-4 bg-red-500 text-white p-2 rounded-md"
                        >
                            Remove Section
                        </button>
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={handleAddSection}
                className="mt-4 bg-blue-500 text-white p-2 rounded-md"
            >
                Add Section
            </button>
        </form>
    );
}

export default EditBlogsComponent;
