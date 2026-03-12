# 💬 Personalized follow-up emails for Zoom attendees with GPT-4 and Gmail

> ⚡ **221 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# 📧 Auto-Send AI Follow-Up Emails to Zoom Attendees

This workflow automatically emails personalized follow-ups to every Zoom meeting participant once the meeting ends.

---

## ⚙️ How It Works
1. **Zoom Webhook** → Captures meeting.ended event + participant list.  
2. **Normalize Data** → Extracts names, emails, and transcript (if available).  
3. **AI (GPT-4)** → Drafts short, professional follow-up emails.  
4. **Gmail** → Sends thank-you + recap email to each participant.

---

## 🛠️ Setup Steps
### 1. Zoom App
- Enable **`meeting.ended`** event.  
- Include participant email/name in webhook payload.  
- Paste workflow webhook URL.

### 2. Gmail
- Connect Gmail OAuth in n8n.  
- Emails are sent automatically per participant.

### 3. OpenAI
- Add your OpenAI API key.  
- Uses **GPT-4** for personalized drafting.

---

## 📊 Example Output
**Email Subject:**  
Follow-Up: Marketing Strategy Session

**Email Body:**  
Hi Sarah,
Thank you for joining our Marketing Strategy Session today.
Key points we discussed:

Campaign launch next Monday
Budget allocation approved
Need design assets by Thursday
Next steps: I'll follow up with the creative team and share the updated timeline.
Best,
David


---

⚡ With this workflow, every attendee feels valued and aligned after each meeting.

## 🔗 Nodes Used

Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
