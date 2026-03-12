# 🧾 Automate Stripe Invoicing Workflow with ClickUp & Gmail Notifications

> ⚡ **410 views** · 🧾 [Invoice Processing](../)

## Description

Stripe invoicing automation that is connected to your CRM, in this example, it is ClickUp. At the end of the flow, once your lead has been sent an invoice, you (or your team) will be sent an email notifying you of the newly sent invoice with all relevant details.

### How it works: 
• Monitors ClickUp task status → triggers workflow when status changes to send invoice.

• Fetches task details from ClickUp, including customer name, email, and project cost.

• Creates a Stripe customer using the fetched information.

• Generates a Stripe invoice via HTTP request, including description, footer, and due date (calculated in Unix timestamp).

• Adds invoice items automatically with correct amounts (converted to cents for Stripe).

• Sends the invoice to the customer automatically (manual or auto-charge option).

• Sends notification emails to team members with a link to the ClickUp task.

Works with other CRMs like Monday or HubSpot, not just ClickUp.

Test mode is available in Stripe to validate the workflow without sending real invoices.

### Setup steps: 
• You will need to connect your ClickUp Account 
• Connect your Stripe Account via HTTP Request (Shown in YouTube Video Linked Below)
• You will need to connect your email account to N8N (Gmail, Outlook etc) for sending the emails to your team and the client

### Important

Have your Stripe account and **PUT IT IN TEST/DEVELOPER MODE** when testing and developing the automation. Alternatively, set up an entirely separate account from your main Stripe account. 

This is only up until the point where you want to send the invoice, as you cannot send an invoice when your Stripe account is in test/developer mode

For a complete rundown on how to set this up watch my YouTube tutorial linked below

#### See full video tutorial here: https://youtu.be/vthK5I8x33k?si=W0Nreu403pDs-ud3

#### My LinkedIn: https://www.linkedin.com/in/seb-gardner-5b439a260/

## 🔗 Nodes Used

HTTP Request, ClickUp, ClickUp Trigger, Gmail, Stripe

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
