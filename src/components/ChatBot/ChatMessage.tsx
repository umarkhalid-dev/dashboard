export type Message = {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  actionButtons?: Array<{ label: string; action: string }>;
};

interface ChatMessageProps {
  message: Message;
  onActionClick?: (action: string) => void;
}

export const ChatMessage = ({ message, onActionClick }: ChatMessageProps) => {
  const isUser = message.type === 'user';

  return (
    <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} gap-2`}>
      {!isUser && (
        <div className="flex items-start gap-2 w-full">
          <div className="w-8 h-8 rounded-full bg-[#6b7c6e] flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-bold">AR</span>
          </div>
          <div className="flex-1">
            <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3">
              <p className="text-sm text-gray-900 whitespace-pre-wrap">{message.content}</p>
            </div>
            {message.actionButtons && message.actionButtons.length > 0 && (
              <div className="flex gap-2 flex-wrap mt-2">
                {message.actionButtons.map((button, index) => (
                  <button
                    key={index}
                    onClick={() => onActionClick?.(button.action)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${index === message.actionButtons!.length - 1
                      ? 'bg-[#6b7c6e] text-white hover:bg-[#5a6b5d]'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                      }`}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {isUser && (
        <div className="bg-gray-200 rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%]">
          <p className="text-sm text-gray-900 whitespace-pre-wrap">{message.content}</p>
        </div>
      )}
    </div>
  );
};

