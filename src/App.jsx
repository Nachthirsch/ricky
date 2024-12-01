import "./App.css";
import Ricky from "./assets/ricky.jpg";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 via-pink-200 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="relative">
            <img src={Ricky} alt="Profile" className="w-48 h-48 rounded-full object-cover border-4 border-pink-400 shadow-lg hover:scale-105 transition-transform duration-300" />
            <div className="absolute -bottom-2 -right-2 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">Hello! Neegah 🧔🏿</div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 text-center">Ricky The Racist</h1>
          <p className="text-xl text-pink-500 font-medium">Full Time Racist</p>

          {/* Biography Section */}
          <div className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl mt-8">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">About Me</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Hi there! I&apos;m a Racist Student that currently learning how to be a Top 1 Racist in the world, be racist and proud of it and I&apos;m not sorry for that.</p>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">My Rizz Line</h2>
            <p className="text-gray-700 leading-relaxed">I was a gay but you turned me into a straight.</p>
            {/* Skills */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Racism", "Racism", "Racism", "Racism", "Racism", "Racism", "and Racism"].map((skill) => (
                  <span key={skill} className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
