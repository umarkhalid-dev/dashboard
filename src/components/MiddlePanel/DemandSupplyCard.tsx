import { FileText, Info, TrendingUp, TrendingDown } from 'lucide-react';

interface CardProps {
    title: string;
    bgColor: string;
    iconBgColor: string;
}

export const DemandSupplyCard = ({ title, bgColor, iconBgColor }: CardProps) => (
    <div className="bg-white overflow-hidden">
        <div className={`${bgColor} px-4 py-2.5 flex items-center justify-between rounded-xl`}>
            <div className="flex items-center gap-2">
                <div className={`${iconBgColor} p-1.5 rounded-md`}>
                    <FileText className="w-3.5 h-3.5 text-gray-700" />
                </div>
                <h3 className="text-xs font-semibold text-gray-900">{title}</h3>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <Info className="w-3.5 h-3.5" />
            </button>
        </div>

        <div className="px-4 py-3">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h4 className="text-xs font-semibold text-gray-900 mb-2">Houses</h4>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] text-gray-600 w-14">Base Line</span>
                            <span className="text-xs font-semibold text-gray-900">120K</span>
                            <div className="flex items-center gap-0.5 text-green-600">
                                <TrendingUp className="w-2.5 h-2.5" />
                                <span className="text-[9px] font-medium">00%</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] text-gray-600 w-14">Scenario</span>
                            <span className="text-xs font-semibold text-gray-900">1.2M</span>
                            <div className="flex items-center gap-0.5 text-red-500">
                                <TrendingDown className="w-2.5 h-2.5" />
                                <span className="text-[9px] font-medium">00%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-200 before:-ml-2">
                    <div>
                        <h4 className="text-xs font-semibold text-gray-900 mb-2">Land</h4>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] text-gray-600 w-14">Base Line</span>
                                <span className="text-xs font-semibold text-gray-900">120K</span>
                                <div className="flex items-center gap-0.5 text-green-600">
                                    <TrendingUp className="w-2.5 h-2.5" />
                                    <span className="text-[9px] font-medium">00%</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] text-gray-600 w-14">Scenario</span>
                                <span className="text-xs font-semibold text-gray-900">1.2M</span>
                                <div className="flex items-center gap-0.5 text-red-500">
                                    <TrendingDown className="w-2.5 h-2.5" />
                                    <span className="text-[9px] font-medium">00%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

