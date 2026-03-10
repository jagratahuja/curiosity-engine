import { useState } from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';

const curiosities = [
  "Why do cats purr?",
  "Why do we yawn?",
  "How does WiFi work?",
  "Why do airplanes fly?",
  "Why do octopuses have three hearts?",
  "Why does the Moon always face Earth?",
  "How does GPS know your location?",
  "Why do leaves change color in autumn?",
  "Why does ice float on water?",
  "Why do whales sing?",
  "Why do we dream?",
  "How do rockets escape Earth's gravity?",
  "Why do stars twinkle?",
  "Why does lightning happen?",
  "Why do humans need sleep?",
  "Why do birds migrate?",
  "How do submarines dive?",
  "Why is the sky blue?",
  "Warum do magnets attract metal?",
  "Why do we get hiccups?",
  "How do mirrors reflect images?",
  "Why do fireflies glow?",
  "How do bees make honey?",
  "Why do planets orbit the Sun?",
  "Why do we have fingerprints?",
  "How does sound travel through air?",
  "Why do volcanoes erupt?",
  "Why do onions make us cry?",
  "How does the internet work?",
  "Why do some animals hibernate?",
  "Why do some people have blue eyes?",
  "What causes a rainbow to form?",
  "How does a caterpillar become a butterfly?",
  "Why do we blush?",
  "How does a camera capture an image?",
  "Why do spiders spin webs?",
  "How do trees communicate underground?",
  "Why are fingerprints unique?",
  "How do airplanes stay airborne?",
  "Why does metal rust?",
  "How do chameleons change color?",
  "Why do diamonds sparkle?",
  "How does a compass work?",
  "Why is the ocean salty?",
  "How do 3D printers build objects?",
  "Why does snow appear white?",
  "How do fish breathe underwater?",
  "Why do some animals glow in the dark?",
  "How is glass made?",
  "Why do we have different blood types?",
  "How do wind turbines generate electricity?",
  "Why do some fruits change color when ripe?",
  "How does a microwave heat food?"
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(
    curiosities[Math.floor(Math.random() * curiosities.length)]
  );
  const [count, setCount] = useState(1);

  const generateNewCuriosity = () => {
    const newQuestion = curiosities[Math.floor(Math.random() * curiosities.length)];
    setCurrentQuestion(newQuestion);
    setCount(count + 1);
  };

  const handleLearnMore = () => {
    const searchQuery = encodeURIComponent(currentQuestion);
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col justify-between p-6">
      {/* main content centered vertically */}
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">
              Random Curiosity Generator
            </h1>
            <p className="text-slate-400 text-lg">
              Discover something fascinating with every click
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6 transform transition-all hover:scale-[1.01]">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                Curiosity
              </p>
              <h2 className="text-3xl font-bold text-slate-800 leading-relaxed">
                {currentQuestion}
              </h2>
            </div>

            <div className="flex gap-4 flex-col sm:flex-row">
              <button
                onClick={generateNewCuriosity}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Surprise Me
              </button>
              <button
                onClick={handleLearnMore}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-md"
              >
                Learn More
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-slate-300 text-lg">
              Curiosities explored today: <span className="font-bold text-blue-400">{count}</span>
            </p>
          </div>
        </div>
      </main>

      <hr className="border-slate-600 opacity-30 mb-2" />
      <footer className="text-center text-slate-300 text-sm py-4">
        Built with <span className="text-red-500">♥</span> by Jagrat Ahuja<br />
        © 2026 All rights reserved.
      </footer>
    </div>
  );
}

export default App;
