import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
    id: string;
    title: string;
    content?: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
    defaultOpen?: string[];
}

export const Accordion = ({ items, allowMultiple = false, defaultOpen = [] }: AccordionProps) => {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen));

    const toggleItem = (id: string) => {
        setOpenItems((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                if (!allowMultiple) {
                    newSet.clear();
                }
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <div className="space-y-2">
            {items.map((item) => {
                const isOpen = openItems.has(item.id);
                return (
                    <div key={item.id} className="rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full px-0 py-3 flex items-center justify-between text-left transition-colors bg-white"
                        >
                            <span className="text-sm font-semibold text-gray-900">{item.title}</span>
                            <ChevronDown
                                className={`w-5 h-5 text-gray-400 transition-transform duration-200 shrink-0 ${isOpen ? 'transform rotate-180' : ''
                                    }`}
                            />
                        </button>
                        {isOpen && item.content && (
                            <div className="pt-2">
                                {item.content}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

