import React, { useState } from 'react';
import openai from 'openai';

const GenerateImage: React.FC = () => {
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    openai.apiKey = '<your-api-key-here>';

    try {
      const response = await openai.Completion.create(
        {
          engine: 'dall-e',
          prompt: description,
          max_tokens: 1024,
          temperature: 0.5,
        },
        {
          model: 'image-alpha-001',
        }
      );

      setImageUrl(response.data.data.url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a description"
          value={description}
          onChange={handleChange}
        />
        <button type="submit">Generate Image</button>
      </form>
      {imageUrl && <img src={imageUrl} alt="AI-generated image" />}
    </div>
  );
};

export default GenerateImage;