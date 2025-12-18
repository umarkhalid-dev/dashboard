import { ComparisonControls } from './ComparisonControls';
import { DemandSupplyCards } from './DemandSupplyCards';
import { DemandChart } from './DemandChart';
import { DistributionChart } from './DistributionChart';

export const MiddlePanel = () => {
  return (
    <div className="lg:h-full flex flex-col bg-white px-3 sm:px-4 py-4 sm:py-6 lg:overflow-hidden">
      <ComparisonControls />

      <div className="mt-4 sm:mt-6">
        <DemandSupplyCards />
      </div>

      <div className="my-3 sm:my-2 border-t border-gray-200"></div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:flex-1 lg:min-h-0 pb-4 sm:pb-0">
        <div className="w-full lg:flex-2 flex flex-col lg:min-h-0 min-h-[500px]">
          <DemandChart />
        </div>

        <div className="border-t lg:border-t-0 lg:border-l border-gray-200 lg:hidden my-2"></div>
        <div className="hidden lg:block border-l border-gray-200"></div>

        <div className="w-full lg:flex-1 flex flex-col lg:min-h-0 min-h-[400px]">
          <DistributionChart />
        </div>
      </div>
    </div>
  );
};

