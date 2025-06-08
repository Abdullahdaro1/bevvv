import { Metadata } from "next";

import { RecentSales } from "@/app/dashboard/[teamId]/(overview)/recent-sales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LeaveCard from "@/components/organization/LeaveCard";

export const metadata: Metadata = {
  title: "Dashboard for organization",
  description: "Dashboard for organization",
};

export default function DashboardPage() {
  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
          </div>
          <div className="">
            <LeaveCard />
          </div>
          <div className="">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle className="text-primary">Your application has been accepted</CardTitle>
                <CardDescription className="text-sm">
                  Tell us about yourself - candidates are more likely to trust job openings with completed company pages
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="">
          <Card className="col-span-3">
              <CardHeader>
                <CardTitle className="text-primary">Track your progress</CardTitle>
                <CardDescription>
                  You made 2 forms for this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
