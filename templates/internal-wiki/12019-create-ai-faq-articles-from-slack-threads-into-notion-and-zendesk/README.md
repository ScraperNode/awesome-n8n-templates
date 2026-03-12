# 📖 Create AI FAQ articles from Slack threads into Notion and Zendesk

> ⚡ **89 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

# Create FAQ articles from Slack threads to Notion and Zendesk

This workflow helps you capture "tribal knowledge" shared in Slack conversations and automatically converts it into structured documentation. By simply adding a specific reaction (default: 📚) to a message, the workflow aggregates the thread, uses AI to summarize it into a Q&A format, and publishes it to your knowledge base (Notion and Zendesk).

## Who is this for?
- **Customer Support Teams** who want to turn internal troubleshooting discussions into public help articles.
- **Knowledge Managers** looking to reduce the friction of documentation.
- **Development Teams** wanting to archive technical decisions made in Slack threads.

## What it does
1.  **Trigger:** Watches for a specific emoji reaction (📚 `:book:`) on a Slack message.
2.  **Data Collection:** Fetches the parent message and all replies in the thread to get the full context.
3.  **AI Processing:** Uses **OpenAI** to analyze the conversation, summarize the solution, and format it into a clear Question & Answer structure.
4.  **Publishing:**
    - Creates a new page in a **Notion** database with tags and summaries.
    - (Optional) Drafts a new article in **Zendesk**.
5.  **Notification:** Replies to the original Slack thread with links to the newly created documentation.

## Requirements
- **n8n** (Self-hosted or Cloud)
- **Slack** workspace (with an App installed that has permissions to read channels and reactions).
- **OpenAI** API Key.
- **Notion** account with an Integration Token.
- **Zendesk** account (optional, can be removed if not needed).

## How to set up
1.  **Configure Credentials:** Set up authentication for Slack, OpenAI, Notion, and Zendesk in n8n.
2.  **Setup Notion:** Create a database in Notion with the following properties:
    - `Name` (Title)
    - `Summary` (Text/Rich Text)
    - `Tags` (Multi-select)
    - `Source` (URL)
    - `Channel` (Select or Text)
3.  **Update Configuration Node:** Open the **Workflow Configuration1** node (Set node) and replace the placeholder values:
    - `slackWorkspaceId`: Your Slack Workspace ID (e.g., T01234567).
    - `notionDatabaseId`: The ID of your Notion database.
    - `zendeskSectionId`: (Optional) The ID of the section where articles should be created.
4.  **Slack App Scopes:** Ensure your Slack App has the following scopes: `reactions:read`, `channels:history`, `groups:history`, `chat:write`.

## How to customize
- **Change the Trigger:** If you prefer a different emoji (e.g., 📝 or 💡), update the "Right Value" in the **IF - :book: Reaction Check** node.
- **Modify the Prompt:** Edit the **OpenAI** node to change how the AI formats the answer (e.g., ask it to be more technical or more casual).
- **Remove Zendesk:** If you don't use Zendesk, simply delete the **Zendesk** node and remove the reference to it in the final **Slack - Notify Completion** node.

## 🔗 Nodes Used

Slack, Zendesk, Notion, OpenAI, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
