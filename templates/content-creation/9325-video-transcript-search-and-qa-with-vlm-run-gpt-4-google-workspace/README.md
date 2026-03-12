# 🎬 Video transcript search and Q&A with VLM Run, GPT-4 & Google Workspace

> ⚡ **171 views** · 🎬 [Content Creation & Video](../)

## Description

**Automate video transcription and Q&A with async VLM processing that scales from short clips to long recordings.**

## What this workflow does

1. **Monitors Google Drive** for new files in a specific folder and grabs the file ID on create
2. **Automatically downloads** the binary to hand off for processing
3. **Sends the video to VLM Run** for **async transcription** with a callback URL that posts results back to n8n
4. **Receives the transcript JSON via Webhook** and **appends a row in Google Sheets** with the video identifier and transcript data
5. **Enables chat Q&A** through the **Chat Trigger + AI Agent**. The agent fetches relevant rows from Sheets and answers only from those segments using the connected chat model

## Setup

**Prerequisites:** Google Drive and Google Sheets accounts, VLM Run API credentials, OpenAI (or another supported) chat model credentials, n8n instance.

Install the verified **VLM Run node** by searching for **VLM Run** in the nodes list, then click **Install**. You can also confirm on npm if needed. After install, it integrates directly for robust async transcription.

**Quick Setup:**

1. **Google Drive folder watch**

   * Add **Google Drive Trigger** and choose **Specific folder**. Set polling to every minute, event to **File Created**. Connect Drive OAuth2.

2. **Download the new file**

   * Add **Google Drive** node with **Download**. Map `{{$json.id}}` and save the binary as `data`.

3. **Async transcription with VLM Run**

   * Add **VLM Run** node. Operation: **video**. Domain: `video.transcription`. Enable **Process Asynchronously** and set **Callback URL** to your Webhook path (for example `/transcript-video`). Add your VLM Run API key.

4. **Webhook to receive results**

   * Add **Webhook** node with method **POST** and path `/transcript-video`. This is the endpoint VLM Run calls when the job completes. Use **When Last Node Finishes** or respond via a Respond node if you prefer. 

5. **Append to Google Sheets**

   * Add **Google Sheets** node with **Append**. Point to your spreadsheet and sheet. Map:

     * **Video Name** → the video identifier from the webhook payload
     * **Data** → the transcript text or JSON from the webhook payload
   * Connect Google Sheets OAuth2.

6. **Chat entry point and Agent**

   * Add **Chat Trigger** to receive user questions.
   * Add **AI Agent** and connect:

     * a **Chat Model** (for example OpenAI Chat Model)
     * the **Google Sheets Tool** to read relevant rows
   * In the Agent system message, instruct:

     * Use the Sheets tool to fetch transcript rows matching the question
     * Answer **only** from those rows
     * Cite or reference row context as needed

7. **Test and activate**

   * Upload a sample video to the watched Drive folder.
   * Wait for the callback to populate your sheet.
   * Ask a question through the Chat Trigger and confirm the agent quotes only from the retrieved rows.
   * Activate your template and let it automate the task.

## How to take this further

* **Team memory:** Ask “What did we decide on pricing last week?” and get the exact clip and answer.
* **Study helper:** Drop classes in, then ask for key points or formulas by topic.
* **Customer FAQ builder:** Turn real support calls into answers your team can reuse.
* **Podcast highlights:** Find quotes, tips, and standout moments from each episode.
* **Meeting catch-up:** Get decisions and action items from any recording, fast.
* **Marketing snippets:** Pull short, social-ready lines from long demos or webinars.
* **Team learning hub:** Grow a searchable video brain that remembers everything.



This workflow uses the **VLM Run node for scalable, async video transcription** and the **AI Agent for grounded Q&A from Sheets**, giving you a durable pipeline from upload to searchable answers with minimal upkeep.

## 🔗 Nodes Used

Google Sheets, Webhook, Google Drive, Google Drive Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
