import { DemandSupplyCard } from './DemandSupplyCard';

export const DemandSupplyCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <DemandSupplyCard
        title="Outstanding Demand"
        bgColor="bg-purple-50"
        iconBgColor="bg-purple-100"
      />
      <DemandSupplyCard
        title="Unallocated Supply"
        bgColor="bg-teal-50"
        iconBgColor="bg-teal-100"
      />
      <DemandSupplyCard
        title="Total Supply"
        bgColor="bg-stone-100"
        iconBgColor="bg-stone-200"
      />
    </div>
  );
};

