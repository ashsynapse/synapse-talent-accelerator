
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0% 0% -80% 0%',
        threshold: 0.1,
      }
    );

    const headings = document.querySelectorAll('h2[id], h3[id], h4[id]');
    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white rounded-lg border border-synapse-lighter shadow-sm p-6 sticky top-24">
      <h3 className="text-lg font-semibold text-synapse-dark mb-4 flex items-center">
        <ChevronRight size={20} className="mr-2 text-synapse-primary" />
        Table of Contents
      </h3>
      <nav className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToHeading(item.id)}
            className={`block w-full text-left py-2 px-3 rounded transition-colors text-sm ${
              activeId === item.id
                ? 'bg-synapse-lighter text-synapse-primary font-medium'
                : 'text-synapse-gray hover:text-synapse-primary hover:bg-synapse-lighter/50'
            } ${item.level === 3 ? 'ml-4' : ''} ${item.level === 4 ? 'ml-8' : ''}`}
          >
            {item.title}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContents;
