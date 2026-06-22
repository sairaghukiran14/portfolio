import { useState, useEffect } from "react";

// 1. Typewriter Component
export const TypewriterText = ({
  text,
  speed = 100,
  className = "",
  showCursor = true,
  onComplete = () => {},
  delay = 0,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else if (!isComplete) {
        setIsComplete(true);
        onComplete();
      }
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
    setIsComplete(false);
  }, [text]);

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

// 2. Glitch Component
export const GlitchText = ({
  text,
  className = "",
  intensity = "medium",
  colors = { primary: "text-red-500", secondary: "text-blue-500" },
}) => {
  const intensitySettings = {
    low: { duration: "0.6s", offset: "1px" },
    medium: { duration: "0.3s", offset: "2px" },
    high: { duration: "0.1s", offset: "3px" },
  };

  const settings = intensitySettings[intensity];

  return (
    <div className={`relative ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        className={`absolute top-0 left-0 ${colors.primary} animate-pulse opacity-70`}
        style={{
          animation: `glitch1 ${settings.duration} infinite`,
          clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
        }}
      >
        {text}
      </span>
      <span
        className={`absolute top-0 left-0 ${colors.secondary} animate-pulse opacity-70`}
        style={{
          animation: `glitch2 ${settings.duration} infinite`,
          clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
        }}
      >
        {text}
      </span>
      <style jsx>{`
        @keyframes glitch1 {
          0%,
          14%,
          15%,
          49%,
          50%,
          99%,
          100% {
            transform: translate(0);
          }
          15%,
          49% {
            transform: translate(-${settings.offset}, ${settings.offset});
          }
        }
        @keyframes glitch2 {
          0%,
          20%,
          21%,
          62%,
          63%,
          99%,
          100% {
            transform: translate(0);
          }
          21%,
          62% {
            transform: translate(${settings.offset}, -${settings.offset});
          }
        }
      `}</style>
    </div>
  );
};

// 5. Matrix Component
export const MatrixText = ({
  text,
  className = "",
  duration = 2000,
  color = "text-green-400",
  background = "bg-black",
}) => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const interval = setInterval(() => {
      setChars(() =>
        text
          .split("")
          .map((char) =>
            Math.random() > 0.7
              ? matrix[Math.floor(Math.random() * matrix.length)]
              : char
          )
      );
    }, 100);

    setTimeout(() => clearInterval(interval), duration);
    return () => clearInterval(interval);
  }, [text, duration]);

  return (
    <span
      className={`font-mono ${color} ${background} px-4 py-2 rounded ${className}`}
    >
      {chars.length ? chars.join("") : text}
    </span>
  );
};

// 7. Gradient Component
export const GradientText = ({
  text,
  className = "",
  colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24"],
  direction = "45deg",
  speed = "10s", // Slower animation
}) => {
  const gradientColors = colors.join(", ");

  return (
    <div
      className={`font-bold bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(${direction}, ${gradientColors})`,
        backgroundSize: "400% 400%",
        animation: `gradientShift ${speed} linear infinite`, // linear for smooth endless loop
      }}
    >
      {text}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

// 10. Morphing Component
export const MorphingText = ({
  texts,
  className = "",
  interval = 3000,
  transitionDuration = 500,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, transitionDuration);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval, transitionDuration]);

  return (
    <div
      className={`font-bold transition-all duration-500 ${className} ${
        isAnimating
          ? "scale-110 opacity-60 blur-sm"
          : "scale-100 opacity-100 blur-0"
      }`}
    >
      {texts[currentIndex]}
    </div>
  );
};

// Demo Component
const TextAnimationDemo = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      name: "Typewriter",
      component: (
        <TypewriterText
          text="Hello, World! This is customizable."
          className="text-2xl text-blue-400"
          speed={80}
        />
      ),
    },
    {
      name: "Glitch",
      component: (
        <GlitchText
          text="CUSTOMIZABLE GLITCH"
          className="text-3xl"
          intensity="high"
        />
      ),
    },

    {
      name: "Matrix",
      component: (
        <MatrixText
          text="MATRIX EFFECT"
          className="text-2xl"
          color="text-lime-400"
          duration={3000}
        />
      ),
    },

    {
      name: "Gradient",
      component: (
        <GradientText
          text="RAINBOW TEXT"
          className="text-5xl"
          colors={["#ff0080", "#00ff80", "#8000ff", "#ff8000"]}
        />
      ),
    },

    {
      name: "Morphing",
      component: (
        <MorphingText
          texts={["AMAZING", "AWESOME", "INCREDIBLE", "FANTASTIC"]}
          className="text-4xl text-yellow-400"
          interval={2000}
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          Reusable Text Animation Components
        </h1>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Copy any component and customize with props. Each animation is fully
          configurable with colors, timing, and behavior options.
        </p>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {demos.map((demo, index) => (
            <button
              key={index}
              onClick={() => setActiveDemo(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeDemo === index
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {demo.name}
            </button>
          ))}
        </div>

        {/* Demo Display */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-12 min-h-[300px] flex items-center justify-center mb-8">
          <div className="text-center">
            <h2 className="text-2xl text-white mb-8 opacity-70">
              {demos[activeDemo].name}
            </h2>
            <div className="flex justify-center items-center min-h-[100px]">
              {demos[activeDemo].component}
            </div>
          </div>
        </div>

        {/* Usage Example */}
        <div className="bg-gray-800/50 rounded-xl p-6">
          <h3 className="text-xl text-white mb-4">Usage Example:</h3>
          <pre className="text-green-400 text-sm overflow-x-auto">
            <code>{`import { ${
              demos[activeDemo].name === "3D Flip"
                ? "Flip3DText"
                : demos[activeDemo].name + "Text"
            } } from './TextAnimations';

// Basic usage
<${
              demos[activeDemo].name === "3D Flip"
                ? "Flip3DText"
                : demos[activeDemo].name + "Text"
            } text="Your text here" />

// With custom props
<${
              demos[activeDemo].name === "3D Flip"
                ? "Flip3DText"
                : demos[activeDemo].name + "Text"
            } 
  text="Custom text"
  className="text-4xl text-blue-500"
  ${
    demos[activeDemo].name === "Typewriter"
      ? "speed={100}"
      : demos[activeDemo].name === "Glitch"
      ? 'intensity="high"'
      : demos[activeDemo].name === "Wave"
      ? "delay={0.2}"
      : demos[activeDemo].name === "Neon"
      ? 'color="#ff00ff"'
      : demos[activeDemo].name === "Matrix"
      ? "duration={3000}"
      : demos[activeDemo].name === "3D Flip"
      ? 'axis="Y"'
      : demos[activeDemo].name === "Gradient"
      ? 'colors={["#ff0000", "#00ff00"]}'
      : demos[activeDemo].name === "Shake"
      ? 'intensity="strong"'
      : demos[activeDemo].name === "Fade Slide"
      ? 'direction="up"'
      : "interval={2000}"
  }
/>`}</code>
          </pre>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>
            Each component is fully customizable with props for colors, timing,
            intensity, and behavior
          </p>
          <p className="text-sm mt-2">
            Built with React + Tailwind CSS • Ready for production use
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextAnimationDemo;
