# ⚡ Log daily mood & weather to Notion with Telegram and OpenWeatherMap

> ⚡ **189 views** · ⚡ [Personal Productivity](../)

## Description

The **Daily Mood & Weather Logger 🚀** is more than just a utility; it's a hands-on n8n workflow designed to teach you core automation concepts. By setting up and exploring this template, you'll gain practical experience with triggers, API calls, data manipulation using the Code node, and integrating with external services like Notion. It automates tracking your daily mood alongside local weather, logging it all into a Notion database.

---

## 🎯 Learning Objectives: What You'll Master

This workflow template is specifically structured to help you understand and practice:

* **Workflow Triggers:**

  * **Scheduled Triggers:** Learn how the **Cron node** initiates actions at specific times (e.g., daily).
  * **Webhook/Event-Based Triggers:** Understand how the **Telegram Trigger node** listens for and reacts to external events (like a new message).

* **Making API Calls:**

  * See the **HTTP Request node** in action, querying the external OpenWeatherMap API to fetch real-time data.
  * Understand how to configure API endpoints, query parameters, and handle API keys (using environment variables).

* **Data Manipulation with Code:**

  * Explore the **Code node** to write simple JavaScript for combining data from different sources (Telegram input and API response).
  * Learn basic data structuring and transformation within n8n.

* **Database Integration (Notion):**

  * Discover how to use the **Notion node** to interact with a Notion database.
  * Practice retrieving database information and, more importantly, creating new pages (entries/rows) with dynamic data.

* **Environment Variables:** Learn the importance of using environment variables for managing sensitive information (like API keys) and configurable parameters (like city/location).

* **Workflow Logic & Data Flow:** Observe how data passes between nodes and how different components work together to achieve a complete automation.

---

## Why This Workflow? (Beyond Learning) 🤔

While the primary goal is educational, the workflow itself is useful for:

* **Automated Data Collection:** It prompts for mood via Telegram and fetches weather automatically.
* **Consistent Logging:** Ensures daily entries into your Notion journal.
* **Centralized Information:** Stores mood and weather data in a structured Notion database.

---

## Core Features & How They Teach You 🧩

Let’s break down how each part of the workflow demonstrates key n8n concepts:

### 📅 Daily Automation Cycle & Triggers:

* **Daily Trigger (Cron node):** ⏰ Initiates the workflow daily. *Learning:* This is your introduction to time-based automation. Observe its simple configuration for scheduling.
* **Telegram Mood Prompt (Telegram node):** 📩 Sends a message. *Learning:* Shows a basic "action" node interacting with an external service.
* **Telegram Mood Capture (Telegram Trigger node):** 🎣 Listens for your reply. *Learning:* A prime example of an event-driven trigger. See how it waits for user input to continue the workflow.

### 🌍 Fetching External Data (APIs):

* **Weather Data Fetch (HTTP Request node for OpenWeatherMap):** 🌦️ Retrieves current weather. *Learning:* The core of API interaction. Examine how the URL, query parameters (`appid`, `q` or `lat`/`lon`), and environment variables are used. Try changing the parameters!

### ⚙️ Processing Data (Code Node):

* **Data Consolidation (Code node):** 🛠️ Combines mood and weather data. *Learning:* A practical use of the Code node. Look at the JavaScript to understand how it accesses data from previous nodes (`$input`, `$('Node Name')`) and structures the output.

### 📝 Storing Data (Notion Integration):

* **Notion Database Interaction (Notion nodes):** ✍️

  * "Retrieve Database": Gets database info. *Learning:* Demonstrates reading from Notion.
  * "Add row into Notion": Logs the data. *Learning:* Shows how to write data to Notion, mapping your workflow data to specific Notion properties. This is a common pattern for many database integrations.

*Note: The template includes two paths for weather fetching (city name vs. lat/lon). This allows you to explore different ways to configure the HTTP Request node and manage input data.*

---

## Getting Started: Your Learning Lab Setup 🛠️

Set up your learning environment:

1. **Import the Workflow:** Add the `.json` to n8n. This is your starting blueprint!
2. **Set Up Environment Variables in n8n:**

   * `OPEN_WEATHER_API_KEY`: Your OpenWeatherMap API key.
   * `City`: (e.g., "Paris") For city-based weather.
   * `latitude`: (e.g., "18.834366") For coordinate-based weather.
   * `longitude`: (e.g., "35.352342") For coordinate-based weather.
3. **Configure Node Credentials:**

   * **Telegram:** Link your Telegram API credentials in the "Send Mood Prompt" and "Wait for Mood Response" nodes.
   * **Notion:** Connect your Notion API credentials in the "Retrieve Database" and "Add row into Notion" nodes.
4. **Personalize Node Settings (Experiment Here!):**

   * **Daily Trigger (Cron Node):** Change the "Trigger Times". How does this affect when the workflow runs?
   * **Send Mood Prompt (Telegram Node):**

     * Update the `Chat ID` (e.g., from `=83495863`) to your own.
     * Modify the `Text` of the prompt.
   * **Notion Nodes:**

     * Set your target `Database ID` (e.g., replace `20e9c592...`).
     * Ensure your Notion database has properties like `city`, `description`, `temperature`, `mood`, etc., as defined in the "Add row into Notion" node. Try adding or removing properties to see what happens!
   * **Weather Fetching Path:**

     * Experiment with enabling one path (city name or lat/lon) and disabling the other. Observe how the HTTP Request node parameters differ. Ensure relevant environment variables are set.
5. **Activate and Test:** Turn the workflow ON. Trigger it manually or wait for the Cron. Check each node’s output to understand the data flow.

---

## How The Automation Works (A Learning Recap) ⚙️

Follow the data and actions:

1. **TRIGGER:** Cron node (scheduled) or Telegram Trigger (event-based after prompt).
2. **ACTION (Prompt):** Telegram node sends a message.
3. **INPUT (User):** You reply to the Telegram message.
4. **API CALL:** HTTP Request node fetches weather using your API key and location.
5. **CODE PROCESSING:** Code node merges your mood and the weather data.
6. **DATABASE WRITE:** Notion node creates a new entry with the combined data.

Use the n8n execution log to inspect the input and output of each node. This is invaluable for learning and debugging!

---

## Next Steps in Your Learning Journey 🚀

Once you're comfortable, try these to deepen your understanding:

* **Modify the Code Node:** Add new data transformations. Can you format the date or extract more specific weather details?
* **Change API Parameters:** Explore the OpenWeatherMap API docs. Can you fetch forecast data instead of current weather?
* **Add Error Handling:** What happens if the API call fails? Explore the "Error Trigger" or "Continue on Fail" settings.
* **Integrate a New Service:** Try sending a summary to email or another messaging app.
* **Explore Different Trigger Types:** What other ways could this workflow be initiated?

---

## Requirements (Your Learning Kit) 📋

* An active n8n instance.
* Telegram Bot API credentials.
* An OpenWeatherMap API Key.
* Notion API credentials & a configured Notion Database.
* Curiosity and a willingness to experiment!

*May your mood tracking be seamless and your weather always logged!*

## 🔗 Nodes Used

Cron, HTTP Request, Telegram, Telegram Trigger, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
