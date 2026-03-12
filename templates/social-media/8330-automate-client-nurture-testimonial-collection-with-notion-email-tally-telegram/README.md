# 📱 Automate client nurture & testimonial collection with Notion, Email, Tally & Telegram

> ⚡ **46 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Automate Client Nurture & Testimonial Collection with Notion and Email

You’ve onboarded your client with elegance. Now, keep the relationship warm — and get glowing testimonials — without manual follow-up.

This workflow listens to your **Notion Clients database** and automatically:
- 💌 Sends a 3-part nurture sequence (7, 30, 60 days)
- 🎉 Celebrates milestones with personalized messages
- 📝 Requests a testimonial at the perfect moment
- 💬 Notifies you on Telegram when feedback arrives
- 📊 Logs everything in Notion for tracking

Perfect for:
- Coaches who want consistent client care
- Designers building social proof
- Service providers scaling with grace

No spreadsheets. No forgotten follow-ups. Just **gentle, timely nurturing** — on autopilot.

## Prerequisites

| Service | Purpose | Free Tier? |
|--------|--------|-----------|
| n8n | Orchestrate automation | Yes |
| Notion | Store client records | Yes |
| SMTP Email | Send nurture emails | Yes (Gmail) |
| Telegram | Owner notifications | Yes |
| Tally or Fillout | Testimonial form | Yes |

🔐 Store all API keys securely in n8n’s **Credentials** section.

## Notion Database Requirements

Your `Clients` database must include these properties:

| Property | Type | Example |
|--------|------|--------|
| `Name` | Title | Ava Laurent |
| `Email` | Email | ava@example.com |
| `Status` | Select | Confirmed |
| `Onboarded Date` | Date | 2025-09-01 |
| `Package` | Select | Growth, Pro |
| `Testimonial` | Text | “Best coach ever!” |
| `Consent` | Checkbox | True |
| `Milestone` | Select | Day 7, Day 30, Day 60 |

📌 Use the same database as your **Onboarding Concierge**.

## Step-by-Step Setup Instructions

### 1. Import the Workflow
1. In n8n, go to **Workflows &gt; Create from JSON**
2. Paste the provided JSON
3. Click **Import**

### 2. Set Up Credentials
- **Notion**: Connect to your `Clients` database
- **Email**: Set up SMTP (e.g., Gmail app password)
- **Telegram** (optional): Add bot token and chat ID

🔐 Never hardcode keys.

### 3. Configure Nurture Emails
In the **Email: Send Nurture** nodes:
- Customize tone for your industry (coaching, design, e-commerce)
- Add your logo and branding
- Include a personal note

### 4. Build Your Testimonial Form
Use **Tally** or **Fillout** to create a simple form:
- “How has this program helped you?”
- “What would you tell someone considering it?”
- Webhook sends response to n8n

### 5. Automate the Flow
The workflow uses **Schedule Triggers** and **Delays** to send emails at:
- Day 7: “Getting Started” tips
- Day 30: “Midpoint Check-In” + resource
- Day 60: “How’s it going?” + testimonial ask

🔁 Runs automatically for every new client.

## Customization Guidance

- 🎨 **Change email tone**: Friendly, professional, or bold
- 🎁 **Add a bonus**: Send a gift card for testimonials
- 📲 **Swap Telegram for WhatsApp**: Use WhatsAble
- 📊 **Sync to Airtable**: Mirror feedback for reporting
- 🖥️ **Build a testimonial gallery**: Use Softr + Notion

This workflow grows with your business.

## Nodes Used

- `n8n-nodes-base.notion` – Monitor client status
- `n8n-nodes-base.email` – Send nurture emails
- `n8n-nodes-base.tally` – Collect testimonials
- `n8n-nodes-base.telegram` – Owner alerts
- `n8n-nodes-base.scheduleTrigger` – Time-based actions

## 🔗 Nodes Used

Send Email, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
