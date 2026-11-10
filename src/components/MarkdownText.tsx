import React from 'react';

interface MarkdownTextProps {
  content: string;
  className?: string;
}

const INLINE_PATTERN = /(\*\*[^*\n]+\*\*|__[^_\n]+__|\*[^*\n]+\*|_[^_\n]+_|`[^`\n]+`|\[[^\]]+\]\((?:https?:\/\/|mailto:)[^)\s]+\))/g;

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const parts = text.split(INLINE_PATTERN).filter((part) => part !== '');

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;

    if (
      (part.startsWith('**') && part.endsWith('**')) ||
      (part.startsWith('__') && part.endsWith('__'))
    ) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }

    if (
      (part.startsWith('*') && part.endsWith('*')) ||
      (part.startsWith('_') && part.endsWith('_'))
    ) {
      return <em key={key}>{part.slice(1, -1)}</em>;
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={key}
          className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[0.9em] font-mono"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(((?:https?:\/\/|mailto:)[^)\s]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={key}
          href={linkMatch[2]}
          target={linkMatch[2].startsWith('http') ? '_blank' : undefined}
          rel={linkMatch[2].startsWith('http') ? 'noopener noreferrer' : undefined}
          className="font-semibold text-emerald-600 underline decoration-emerald-500/40 underline-offset-2 hover:text-emerald-500 dark:text-emerald-400"
        >
          {linkMatch[1]}
        </a>
      );
    }

    return <React.Fragment key={key}>{part}</React.Fragment>;
  });
}

/**
 * Renders a safe, lightweight subset of Markdown used by the BioChordata
 * answers (headings, emphasis, links, lists and horizontal rules).
 *
 * It intentionally builds React nodes instead of using dangerouslySetInnerHTML,
 * so AI output can never inject HTML or scripts into the page.
 */
export const MarkdownText: React.FC<MarkdownTextProps> = ({ content, className = '' }) => {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const blocks: React.ReactNode[] = [];
  let paragraph: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let blockIndex = 0;

  const flushParagraph = () => {
    if (paragraph.length === 0) return;

    blocks.push(
      <p key={`p-${blockIndex++}`} className="leading-relaxed">
        {paragraph.map((line, index) => (
          <React.Fragment key={`line-${index}`}>
            {index > 0 && <br />}
            {renderInline(line, `p-${blockIndex}-${index}`)}
          </React.Fragment>
        ))}
      </p>
    );
    paragraph = [];
  };

  const flushList = () => {
    if (!list || list.items.length === 0) return;

    const items = list.items.map((item, index) => (
      <li key={`li-${blockIndex}-${index}`}>{renderInline(item, `li-${blockIndex}-${index}`)}</li>
    ));

    if (list.ordered) {
      blocks.push(
        <ol key={`ol-${blockIndex++}`} className="list-decimal pl-5 space-y-1">
          {items}
        </ol>
      );
    } else {
      blocks.push(
        <ul key={`ul-${blockIndex++}`} className="list-disc pl-5 space-y-1">
          {items}
        </ul>
      );
    }

    list = null;
  };

  const flushAll = () => {
    flushParagraph();
    flushList();
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line === '') {
      flushAll();
      continue;
    }

    if (/^-{3,}$/.test(line) || /^\*{3,}$/.test(line)) {
      flushAll();
      blocks.push(
        <hr key={`hr-${blockIndex++}`} className="border-slate-200 dark:border-slate-700/70" />
      );
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushAll();
      blocks.push(
        <h4
          key={`h-${blockIndex++}`}
          className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white pt-1"
        >
          {renderInline(heading[2], `h-${blockIndex}`)}
        </h4>
      );
      continue;
    }

    const bullet = line.match(/^[-*•]\s+(.+)$/);
    if (bullet) {
      flushParagraph();
      if (!list || list.ordered) {
        flushList();
        list = { ordered: false, items: [] };
      }
      list.items.push(bullet[1]);
      continue;
    }

    const numbered = line.match(/^\d+[.)]\s+(.+)$/);
    if (numbered) {
      flushParagraph();
      if (!list || !list.ordered) {
        flushList();
        list = { ordered: true, items: [] };
      }
      list.items.push(numbered[1]);
      continue;
    }

    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      flushAll();
      blocks.push(
        <blockquote
          key={`q-${blockIndex++}`}
          className="border-l-4 border-emerald-500/50 pl-3 italic text-slate-600 dark:text-slate-300"
        >
          {renderInline(quote[1], `q-${blockIndex}`)}
        </blockquote>
      );
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushAll();

  return <div className={`space-y-2 ${className}`.trim()}>{blocks}</div>;
};
