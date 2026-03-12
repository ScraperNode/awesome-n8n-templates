# 💬 Automate WhatsApp lead follow-ups and nurturing with WATI, Airtable and OpenAI

> ⚡ **30 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Maximize your conversion rates with this end-to-end automated outreach and lead nurturing system. This workflow manages the entire sales lifecycle—from instant contact enrollment via WhatsApp to AI-personalized follow-ups and comprehensive A/B performance tracking—all integrated through WATI, Airtable, and OpenAI.

---

## 🎯 What This Workflow Does

This template operates across four specialized pipelines to ensure no lead is left behind:

### 📥 Pipeline A: Instant Enrollment
Sales reps can enroll a new lead directly from WhatsApp by typing a simple command (e.g., `enroll &lt;phone&gt; &lt;name&gt; &lt;company&gt; &lt;campaignId&gt;`). The system automatically assigns an A/B testing variant and saves the record to Airtable.

### ⏰ Pipeline B: Intelligent Follow-up Scheduler
Every morning at 9 AM, the bot identifies leads due for a touchpoint. OpenAI generates a unique, personalized message based on the lead's profile and assigned tone (Formal vs. Casual), which is then delivered via WATI.

### 💬 Pipeline C: Engagement & Intent Tracker
Every inbound reply is analyzed by AI to detect the lead's intent (e.g., "Interested", "Question", or "Unsubscribe"). The system automatically updates the CRM status and, if a lead unsubscribes or converts, instantly pauses future automated follow-ups.

### 📊 Pipeline D: Real-time Analytics
By sending the command `report`, you receive an instant performance dashboard showing conversion rates, total engagement, and a clear comparison of which A/B variant is winning.

---

## ✨ Key Features

- **Command-Based Control:** Manage your entire CRM database using simple WhatsApp keywords like `enroll`, `report`, and `pause`.
- **Dynamic Personalization:** OpenAI crafts context-aware messages that mention the lead’s specific company and name, avoiding the "bot feel" of standard templates.
- **Built-in A/B Testing:** Automatically splits leads into two groups to test different messaging strategies and find what converts best.
- **Reputation Protection:** Immediate status updates for "Unsubscribe" or "Not Interested" intents ensure you remain compliant and professional.
- **Rich CRM Integration:** Uses Airtable to store detailed logs of every sent message and received reply for a complete audit trail.

---

## 💼 Perfect For

- **SDR & Sales Teams:** Automating the first 5–7 touchpoints so reps can focus only on "Interested" leads.
- **Event Organizers:** Following up with attendees post-webinar or conference.
- **Recruiters:** Managing candidate outreach and tracking initial screening responses.
- **Agencies:** Running outreach campaigns for multiple clients from a single dashboard.

---

## 🔧 What You'll Need

### Required Integrations

- **WATI:** For WhatsApp triggering and message dispatch.
- **Airtable:** To act as your central campaign database.
- **OpenAI API:** For intelligent message generation and intent detection.

### Configuration Steps

1. **Airtable:** Create a base with four tables:
   - `Contacts`
   - `Campaigns`
   - `FollowUps`
   - `Engagement`

2. **Airtable IDs:** Replace the placeholder Base and Table IDs in all Airtable nodes.

3. **WATI:** Set up your WATI API credentials.

---

Ready to scale your outreach? Import this template and connect your Airtable to start automating your follow-up campaigns today!

## 🔗 Nodes Used

Airtable, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
