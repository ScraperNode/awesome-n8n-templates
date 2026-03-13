# 📋 Ai-powered bug tracking with GitHub issues and Telegram alerts using Gemini

> ⚡ **501 views** · 📋 [Project Management](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

## Create GitHub issues from webhook input and send alerts to Telegram

This workflow streamlines bug tracking by using a webhook to collect issue reports, automatically classifying and summarizing them with Gemini AI, then sending critical issues to GitHub and real-time notifications to Telegram. Optional manager approval is built in for low-priority reports.

### 🧑‍💻 Who’s it for
This workflow is ideal for:
- Engineering teams needing automated issue tracking from multiple systems
- QA testers or customer support agents who log bugs via custom tools
- DevOps teams monitoring logs or error reports in real time
- Teams using GitHub for issue tracking and Telegram (or any messenger) for notifications

### ⚙️ How it works
Webhook Trigger – Listens for incoming POST requests containing bug or task data.

AI-Powered Classification – Uses the Gemini model to classify bugs as High or Low severity.

Optional Approval – If severity is Low, it waits for a manager’s approval before proceeding.

Bug Summary Generation – Passes through a filter and sends the input to Gemini to generate a clean summary.

Create GitHub Issue – Submits the summarized issue to your GitHub repository.

Telegram Notification – Sends a formatted message to a Telegram group or manager, depending on the path.

### 🛠️ How to set up
- Replace the GitHub node with your repo credentials and target repo.
- Set up the Telegram bot token and chat ID in the Telegram node.
- Customize the Gemini prompts for your preferred classification and summary logic.
- Define the conditions for “High” vs “Low” severity based on your data.

### 📋 Requirements
- A GitHub account with a personal access token (with repo access)

- A Telegram bot token and group chat ID

- Google Gemini API credentials (or your preferred AI model integration)


### 🔧 How to customize the workflow
- Swap Telegram with another messaging platform like Slack, Discord, or Microsoft Teams.
- Adjust classification rules to match your business logic.
- Change approval flow to notify a different person or add additional logic before sending to GitHub.
- Extend the webhook input format to support richer data, such as user info or system metadata.

## 🔗 Nodes Used

GitHub, Webhook, Telegram, Gmail, Summarization Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
