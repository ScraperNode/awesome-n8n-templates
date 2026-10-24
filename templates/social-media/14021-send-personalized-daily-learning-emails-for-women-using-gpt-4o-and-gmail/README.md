# 📱 Send personalized daily learning emails for women using GPT-4o and Gmail

> ⚡ **1,863 views** · 📱 [Social Media & Email Marketing](../)

## Description

## 📊 Description
Most learning newsletters send the same email to everyone. This workflow does the opposite — every subscriber gets a completely different email every single day, personalized to their topic interest, learning phase, and how far they've come in their journey.
Built specifically for women's skill development programs, coaching platforms, and edtech creators who want to deliver real personalized learning at scale without manually writing hundreds of emails. You manage the content library, the AI handles the personalization, and the workflow handles the delivery — every morning at 9AM without you touching anything.

## What This Workflow Does
⏰ Triggers every morning at 9AM automatically
📋 Fetches all subscribers from Google Sheets with their name, email, topic interest, and subscription date
🧮 Calculates each subscriber's day number, week number, and learning phase — Beginner, Intermediate, or Advanced — based on how long they've been subscribed
📚 Fetches your full content library and scores every lesson against each subscriber's topic interest and phase
🎯 Picks the best matching lesson per subscriber — falls back to day-index rotation if no strong match found
🔁 Loops through each subscriber one at a time to ensure every email is individually generated
🤖 Sends each subscriber's profile and matched lesson to GPT-4o which generates a fully personalized 3-paragraph lesson explanation, actionable task, key takeaways, and a motivational quote from a woman leader in their field
📧 Builds a beautiful branded HTML email and sends it via Gmail
📝 Logs every delivery to a SendLog sheet with date, name, lesson title, phase, category, and AI snippet

## Key Benefits
✅ Every subscriber gets a unique email — no generic blasts
✅ Learning phase auto-advances as subscribers stay longer
✅ GPT-4o adapts lesson tone and depth to Beginner, Intermediate, or Advanced
✅ Motivational quotes always come from women leaders in the relevant field
✅ Full delivery log in Google Sheets for tracking and analytics
✅ Works for any skill category — coding, finance, leadership, marketing, and more

## Features
- Cron-based daily trigger at 9AM
- Automatic learning phase calculation per subscriber
- Content scoring and matching engine
- Day-index fallback rotation for unmatched subscribers
- GPT-4o lesson personalization with phase-aware prompting
- Woman leader motivational quotes per field
- Branded HTML email template with inline CSS
- Dynamic subject line per subscriber
- Gmail delivery with individual 

## personalization
- Full SendLog tracking in Google Sheets
- Loop-based processing — one subscriber at a time for accuracy

## Requirements
- OpenAI API key (GPT-4o access)
- Google Sheets OAuth2 connection
- Gmail OAuth2 connection
- A configured Google Sheet with 3 sheets: Subscribers, ContentLibrary, SendLog

## Setup Steps
- Copy the Google Sheet template and grab your Sheet ID
- Paste the Sheet ID into all Google Sheets nodes
- Add your Google Sheets OAuth2 credentials
- Add your OpenAI API key to the GPT-4o node
- Add your Gmail OAuth2 credentials
- Populate the Subscribers sheet with your learners
- Populate the ContentLibrary sheet with your lessons — at least 5-10 per category
- Run the workflow manually once to test with your first subscriber
- Confirm the HTML email looks correct in your inbox

## Target Audience
🎓 Women's skill development platforms and bootcamps
📧 Edtech creators running personalized learning newsletters
💼 Career coaches who want to deliver daily value to their community
🤖 Automation agencies building AI-powered email learning systems for clients

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
