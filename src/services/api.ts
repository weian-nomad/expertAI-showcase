interface ApiResponse {
  response: string;
  error?: string;
}

const API_BASE_URL = 'http://localhost:3000/api'; // Update with your actual API base URL

export async function queryBaseLlama(message: string): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/base-llama`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    return await response.json();
  } catch (error) {
    return { response: '', error: 'Failed to connect to Base LLaMA service' };
  }
}

export async function queryRagLlama(message: string): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/rag-llama`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    return await response.json();
  } catch (error) {
    return { response: '', error: 'Failed to connect to RAG LLaMA service' };
  }
}

export async function queryExpertSystem(message: string): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/expert-system`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    return await response.json();
  } catch (error) {
    return { response: '', error: 'Failed to connect to Expert System service' };
  }
}