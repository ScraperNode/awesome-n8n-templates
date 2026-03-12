# ⚡ Daily email digest with GPT-4 summaries to Google Docs

> ⚡ **2,093 views** · ⚡ [Personal Productivity](../)

## Description

# A Customizable n8n Automation That Turns Your Inbox Into A Daily Digest.
The goal of this workflow is to offer a highly customizable foundation that users can tailor to fit their specific platform and setup. While the current version uses Gmail, it can easily be adapted to work with other providers by replacing the email node with alternatives such as IMAP Email Trigger, Microsoft Outlook, or any compatible Email node.

This workflow can also be extended to work with platforms like Telegram, WhatsApp, or any service that supports bots and n8n integration. The core objective is to generate scheduled email summaries whether it’s the most recent email, emails from a specific sender, or all emails received within a day.

I built this workflow as a flexible building block for anyone looking to develop a more advanced email agent. It’s designed to reduce the mental load of reviewing emails each day by automatically delivering a summarized version of your inbox.

Currently, the summary is saved to Google Docs, chosen for its simplicity and accessibility. However, users can easily modify this to integrate with other document management systems or destinations.

I plan to continue updating and expanding this workflow to better serve the needs of users. If you have suggestions, ideas, or feedback, I’d love to hear them your input helps make this tool even more useful.

**Workflow Components** 
- Schedule Node – Triggers the workflow daily at a specified time.

- Gmail: Get Messages Node – Retrieves the latest email. Can be changed for any amount of emails.

- Limit Node – Ensures only one or any number emails is processed at a time.

- If Node – Checks if any emails were retrieved.

- Code Node – Cleans and formats the email content.

- Code Node – Provides a fallback message if no emails are found.

- OpenAI Summary Node – Summarizes the email using CharGPT.

- Create Google Doc Node – Creates a new Google Document for the summary.

- Update Google Doc Node – Inserts the summarized content into the document.

## Expanding The Workflow
This workflow is fully modular and easy to extend. To send summaries via Telegram, Slack, or any other emails simply add the respective node after the summary is generated and connect your bot or webhook credentials. To use Outlook instead of Gmail, just swap the email input node with the Microsoft Outlook node or an IMAP Email Trigger, depending on your preferred setup.


**Need Help? Have Questions?**
For consulting and support, or if you have questions, please feel free to connect with me on [LinkedIn ](www.linkedin.com/in/michael-gullo-46b3b7274) or [via email](michael.gullo@outlook.com).

## 🔗 Nodes Used

Gmail, Google Docs, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
