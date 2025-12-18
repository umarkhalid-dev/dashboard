interface ScenarioNameInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const ScenarioNameInput = ({ value, onChange }: ScenarioNameInputProps) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type Your Scenario Name"
        className="w-full px-1 py-2.5 border-b border-gray-300 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 bg-transparent"
      />
    </div>
  );
};

