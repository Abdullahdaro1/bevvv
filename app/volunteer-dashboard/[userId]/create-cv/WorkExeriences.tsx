import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, ChevronDownIcon, XIcon, Pencil, Plus, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface WorkExperience {
  id: string;
  company_name: string;
  position: string;
  start_date: string;
  end_date: string | null;
  is_present: boolean;
  description: string;
  country: string;
}

export function WorkExeriencesSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [workExperienceList, setWorkExperienceList] = useState<WorkExperience[]>([])
  const [currentWorkExperience, setCurrentWorkExperience] = useState<WorkExperience | null>(null)
  const [formData, setFormData] = useState({
    company_name: '',
    position: '',
    start_date: '',
    end_date: '',
    is_present: false,
    description: '',
    country: ''
  })

  // Fetch work experience data
  useEffect(() => {
    fetchWorkExperienceData()
  }, [])

  const fetchWorkExperienceData = async () => {
    try {
      const response = await fetch('/api/volunteer/workExperiences')
      if (!response.ok) throw new Error('Failed to fetch work experience data')
      const data = await response.json()
      setWorkExperienceList(data)
    } catch (error) {
      toast.error('Failed to load work experience data')
    }
  }

  const handleOpenModal = (workExperience?: WorkExperience) => {
    if (workExperience) {
      setCurrentWorkExperience(workExperience)
      setIsEditing(true)
      setFormData({
        company_name: workExperience.company_name,
        position: workExperience.position,
        start_date: workExperience.start_date,
        end_date: workExperience.end_date || '',
        is_present: workExperience.is_present,
        description: workExperience.description,
        country: workExperience.country
      })
    } else {
      setCurrentWorkExperience(null)
      setIsEditing(false)
      setFormData({
        company_name: '',
        position: '',
        start_date: '',
        end_date: '',
        is_present: false,
        description: '',
        country: ''
      })
    }
    setIsOpen(true)
  }

  const handleSubmit = async () => {
    try {
      const url = '/api/volunteer/workExperiences'
      const method = isEditing ? 'PUT' : 'POST'
      const body = isEditing 
        ? { ...formData, id: currentWorkExperience?.id }
        : formData

        const response = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        })
        
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.details || data.error || 'Failed to save work experience data')
        }

        toast.success(isEditing ? 'Work experience updated successfully' : 'Work experience added successfully')
        setIsOpen(false)
        fetchWorkExperienceData()
    } catch (error) {
      console.error('Error saving work experience:', error)
      toast.error('Failed to save work experience data')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/volunteer/workExperiences/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) throw new Error('Failed to delete work experience')

      toast.success('Work experience deleted successfully')
      fetchWorkExperienceData()
    } catch (error) {
    }
  }


  return (
    <>
      <Card className="col-span-4">
        <CardHeader className="flex flex-row border-b pb-4 justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-primary" />
            <CardTitle className="text-xl text-primary">Work Experiences</CardTitle>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="ml-auto text-tertiary px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            Add New
          </button>
        </CardHeader>

        <CardContent className="p-6">
          <div className="space-y-4">
            {workExperienceList.map((workExperience) => (
              <div key={workExperience.id} className="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-sm transition-shadow duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="space-y-1">
                    <h4 className="font-medium text-gray-900">{workExperience.position}</h4>
                    <p className="text-sm text-gray-600">{workExperience.company_name}, {workExperience.country}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">
                      {new Date(workExperience.start_date).toLocaleDateString()} - {workExperience.is_present ? 'Present' : new Date(workExperience.end_date!).toLocaleDateString()}
                    </div>
                    <button
                        onClick={() => handleOpenModal(workExperience)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                      >
                        <Pencil className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>

{/*                   <button
                      onClick={() => handleDelete(workExperience.id)}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                      <Trash2 className="w-4 h-4 text-gray-500" />
                  </button> */}
                </div>
                <div className="mt-3 text-sm text-gray-600">
                  <p>{workExperience.description}</p>
                </div>
              </div>
            ))}
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
                <h3 className="text-lg font-semibold">{isEditing ? 'Edit Work Experience' : 'Add Work Experience'}</h3>
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
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleInputChange}
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
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleInputChange}
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
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
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
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleInputChange}
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
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Istanbul, Turkey"
                  className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="present"
                  type="checkbox"
                  name="is_present"
                  checked={formData.is_present}
                  onChange={handleInputChange}
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
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
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
                onClick={handleSubmit}
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