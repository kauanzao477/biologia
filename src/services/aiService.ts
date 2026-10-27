export interface ChatResponse {
  reply: string;
  source: 'gemini-api' | 'biochordata-core-engine';
  status: 'success' | 'error';
  error?: string;
}

export async function askBioChordata(
  message: string, 
  history: Array<{ role: string; content: string }> = []
): Promise<ChatResponse> {
  const customApiKey = localStorage.getItem('biochordata_gemini_key') || '';

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message,
        history,
        apiKey: customApiKey
      })
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || `Erro de conexão com o servidor (Status ${res.status})`);
    }

    const data: ChatResponse = await res.json();
    return data;
  } catch (err: any) {
    console.error('Falha ao comunicar com BioChordata backend:', err);
    return {
      reply: `Desculpe, ocorreu uma instabilidade ao conectar com o servidor do assistente. \n\n**Dica:** Você pode conferir os tópicos na seção de **Perguntas Frequentes (FAQ)** ou testar sua dúvida novamente em instantes.`,
      source: 'biochordata-core-engine',
      status: 'error',
      error: err.message
    };
  }
}
