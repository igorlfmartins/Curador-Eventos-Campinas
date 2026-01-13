import { B2BEvent } from '../types';

const API_URL = '/api';

export const fetchEventsFromSource = async (
  sourceName: string, 
  url: string, 
  mode: 'scrape' | 'search' = 'scrape'
): Promise<B2BEvent[]> => {
  // Timeout de segurança no Frontend (40s) para garantir que a fila ande
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 40000);

  try {
    const response = await fetch(`${API_URL}/search-source`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sourceName, url, mode }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data.events || [];
  } catch (error) {
    clearTimeout(timeoutId);
    console.error(`Erro ao buscar de ${sourceName}:`, error);
    return []; // Retorna vazio em caso de erro para não travar a UI
  }
};