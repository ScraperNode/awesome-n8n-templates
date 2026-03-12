# 💬 Automate multi-step onboarding emails from Notion leads via Gmail and Telegram

> ⚡ **29 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This workflow automates a complete 5-step user onboarding sequence by integrating **Notion** (as a CRM), **Gmail** (for sending emails), and **Telegram** (for team alerts).

Instead of manually checking user sign-up dates, this workflow runs daily to detect where each user is in their journey and triggers the appropriate action.

## How it works
The workflow checks your Notion database every 24 hours and performs the following actions based on the user's registration date:
* **Day 0 (Welcome):** Sends an immediate welcome email via Gmail to new signups.
* **Day 1 (Value):** Sends a "Pro Tip" email to encourage feature adoption.
* **Day 3 (Check-in):** Sends a soft check-in email asking if the user needs help.
* **Day 7 (Sales Push):** Sends a personal email from a manager to users who haven't converted yet, and **sends a Telegram notification** to your sales team about this hot lead.
* **Trial Expiry:** Automatically detects when a trial is about to expire (3 days left) and sends a renewal reminder.

## Setup steps
1.  **Duplicate the Notion Template**
    You need a specific database structure for this workflow to work.
    [👉 Click here to duplicate the CRM Template](https://www.notion.so/2e56bbcb3d0b8161ab0af95fc0a11bbf?v=2e56bbcb3d0b810db135000c03e11f51&source=copy_link)

2.  **Configure Content**
    Double-click the `📝 CONFIGURATION` node. Here you can easily edit:
    * **Email Subjects & Bodies:** Customize the text for all 5 emails in one place.
    * **Telegram Chat ID:** Add your team's chat ID to receive alerts.

3.  **Connect Accounts**
    * Select your **Notion Database** in the Notion nodes.
    * Connect your **Gmail** account in the email nodes.
    * (Optional) Add your **Telegram** credentials.

4.  **Activate**
    Turn on the workflow. It is set to run daily by default.

## 🔗 Nodes Used

Telegram, Gmail, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
