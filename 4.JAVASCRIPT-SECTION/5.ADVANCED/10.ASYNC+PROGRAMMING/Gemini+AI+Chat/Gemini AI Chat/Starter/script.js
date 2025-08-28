// api key AIzaSyCOmOFusH6K88C97tv-DG1Qm9iaZEq76Go
// url = curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyCOmOFusH6K88C97tv-DG1Qm9iaZEq76Go"

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chatForm");
  const userInput = document.getElementById("userInput");
  const chatMessages = document.getElementById("chatMessages");
  const sendBtn = document.getElementById("sendButton");

  // auto resize input

  userInput.addEventListener("input", () => {
    userInput.style.height = "auto";
    userInput.style.height = userInput.scrollHeight + "px";
  });

  // chat logic

  form.addEventListener("submit", async (e) => {
    // prevent default
    e.preventDefault();
    // user msg input
    const message = userInput.value.trim();
    if (!message) return;
      // * todo: add user message to chat
      addMsg(message, true);
    userInput.value = "";
    userInput.style.height = "auto";
    sendBtn.disabled = true;

      // * todo: show typing
      const typingIndicator = showTypingIndicator()
    try {
      //* todo: generate response
        const response = await generateResponse(message); 
        typingIndicator.remove();
        // add ai msg
        addMsg(response,false)
    } catch (error) {
        typingIndicator.remove()
        addErrorMsg(error.message)
    } finally {
        sendBtn.disabled = false
    }
  });

  // generate response
  const generateResponse = async (prompt) => {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyCOmOFusH6K88C97tv-DG1Qm9iaZEq76Go`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );
    if (response.okay) {
      throw new Error("Failed to generate the response");
    }
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  };

  // add user msg

  const addMsg = (text, isUser) => {
    const message = document.createElement("div");
    message.className = `message ${isUser ? "user-message" : ""}`;
    message.innerHTML = `
        <div class='avatar ${isUser ? "user-avatar" : ""}'>
        ${isUser ? "U" : "AI"}
        </div> 
        <div class='message-content'>${text}</div>
    `;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  const showTypingIndicator = () => {
    const indicator = document.createElement("div");
    indicator.className = "message";
    indicator.innerHTML = `
        <div class='avatar'>AI</div>
        <div class='typing-indicator'>
        <div class = 'dot'></div>
        <div class = 'dot'></div>
        <div class = 'dot'></div>
        </div>
        `;
    chatMessages.appendChild(indicator);
      chatMessages.scrollTop = chatMessages.scrollHeight; 
      return indicator
    };
    
    // add error

    const addErrorMsg = (text) => {
        const message = document.createElement('div')
        message.className = 'message'
        message.innerHTML = `
        <div class='avatar'>AI</div>
        <div class='message-content' style='color:red'>
            Error: ${text}
        </div>
        `
    }
});
