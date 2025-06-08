import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Globe, Plus, X } from 'lucide-react'
import { useState } from 'react'

type Language = {
  name: string
  level: 'Native' | 'Fluent' | 'Advanced' | 'Intermediate' | 'Basic'
}

export function LanguagesSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [languages, setLanguages] = useState<Language[]>([
    { name: 'English', level: 'Fluent' },
    { name: 'Arabic', level: 'Native' },
    { name: 'Turkish', level: 'Intermediate' }
  ])

  const [newLanguage, setNewLanguage] = useState<Language>({
    name: '',
    level: 'Intermediate'
  })

  const handleAddLanguage = () => {
    if (newLanguage.name.trim() && !languages.some(lang => lang.name.toLowerCase() === newLanguage.name.toLowerCase().trim())) {
      setLanguages([...languages, { ...newLanguage, name: newLanguage.name.trim() }])
      setNewLanguage({ name: '', level: 'Intermediate' })
      setIsOpen(false)
    }
  }

  const handleRemoveLanguage = (languageToRemove: string) => {
    setLanguages(languages.filter(lang => lang.name !== languageToRemove))
  }

  const getLevelColor = (level: Language['level']) => {
    const colors = {
      Native: 'bg-green-100 text-green-800',
      Fluent: 'bg-blue-100 text-blue-800',
      Advanced: 'bg-purple-100 text-purple-800',
      Intermediate: 'bg-yellow-100 text-yellow-800',
      Basic: 'bg-gray-100 text-gray-800'
    }
    return colors[level]
  }

  return (
    <>
      <Card className="col-span-4">
        <CardHeader className="flex flex-row border-b pb-4 justify-between">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            <CardTitle className="text-xl text-primary">Languages</CardTitle>
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
            {languages.map((language) => (
              <div
                key={language.name}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium text-gray-900">{language.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm ${getLevelColor(language.level)}`}>
                      {language.level}
                    </span>
                  </div>
                  <button
                    onClick={() => handleRemoveLanguage(language.name)}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
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
          <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-6 z-10 mx-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Add Language</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5 hover:text-gray-600" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                  Language
                </label>
                <input
                  type="text"
                  id="language"
                  value={newLanguage.name}
                  onChange={(e) => setNewLanguage({ ...newLanguage, name: e.target.value })}
                  placeholder="Enter language"
                  className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                  Proficiency Level
                </label>
                <select
                  id="level"
                  value={newLanguage.level}
                  onChange={(e) => setNewLanguage({ ...newLanguage, level: e.target.value as Language['level'] })}
                  className="block w-full bg-white border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors duration-200"
                >
                  <option value="Native">Native</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Basic">Basic</option>
                </select>
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
                onClick={handleAddLanguage}
                className="bg-primary-600 text-primary px-6 py-2 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 transition-colors duration-200"
              >
                Add Language
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}