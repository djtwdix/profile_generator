const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", (answer) => {
  const name = answer
  rl.question("What is an activity that you like to do? ", (answer) => {
    const activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      const music = answer;
      rl.question("What meal is your favourite? ", (answer) => {
        const meal = answer;
        rl.question("What is your favourite thing to eat for that meal? ", (answer) => {
          const food = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            const sport = answer;
            rl.question("What is your superpower? In a few word, tell us what you are amazing at? ", (answer) => {
              const superPower = answer;
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superPower}.`)
              rl.close()
            });
          });
        });
      });
    });
  });
  
});
