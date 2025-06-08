import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, ChevronDownIcon, XIcon } from "lucide-react";
import { useState } from "react";

export function WorkExeriencesSection() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <Card className="col-span-4">
        <CardHeader className="flex flex-row border-b pb-4 justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-primary" />
            <CardTitle className="text-xl text-primary">Work Experiences</CardTitle>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="ml-auto text-tertiary px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            Add New
          </button>
        </CardHeader>

        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-sm transition-shadow duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="space-y-1">
                  <h4 className="font-medium text-gray-900">Senior Software Engineer</h4>
                  <p className="text-sm text-gray-600">Tech Company Inc., Turkey</p>
                </div>
                <div className="text-sm text-gray-500">
                  January 2020 - Present
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                <p>Led development of enterprise applications using React and Node.js. Managed a team of 5 developers and implemented CI/CD pipelines. Improved application performance by 40% through optimization techniques.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-sm transition-shadow duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="space-y-1">
                  <h4 className="font-medium text-gray-900">Software Developer</h4>
                  <p className="text-sm text-gray-600">Digital Solutions Ltd., Turkey</p>
                </div>
                <div className="text-sm text-gray-500">
                  June 2018 - December 2019
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                <p>Developed and maintained web applications using JavaScript and PHP. Collaborated with UX designers to implement responsive interfaces. Reduced bug reports by 30% through improved testing practices.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6 z-10 mx-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Add Work Experience</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <XIcon className="w-5 h-5 hover:text-gray-600" />
              </button>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              <div>
                <label htmlFor="start" className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  id="start"
                  className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="end" className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  id="end"
                  className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Senior Software Engineer"
                  className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Tech Company Inc."
                  className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Istanbul, Turkey"
                  className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="present"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-600"
                />
                <label htmlFor="present" className="ml-2 text-sm text-gray-700">
                  Present
                </label>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Describe your responsibilities and achievements..."
                  className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-primary-600 text-primary px-6 py-2 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 transition-colors duration-200"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}