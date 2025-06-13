
export default function MyProjects() {

    return (
    <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">My Projects</h2>
            <div className="flex items-center gap-2">
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200">
              Add New Project
            </button>
          </div>
          </div>
        </div>
      </div>
    );
}