import React from 'react';
import { MessageSquare, Database, ArrowRight, Sparkles, Search, BookOpen, Stethoscope, ClipboardList } from 'lucide-react';

export function ComparisonView() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Base LLaMA */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center space-x-3 mb-6">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Base LLaMA</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              Traditional LLaMA model using pre-trained knowledge for general medical queries.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <div className="mt-1 p-1 bg-blue-100 rounded">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700">General medical knowledge</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="mt-1 p-1 bg-blue-100 rounded">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700">Training data cutoff limitation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* LLaMA + RAG */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-indigo-200">
          <div className="flex items-center space-x-3 mb-6">
            <Database className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">LLaMA + RAG</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              Enhanced LLaMA with medical knowledge base integration and real-time updates.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <div className="mt-1 p-1 bg-indigo-100 rounded">
                  <Search className="w-4 h-4 text-indigo-600" />
                </div>
                <span className="text-gray-700">Latest medical research access</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="mt-1 p-1 bg-indigo-100 rounded">
                  <Stethoscope className="w-4 h-4 text-indigo-600" />
                </div>
                <span className="text-gray-700">Clinical guidelines integration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical Expert System */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-emerald-200">
          <div className="flex items-center space-x-3 mb-6">
            <ClipboardList className="w-6 h-6 text-emerald-600" />
            <h2 className="text-xl font-semibold">Medical Expert System</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              Traditional rule-based system with explicit medical decision trees and protocols.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <div className="mt-1 p-1 bg-emerald-100 rounded">
                  <ClipboardList className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-gray-700">Strict diagnostic protocols</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="mt-1 p-1 bg-emerald-100 rounded">
                  <Stethoscope className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-gray-700">Evidence-based rules</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Comparison Diagram */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
        <h3 className="text-lg font-semibold mb-4">Processing Flow Comparison</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Base LLaMA Process</h4>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-full p-3 bg-blue-50 rounded-lg text-center">
                  Medical Query
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="w-full p-3 bg-blue-50 rounded-lg text-center">
                  General Processing
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="w-full p-3 bg-blue-50 rounded-lg text-center">
                  Medical Response
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">LLaMA + RAG Process</h4>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-full p-3 bg-indigo-50 rounded-lg text-center">
                  Medical Query
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="w-full p-3 bg-indigo-50 rounded-lg text-center">
                  Knowledge Retrieval
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="w-full p-3 bg-indigo-50 rounded-lg text-center">
                  Enhanced Diagnosis
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Expert System Process</h4>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-full p-3 bg-emerald-50 rounded-lg text-center">
                  Symptoms Input
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="w-full p-3 bg-emerald-50 rounded-lg text-center">
                  Rule Evaluation
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="w-full p-3 bg-emerald-50 rounded-lg text-center">
                  Clinical Decision
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Differences Table */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Key Characteristics Comparison</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base LLaMA</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LLaMA + RAG</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expert System</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Knowledge Source</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pre-trained Data</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dynamic Medical DB</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Expert-defined Rules</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Reasoning Method</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pattern Recognition</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Hybrid Analysis</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Logic Trees</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Adaptability</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Limited</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">High</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Manual Updates</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Uncertainty Handling</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Probabilistic</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Evidence-based</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Deterministic</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}