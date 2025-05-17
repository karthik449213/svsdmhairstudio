import { cn } from "@/lib/utils";

interface Price {
  service: string;
  price: string;
}

interface PriceTableProps {
  title: string;
  icon: React.ReactNode;
  prices: Price[];
}

const PriceTable = ({ title, icon, prices }: PriceTableProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-playfair font-bold text-primary mb-6 flex items-center">
        {icon}
        <span className="ml-3">{title}</span>
      </h3>
      <table className="w-full">
        <tbody>
          {prices.map((item, index) => (
            <tr 
              key={index} 
              className={cn(
                "hover:bg-gray-50 transition-colors duration-300",
                index < prices.length - 1 && "border-b border-gray-200"
              )}
            >
              <td className="py-4">{item.service}</td>
              <td className="py-4 text-right font-semibold text-accent">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
