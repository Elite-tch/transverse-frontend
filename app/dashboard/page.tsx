import React from "react";
import Nav from "../components/Nav";
import ExchangeRate from "../components/ExchangeRate";
import GoalsAndBeneficiaries from "../components/Goals";
import { RecentActivities } from "../components/RecentActivities";
import TransactionChart from "../components/Statistics";
import PureChartComponent from "../components/RateChart";

function Dashboard() {
  return (
    <div className="w-full">
      <Nav />
      <div className="px-[30px] pt-12 pb-">
        <section className="flex gap-9 w-full">
          <ExchangeRate />
          <div className="flex flex-col gap-9 w-full">
            <GoalsAndBeneficiaries />
            <TransactionChart />
          </div>
        </section>
      </div>
      <div className="flex px-[30px]  gap-9 py-9 w-full">
        <PureChartComponent />
        <RecentActivities />
      </div>
    </div>
  );
}

export default Dashboard;
