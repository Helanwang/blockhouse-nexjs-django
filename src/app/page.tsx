import BarChart from '@/components/BarCharts';
import LineChart from '@/components/LineChart';
import PieChart from '@/components/PieChart';
import CandlestickChart from '@/components/CandlestickChart';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <header className="bg-white shadow-md p-4 mb-4">
                <h1 className="text-2xl font-bold text-gray-800 text-center">BlockHouse Dashboard</h1>
            </header>
            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <section className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Bar Chart</h2>
                    <div className="w-full max-w-full h-64 flex items-center justify-center">
                        <BarChart />
                    </div>
                </section>
                <section className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Line Chart</h2>
                    <div className="w-full max-w-full h-64 flex items-center justify-center">
                        <LineChart />
                    </div>
                </section>
                <section className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Pie Chart</h2>
                    <div className="w-full max-w-full h-64 flex items-center justify-center">
                        <PieChart />
                    </div>
                </section>
                <section className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Candlestick Chart</h2>
                    <div className="w-full max-w-full h-64 flex items-center justify-center">
                        <CandlestickChart />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;