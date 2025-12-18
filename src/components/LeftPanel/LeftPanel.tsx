import { useState } from 'react';
import { ScenarioTabs } from './ScenarioTabs';
import { ScenarioNameInput } from './ScenarioNameInput';
import { DemographicRates } from './DemographicRates';
import { MunicipalitySelector } from './MunicipalitySelector';
import { RegionSelector } from './RegionSelector';
import { Accordion } from '../ui/Accordion';
import { ActionButtons } from './ActionButtons';
import { MultiSelectGroup } from '../ui/MultiSelectGroup';

export const LeftPanel = () => {
  const [activeTab, setActiveTab] = useState<'core' | 'loan'>('core');
  const [scenarioName, setScenarioName] = useState('');
  const [selectedDemographicRate, setSelectedDemographicRate] = useState<string | null>('Mortality Rate');
  const [selectedMunicipalities, setSelectedMunicipalities] = useState<string[]>(['Abu Dhabi']);
  const [selectedRegions, setSelectedRegions] = useState<string[]>(['Abu Dhabi South Mainland']);

  const [selectedPolicies, setSelectedPolicies] = useState<string[]>(['Standard Policy']);
  const [selectedApprovalRates, setSelectedApprovalRates] = useState<string[]>(['High Approval']);
  const [selectedAdjustments, setSelectedAdjustments] = useState<string[]>(['No Adjustment']);
  const [selectedTypologies, setSelectedTypologies] = useState<string[]>(['Type A']);
  const [selectedAllocations, setSelectedAllocations] = useState<string[]>(['Equal Share']);

  const demographicRatesContent = (
    <div className="space-y-4">
      <div className="bg-gray-50 rounded-lg p-4">
        <DemographicRates
          selected={selectedDemographicRate}
          onSelect={setSelectedDemographicRate}
        />
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <MunicipalitySelector
          selected={selectedMunicipalities}
          onChange={setSelectedMunicipalities}
        />
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <RegionSelector
          selected={selectedRegions}
          onChange={setSelectedRegions}
        />
      </div>
    </div>
  );

  const policyContent = (
    <div className="space-y-4">
      <MultiSelectGroup
        title="Policy Type"
        options={['Standard Policy', 'Premium Policy', 'Basic Policy', 'Custom Policy']}
        selected={selectedPolicies}
        onChange={setSelectedPolicies}
      />
      <MultiSelectGroup
        title="Coverage Level"
        options={['Full Coverage', 'Partial Coverage', 'Minimal Coverage']}
        selected={[]}
        onChange={() => { }}
      />
    </div>
  );

  const approvalContent = (
    <div className="space-y-4">
      <MultiSelectGroup
        title="Approval Rate"
        options={['High Approval', 'Medium Approval', 'Low Approval', 'Conditional']}
        selected={selectedApprovalRates}
        onChange={setSelectedApprovalRates}
      />
      <MultiSelectGroup
        title="Application Rate"
        options={['Fast Track', 'Standard', 'Extended Review']}
        selected={[]}
        onChange={() => { }}
      />
    </div>
  );

  const adjustmentContent = (
    <div className="space-y-4">
      <MultiSelectGroup
        title="Adjustment Type"
        options={['No Adjustment', 'Seasonal', 'Regional', 'Demographic Based']}
        selected={selectedAdjustments}
        onChange={setSelectedAdjustments}
      />
      <MultiSelectGroup
        title="Rate Modifier"
        options={['Increase 5%', 'Increase 10%', 'Decrease 5%', 'Decrease 10%']}
        selected={[]}
        onChange={() => { }}
      />
    </div>
  );

  const typologyContent = (
    <div className="space-y-4">
      <MultiSelectGroup
        title="Housing Type"
        options={['Type A', 'Type B', 'Type C', 'Type D', 'Mixed Use']}
        selected={selectedTypologies}
        onChange={setSelectedTypologies}
      />
      <MultiSelectGroup
        title="Unit Size"
        options={['Small', 'Medium', 'Large', 'Extra Large']}
        selected={[]}
        onChange={() => { }}
      />
    </div>
  );

  const allocationContent = (
    <div className="space-y-4">
      <MultiSelectGroup
        title="Allocation Strategy"
        options={['Equal Share', 'Priority Based', 'Need Based', 'Merit Based']}
        selected={selectedAllocations}
        onChange={setSelectedAllocations}
      />
      <MultiSelectGroup
        title="Distribution Method"
        options={['Lottery', 'First Come First Serve', 'Weighted']}
        selected={[]}
        onChange={() => { }}
      />
    </div>
  );

  const accordionItems = [
    {
      id: 'demographic',
      title: 'Demographic Rates',
      content: demographicRatesContent
    },
    {
      id: 'policy',
      title: 'Policy Configuration',
      content: policyContent
    },
    {
      id: 'approval',
      title: 'Application & Approval Rates',
      content: approvalContent
    },
    {
      id: 'adjustment',
      title: 'Application Rate Additional Adjustment',
      content: adjustmentContent
    },
    {
      id: 'typology',
      title: 'Typology',
      content: typologyContent
    },
    {
      id: 'allocation',
      title: 'Allocation Shares',
      content: allocationContent
    },
  ];

  return (
    <div className="flex flex-col bg-white lg:h-full lg:rounded-2xl">
      <div className="flex-1 lg:overflow-y-auto p-4 lg:p-6 space-y-4 lg:space-y-6">
        <ScenarioTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <ScenarioNameInput
          value={scenarioName}
          onChange={setScenarioName}
        />

        <Accordion items={accordionItems} allowMultiple={true} defaultOpen={['demographic']} />
      </div>

      <div className="p-4 bg-white lg:rounded-b-2xl">
        <ActionButtons />
      </div>
    </div>
  );
};

