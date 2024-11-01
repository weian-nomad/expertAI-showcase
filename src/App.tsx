import React, { useState } from 'react';
import { Header } from './components/Header';
import { ComparisonView } from './components/ComparisonView';
import { Playground } from './components/Playground';
import { queryBaseLlama, queryRagLlama, queryExpertSystem } from './services/api';

function App() {
  const [activeTab, setActiveTab] = useState('compare');
  const [isLoading, setIsLoading] = useState(false);
  const [baseLlamaResponse, setBaseLlamaResponse] = useState('');
  const [ragLlamaResponse, setRagLlamaResponse] = useState('');
  const [expertSystemResponse, setExpertSystemResponse] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleQuerySubmit = async (query: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const [baseResponse, ragResponse, expertResponse] = await Promise.all([
        queryBaseLlama(query),
        queryRagLlama(query),
        queryExpertSystem(query)
      ]);

      setBaseLlamaResponse(baseResponse.error || baseResponse.response);
      setRagLlamaResponse(ragResponse.error || ragResponse.response);
      setExpertSystemResponse(expertResponse.error || expertResponse.response);
    } catch (error) {
      setError('Failed to process query. Please try again.');
      console.error('Error processing query:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        {activeTab === 'compare' ? (
          <ComparisonView />
        ) : (
          <Playground
            onSubmitQuery={handleQuerySubmit}
            baseLlamaResponse={baseLlamaResponse}
            ragLlamaResponse={ragLlamaResponse}
            expertSystemResponse={expertSystemResponse}
            isLoading={isLoading}
          />
        )}
      </main>
    </div>
  );
}

export default App;