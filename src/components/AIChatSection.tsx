import React, { useState, useRef, useEffect, useCallback } from 'react';
import { askBioChordata } from '../services/aiService';
import type { ChatResponse } from '../services/aiService';
import type { ChatMessage } from '../types';
import { MarkdownText } from './MarkdownText';
import { useDialog } from '../hooks/useDialog';
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

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content: `Olá! Sou o **BioChordata**, seu assistente inteligente especializado na Biologia, Anatomia Comparada e Evolução do filo **Chordata**.

Como posso ajudar você hoje? Você pode clicar em uma das perguntas sugeridas abaixo ou digitar sua dúvida sobre anfioxos, tunicados, peixes, anfíbios, répteis, aves, mamíferos ou animais peçonhentos!`,
  timestamp: 'Agora'
};

const suggestedQuestions = [
  'Quais são as cinco características fundamentais dos cordados?',
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

const getCurrentTime = () =>
  new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

export const AIChatSection: React.FC<AIChatSectionProps> = ({
  externalPrompt,
  onClearExternalPrompt
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKeyModalOpen, setApiKeyModalOpen] = useState(false);
  const [tempApiKey, setTempApiKey] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false);

  useDialog(apiKeyModalOpen, () => setApiKeyModalOpen(false));

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = useCallback(async (textToSend?: string) => {
    const query = (textToSend ?? inputMessage).trim();
    if (!query || loadingRef.current) return;

    loadingRef.current = true;
    setIsLoading(true);
    if (textToSend === undefined) setInputMessage('');

    const userMsg: ChatMessage = {
      id: `${Date.now()}-user`,
      role: 'user',
      content: query,
      timestamp: getCurrentTime()
    };

    setMessages((prev) => [...prev, userMsg]);

    const historyPayload = messages.slice(-6).map((m) => ({
      role: m.role,
      content: m.content
    }));

    try {
      const response: ChatResponse = await askBioChordata(query, historyPayload);

      const assistantMsg: ChatMessage = {
        id: `${Date.now()}-assistant`,
        role: 'assistant',
        content: response.reply,
        timestamp: getCurrentTime()
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erro desconhecido';
      const errorMsg: ChatMessage = {
        id: `${Date.now()}-error`,
        role: 'assistant',
        content: `Ocorreu um erro ao consultar o servidor: ${message}. Por favor, tente novamente.`,
        timestamp: getCurrentTime()
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      loadingRef.current = false;
      setIsLoading(false);
    }
  }, [inputMessage, messages]);

  // Handles prompts sent from other sections (Hero, FAQ, etc.).
  useEffect(() => {
    const prompt = externalPrompt?.trim();
    if (!prompt || isLoading) return;

    // oxlint-disable-next-line react/set-state-in-effect -- a prompt fired by another section must trigger the async send flow.
    void handleSendMessage(prompt);
    onClearExternalPrompt?.();
  }, [externalPrompt, isLoading, handleSendMessage, onClearExternalPrompt]);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 2000);
    } catch {
      setCopiedId(null);
    }
  };

  const openApiKeyModal = () => {
    setTempApiKey(localStorage.getItem('biochordata_gemini_key') ?? '');
    setApiKeyModalOpen(true);
  };

  const handleSaveApiKey = () => {
    const trimmedKey = tempApiKey.trim();

    if (trimmedKey) {
      localStorage.setItem('biochordata_gemini_key', trimmedKey);
    } else {
      localStorage.removeItem('biochordata_gemini_key');
    }

    setApiKeyModalOpen(false);
  };

  const resetConversation = () => {
    if (isLoading) return;
    setMessages([WELCOME_MESSAGE]);
    setInputMessage('');
  };

  return (
    <section id="ia-assistente" className="py-20 relative bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-950/80 dark:to-teal-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
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
                  <span className={`w-2 h-2 rounded-full ${isLoading ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`}></span>
                </h3>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {isLoading ? 'Consultando as evidências científicas...' : 'Especialista em Zoologia do Filo Chordata'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={openApiKeyModal}
                title="Configurar chave de API Gemini própria (opcional)"
                className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition flex items-center gap-1.5 text-xs font-semibold"
              >
                <Key className="w-4 h-4 text-emerald-500" />
                <span className="hidden sm:inline">Chave Gemini</span>
              </button>

              <button
                onClick={resetConversation}
                disabled={isLoading}
                title="Reiniciar histórico de conversa"
                aria-label="Reiniciar histórico de conversa"
                className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Thread */}
          <div
            className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-950/40"
            aria-live="polite"
            aria-label="Histórico de conversa com o BioChordata"
          >
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
                  {msg.role === 'assistant' ? (
                    <MarkdownText content={msg.content} />
                  ) : (
                    <p className="whitespace-pre-line">{msg.content}</p>
                  )}

                  {/* Copy Button */}
                  <div className="mt-2 flex items-center justify-between text-[10px] opacity-70 border-t border-slate-200/40 dark:border-slate-700/40 pt-1">
                    <span>{msg.timestamp}</span>
                    <button
                      onClick={() => handleCopy(msg.id, msg.content)}
                      aria-label="Copiar mensagem"
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
            {suggestedQuestions.map((q) => (
              <button
                key={q}
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
                void handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                id="biochordata-chat-input"
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Pergunte sobre cordados, filogenia, peçonhas, notocorda..."
                disabled={isLoading}
                aria-label="Digite sua pergunta para o BioChordata"
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
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
            onClick={() => setApiKeyModalOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="api-key-dialog-title"
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                <Key className="w-5 h-5 text-emerald-600" />
                <h3 id="api-key-dialog-title" className="font-bold text-lg text-slate-900 dark:text-white">
                  Chave de API Gemini (Opcional)
                </h3>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Por padrão, o BioChordata já utiliza um motor zoológico completo no backend.
                Se você quiser conectar diretamente sua própria chave da API Google Gemini para conversas abertas, cole-a abaixo.
                A chave fica salva apenas neste navegador.
              </p>

              <div>
                <input
                  type="password"
                  placeholder="AIzaSy..."
                  value={tempApiKey}
                  onChange={(e) => setTempApiKey(e.target.value)}
                  aria-label="Chave de API Gemini"
                  autoComplete="off"
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
