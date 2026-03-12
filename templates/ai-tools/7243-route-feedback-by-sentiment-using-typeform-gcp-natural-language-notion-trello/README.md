# 🎯 Route feedback by sentiment using Typeform, GCP Natural Language, Notion & Trello

> ⚡ **189 views** · 🎯 [AI Summarization & Classification](../)

## Description

# Feedback Sentiment Workflow (Typeform → GCP → Notion/Slack/Trello)

This template ingests feedback from **Typeform**, runs **Google Cloud Natural Language** sentiment analysis, routes based on sentiment, and then creates a **Notion** database page and posts a **Slack** notification for positive items, or creates a **Trello** card for negative items.  
The flow is designed for **quick setup** and **safe sharing** using placeholders for IDs and credentials.

---

## How it Works

1. **Typeform Trigger**  
   Captures each new submission and exposes answers like **Name** and the long-text **Feedback** field.

2. **Google Cloud Natural Language**  
   Analyzes the feedback text and returns a sentiment score in:  
   `documentSentiment.score`

3. **Check Sentiment Score (IF)**  
   - True branch: Score &gt; 0 → Positive  
   - False branch: Score ≤ 0 → Non-positive  

4. **Add Feedback to Notion (True branch)**  
   Creates a new page in a **Notion database** with mapped properties.

5. **Notify Slack (after Notion)**  
   Posts the feedback, author, and score to a Slack channel for visibility.

6. **Create Trello Card (False branch)**  
   Logs non-positive items to a Trello list for follow-up.

---

## Required Accounts

- **Google Cloud Natural Language API** enabled (OAuth2 or service credentials).  
- **Notion integration** with database access to create pages.  
- **Slack app/bot token** with permission to post to the target channel.  
- **Typeform account** with a form including:  
  - Long Text feedback question  
  - Name field  

---

## Notion Database Columns

- **Name (title):** Person name or responder label  
- **Feedback (rich_text):** Full feedback text  
- **Sentiment Score (number):** Numeric score from GCP `∈ [-1, 1]`  
- **Source (select/text):** "Typeform" for provenance  
- **Submitted At (date):** Timestamp from the trigger  

---

## Customization Options

- **Sentiment Threshold:** Adjust IF condition (e.g., `≥ 0.25`) for stricter positivity.  
- **Slack Routing:** Change channel, add blocks/attachments for richer summaries.  
- **Trello Path:** Point to a triage list and include labels for priority.  
- **Field Mapping:** Update the expression for feedback question to match Typeform label.  
- **Database Schema:** Add tags, product area, or customer tier for reporting.  

---

## Setup Steps

1. Connect credentials: Typeform, GCP Natural Language, Notion, Slack, Trello.  
2. Replace placeholders in workflow JSON:  
   - Form ID  
   - Database ID  
   - Slack Channel  
   - Trello List ID  
3. Map fields: Set Feedback + Name expressions from Typeform Trigger output into Notion and Slack.  
4. Adjust IF threshold for your definition of "positive".  
5. Test with a sample response and confirm:  
   - Notion page creation  
   - Slack notification  
   - Trello card logging  

---

## 🔗 Nodes Used

Slack, Trello, Typeform Trigger, Google Cloud Natural Language, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
