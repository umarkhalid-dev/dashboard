import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ChatMessage, type Message } from './ChatMessage';
import { ChatInput } from './ChatInput';

export const FloatingChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            type: 'assistant',
            content: "Hello, I'm your ADHA Roshd! 👋 I'm your AI-Powered personal sport assistant. How can I help you?",
            timestamp: new Date(),
        },
    ]);

    const handleSendMessage = (content: string) => {
        if (!content.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            type: 'user',
            content,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);

        setTimeout(() => {
            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                type: 'assistant',
                content: "Would you like me to:\n1. Apply this change across all regions, or\n2. Focus on specific municipalities?",
                timestamp: new Date(),
                actionButtons: [
                    { label: 'Save For Later', action: 'save' },
                    { label: 'Simulate Now', action: 'simulate' },
                ],
            };
            setMessages((prev) => [...prev, aiResponse]);
        }, 1000);
    };

    const handleActionClick = (action: string) => {
        if (action === 'save') {
            const confirmationMessage: Message = {
                id: Date.now().toString(),
                type: 'assistant',
                content: 'Scenario saved successfully!',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, confirmationMessage]);
        } else if (action === 'simulate') {
            const confirmationMessage: Message = {
                id: Date.now().toString(),
                type: 'assistant',
                content: 'Running simulation...',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, confirmationMessage]);
        }
    };

    return (
        <>
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 bg-[#6b7c6e] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#5a6b5d] transition-all duration-300 flex items-center justify-center z-50 group"
                >
                    <MessageCircle className="w-5 h-5" />
                    <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
                        Chat with ADHA Roshd
                    </span>
                </button>
            )}

            {isOpen && (
                <div className="fixed inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-6 sm:right-6 w-auto sm:w-[400px] h-[85vh] sm:h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#6b7c6e] flex items-center justify-center">
                                <span className="text-white text-sm font-bold">AR</span>
                            </div>
                            <h2 className="text-lg font-semibold text-gray-900">ADHA Roshd</h2>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message) => (
                            <ChatMessage key={message.id} message={message} onActionClick={handleActionClick} />
                        ))}
                    </div>

                    <ChatInput onSend={handleSendMessage} />
                </div>
            )}
        </>
    );
};

