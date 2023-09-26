import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_DIY } from '../utils/mutations';

function Create() {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    materialsUsed: '',
    instructions: '',
    file: null, //add a file property to hold the uploaded file
    filePreview: null, // Add a filePreview property to hold the preview image
  });

  const [addDIY, { error }] = useMutation(ADD_DIY);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setFormState({
        ...formState,
        file: file,
        filePreview: reader.result, // Set the file preview image
      });
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { title, description, materialsUsed, instructions, file } = formState;

    try {
      const { data } = await addDIY({
        variables: {
          title,
          description,
          materialsUsed,
          instructions,
          file: file ? file : null, 
        },
      });
  
      console.log('New DIY created:', data.addDIY);

      setSuccessMessage('DIY successfully created!');

    } catch (err) {
      console.error(err);
    }

    setFormState({
      title: '',
      description: '',
      materialsUsed: '',
      instructions: '',
      file: null, //reset the file property
      filePreview: null, // Reset the file preview
    });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Create a New DIY</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formState.title}
            onChange={handleInputChange}
            required
            className="text-black w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            value={formState.description}
            onChange={handleInputChange}
            required
            className="text-black w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="materialsUsed" className="block text-gray-700 font-bold mb-2">
            Materials Used (comma-separated):
          </label>
          <input
            type="text"
            name="materialsUsed"
            id="materialsUsed"
            value={formState.materialsUsed}
            onChange={handleInputChange}
            required
            className="text-black w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructions" className="block text-gray-700 font-bold mb-2">
            Instructions:
          </label>
          <textarea
            name="instructions"
            id="instructions"
            value={formState.instructions}
            onChange={handleInputChange}
            required
            className="text-black w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
            Images (comma-separated URLs):
          </label>
          <input
            type="file"
            accept="image/jpeg, image/png"
            name="file"
            id="file"
            onChange={handleFileUpload}
            required
            className="text-black w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          />
            {formState.filePreview && (
            <img src={formState.filePreview} alt="File Preview" className="mt-2 max-w-xs" />
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        >
          Create DIY
        </button>
      </form>
      {error && <p className="text-red-600 mt-2">Error: {error.message}</p>}
      {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
    </div>
  );
}

export default Create;
