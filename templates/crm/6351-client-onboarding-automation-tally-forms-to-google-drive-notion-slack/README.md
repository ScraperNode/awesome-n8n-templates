# 🤝 Client onboarding automation: Tally Forms to Google Drive, Notion & Slack

> ⚡ **608 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

📝 Automation: Instantly Onboard New Clients from Tally Form to Notion, Google Drive & Slack
This automation streamlines the client onboarding process by integrating Tally, Notion, Google Drive, and Slack. When a potential client submits a Tally form, the automation is triggered via a webhook, automatically handling all onboarding steps without manual intervention.

⚙️ How It Works – Step-by-Step
Form Submission Triggered
A new Tally form submission is received via a webhook.

Client Data Extraction
The automation extracts essential client details from the form, including:

-Name

-Email

-Project Type

-Budget

Google Drive Folder Creation
A dedicated Google Drive folder is generated using the client’s name and project type for storing onboarding assets.

Notion Database Entry Creation
A new item is added to a specified Notion database, storing:

Client information

Project scope

Folder link

Slack Team Notification
A Slack message is sent to your designated team channel containing all onboarding details, ensuring the team is informed instantly.

✅ Pre-Conditions / Requirements
A published Tally form collecting client data.

A connected Google Drive account with folder creation permissions.

An existing Notion database with columns for name, email, budget, etc.

A Slack workspace with an active bot/token integrated with the automation tool.

🛠️ Notion Database Structure
Your Notion database should include at least the following fields:

-Name (Text)

-Email (Email)

-Project Type (Select)

-Budget (Select)

-Onboarding Folder Link (URL)

🧩 Customization Guidance
You can modify the Google Drive folder naming convention to include a timestamp or custom ID.

Adjust Slack message formatting to include project-specific tags or mention specific team members.

Extend the Notion entry to include more fields like project deadline or contact notes.

## 🔗 Nodes Used

Slack, Webhook, Google Drive, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
