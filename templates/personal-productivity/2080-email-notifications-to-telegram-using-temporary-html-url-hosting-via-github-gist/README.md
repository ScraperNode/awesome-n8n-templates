# ⚡ Email notifications to Telegram using temporary HTML URL hosting via GitHub Gist

> ⚡ **2,362 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Overview
This workflow automates the process of notifying users about new emails via Telegram and temporarily hosting the email content on a secret HTML page. It is ideal for users who need immediate notifications and a secure, temporary web view of their email content.

## Use Cases
- Immediate notification of new emails in Telegram with the ability to preview the email content in a secure, temporary HTML format.
- Automation for users who need to keep track of their emails without constantly checking their email client.
- Useful for teams or individuals who require instant updates on critical emails and prefer a quick preview through a web interface.

## My Personal Use Case: Secure Subscription Sharing
From time to time, I find myself wanting to share my paid subscriptions with friends, but giving out OTP codes manually or sharing my email isn't a good idea due to security concerns. I attempted to use the IMAP node to integrate with Telegram secret channel for this purpose but encountered numerous problems, such as difficulties in scraping content from emails. Additionally, the Telegram API sometimes rejects certain special characters found within email contents. After facing these challenges, I discovered that rendering emails as HTML pages and sharing them directly is the most effective solution. This approach bypasses the issues with character limitations and content scraping, providing a seamless way to share subscription benefits securely.

## Services/APIs Used

| Service/API          | Node Type               | Description                                          |
|----------------------|-------------------------|------------------------------------------------------|
| IMAP Email Server    | Email Trigger (IMAP)    | Triggers the workflow on receiving a new email.      |
| Telegram API         | Telegram                | Sends notifications and manages messages in Telegram.|
| GitHub Gist API      | HTTP Request (Github Gist) | Temporarily hosts email content on GitHub Gist. |
| GitHub Gist API (Deletion) | HTTP Request (Github Gist ‌) | Deletes the temporary GitHub Gist after a specified time. |
| Wait                 | Wait                    | Delays the workflow for a specified period.          |

## Configuration Steps
1. **Email Trigger (IMAP):** Configure your IMAP email credentials to enable the workflow to check for new emails.
2. **Telegram Nodes:** Insert your Telegram bot's API credentials and your chat ID in both Telegram nodes to send and delete messages.
3. **Github Gist Nodes:** Provide your GitHub API credentials to create and delete Gists. Ensure the GitHub token has the necessary permissions to create and delete Gists.
4. **Wait Node:** Adjust the wait time according to your preference for how long the email content should be accessible via the HTML page.

## Screenshot
![Workflow Screenshot](https://cdn.statically.io/gh/Automations-Project/n8n-templates/main/Email%20Notifications%20to%20Telegram%20using%20Temporary%20HTML%20Hosting%20via%20GitHub%20Gist/preview.png)

## Additional Notes
- Ensure all credentials are securely stored and have the minimum necessary permissions for the workflow to function.
- Test the workflow with non-sensitive emails to ensure it operates as expected before using it with critical email accounts.
- Consider the privacy and security implications of temporarily hosting email content on GitHub Gist.

For any questions or issues, refer to the respective API documentation for each service used or consult the n8n community for support.

## 🔗 Nodes Used

Email Trigger (IMAP), HTTP Request, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
