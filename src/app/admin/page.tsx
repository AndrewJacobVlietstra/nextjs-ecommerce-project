import DashboardCard from "@/components/DashboardCard";
import { formatCurrency, formatNumber } from "@/lib/formatters";
import { getOrdersData, getProductData, getUserData } from "@/lib/utils";

export default async function AdminDashboard() {
  const [ordersData, userData, productData] = await Promise.all([
    getOrdersData(),
    getUserData(),
    getProductData()
  ])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard 
        title="Orders" 
        subtitle={`${formatNumber(ordersData.numberOfOrders)} Orders`}
        body={formatCurrency(ordersData.amount)} 
      />
      <DashboardCard 
        title="Customer" 
        subtitle={`${formatCurrency(userData.averageValuePerUser)} Average Value`}
        body={formatNumber(userData.userCount)} 
      />
      <DashboardCard 
        title="Active Products" 
        subtitle={`${formatNumber(productData.inactiveCount)} Inactive Products`}
        body={formatNumber(productData.activeCount)} 
      />
    </div>
  )
}