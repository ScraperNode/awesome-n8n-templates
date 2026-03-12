# 🎫 Transform support emails into FAQs with GPT-4o, Gmail, Notion, and Slack

> ⚡ **75 views** · 🎫 [Ticket Management & Triage](../)

## Description

## 📘 Description:
This end-to-end automation transforms developer support emails into actionable FAQs and sentiment insights using Azure OpenAI GPT-4o, Gmail, Notion, Slack, and Google Sheets.
It not only classifies and summarizes each email into a Notion knowledge base but also detects sentiment and urgency, alerts the team on Slack for critical messages, and automatically replies to users with acknowledgment emails.
Every failed or malformed payload is transparently logged in Google Sheets — ensuring zero message loss and full visibility into the AI pipeline.
The result is a complete AI-driven customer support loop, from inbox to Notion and back to the sender.

## ⚙️ What This Workflow Does (Step-by-Step)

🟢 Gmail Polling Trigger – Developer Support Inbox
 Continuously monitors the developer support Gmail inbox every minute for new messages.
 Extracts the subject, sender, and snippet to initiate AI analysis.

🔍 Validate Email Payload (IF Node)
 Checks if each incoming email contains valid message data (like message ID and subject).
 ✅ True Path: continues to AI analysis
 ❌ False Path: logs error details in Google Sheets for debugging.

🧠 Configure GPT-4o Model (Azure OpenAI)
 Initializes GPT-4o as the reasoning model for semantic classification of developer support content.

🤖 Analyze & Classify Developer Email (AI Agent)
 Interprets each email and produces a structured JSON with:
Problem summary
FAQ category (e.g., API, Billing, UI)
2–3 line solution
“Is recurring” flag for common issues.

🧹 Parse & Clean AI JSON Output (Code Node)
 Removes code formatting (json) and safely parses GPT-4o’s output into clean JSON.
 If parsing fails, the raw text and error message are sent to Google Sheets for review.

📘 Save FAQ Entry to Notion Database
 Creates a new FAQ record inside Notion’s “Release Notes” database.
 Stores the problem, category, and solution as searchable structured fields.

💬 Announce New FAQ in Slack
 Posts a summary of the new FAQ in Slack with title, category, and answer preview.
 Includes a link to view the Notion record instantly for team visibility.

🧠 Configure GPT-4o Model (Sentiment Analysis)
 Sets up another GPT-4o instance focused on understanding tone, emotion, and urgency of each email.

❤️ Analyze Email Sentiment & Urgency (AI Agent)
 Analyzes the email content to determine:
Urgency: Low, Medium, High, Critical
Sentiment: Positive, Neutral, Frustrated, Angry
Immediate response required? (Yes/No)
Provides a short “reason” explaining the classification.

🧹 Parse AI JSON Output – Sentiment Analysis
 Cleans and validates the JSON from sentiment AI for consistent field names (urgency, sentiment, reason).

⚖️ Filter Critical or High-Urgency Emails (IF Node)
 Checks if urgency == High or Critical.
 ✅ True Path: triggers escalation to Slack
 ❌ False Path: ends quietly to avoid unnecessary noise.

🚨 Alert Team in Slack – Critical Issue
 Sends an immediate Slack alert with:
Email snippet
Detected urgency and sentiment
Short justification (reason)
CTA for urgent action.
 Ensures fast team response to high-priority issues.

📨 Send Acknowledgment Email to Sender (Gmail Node)
 Automatically replies to the customer confirming receipt and providing a short AI-generated solution summary.
 Thanks the user and links the response back to the knowledge base — creating a closed-loop support experience.

🪶 Log Workflow Errors to Google Sheets
 Appends all failed validations, missing fields, or JSON parsing issues to the “error log sheet.”
 Provides a live audit trail for monitoring workflow health.

## 🧩 Prerequisites
1. Gmail account with API access
2. Azure OpenAI (GPT-4o) credentials
3. Notion API integration (for FAQ database)
4. Slack API access (for team alerts)
5. Google Sheets (for logging errors)

## 💡 Key Benefits
 ✅ Converts support emails into structured FAQs automatically
 ✅ Detects sentiment & urgency for faster triage
 ✅ Keeps Notion knowledge base continuously updated
 ✅ Sends Slack alerts for critical issues instantly
 ✅ Maintains transparent error logs in Google Sheets

## 👥 Perfect For
1. Developer Relations or Product Support Teams
2. SaaS companies managing large support volumes
3. Teams using Gmail, Notion, and Slack for internal comms
4. Startups automating customer response and knowledge creation

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Notion, Gmail Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
