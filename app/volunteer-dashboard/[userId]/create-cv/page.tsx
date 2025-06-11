'use client'
import { RecentSales } from "@/app/dashboard/[teamId]/(overview)/recent-sales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { EducationSection } from "./Education";
import { SkillsSection } from "./Skills";
import { LanguagesSection } from "./Languages";
import { WorkExeriencesSection } from "./WorkExeriences";
import GeneralInformation from "./generalInformation";
import { GraduationCap, Briefcase, Wrench, Globe, User, Target } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner";


export default function DashboardPage() {
  const { data: session } = useSession();

  console.log(session);

  const [activeSection, setActiveSection] = useState("general")
  const [generalFormData, setGeneralFormData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const sections = [
    { id: "general", label: "General Information", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "work", label: "Work Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Wrench },
    { id: "languages", label: "Languages", icon: Globe },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSave = async () => {
    if (!generalFormData) {
      toast.error("Please fill in the general information first");
      return;
    }

    setIsSaving(true);
    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(generalFormData),
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }

      toast.success('Information saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
      toast.error('Failed to save information');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto p-6 flex-1">
        <div className="flex gap-6">
          <div className="flex-1 space-y-6">
            <div className="flex-col">
              <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight">Create CV</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Total Views</h3>
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-xs text-muted-foreground">
                          +20.1% from last month
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Total Views</h3>
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-xs text-muted-foreground">
                          +20.1% from last month
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Total Views</h3>
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-xs text-muted-foreground">
                          +20.1% from last month
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Total Views</h3>
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-xs text-muted-foreground">
                          +20.1% from last month
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div id="general" className="scroll-mt-6">
              <GeneralInformation onFormDataChange={setGeneralFormData} />
            </div>

            <div id="education" className="scroll-mt-6">
              <EducationSection />
            </div>

            <div id="work" className="scroll-mt-6">
              <WorkExeriencesSection />
            </div>

            <div id="skills" className="scroll-mt-6">
              <SkillsSection />
            </div>

            <div id="languages" className="scroll-mt-6">
              <LanguagesSection />
            </div>
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
      </div>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600">
              © 2024 Volunteer Platform. All rights reserved.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
