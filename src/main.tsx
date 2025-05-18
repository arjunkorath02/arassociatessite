
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Use a more immediate render approach
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

// Add event listener for "load" to ensure all resources are loaded
window.addEventListener('load', () => {
  // Remove any loading states
  rootElement.classList.remove('loading');
});

// Render the application
root.render(<App />);
