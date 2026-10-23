# 👥 Approve or reject Dokan marketplace vendors from Telegram

> ⚡ **7 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow polls your Dokan marketplace for vendors awaiting approval and posts each new pending vendor to Telegram with Approve/Reject actions, then updates the vendor status in Dokan via token-protected webhooks and confirms the result back in Telegram.

## How it works
1. Runs every 15 minutes on a schedule.
2. Fetches up to 100 Dokan vendors with the `inactive` status via the Dokan REST API and keeps only vendors that have not already been announced.
3. Posts each newly detected vendor to a Telegram chat with inline buttons to Approve, Reject, or open the vendor profile in wp-admin.
4. When Approve is clicked, receives the webhook request, validates the shared token, and sets the vendor status to `active` in Dokan.
5. When Reject is clicked, receives the webhook request, validates the shared token, and sets the vendor status to `inactive` in Dokan.
6. After an approval or rejection, clears the saved de-duplication entry so the vendor can be re-announced if they return to pending, sends a confirmation message to Telegram, and returns an HTML response to close the browser tab.

## Setup
1. Create an application password (or Basic Auth user) in WordPress with `manage_woocommerce` permission and add it as an n8n HTTP Basic Auth credential for the Dokan API requests.
2. Create a Telegram bot and provide its bot token, then set your target Telegram chat/channel ID in the Telegram sendMessage requests.
3. Replace `https://your-marketplace.com` with your Dokan site URL in the Dokan API requests and the wp-admin “View profile” button link.
4. Replace `https://your-n8n-instance.com` in the Telegram inline button URLs with your public n8n base URL.
5. Set `YOUR_APPROVAL_TOKEN` to a long random string and ensure it matches the `token` query parameter used in the Approve/Reject button URLs.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
