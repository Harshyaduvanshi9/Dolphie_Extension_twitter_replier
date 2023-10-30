const replyFields = document.querySelectorAll('[data-testid="tweetTextarea_0"] ');
const newR=document.querySelector('.public-DraftEditorPlaceholder-root');
console.log("mai hooo "+newR);


replyFields.forEach(replyField => {
  const button = document.createElement("button");
  button.innerText = "Fetch Original Tweet";
  replyField.parentNode.appendChild(button);

  console.log("ha bhai reply mil gaya");
});
console.log("helo ia m in content js");
