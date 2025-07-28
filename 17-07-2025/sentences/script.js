document.getElementById("splitBtn").addEventListener("click", function() {
  const input = document.getElementById("userInput").value;
  const sentencesContainer = document.getElementById("sentences");

  sentencesContainer.innerHTML = "";

  // Split paragraph into sentences
  const sentenceArray = input.match(/[^.!?]+[.!?]+/g) || [];

  // Print each line individually
  sentenceArray.forEach((sentence, index) => {
    const line = `"${sentence.trim()}"`;
    console.log(line);

    const p = document.createElement("p");
    p.textContent = line;
    sentencesContainer.appendChild(p);
  });
});
