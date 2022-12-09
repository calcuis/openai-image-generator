import React from 'react';
import GenerateImage from './GenerateImage';
import './styles/tailwind.css';

const App: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">AI Image Generator</h1>
      <GenerateImage />
    </div>
  );
};

export default App;