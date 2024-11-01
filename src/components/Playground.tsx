import React, { useState } from 'react';

interface PlaygroundProps {
  onSubmitQuery: (query: string) => void;
  baseLlamaResponse: string;
  ragLlamaResponse: string;
  expertSystemResponse: string;
  isLoading: boolean;
}

export function Playground({ 
  onSubmitQuery, 
  baseLlamaResponse, 
  ragLlamaResponse, 
  expertSystemResponse,
  isLoading 
}: PlaygroundProps) {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      onSubmitQuery(userInput.trim());
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Medical Diagnosis Playground</h2>
      <div className="space-y-6">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Describe symptoms or ask medical questions..."
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !userInput.trim()}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Processing...' : 'Analyze'}
            </button>
          </div>
        </form>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-3">Base LLaMA Analysis</h3>
            <div className="min-h-32 bg-white p-3 rounded border border-gray-200">
              {isLoading ? (
                <div className="animate-pulse">Processing query...</div>
              ) : baseLlamaResponse || "Enter symptoms to see the analysis"}
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-3">LLaMA + RAG Analysis</h3>
            <div className="min-h-32 bg-white p-3 rounded border border-gray-200">
              {isLoading ? (
                <div className="animate-pulse">Processing query...</div>
              ) : ragLlamaResponse || "Enter symptoms to see the analysis"}
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-3">Expert System Analysis</h3>
            <div className="min-h-32 bg-white p-3 rounded border border-gray-200">
              {isLoading ? (
                <div className="animate-pulse">Processing query...</div>
              ) : expertSystemResponse || "Enter symptoms to see the analysis"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}