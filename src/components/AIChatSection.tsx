import React, { useState, useRef, useEffect } from 'react';
import { askBioChordata } from '../services/aiService';
import type { ChatResponse } from '../services/aiService';
import type { ChatMessage } from '../types';
import { 
  Bot, 
  Send, 
  Sparkles, 
  RefreshCw, 
  Key, 
  User, 
  Copy,
  Check
} from 'lucide-react';

interface AIChatSectionProps {
  externalPrompt?: string;
  onClearExternalPrompt?: () => void;
}

export const AIChatSection: React.FC<AIChatSectionProps> = ({ 
  externalPrompt, 
  onClearExternalPrompt 
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Olá! Sou o **BioChordata**, seu assistente inteligente especializado na Biologia, Anatomia Comparada e Evolução do filo **Chordata**.

Como posso ajudar você hoje? Você pode clicar em uma das perguntas sugeridas abaixo ou digitar sua dúvida sobre anfioxos, tunicados, peixes, anfíbios, répteis, aves, mamíferos ou animais peçonhentos!`,
      timestamp: 'Agora'
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKeyModalOpen, setApiKeyModalOpen] = useState(false);
  const [tempApiKey, setTempApiKey] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    'Quais são as quatro características fundamentais dos cordados?',
    'Qual é a diferença entre cordados e vertebrados?',
    'Todo cordado possui coluna vertebral?',
    'Qual é a diferença entre anfíbios e répteis?',
    'As aves são consideradas répteis na classificação evolutiva?',
    'O que é uma notocorda?',
    'Quais cordados vivem no Brasil?',
    'Quais espécies de cordados estão ameaçadas de extinção?',
    'Como os cordados evoluíram?',
    'Quais cordados podem representar perigo para os seres humanos?'
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsLoading(true);

    const historyPayload = messages.slice(-6).map(m => ({
      role: m.role,
      content: m.content
    }));

    try {
      const response: ChatResponse = await askBioChordata(query, historyPayload);
      
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err: any) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Ocorreu um erro ao consultar o servidor: ${err.message}. Por favor, tente novamente.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle prompt passed from other sections (like FAQ or Hero)
  useEffect(() => {
    if (externalPrompt && externalPrompt.trim()) {
      handleSendMessage(externalPrompt);
      if (onClearExternalPrompt) onClearExternalPrompt();
    }
  }, [externalPrompt]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSaveApiKey = () => {
    if (tempApiKey.trim()) {
      localStorage.setItem('biochordata_gemini_key', tempApiKey.trim());
    } else {
      localStorage.removeItem('biochordata_gemini_key');
    }
    setApiKeyModalOpen(false);
  };

  return (
    <section id="ia-assistente" className="py-20 relative bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-950/80 dark:to-teal-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-spin" />
            <span>Inteligência Artificial Especializada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            BioChordata — Assistente dos Cordados
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Tire qualquer dúvida sobre zoologia, características anatômicas, taxonomia, biologia comparada e ecologia 
            com nosso assistente treinado nas diretrizes e fontes da biologia moderna.
          </p>
        </div>

        {/* Chat Card Container */}
        <div className="glass-panel rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl overflow-hidden flex flex-col h-[650px] relative">
          
          {/* Chat Top Bar */}
          <div className="px-6 py-4 bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/20">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <span>BioChordata AI</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </h3>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  Especialista em Zoologia do Filo Chordata
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setApiKeyModalOpen(true)}
                title="Configurar chave de API Gemini própria (opcional)"
                className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition flex items-center gap-1.5 text-xs font-semibold"
              >
                <Key className="w-4 h-4 text-emerald-500" />
                <span className="hidden sm:inline">Chave Gemini</span>
              </button>
              
              <button
                onClick={() => setMessages([messages[0]])}
                title="Reiniciar histórico de conversa"
                className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Thread */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-950/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-600 flex items-center justify-center text-white shrink-0 mt-1 shadow-sm">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-sm relative group ${
                    msg.role === 'user'
                      ? 'bg-emerald-600 text-white rounded-tr-none'
                      : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-tl-none'
                  }`}
                >
                  {/* Message Formatted Content */}
                  <div className="space-y-2 whitespace-pre-line">
                    {msg.content}
                  </div>

                  {/* Copy Button */}
                  <div className="mt-2 flex items-center justify-between text-[10px] opacity-70 border-t border-slate-200/40 dark:border-slate-700/40 pt-1">
                    <span>{msg.timestamp}</span>
                    <button
                      onClick={() => handleCopy(msg.id, msg.content)}
                      className="hover:opacity-100 flex items-center gap-1 ml-3"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-3 justify-start animate-pulse">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-tl-none text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  BioChordata está consultando as evidências científicas...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions Horizontal Chips */}
          <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 overflow-x-auto whitespace-nowrap space-x-2">
            <span className="text-[10px] uppercase font-bold text-slate-400 align-middle mr-1">
              Perguntas Sugeridas:
            </span>
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                disabled={isLoading}
                className="inline-block px-3 py-1.5 rounded-full text-xs bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box Bar */}
          <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Pergunte sobre cordados, filogenia, peçonhas, notocorda..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="p-3 sm:px-5 sm:py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs sm:text-sm shadow-md transition disabled:opacity-50 flex items-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Enviar</span>
              </button>
            </form>
          </div>

        </div>

        {/* API Key Modal */}
        {apiKeyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
              <div className="flex items-center gap-2">
                <Key className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  Chave de API Gemini (Opcional)
                </h3>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Por padrão, o BioChordata já utiliza um motor zoológico completo no backend. 
                Se você quiser conectar diretamente sua própria chave da API Google Gemini para conversas abertas, cole-a abaixo:
              </p>

              <div>
                <input
                  type="password"
                  placeholder="AIzaSy..."
                  value={tempApiKey}
                  onChange={(e) => setTempApiKey(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setApiKeyModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveApiKey}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 text-white shadow-md hover:bg-emerald-500"
                >
                  Salvar Chave
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
