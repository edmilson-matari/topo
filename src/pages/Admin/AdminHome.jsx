import React from "react";
import AdminNavbar from "../../components/Admin/Navbar";
import DashboardStats from "../../components/Admin/DashboardStats";
import RecentClientsTable from "../../components/Admin/RecentClientTable";
import RecentSuppliers from "../../components/Admin/RecentSuppliers";

export default function AdminHome() {
  return (
    <>
      <div className="p-2 sm:p-8 space-y-8">
        <DashboardStats />
        <RecentClientsTable />
        <RecentSuppliers />
      </div>
    </>
  );
}
