// driver.js - BRAIN STEM - ONE AGENT
const BRAIN = {
  banker: null,
  guards: [],
  voice: null,
  shop: null,
  workshop: null
};

async function bootBrain() {
  console.log("🧠 BRAIN STEM BOOTING...");

  // Load all branches
  BRAIN.banker = await import('./wallet/banker.js');
  BRAIN.guards = await import('./guards/seven.js');
  BRAIN.voice = await import('./phone-agent/voice.js');
  BRAIN.shop = await import('./shop-front/duty.js');
  BRAIN.workshop = await import('./workshop/duty.js');

  console.log("✅ ALL BRANCHES LOADED - READY TO BUILD");

  // Start the guards first, then voice, then banker
  BRAIN.guards.activate();
  BRAIN.voice.listen();
  BRAIN.banker.boot();
}

bootBrain();
