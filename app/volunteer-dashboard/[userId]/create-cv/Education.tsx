import { useState, useEffect } from 'react'
import { ChevronDownIcon, XIcon, GraduationCap, Pencil } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { toast } from 'sonner'

interface Education {
  id: string;
  level: string;
  department: string;
  university: string;
  country: string;
  start_date: string;
  end_date: string | null;
  is_present: boolean;
}

export function EducationSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [educationList, setEducationList] = useState<Education[]>([])
  const [currentEducation, setCurrentEducation] = useState<Education | null>(null)
  const [formData, setFormData] = useState({
    level: '',
    department: '',
    university: '',
    country: '',
    start_date: '',
    end_date: '',
    present: false
  })

  // Fetch education data
  useEffect(() => {
    fetchEducationData()
  }, [])

  const fetchEducationData = async () => {
    try {
      const response = await fetch('/api/volunteer/education')
      if (!response.ok) throw new Error('Failed to fetch education data')
      const data = await response.json()
      setEducationList(data)
    } catch (error) {
      console.error('Error fetching education:', error)
      toast.error('Failed to load education data')
    }
  }

  const handleOpenModal = (education?: Education) => {
    if (education) {
      setCurrentEducation(education)
      setIsEditing(true)
      setFormData({
        level: education.level,
        department: education.department,
        university: education.university,
        country: education.country,
        start_date: new Date(education.start_date).toISOString().split('T')[0],
        end_date: education.end_date ? new Date(education.end_date).toISOString().split('T')[0] : '',
        present: education.is_present
      })
    } else {
      setCurrentEducation(null)
      setIsEditing(false)
      setFormData({
        level: '',
        department: '',
        university: '',
        country: '',
        start_date: '',
        end_date: '',
        present: false
      })
    }
    setIsOpen(true)
  }

  const handleSubmit = async () => {
    try {
      const url = '/api/volunteer/education'
      const method = isEditing ? 'PUT' : 'POST'
      const body = isEditing 
        ? { ...formData, id: currentEducation?.id }
        : formData

      console.log('Submitting data:', body); // Debug log

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || 'Failed to save education data');
      }

      toast.success(isEditing ? 'Education updated successfully' : 'Education added successfully')
      setIsOpen(false)
      fetchEducationData()
    } catch (error) {
      console.error('Error saving education:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to save education data');
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <>
      <Card className="col-span-4">
        <CardHeader className="flex flex-row border-b pb-4 justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            <CardTitle className="text-xl text-primary">Education</CardTitle>
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
            {educationList.map((education) => (
              <div key={education.id} className="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-sm transition-shadow duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="space-y-1">
                    <h4 className="font-medium text-gray-900">{education.level} – {education.department}</h4>
                    <p className="text-sm text-gray-600">{education.university}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">
                      {new Date(education.start_date).toLocaleDateString()} - {education.is_present ? 'Present' : new Date(education.end_date!).toLocaleDateString()}
                    </div>
                    <button
                      onClick={() => handleOpenModal(education)}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                      <Pencil className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
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
                <GraduationCap className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-semibold">{isEditing ? 'Edit Education' : 'Add Education'}</h3>
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
                <label htmlFor="start_date" className="block text-sm font-medium text-gray-700 mb-1">
                  Start of Education
                </label>
                <input
                  type="date"
                  id="start_date"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleInputChange}
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
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                  >
                    <option value="">Select level</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Master">Master</option>
                    <option value="PhD">PhD</option>
                  </select>
                  <ChevronDownIcon className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="end_date" className="block text-sm font-medium text-gray-700 mb-1">
                  End of Education
                </label>
                <input
                  type="date"
                  id="end_date"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleInputChange}
                  disabled={formData.present}
                  className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <div className="relative">
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                  >
                    <option value="">Select department</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Computer Science">Computer Science</option>
                  </select>
                  <ChevronDownIcon className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="present"
                  name="present"
                  type="checkbox"
                  checked={formData.present}
                  onChange={handleInputChange}
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
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
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
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                  >
                    <option value="">Select country</option>
                    <option value="Turkey">Turkey</option>
                    <option value="USA">USA</option>
                    <option value="Syria">Syria</option>
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
                onClick={handleSubmit}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 transition-colors duration-200"
              >
                {isEditing ? 'Update' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
