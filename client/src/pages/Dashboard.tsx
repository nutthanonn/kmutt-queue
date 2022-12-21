import React from "react";
import { useMicrosoftProfile } from "../hooks/useMicrosoftProfile";
import Layout from "../shared/Layout";
import Header from "../components/dashboard/Header";
import CreateButton from "../components/dashboard/CreateButton";
import QueueBlock from "../components/dashboard/QueueBlock";
import CountQueue from "../components/dashboard/CountQueue";

const Dashboard: React.FC = () => {
  const { profile } = useMicrosoftProfile();

  return (
    <div>
      <Layout>
        <Header profile={profile} />
        <hr />
        <div className="mt-10">
          <div className="flex items-center justify-between relative">
            <CountQueue currentQueue={10} myQueue={5} />
            <CreateButton />
          </div>
          <QueueBlock />
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
