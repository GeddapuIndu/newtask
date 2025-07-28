function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
}

document.getElementById("checkScoreBtn").addEventListener("click", function() {
  const par = parseInt(document.getElementById("parInput").value);
  const strokes = parseInt(document.getElementById("strokesInput").value);

  const result = golfScore(par, strokes);
  document.getElementById("result").textContent = `Result: ${result}`;
});
