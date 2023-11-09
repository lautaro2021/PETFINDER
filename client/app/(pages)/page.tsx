import Dashboard from "../layouts/home/Dashboard";
import { GetServerSidePropsContext } from "next";

export default function Home() {
  return (
    <main className="main_container">
      <Dashboard />
    </main>
  );
}
