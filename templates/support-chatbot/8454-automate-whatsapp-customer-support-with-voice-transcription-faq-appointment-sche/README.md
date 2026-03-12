# 💬 Automate WhatsApp customer support with voice transcription, FAQ & appointment scheduling

> ⚡ **2,845 views** · 💬 [Support Chatbots](../)

## Description

## WhatsApp customer service bot (with voice note transcription) handling FAQ, service enquiries and schedule appointments

### Who’s it for
This template is designed for businesses that provide customer support and appointment-based services over WhatsApp. It’s ideal for service providers (e.g., clinics, salons, repair shops, consultants) that want to automate FAQs, share service information, handle voice note inquiries, and schedule appointments without manual effort.

---

### How it works / What it does
This workflow creates a WhatsApp customer service assistant that:
- **Transcribes voice notes** sent by customers into text for further processing.  
- Answers customer FAQs by looking up a Google Sheet knowledge base.  
- Provides service information (name, description, price) from a Google Sheet.  
- Schedules appointments by:
  - Asking the customer which service they want.  
  - Collecting their preferred day and time.  
  - Checking Google Calendar for available slots.  
  - Offering 3 options and letting the customer choose.  
  - Collecting name, email, and phone number.  
  - Creating the confirmed appointment in Google Calendar.  
- Sends all customer-facing messages via a WhatsApp integration node.

---

### How to set up
1. **Connect your tools**
   - Link your Google Sheets for FAQs and Services.
   - Connect your Google Calendar account.
   - Configure your WhatsApp integration.
   - Connect a transcription service (e.g., Whisper, Google Speech-to-Text, or another transcription API).

2. **Prepare your data**
   - FAQs Google Sheet → must contain columns:  
     `id | question | answer`  
   - Services Google Sheet → must contain columns:  
     `id | service_name | service_description | price`

3. **Adjust the flow**
   - Update the service names and questions to match your business.
   - Set the correct time zone in the Google Calendar node.
   - Update the WhatsApp integration node with your business account.
   - Configure the transcription node with your chosen API credentials.

---

### Requirements
- Google Sheets (for FAQs and Services)  
- Google Calendar  
- WhatsApp integration in n8n  
- Speech-to-Text API (for transcribing voice notes)  

---

### How to customize the workflow
- **Adding new FAQs**: Update the Google Sheet with new rows.  
- **Changing services**: Modify the Services Google Sheet to reflect updated offerings or prices.  
- **Custom messages**: Update the agent_reply node text to reflect your brand tone.  
- **Advanced logic**: Add routing for voice-note-only customers, VIP handling, or multilingual support.  

---

### Notes
- This template uses multiple external integrations (Google Sheets, Google Calendar, WhatsApp, Speech-to-Text).

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, Simple Memory, OpenAI, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
