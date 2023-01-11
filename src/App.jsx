import { getInvestments } from './api/api';
import { formatMoney, formatMonth, formatPercentage } from './helpers/helpers';

export default function App() {
  const backendInvestments = getInvestments();
  function getValueColor(value) {
    return value > 0
      ? 'text-green-700 font-semibold'
      : value < 0
      ? 'text-red-700 font-semibold'
      : 'text-black font-semibold';
  }
  return (
    <div>
      <header>
        <div className="bg-gray-300 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            React Investments
          </h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <ul>
            {backendInvestments.map(investment => {
              const { id, description, finalValue, finalPercentage, reports } =
                investment;
              const color = getValueColor(finalValue);

              return (
                <li
                  className="shadow-md rounded-md m-2 mb-6 p-2 hover:bg-gray-100"
                  key={id}
                >
                  <h3 className="text-center font-semibold text-lg">
                    {description}
                  </h3>
                  <h4 className="text-center font-semibold text-md mb-2">
                    Total Profits:{' '}
                    <span className={color}>{formatMoney(finalValue)}</span> (
                    <span className={color}>
                      {formatPercentage(finalPercentage)}
                    </span>
                    )
                  </h4>
                  <ul>
                    {reports.map(report => {
                      const { id, month, year, value, percentage } = report;
                      const color = getValueColor(percentage);
                      return (
                        <li
                          className="flex justify-between gap-2 hover:bg-gray-200 border-b-2 p-1"
                          key={id}
                        >
                          <span className="font-mono">
                            {formatMonth(month)}/{year}
                          </span>
                          <span className={`flex-grow ${color}`}>
                            {formatMoney(value)}
                          </span>
                          <span className={color}>
                            {formatPercentage(percentage)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
