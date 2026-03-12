# ⚡ Get real-time international space station visibility alerts with N2YO and Telegram

> ⚡ **66 views** · ⚡ [Personal Productivity](../)

## Description

Workflow Execution Video: [https://youtu.be/VV4D2aiFXsY](https://youtu.be/VV4D2aiFXsY)

### **Prerequisites & Setup**

Before you begin, you need to gather a few key pieces of information:

1. **N2YO API Key:**
    - Go to https://www.n2yo.com/login/register/ and create a free account.
    - Once registered, find and copy your API key. This key is used to request satellite data.
    - Replace the enter-longitude, enter-latitude, enter-your-api-key in http node URL.
2. **Telegram Bot Credentials:**
    - You need a Telegram bot. You can create one by talking to the **BotFather** on Telegram.
    - **Bot Token:** BotFather will give you a unique authorization token. This is like a password for your bot.
    - **Chat ID:** You need the ID of the chat where the bot will send messages. You can get this by sending a message to your bot and then visiting `https://api.telegram.org/bot&lt;YourBOTToken&gt;/getUpdates`. Look for the `chat` -&gt; `id` value in the response.
3. **Your Location Coordinates:**
    - Visit https://www.maps.ie/coordinates.html.
    - Find your location on the map.
    - Copy your **Latitude** and **Longitude** values.

---

### **Node-by-Node Explanation**

This workflow is composed of five nodes that execute in a sequence.

---

### **1. Schedule Trigger Node**

- **Node Name:** `Schedule Trigger`
- **Purpose:** This is the starting point of the workflow. It's designed to run automatically at a specific, recurring interval.
- **Configuration:** The node is set to trigger **every 30 minutes**. This means the entire sequence of actions will be initiated twice every hour.

---

### **2. HTTP Request Node**

- **Node Name:** `HTTP Request`
- **Purpose:** This node is responsible for fetching data from an external source on the internet.
- **Configuration:** It sends a request to the N2YO API URL: `https://api.n2yo.com/rest/v1/satellite/visualpasses/25544/...`
    - The numbers `25544` represent the NORAD ID for the International Space Station (ISS).
    - You must replace `enter-longitude`, `enter-latitude`, and `enter-your-api-key` with the actual **coordinates and API key** you gathered during the setup.
    - The result of this request is a block of data (in JSON format) containing information about upcoming satellite passes.

---

### **3. Code Node**

- **Node Name:** `Readable`
- **Purpose:** This node uses JavaScript to process and reformat the raw data received from the `HTTP Request` node.
- **Configuration:** The JavaScript code performs several actions:
    - It extracts the details of the next upcoming satellite pass.
    - It contains functions to convert timestamp numbers into human-readable dates and times (e.g., "10th October 2025, 14:30 UTC").
    - It calculates the time remaining until the pass begins (e.g., "in 2h 15m").
    - Finally, it constructs a formatted text message (`alert`) and calculates the number of minutes until the pass begins (`timeinminutes`), passing both pieces of information to the next node.

---

### **4. If Node**

- **Node Name:** `If`
- **Purpose:** This node acts as a gatekeeper. It checks if a specific condition is met before allowing the workflow to continue.
- **Configuration:** It checks the `timeinminutes` value that was calculated in the previous `Code` node.
    - The condition is: **Is `timeinminutes` less than or equal to `600`?**
    - If the condition is **true** (the pass is 600 minutes or less away), the data is passed to the next node through the "true" output.
    - If the condition is **false**, the workflow stops.

---

### **5. Telegram Node**

- **Node Name:** `Send a text message`
- **Purpose:** This node sends a message to your specified Telegram chat.
- **Configuration:**
    - It is configured with your Telegram bot's credentials.
    - The `Chat ID` is set to the specific chat you want the message to appear in.
    - The content of the text message is taken directly from the `alert` variable created by the `Code` node. This means it will send the fully formatted message about the upcoming ISS pass.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
