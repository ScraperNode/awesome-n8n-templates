# ⚡ Auto-Delete SPAM, Social, and Promotions Emails in Gmail

> ⚡ **3,252 views** · ⚡ [Personal Productivity](../)

## Description

## Who is this for?
This workflow is perfect for Gmail users who want a tidy inbox without manual effort. It’s especially great for those overwhelmed by SPAM, social media updates, or promotional emails and want them automatically removed regularly.

## What problem is this workflow solving?
Unwanted emails like SPAM, social notifications, and promotions can clutter your Gmail inbox, making it hard to focus on what matters. Manually deleting them is repetitive and time-consuming. This workflow automates the cleanup, keeping your inbox streamlined.

## What this workflow does
Every 3 days, this workflow deletes emails from Gmail’s SPAM, Social, and Promotions categories. It uses n8n’s Gmail node to fetch these emails, merges them into a single list, splits out individual email IDs, and deletes each one. The scheduled process ensures consistent inbox maintenance.

## Setup
1. Set up valid Gmail OAuth2 credentials in n8n.
2. Import the "Clean My Mail" workflow into your [n8n instance](https://n8n.partnerlinks.io/khaisastudio).
3. Confirm the Gmail nodes target SPAM, CATEGORY_SOCIAL, and CATEGORY_PROMOTIONS labels.
4. Adjust the "Run Every 3 Days (Trigger)" node’s schedule if needed.
5. Activate the workflow to begin automated cleaning.

## How to customize this workflow to your needs
- Change the Gmail node labels to target other categories or custom labels.
- Adjust the schedule frequency in the trigger node.
- Add filters to spare specific emails from deletion.
- Extend functionality with nodes for archiving or notifications.

***made by:** [khmuhtadin](https://khmuhtadin.com)*
**Need a custom?** contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](khmuhtadin.com)**

## 🔗 Nodes Used

Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
