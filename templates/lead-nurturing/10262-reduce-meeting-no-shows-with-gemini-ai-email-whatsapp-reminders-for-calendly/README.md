# 💬 Reduce meeting no-shows with Gemini AI, email & WhatsApp reminders for Calendly

> ⚡ **2,186 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## **How it works:**
This n8n workflow automates communication with meeting invitees to decrease no-show rates by sending timely email and WhatsApp reminders, and a clarification request if more information is needed to prepare the meeting.

## **Step-by-step:**
The workflow is triggered by an incoming email notification from Calendly about a newly scheduled meeting.

- It uses AI to extract key meeting data from the email content.
- It checks if the invitee didn't provide sufficient information, and, if there is a need for more information, sends a clarification request email.
- It calculates the waiting time required for the 24-hour and 1-hour reminders.
- It uses an If node to determine the correct waiting path based on the meeting time.
- It uses Wait nodes for timing the reminders correctly.
- Finally, it sends a reminder email and a WhatsApp reminder before the meeting. 

## **Customization Options:**
- Replace Google Gemini with your preferred LLM model (though Gemini works on the free tier).
- Tailor email and WhatsApp messages to speak your brand's language.
- Replace Twillio node to WhatsApp node to be a completly free usage flow.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, Twilio, AI Agent, Structured Output Parser, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
