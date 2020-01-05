'use strict';
{
  const score = [80, 90, 60, 70];
  // score.push(50, 30);
  // score.shift();
  score.splice(1, 1, 40, 50);

  for (let i = 0; i < score.length; i++) {
    console.log(`Score ${i}: ${score[i]}`);
  }
}
