import Dashboard from "../layouts/home/Dashboard";
import { GetServerSidePropsContext } from "next";

export default function Home() {
  return (
    <main className="main_container">
      <Dashboard />
    </main>
  );
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { res } = context;
//   res.writeHead(302, { Location: "/login" });
//   res.end();
//   return { props: {} };
// }
