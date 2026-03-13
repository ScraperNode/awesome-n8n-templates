# 🎫 AI-powered Gmail MCP server

> ⚡ **1,945 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 🤖 AI-Powered Gmail MCP Server for n8n

### Description
This n8n workflow template leverages an external AI Model Control Plane (MCP) Server to automate various Gmail tasks, such as composing emails, replying to threads, and handling follow-ups using dynamically generated content. It uses the native n8n Gmail nodes available from v1.88.0 onwards.

### Who is this template for?
Ideal for **developers**, **automation engineers**, and **power users** using self-hosted n8n (v1.88.0+) who want to integrate artificial intelligence directly into their email workflows via a dedicated MCP Server for enhanced control and customization over AI interactions.

### What problem does this workflow solve?
*   ⚙️ **Reduces Manual Effort:** Decreases the work involved in writing, sending, and following up on emails in Gmail.
*   ✅ **Consistency and Quality:** Ensures standardized, professional responses free from typos by leveraging controlled AI prompts.
*   🔄 **Complete Automation:** Automates the entire email cycle: from the initial send, through waiting for a reply, to sending automated follow-ups based on AI logic.

### Workflow Overview
This template provides a structured approach to integrating Gmail with an MCP Server:

*   📡 **MCP Trigger (“MCP_GMAIL”):** An n8n Webhook node that receives HTTP calls from your MCP Server. It standardizes the inputs (like recipient, subject, AI prompt) for all subsequent Gmail nodes. *(You will need to configure your MCP Server to call this webhook URL).*
*   📤 **SEND_EMAIL (Gmail Node v2.1):** Sends new messages. The email body (`message` field) is typically populated by content generated from an AI prompt processed by your MCP server and passed via the trigger.
*   🔄 **REPLY_EMAIL (Gmail Node v2.1):** Automatically replies to existing conversations (threads). It uses AI-generated content (via MCP) to formulate the reply based on the thread context. Requires `Message ID` and/or `Thread ID`.
*   📥 **GET_EMAIL (Gmail Node v2.1):** Fetches data for a specific message (using `Message ID`) for analysis, processing, or archiving. Useful for retrieving context before replying.
*   ⏳ **SEND_AND_WAIT (Gmail Node v2.1):** Sends an email and pauses the workflow execution until a reply is received in that specific conversation (thread). This is crucial for building automated follow-up sequences. It then outputs data from the reply message.

* **Note:** All Gmail nodes in this template use the native n8n **Gmail Tool**, integrated since v1.88.0. No additional installation of community nodes is required. See the [official n8n documentation](https://docs.n8n.io/) for more details on node configuration.*

### Prerequisites
Ensure you have the following before importing:

*   🚀 A self-hosted n8n instance running version **1.88.0** or higher.
*   ☁️ A Google Cloud project with the **Gmail API** correctly enabled.
*   🔑 **Gmail OAuth2 credentials** configured in your n8n instance. Navigate to `Settings` &gt; `Credentials` &gt; `New` &gt; `Google` &gt; `Gmail (OAuth2 API)` to set this up if you haven't already.
*   🧠 Access to your **MCP Server** and an **API Key** (or other authentication method) required to interact with it via HTTP requests.

### How to Import and Configure
Follow these steps to get the template running:

1.  In your n8n interface, navigate to **Templates** → **Import from URL**.
2.  Paste the JSON link provided for this workflow template.
3.  Configure the necessary credentials within n8n under `Credentials`:
    *   **Gmail OAuth2:** Select the Google OAuth2 credential you previously configured that has access to the desired Gmail account.
    *   **MCP API Key:** You'll likely need to configure credentials for interacting with your MCP Server. This might involve setting up a `Header Auth` credential in n8n with your MCP API Key, or configuring the HTTP Request node within the workflow directly, depending on your MCP's authentication scheme. Link this credential where needed (e.g., in the Trigger node if MCP calls n8n with auth, or in HTTP Request nodes if n8n calls MCP).
4.  **Activate the Workflow:** Ensure the workflow toggle is set to "Active" in the top right corner.
5.  **Webhook URL:** Copy the Webhook URL from the "MCP_GMAIL" Trigger node (Test or Production URL as needed) and configure your MCP Server to send requests to this URL.
6.  **Recommendation:**
    *   Rename the nodes with clear, descriptive names relevant to your specific use case (e.g., `✨ Generate Sales Email Body via MCP`, `📥 Fetch Customer Replies`).
    *   Utilize the workflow notes (sticky notes on the canvas) to document specific logic, prompt details, or configuration choices for future reference.

### Customization & Technical Guidance
Tailor the workflow to your specific needs:

*   🔍 **Search Filters:** In nodes that fetch emails (like `GET_EMAIL` or if you add a `Gmail - Get Many` node), refine the search using the `Search` field (standard Gmail search operators) or filter by `Label Names` to process specific emails (e.g., unread from a specific sender, emails with a certain label).
*   ✍️ **AI Fine-Tuning (Prompt Engineering):** The core of the AI integration happens in the prompts sent to your MCP Server. Modify these prompts (often constructed within function nodes or directly in the trigger input expected from MCP) in the `message` or `body` fields passed to the send/reply nodes. Adjust prompts to control:
    *   **Tone & Style:** Formal, informal, empathetic, technical, etc.
    *   **Content & Format:** Request bullet points, summaries, specific data extraction.
    *   **Dynamic Variables:** Inject data from previous n8n nodes (e.g., customer name, order details, previous email content) into the prompt for context-aware generation. Example: ``"Reply to the following email thread [{{ $json.thread_content }}] addressing the customer {{ $json.customer_name }} about their query..."``
*   🔗 **Post-Response Actions:** Extend the workflow after key actions, especially the `SEND_AND_WAIT` node. Add nodes to:
    *   Log results to a database (`MySQL`, `PostgreSQL`, `Airtable`).
    *   Update CRM records (`HubSpot`, `Salesforce`).
    *   Send notifications (`Slack`, `Discord`, `Telegram`).
    *   Trigger other n8n workflows.
*   🛡️ **Error Handling:** Implement robust error handling. Connect the red output pins (error output) of critical nodes (like Gmail nodes or HTTP Requests to MCP) to an `Error Trigger` node. From there, you can:
    *   Log detailed error information to a monitoring tool or spreadsheet.
    *   Send failure notifications.
    *   Implement retry logic (using loops or specific retry settings on nodes).
    *   Route to alternative paths or fallback workflows.

## 🔗 Nodes Used

MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
