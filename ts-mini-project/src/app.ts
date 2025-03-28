// Main app entry!

import logging from './components/loggs.js';
import demo_01 from './sections/demo_01.js';

const app = (): void => {
  logging('App initialized.', 'info');

  // demo_01
  const id = 'click-me';

  //////////////////////////////
  //// RUN PROJECT SECTIONS ////
  //////////////////////////////

  demo_01(id);
}

// Ensures DOM is ready before binding events (no race conditions)
document.addEventListener('DOMContentLoaded', app);

export default app;