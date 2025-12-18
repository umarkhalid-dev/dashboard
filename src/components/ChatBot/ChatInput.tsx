import { useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface ChatInputProps {
    onSend: (message: string) => void;
}

export const ChatInput = ({ onSend }: ChatInputProps) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onSend(input);
            setInput('');
        }
    };

    return (
        <div className="px-4 py-4 border-t border-gray-200">
            <form onSubmit={handleSubmit} className="relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me Anything"
                    className="w-full pl-5 pr-14 py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c4a962] focus:border-transparent text-sm text-gray-700"
                />
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#c4a962] text-white rounded-lg hover:bg-[#b39856] transition-colors"
                >
                    <ArrowUp className="w-4 h-4" />
                </button>
            </form>
        </div>
    );
};

