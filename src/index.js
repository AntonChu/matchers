export default function sortHealthRank(arr) {
  return arr.sort((a, b) => b.health - a.health);
}
