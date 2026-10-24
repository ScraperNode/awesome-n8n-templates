# 📱 Sync Ghost members with MailerLite subscribers in real time

> ⚡ **34 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Sync Ghost Members with MailerLite Subscribers in Real-Time

This n8n workflow automatically syncs your Ghost CMS members with MailerLite subscribers in real-time using webhooks. When members join or leave your Ghost site, they're automatically added or unsubscribed from MailerLite with no manual exports, imports, or CSV files required. A simple configuration form lets you enable or disable sync settings for member additions and deletions independently.

## Who is this for?

Ghost site owners, content creators, and membership site operators who use MailerLite for email marketing and want to keep the two platforms in sync with no manual effort.

## What problem is this workflow solving?

MailerLite and Ghost offer email capabilities that solve different issues: one is for delivering content, while the other is for marketing and promotions.  Keeping the two lists in sync can lead to tedious manual effort and errors.  This workflow automates that process saving time and ensures that all Ghost members are added or removed from MailerLite seemlessly and in real-time.

## What this workflow does

- **Configuration Form**: Provides an easy-to-use form trigger where you set your Ghost API URL, webhook URL, and enable/disable sync for member additions and deletions.
- **Webhook Management**: Automatically creates and manages webhooks in Ghost for `member.added` and `member.deleted` events based on your settings.
- **Real-Time Sync**: Listens for Ghost webhook events and immediately syncs changes to MailerLite:
  - **Member Added**: Creates a new subscriber in MailerLite with the member's email.
  - **Member Deleted**: Unsubscribes the member from MailerLite.
- **Remembers Settings and Sync Status**: Stores Ghost webhook IDs in an n8n data table and updates the workflow's own configuration to remember your settings between runs.
- **Smart Initialization**: Automatically creates the required data table if it doesn't exist on first run.

## Setup

1. **Get Credentials**:
   - **Ghost Admin API**: Create an integration in your Ghost Admin panel (Settings → Integrations → Add custom integration) to get API credentials. Make note your Ghost API URL for later.
   - **MailerLite API**: Generate an API key from your MailerLite account settings.
   - **n8n API**: Create n8n API credentials to allow the workflow to update itself (Settings → API).
2. **Configure Credentials in Workflow**: Add your Ghost Admin API, MailerLite API, and n8n API credentials to the appropriate nodes.
3. **Sync Settings Form**:
   - Open the workflow and copy the Webhook node URL (from the "Webhook" node in the workflow).
   - Trigger the "Sync Settings Form" to access the configuration form.
   - Fill in the following fields:
     - **Ghost API URL**: Your Ghost API URL (e.g., `https://yourblog.ghost.io`) You will have used this setting up your credentials as well.
     - **Webhook URL**: The URL from the Webhook node
     - **Ghost Member Added &gt; Added to Mailerlite**: Enable or Disable
     - **Ghost Member Removed &gt; Removed from Mailerlite**: Enable or Disable
   - Submit the form to activate the sync.

## Requirements

- **Ghost CMS**: Self-hosted or Ghost(Pro) with Admin API access.
- **MailerLite Account**: Active account with API access.


## How to further customize the workflow

- **Add Custom Fields**: Extend the MailerLite nodes to map additional Ghost member fields (name, labels, notes) to MailerLite custom fields.
- **Group Management**: Modify the "Create a subscriber" node to automatically add new subscribers to specific MailerLite groups based on Ghost member properties.
- **Notifications**: Add Slack or Email nodes to receive notifications when members are synced.
- **Filtering**: Add conditional logic to sync only specific types of members (e.g., paid members only) based on Ghost member fields.

---

**Made by**: [Epilocal](https://www.epilocal.com/) - We help local businesses thrive online
**Tags**: ghost, mailerlite, email-marketing, webhook, cms

## 🔗 Nodes Used

HTTP Request, Webhook, MailerLite, n8n, n8n Form Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
