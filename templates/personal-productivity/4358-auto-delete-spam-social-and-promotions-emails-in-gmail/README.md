# ⚡ Auto-Delete SPAM, Social, and Promotions Emails in Gmail

> ⚡ **3,619 views** · ⚡ [Personal Productivity](../)

## Description

Wake up to a clean Gmail inbox. This workflow auto-deletes emails sitting in your SPAM, Social, and Promotions categories, so clutter never piles up.

*Last updated: September 2026.*

## Who is this for?
Gmail users who want a tidy inbox without manual effort. Especially handy if SPAM, social updates, or promo emails keep burying the messages that matter.

## What problem is this workflow solving?
Unwanted emails clutter your inbox and bury what matters. Deleting them by hand is repetitive and easy to put off. This workflow does the cleanup for you on a schedule.

## What this workflow does
Every 3 days, this workflow deletes emails from Gmail’s SPAM, Social, and Promotions categories. It uses [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin)’s Gmail node to fetch these emails, merges them into a single list, splits out individual email IDs, and deletes each one. The scheduled process ensures consistent inbox maintenance.

## Setup
1. Set up valid Gmail OAuth2 credentials in [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin).
2. Import the "Clean My Mail" workflow into your [n8n instance](https://n8n.partnerlinks.io/creator-khmuhtadin).
3. Confirm the Gmail nodes target SPAM, CATEGORY_SOCIAL, and CATEGORY_PROMOTIONS labels.
4. Adjust the "Run Every 3 Days (Trigger)" node’s schedule if needed.
5. Activate the workflow to begin automated cleaning.

## How to customize this workflow to your needs
- Change the Gmail node labels to target other categories or custom labels.
- Adjust the schedule frequency in the trigger node.
- Add filters to spare specific emails from deletion.
- Extend functionality with nodes for archiving or notifications.

### Quick Answers
**How often does it clean?**  
Every 3 days by default. Change the trigger schedule to any interval you prefer.  
**Which labels get deleted?**  
SPAM, Social (CATEGORY_SOCIAL), and Promotions (CATEGORY_PROMOTIONS).  
**Can I protect certain emails?**  
Yes. Add filters or adjust the targeted labels so important mail is spared.  

**Made by:** [khmuhtadin](https://khmuhtadin.com)
**Need a custom?** contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](https://khmuhtadin.com)**

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
