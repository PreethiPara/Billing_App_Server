import { Box } from "@mui/material";
import OverView from "./components/Overview/Overview";
import SalesGraph from "./components/SalesGraph/SalesGraph.d";
import Sidebar from "./components/Sidebar/Sidebar";
import './index.scss';
import PieChartRevenue from "./components/PieChartRevenue/PieChartRevenue.d";
import TopSellingProducts from "./components/TopSellingProducts/TopSellingProducts";
import RecentTransactions from "./components/RecentTransactions/RecentTransactions";

function Dashboard(){
    return(
        <div className="flex overall">
            <Sidebar/>
            <div className="flex-col right-side">
                <OverView/>
                <div className="flex">
                    {/* <SalesGraph/> */}
                    <PieChartRevenue/>
                </div>
                <div className="flex">
                    <TopSellingProducts/>
                    <RecentTransactions/>
                </div>
            </div>
        </div>

    )
}
export default Dashboard;