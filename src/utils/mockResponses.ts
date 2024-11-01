import { symptoms } from './symptoms';

function findSymptoms(query: string): string[] {
  return symptoms.filter(symptom => 
    query.toLowerCase().includes(symptom.toLowerCase())
  );
}

export function generateBaseLlamaResponse(query: string): string {
  const foundSymptoms = findSymptoms(query);
  
  if (foundSymptoms.length === 0) {
    return "I understand you're asking about a medical condition. Could you please provide more specific symptoms?";
  }

  return `Based on the symptoms you described (${foundSymptoms.join(", ")}), I can provide general information. However, please note that this is not a substitute for professional medical advice.`;
}

export function generateRagResponse(query: string): string {
  const foundSymptoms = findSymptoms(query);
  
  if (foundSymptoms.length === 0) {
    return "To provide accurate information from our medical knowledge base, please describe your symptoms in detail.";
  }

  return `Analysis based on latest medical literature:\n\nSymptoms identified: ${foundSymptoms.join(", ")}\n\nRelevant medical guidelines suggest consulting a healthcare provider for proper evaluation. Recent studies indicate these symptoms may be associated with multiple conditions.`;
}

export function generateExpertSystemResponse(query: string): string {
  const foundSymptoms = findSymptoms(query);
  
  if (foundSymptoms.length === 0) {
    return "Expert system requires specific symptoms for analysis. Please provide detailed symptoms.";
  }

  return `Rule-based analysis:\n\nInput symptoms: ${foundSymptoms.join(", ")}\n\nDiagnostic protocol activated:\n- Severity assessment needed\n- Additional symptoms check required\n- Recommend immediate medical consultation if symptoms persist`;
}