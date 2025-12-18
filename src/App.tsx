import { LeftPanel } from './components/LeftPanel/LeftPanel';
import { MiddlePanel } from './components/MiddlePanel/MiddlePanel';
import { FloatingChatBot } from './components/ChatBot/FloatingChatBot';

function App() {
  return (
    <div className="min-h-screen lg:h-screen w-screen flex flex-col lg:flex-row lg:overflow-hidden relative">
      <div className="w-full lg:w-[25%] shrink-0 lg:m-4 border-b lg:border lg:border-gray-100 lg:rounded-2xl bg-white lg:overflow-hidden">
        <LeftPanel />
      </div>

      <div className="flex-1 min-w-0 lg:overflow-hidden">
        <MiddlePanel />
      </div>

      <FloatingChatBot />
    </div>
  );
}

export default App;
