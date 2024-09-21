import Sidebar from "@/components/Sidebar/Sidebar";
import Dashboard from "@/components/Dashboard/Dashboard";

export default function Home() {
  return (
    <main className="overflow-x-clip grid gap-4 p-4 grid-cols-[220px,_1fr] max-md:grid-cols-1">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
