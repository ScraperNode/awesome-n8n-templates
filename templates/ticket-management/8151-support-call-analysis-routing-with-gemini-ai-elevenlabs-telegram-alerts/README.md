# 🎫 Support call analysis & routing with Gemini AI, ElevenLabs & Telegram alerts

> ⚡ **452 views** · 🎫 [Ticket Management & Triage](../)

## Description

## What it does

Customer support calls contain a wealth of valuable feedback and urgent issues, but manually reviewing audio files is inefficient. This workflow acts as an AI assistant for your call log, transforming unstructured audio recordings into structured, actionable data. It provides a clean summary, sentiment analysis, and a list of required actions for every call, eliminating the need for manual listening and ensuring key insights are never missed.

## How it works

The workflow runs on a schedule to fully automate the call analysis process from start to finish.

1.  **Fetch New Recordings:** The workflow triggers on a schedule (e.g., every 5 minutes), searches a designated **Google Drive** folder for new call recordings, and downloads any new files it finds.
2.  **Transcribe Audio:** Each audio file is sent to the **ElevenLabs API** to be converted from speech to a text transcript. The result is then formatted into a conversational, multi-speaker format.
3.  **AI-Powered Analysis:** The transcript is passed to a **Google Gemini** node, which is prompted to return a structured JSON object. This JSON contains a complete analysis of the call, including speaker identification (`agent_name`, `client_name`), a `summary`, the `client_sentiment`, a `call_topic`, a `department_tag`, and a list of `action_items`.
4. **Log the Results:** The complete, structured analysis output from Gemini is appended as a new row in a **Google Sheet**, creating a centralized log with all the extracted call details and the full transcript.
5.  **Take Action:** The workflow uses conditional logic based on the detected sentiment:
    * **Negative Sentiment:** If a call was negative, an immediate alert containing the call summary and action items is sent to a manager's group on **Telegram**.
    * **Positive Sentiment:** If a call was positive, a kudos message is sent to the support team's **Telegram** channel to celebrate good work.
6.  **File Management:** After processing, the original audio file is automatically moved to a separate "Processed" folder in **Google Drive** to ensure it isn’t analyzed again.

## Setup Instructions

To configure this workflow, you will need to set up your file storage in Google Drive, create a Google Sheet for logging, and configure credentials for all connected services.

### Required Credentials

1.  **Google:**
    * You will need Google OAuth2 credentials that have permission for Google Drive, Google Sheets, and the Google AI (Gemini) APIs.
2.  **ElevenLabs:**
    * Sign up for an account at [ElevenLabs](https://elevenlabs.io/) and get your API Key. You will add this directly into the **HTTP Request** node for transcription.
3.  **Telegram:**
    * Create a bot using the `BotFather` in Telegram to get your **Bot Token**.
    * You will also need the specific **Chat ID** for the managers' channel and the team's channel.

### Step-by-Step Configuration

1.  **Google Drive:** Create two folders in your Google Drive: one named "Company - Support Call Recordings" and another named "Processed Recordings". Copy the unique Folder ID from the URL for each and paste it into the respective Google Drive nodes.
2.  **Google Sheets:** Create a new Google Sheet to log the results. In the first row, create the following headers exactly as written: `Recording File`, `Sentiment`, `Department`, `Topic`, `Agent`, `Client`, `Summary`, `Actions`, and `Fulltext`. Copy the Sheet ID from the URL and paste it into the "Log Recording Analysis" (Google Sheets) node.
3.  **ElevenLabs Node:** In the "Convert Speech To Text" (HTTP Request) node, make sure the URL is set to the correct ElevenLabs API endpoint for speech-to-text. Add your ElevenLabs API Key to the authentication header.
4.  **Telegram Nodes:**
    * In the "Send Alert To Managers" node, enter the Chat ID for your managers' group.
    * In the "Send Kudos to Team" node, enter the Chat ID for the main team channel.

## How to Adapt the Template

This workflow is a powerful starting point. Based on your specific needs, you can customize the inputs, the AI analysis, the logging method, and the final actions.

### Input Method

* **Change File Source:** Instead of Google Drive, you can adapt the workflow to fetch recordings from other services like **Dropbox**, **OneDrive**, or a custom FTP server.
* **Use a Webhook:** Replace the **Schedule Trigger** with a **Webhook Trigger** to process calls in real-time as they are added from your call software (if it supports webhooks).

### Final Actions

* **Create Service Tickets:** This is a key area for customization. Replace the **Telegram** nodes with nodes for ticketing systems. For a negative call, you can automatically create a high-priority ticket in **Jira**, **Zendesk**, or **ServiceNow**.
* **Create Tasks:** For calls with specific action items, use a node like **Asana**, **Trello**, or **Todoist** to automatically create a task and assign it to the correct team member.
* **Send Email Notifications:** Use the **Send Email** node to dispatch summaries and alerts to stakeholders who are not on Telegram.

### Logging and Analysis

* **Log to a Database:** Instead of Google Sheets, you can use a **Postgres**, **MySQL**, or **Data Warehouse** node to log the structured data for more advanced business intelligence and dashboarding.
* **Customize the AI Prompt:** The prompt in the Google Gemini node is the "brain" of the operation. It specifically instructs the AI to return a JSON object with a predefined structure. To change what data is extracted, you can modify this structure in the prompt. For example, you could add a new key-value pair like `"competitor_mentioned": "Name of competitor if mentioned, otherwise null"` to the JSON structure.
The current workflow asks the AI to populate a JSON object like this:
```
{
  "speaker_identification": {
	"agent": "speaker_id",
    	"agent_name": "The agent's name",
    	"client": "client_id",
	"client_name": "The client's name"
  },
  "summary": "A concise summary.",
  "client_sentiment": "Positive, Negative, or Neutral",
  "call_topic": "A brief phrase for the topic.",
  "department_tag": "The most relevant department.",
  "action_items": [
    "A list of actionable tasks."
  ]
}
```
* **Change AI or STT Service:** You can swap out the **Google Gemini** node for an **OpenAI** node, or change the **HTTP Request** node to use a different transcription service like **AssemblyAI** or **Deepgram**.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Google Drive, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
