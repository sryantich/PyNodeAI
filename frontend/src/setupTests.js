// frontend/src/setupTests.js

// Import jest-dom to add custom jest matchers like toBeInTheDocument.
import '@testing-library/jest-dom/extend-expect';

// Polyfill for ResizeObserver in Jest environment
class ResizeObserver {
    constructor(callback) {}
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  
  // Assign the stub to global
  global.ResizeObserver = ResizeObserver;
  