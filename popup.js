console.log("popup file is loaded");

document.getElementById("fetchButton").addEventListener("click", function () {
  console.log("Hello How are u");
    // Function to fetch the original Tweet text (Level 2).
    function fetchOriginalTweet() {
      const tweet = document.querySelector('.public-DraftEditorPlaceholder-root');
      const tweetText=document.querySelector('.tweet-text');
      console.log(tweetText);
      console.log("hello"+tweet);
      if (tweet) {
        return tweet.textContent;
      } else {
        return "Original Tweet not found";
      }
    }
  
    // Function to populate the reply box (Level 3).
    function populateReplyBox(originalTweetText) {
      const replyFields = document.querySelectorAll('[data-testid="replyTextarea"]');
      replyFields.forEach(replyField => {
        replyField.value = originalTweetText;
      });
    }
  
    const originalTweetText = fetchOriginalTweet();
  
    if (originalTweetText) {
      // Display the original Tweet text (Level 2).
      alert(originalTweetText);
  
      // Populate the reply box (Level 3).
      populateReplyBox(originalTweetText);
    } else {
      alert("Original Tweet not found");
    }
  });
  
  
  