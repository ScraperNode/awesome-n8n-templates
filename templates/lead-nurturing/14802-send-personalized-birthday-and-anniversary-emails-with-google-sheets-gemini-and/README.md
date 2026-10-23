# 💬 Send personalized birthday and anniversary emails with Google Sheets, Gemini, and Gmail

> ⚡ **2,591 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# Birthday & Milestone Message Automation (n8n Google Sheets + Gemini AI + Gmail)

This workflow automatically sends personalized birthday and anniversary emails to clients. It runs daily, checks a Google Sheet for matching dates, generates a warm AI message using Google Gemini and sends it via Gmail. It also includes a thoughtful investment idea tailored to the client’s age, risk profile and relationship type.


### Quick Implementation Steps

1. Connect **Google Sheets OAuth2**
2. Add your **Google Gemini API key**
3. Connect **Gmail OAuth2**
4. Update the **Google Sheet ID**
5. Ensure your sheet has required columns:
   - Client Name, Email, Advisor Name, Birthday, Anniversary, Relationship Type (Premium / Normal), Client Age, Risk Profile
6. Activate the workflow


## What It Does

This workflow automates client relationship engagement for financial advisors by sending personalized messages on important milestones like birthdays and anniversaries. It eliminates the need for manual tracking and ensures that no important date is missed.

Every day at a scheduled time, the workflow reads all client records from a Google Sheet and checks if any client has a birthday or anniversary on that day. If a match is found, it prepares detailed variables including client information, tone and occasion.

The workflow then intelligently selects a suitable investment idea based on the client’s age group and risk profile. This context is passed to Google Gemini, which generates a warm, human-like message. Finally, the message is formatted and sent as a text email via Gmail.


## Who’s It For

- Financial advisors  
- Wealth managers  
- Investment consultants  
- Relationship managers handling client portfolios  
- Firms managing high-value or premium clients  


## Requirements

To use this workflow, you need:

- n8n instance (Cloud or Self-hosted)
- Google Sheets account with client data
- Google Gemini API key
- Gmail account for sending emails
- Proper OAuth2 credentials configured in n8n
- A Google Sheet with the following columns:
  - Client Name  
  - Email  
  - Advisor Name  
  - Birthday  
  - Anniversary  
  - Relationship Type (Premium / Normal)  
  - Client Age  
  - Risk Profile  


## How It Works & Setup Guide

### 🧩 Step-by-Step Workflow Execution

1. **Schedule Trigger**
   - Runs every day at **9:01 AM**
2. **Read Client Data**
   - Fetches all rows from Google Sheets
3. **Settings Node**
   - Stores configuration such as:
     - Message tone
     - Default values
     - Subject line format
     - Labels for birthday and anniversary
4. **Date Matching (IF Node)**
   - Checks if today matches:
     - Client Birthday OR
     - Client Anniversary
   - If no match → workflow stops
5. **Prepare Variables**
   - Extracts and formats:
     - Client details
     - Occasion type
     - Message tone (premium or normal)
     - Email subject
     - AI prompt
6. **Investment Suggestion Logic (Code Node)**
   - Selects suggestion based on:
     - Age group (Young / Mid / Senior)
     - Risk profile (Low / Moderate / High)
   - Adds a meaningful explanation
7. **AI Message Generation**
   - Google Gemini generates:
     - Warm personalized message
     - Includes emotional investment suggestion
8. **Format Email**
   - Converts AI output into clean text format
9. **Send Email**
   - Gmail sends the message directly to the client


## How To Customize Nodes

- **Schedule Node**
  - Change time based on your preference
- **Settings Node**
  - Modify:
    - Tone (formal, friendly)
    - Subject lines
    - Default age or risk values
    - Advisor firm name
- **Google Sheet Node**
  - Replace Sheet ID with your own data source
- **Code Node (Investment Logic)**
  - Add or modify:
    - Investment ideas
    - Age group logic
    - Risk mapping
- **Gemini Node**
  - Adjust prompt for:
    - More emotional tone
    - Shorter or longer messages
- **Gmail Node**
  - Change sender name or email behavior


## Add-ons (Enhancements)

- Add **WhatsApp or SMS integration** for multi-channel messaging  
- Store sent messages in **Google Sheets or CRM**  
- Add **Slack notifications** for internal tracking  
- Include **attachments (PDF reports or offers)**  
- Add **client segmentation logic** for advanced personalization  


## Use Case Examples

1. Automatically send birthday wishes to all clients without manual effort  
2. Strengthen relationships with premium clients using personalized messages  
3. Promote subtle investment awareness without sounding salesy  
4. Maintain consistent engagement across a large client base  
5. Improve client retention through thoughtful communication  

There can be many more such use cases depending on how you want to extend and customize this workflow.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No emails are sent | No matching date found | Verify birthday/anniversary format in sheet |
| Workflow stops early | IF condition not satisfied | Check date comparison logic |
| Incorrect client data | Column mismatch | Ensure exact column names are used |
| Gemini not generating response | API key issue | Verify Gemini credentials |
| Emails not delivered | Gmail authentication issue | Reconnect Gmail OAuth |
| Wrong message tone | Settings misconfigured | Check tone values in Settings node |


## Need Help?

If you need assistance setting up this workflow, customizing it for your business or building advanced automation solutions, feel free to reach out to our [n8n workflow development](https://www.weblineindia.com/n8n-automation/) team at **WeblineIndia**.

Our team can help you design scalable, production-ready workflows tailored to your exact requirements.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
