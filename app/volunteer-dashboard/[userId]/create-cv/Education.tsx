import { useState } from 'react'
import { ChevronDownIcon, XIcon, GraduationCap } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export function EducationSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Card className="col-span-4">
        <CardHeader className="flex flex-row border-b pb-4 justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            <CardTitle className="text-xl text-primary">Education</CardTitle>
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
                  <h4 className="font-medium text-gray-900">Master degree – Civil Engineering</h4>
                  <p className="text-sm text-gray-600">University of Yildiz, Turkey</p>
                </div>
                <div className="text-sm text-gray-500">
                  July 2019 - December 2019
                </div>
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
                <GraduationCap className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-semibold">Add Education</h3>
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
                  Start of Education
                </label>
                <input
                  type="date"
                  id="start"
                  className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                  Level of education
                </label>
                <div className="relative">
                  <select
                    id="level"
                    className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                  >
                    <option>High School</option>
                    <option>Bachelor</option>
                    <option>Master</option>
                    <option>PhD</option>
                  </select>
                  <ChevronDownIcon className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="end" className="block text-sm font-medium text-gray-700 mb-1">
                  End of Education
                </label>
                <input
                  type="date"
                  id="end"
                  className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <div className="relative">
                  <select
                    id="department"
                    className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                  >
                    <option>Civil Engineering</option>
                    <option>Mechanical Engineering</option>
                    <option>Computer Science</option>
                  </select>
                  <ChevronDownIcon className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
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

              <div>
                <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
                  Name of university
                </label>
                <input
                  type="text"
                  id="university"
                  placeholder="University of Yildiz"
                  className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <div className="relative">
                  <select
                    id="country"
                    className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                  >
                    <option>Turkey</option>
                    <option>USA</option>
                    <option>Syria</option>
                  </select>
                  <ChevronDownIcon className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
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
  )
}
