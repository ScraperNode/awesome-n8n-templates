# 💬 Generate personalized sales follow-ups from Fireflies transcripts with Gemini & Google Drive

> ⚡ **85 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

**Automatically Generate AI Follow-Up Messages from Fireflies Transcripts**

This workflow automates creating personalized follow-up messages for your clients based on meeting transcripts fetched from Fireflies. It ensures the right guest information is captured, the transcript is processed by AI, and the output is stored neatly in Google Drive.

**What it Does**


1. **Triggers on New Appointment:** The workflow starts when a new appointment is created in Google Calendar.
2. **Extracts Guest and Appointment Details:**  The Edit Fields node extract the guest's email, appointment start/end time, status, and creator.
3. **Fetches Transcript from Fireflies:** The GraphQL node queries Fireflies using the guest email to fetch the meeting transcript, including sentences, participants, and summary.
4. **Skip IF Empty:** The Filter node skip passing the Info to AI Agent if there is no record in Fireflies
5. **Generates Follow-Up Messages via AI:** The AI Agent node (powered by Google Gemini) creates 12 personalized follow-up messages/emails for the guest.  
- Messages are conversational, concise, and reference topics and pain points mentioned in the call.  
- The messages are tailored to re-engage the client and guide them towards making a purchase.
6. **Stores Messages in Google Drive:** The Google Drive node saves the AI-generated messages in a specific folder, named after the guest, for easy reference.

**Use Cases**

- **Missed Follow-Ups:** Automatically create personalized follow-ups after client calls without manual effort.
- **Sales & Customer Engagement:** Ensure every client gets context-specific messages, improving engagement and conversion.
- **Team Collaboration:** Messages are saved in Google Drive, making it easy for your team to review and send manually if needed.

**Customization**

- **Transcript Source:** The GraphQL node can be customized to fetch transcripts for specific guests or date ranges.
- **Message Personalization:** The AI prompt in AI Agent can be updated to change the tone, style, or length of messages.
- **Storage Folder:** You can change the folder in the Google Drive node to organize messages per team, campaign, or client.

**Troubleshooting**

- **AI Messages Not Generated:** Verify AI Agent node is connected to Google Gemini Chat Model and has correct API credentials.
- **Messages Not Saved:** Check the Google Drive folder ID and access permissions.

**Requirements**

- An N8N instance (self-hosted or cloud).  
- Google Gemini API credentials.  
- Google Drive account with proper folder access.  
- Fireflies API credentials with GraphQL access.

**How to Set Up**

- **Connect Credentials:** In Google Calendar Node, GraphQL, AI Agent, and Google Drive nodes, select your credentials for Google Calendar, Fireflies, Google Gemini, and Google Drive.

- **Set Guest Details Extraction:** Verify the Edit Fields node extracts all required fields (first name, last name, email, appointment times, status).
- **Update GraphQL Query:** Ensure the query correctly fetches transcripts by guest email. Adjust if your Fireflies workspace uses different fields.
- **Customize AI Prompt:** Update AI Agent with the exact instructions for message generation (number of messages, tone, context, platform).
- **Configure Google Drive Storage:** Select the proper folder to save messages, ideally using guest name as file name for easy reference.
- **Activate Workflow:** Save and activate the workflow.


- **Video Tutorial:** Step by step video instructions present here for beginners [https://youtu.be/5t9xXCz4DzM](https://youtu.be/5t9xXCz4DzM)

## 🔗 Nodes Used

Google Drive, GraphQL, Google Calendar Trigger, Filter, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
