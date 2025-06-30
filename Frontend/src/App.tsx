// src/App.tsx
import WelcomeScreen from './screens/WelcomeScreen';

function App() {
  return (
    // This container simulates a mobile screen on desktop for easier development
    <div className="max-w-md mx-auto h-screen shadow-2xl bg-white overflow-hidden">
      <WelcomeScreen />
    </div>
  );
}

export default App;
