import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Plus, X, Wrench } from 'lucide-react'
import { useState } from 'react'

export function SkillsSection() {
  const [newSkill, setNewSkill] = useState('')
  const [skills, setSkills] = useState(['Blender', 'Browser', 'Modelling', '3D Design', 'Animation'])

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill('')
    }
  }

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove))
  }

  return (
    <Card className="col-span-4">
      <CardHeader className="flex flex-row border-b pb-4 justify-between">
        <div className="flex items-center gap-2">
          <Wrench className="w-5 h-5 text-primary" />
          <CardTitle className="text-xl text-primary">Skills</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Add Skill Input */}
          <div className="flex gap-3">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
              placeholder="Add your skills"
              className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
            />
            <button
              onClick={handleAddSkill}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>

          {/* Skills List */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-white border border-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow-sm transition-shadow duration-200"
              >
                {skill}
                <button
                  onClick={() => handleRemoveSkill(skill)}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </span>
            ))}
          </div>

          {/* Skills Categories */}
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Skill Categories</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-2">Technical Skills</h5>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Node.js', 'TypeScript'].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-2">Soft Skills</h5>
                <div className="flex flex-wrap gap-2">
                  {['Communication', 'Teamwork', 'Problem Solving', 'Leadership'].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}