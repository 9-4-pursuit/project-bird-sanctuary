const bonusItems = [
  "Stickers",
  "Background for your computer",
  "Tote bag",
  "Invites to VIP live streams",
];

export default bonusItems;

// The bonuses come from `src/data/bonusItems.js`
// The bonus items are added as list items in an `<ul>` list item as follows:
// 1 bonus (first array item) is given if the total is between 100 and 300
// 2 bonuses (first and second array items) are given if the total is between 300 and 500
// 3 bonuses are given if the total is between 500 and 1000
// 4 bonuses are given if the total is more than 1000