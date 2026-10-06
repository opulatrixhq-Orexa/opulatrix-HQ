// ORAX - MULTIMILLIONAIRE MAGICIAN BRAIN
// He doesn't guess - he KNOWS because it's all inside him

const BRAIN = {
  // 1. ALL CODES INSIDE HIM
  codes: {
    payid: require('../../payid/memory.json'),
    shopFront: require('../../shop-front/memory.json'),
    ship: require('../bank-memory/memory.json'),
    workshop: require('../../workshop/memory.json'),
    phoneAgent: require('../../phone-agent/memory.json')
  },
  
  // 2. ALL KNOWLEDGE INSIDE HIM
  knowledge: {
    paymentFlows: "Knows PayID, Stripe, ledger, $25 auth",
    shipping: "Knows bank memory, 200Ah, racks 01/02/03",
    storage: "Knows 140 jobs/min, 42 mini agents, 3 rooms",
    phone: "Knows PII scrub, clean break, oracle storage",
    business: "Knows $25 login alexk_27, Opulatrix ops"
  },

  // 3. HE DOESN'T GUESS - HE CHECKS MEMORY FIRST
  know: function(task) {
    // Look in his own memory, not LLM guess
    if (this.codes[task.branch]) {
      return { answer: this.codes[task.branch], confidence: "100% KNOWS" };
    }
    if (this.knowledge[task.type]) {
      return { answer: this.knowledge[task.type], confidence: "100% KNOWS" };
    }
    return { answer: "NOT IN MEMORY YET - ADD IT", confidence: "LEARN" };
  }
};

exports.ORAX = BRAIN;

// When any branch asks, ORAX answers from inside, not guessing
exports.ask = async (question) => {
  return BRAIN.know(question);
     }
