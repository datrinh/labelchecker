export let REWARDS = [];

for (let x = 5; x < 75; x = x + 5) {
  REWARDS.push({ position: (x * 100) / 75, unlocked: false, total: x });
}
