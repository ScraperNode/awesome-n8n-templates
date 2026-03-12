# 🎫 AI-powered webinar feedback replies with GPT-4, Google Sheets, and Gmail

> ⚡ **91 views** · 🎫 [Ticket Management & Triage](../)

## Description

## How it works
This workflow captures webinar feedback through a webhook and normalizes the submitted data for processing. It stores raw feedback in Google Sheets, uses an AI model to understand sentiment and intent, and generates a personalized response. A professional HTML thank-you email is sent automatically to each attendee. All replies and delivery details are logged back into the spreadsheet for tracking.

## Step-by-step
- **Receive webinar feedback**
  - **Feedback Webhook** – Accepts feedback submissions from a webinar form in real time.
  - **ID Generation** – Creates a human-readable, unique feedback ID for tracking.
  - **Normalize Feedback** – Cleans and standardizes incoming fields like name, email, rating, and comments.

- **Store and enrich feedback**
  - **Store Partial** – Saves the raw feedback data into Google Sheets.
  - **Common Resources** – Attaches shared webinar resources such as recordings and slides.

- **Analyze feedback with AI**
  - **Message a model** – Evaluates sentiment, engagement level, and intent using an AI model.
  - **Parse AI Response** – Extracts structured insights like segment, reply text, and next steps.

- **Generate and send follow-up**
  - **Merge** – Combines feedback data, AI response, and resources.
  - **Build Email HTML** – Creates a clean, professional HTML email tailored to each attendee.
  - **Send AI Thank You Email** – Sends the personalized follow-up via Gmail.

- **Log final outcome**
  - **Store Feedback** – Updates Google Sheets with the sent email content, timestamp, and status.

## Why use this?
- Save time by automating webinar feedback follow-ups end to end.
- Ensure every attendee receives a thoughtful, personalized response.
- Maintain a complete feedback and communication log in one place.
- Improve engagement without sounding promotional or generic.
- Scale post-webinar communication without manual effort.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
