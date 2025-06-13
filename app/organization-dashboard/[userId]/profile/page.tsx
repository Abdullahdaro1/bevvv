'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { UserIcon, Briefcase, Globe, User, Target } from "lucide-react"
import { toast } from "sonner";
import GeneralInformation from "./generalInformation";

export default function Page() {
  const { data: session } = useSession();

  console.log(session);

  const [activeSection, setActiveSection] = useState("general")
  const [isSaving, setIsSaving] = useState(false);

  const sections = [
    { id: 'general', label: 'General Information', icon: User },
    { id: 'mission', label: 'Mission Statement', icon: Globe },
    { id: 'fields', label: 'Fields of Work', icon: Briefcase },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
  }

  const handleSave = async () => {
    setIsSaving(true)
  }

  const handleFormDataChange = (data: any) => {
    console.log(data)
  }

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
              <GeneralInformation onFormDataChange={handleFormDataChange} />
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

          {/* Sidebar Navigation */}
          <div className="w-64 sticky top-[40px]">
            <div className="sticky top-[40px]">
              <Card className="py-4">
                <nav className="space-y-1 px-4">
                  {sections.map((section) => {
                    const Icon = section.icon
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                          activeSection === section.id
                            ? "bg-primary-50 text-primary border-l-4 border-primary"
                            : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{section.label}</span>
                      </button>
                    )
                  })}
                </nav>
              </Card>
              <button 
                className={`w-full mt-6 bg-primary text-white py-2 rounded ${
                  isSaving ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handleSave}
                disabled={isSaving}
              >
                {isSaving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
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