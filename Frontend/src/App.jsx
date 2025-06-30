function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <img src="/path/to/your/image.jpg" alt="Achievement" className="max-w-full h-auto rounded-lg shadow-lg mb-8" />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Begin Your Achievement Journey</h1>
        <p className="text-lg text-gray-600 mb-8">Turn your idea into a real-world, tangible project in just four weeks.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
}
export default App;