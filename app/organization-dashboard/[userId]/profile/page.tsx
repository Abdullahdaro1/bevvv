'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Page() {
  const { data: session } = useSession();

  console.log(session);

  return (
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">General Information about your organization</h2>
          </div>
          <div className=" flex flex-row gap-4">
            <div className="flex items-center justify-between space-y-2">
              <Avatar className="h-24 w-24">
                <AvatarImage src={session?.user?.image || ""} alt={session?.user?.name || ""} />
              </Avatar>
            </div>
            <div className="flex flex-col items-start justify-around ml-4 space-y-1">
              <h2 className="text-xl font-bold tracking-tight">{session?.user?.name}</h2>
              <p className="text-sm text-muted-foreground">{session?.user?.message} see more</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 w-full justify-between">
            <div className="flex flex-col gap-4 w-full">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle className="text-primary text-xl">General Information</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Left block */}
                    <div className="space-y-4">
                      {/* Row */}
                      <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                        <div className="font-semibold">Organization ID</div>
                        <div>A0001</div>
                      </div>
                      <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                        <div className="font-semibold">Website</div>
                        <div>www.Bev.net</div>
                      </div>
                      <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                        <div className="font-semibold">Phone</div>
                        <div>(719) 860-5684</div>
                      </div>
                      <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                        <div className="font-semibold">Email</div>
                        <div>elizabethlopez95@hotmail.com</div>
                      </div>
                      <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                        <div className="font-semibold">City</div>
                        <div>Aleppo</div>
                      </div>
                      <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                        <div className="font-semibold">Country</div>
                        <div>Syria</div>
                      </div>
                    </div>

                    {/* Right block */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                        <div className="font-semibold">Establish date</div>
                        <div>May 15, 1995</div>
                      </div>
                      <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                        <div className="font-semibold">Total volunteers</div>
                        <div>0</div>
                      </div>
                      <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                        <div className="font-semibold">Responsible person</div>
                        <div>Single</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary text-xl">Mission Statement</CardTitle>
                  <CardTitle className="text-tertiary hover:underline hover:cursor-pointer float-right">Edit</CardTitle>
                </CardHeader>
                <CardContent>
                  <textarea
                    className="w-full border rounded p-2"
                    placeholder="Write the mission statement of your organization"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary text-xl">Fields of Work</CardTitle>
                  <CardTitle className="text-tertiary hover:underline hover:cursor-pointer float-right">Edit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-2">
                    <input className="flex-1 border rounded p-2" placeholder="Add your fields of work" />
                    <button className="bg-primary text-white px-4 py-2 rounded">Add</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Blender', 'Browser', 'modelling'].map((field) => (
                      <span key={field} className="bg-gray-200 px-3 py-1 rounded-full flex items-center">
                        {field}
                        <button className="ml-2 text-red-500 hover:text-red-700">&times;</button>
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="w-56 py-4">
              <ul className="space-y-4 sticky top-0">
                <li className="font-semibold border-l-4 border-primary pl-2">General Information</li>
                <li className="hover:text-primary cursor-pointer pl-4">Mission Statement</li>
                <li className="hover:text-primary cursor-pointer pl-4 ">Fields of Work</li>
              </ul>
            </Card>
          </div>
          <div className="">
            <button className="w-full mt-6 bg-primary text-white py-2 rounded" disabled>
                  Save
            </button>
          </div>
        </div>
      </div>
  )
}