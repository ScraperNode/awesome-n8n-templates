# 🎫 Generate and approve Google review replies with Groq AI and Slack

> ⚡ **724 views** · 🎫 [Ticket Management & Triage](../)

## Description

## How it works  
This workflow automatically handles new Google reviews by generating AI-powered replies and deciding how to respond based on rating. Positive reviews are replied to instantly, while lower ratings are routed for manual approval via Slack. It ensures fast engagement without losing control over sensitive responses. The process runs continuously using a real-time trigger.

## Step-by-step  

- **Capture new reviews**  
  - **Fetch New Reviews** – Triggers when a new review is posted in Google Business Profile.  
  - **Edit Fields** – Extracts and formats reviewer name, rating, and review text.  

- **Generate AI response**  
  - **AI Agent** – Creates a contextual, human-like reply based on the review content.  
    - **Groq Chat Model** – Powers the AI Agent with a language model for response generation.  

- **Decision and response handling**  
  - **If** – Checks if the review rating is positive (4 or 5 stars).  
  - **Reply to review** – Automatically posts reply for positive reviews.  
  - **Send message and wait for response** – Sends review + AI reply to Slack for approval if rating is lower.  
  - **If1** – Checks whether the Slack response is approved.  
  - **Reply to review1** – Posts the approved reply back to Google Business Profile.  

## Why use this?  

- Respond instantly to positive reviews and boost customer engagement  
- Maintain control over sensitive or negative feedback with approval flow  
- Save time by automating repetitive review responses  
- Ensure consistent tone using AI-generated replies  
- Improve brand reputation with faster, structured responses

## 🔗 Nodes Used

Slack, AI Agent, Groq Chat Model, Google Business Profile, Google Business Profile Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
