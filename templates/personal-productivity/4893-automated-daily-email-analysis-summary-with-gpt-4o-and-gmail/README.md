# ⚡ Automated daily email analysis & summary with GPT-4o and Gmail

> ⚡ **3,289 views** · ⚡ [Personal Productivity](../)

## Description

# Daily Email Pulse Summary:

This agent summarizes a user's daily emails into a clean, actionable summary. It uses OpenAI to analyze content and sends a formatted "Daily Pulse" email at the end of each day.

## Main use cases:
Keep track of open loops and next steps across all email conversations

Identify high-potential leads and flag conversations going nowhere

Eliminate the need to manually review your inbox at day’s end

Build a smart summary layer using AI without hallucination or noise

## How it works
This workflow can be divided into eight core nodes, each serving a distinct purpose in helping a user stay on top of their day. The result is a curated, AI-generated summary delivered to your inbox — crafted from real message content, not guesswork.

1. Schedule Trigger (Trigger Node – Runs Daily at Set Time)

- Kicks off the workflow at a specific time each day (e.g. 6:00 PM).
- Ensures you receive your Daily Pulse consistently, without needing to run it manually.

2. Date Transformer (Function Node – Define Today & Tomorrow Range)
- Uses JavaScript to calculate the current day’s date range:
	 - today: Start of day (00:00:00)
	 - tomorrow: Start of next day (used as a cutoff)
- This ensures only emails from today are analyzed, keeping the summary focused and current.

3. Get All Messages (Gmail Node – Fetch Filtered Emails)
- Pulls in all Gmail messages with internalDate between today and tomorrow.
- Outputs structured data: from, subject, and body text of each email.
- This forms the raw data for the daily business pulse.

4. Aggregator (Function or Item Lists Node – Combine Message Fields)
- Aggregates each message into a readable format:

```
From: John@example.com  
Subject: Demo Follow-up  
Body: Let’s schedule a time this week...
```

- All messages are stitched together into a single combinedText string for analysis.
- This gives the AI model full context for the day in one unified document.

5. Email Cleanup (Function Node – Remove Noise & Normalize Text)
- Cleans the combinedText blob to remove:
	- HTML tags
	- Marketing footers (e.g., unsubscribe links)
	- Redundant whitespace or formatting artifacts
- Ensures GPT gets clean, relevant message content with no distractions.

6. Agent (OpenAI Node – Generate Structured Summary)
- Uses a System Prompt to define its role as an AI Chief of Staff.
- Uses a User Prompt that instructs it to categorize messages into sections:

	- 📝 Open Loops / Pending Follow-Up
	- 🚀 Next Steps You’ve Committed To
	- 🧲 Leads Worth Following Up On
	- 🛑 Conversations That Aren’t Leading Anywhere
	- 🧠 Strategy Notes
	- ✅ Top 3 Tasks for Tomorrow

- Built-in guardrails ensure the model only uses real content (no hallucination).
- Sections with no relevant data are omitted to keep it concise.

7. HTML Formatter (Function Node – Wrap Markdown in Email-Ready HTML)
- Wraps the GPT-generated markdown summary in a simple &lt;html&gt;&lt;body&gt;<pre> structure.
- Applies white-space: pre-wrap to preserve formatting and spacing.
- The result is a clean, readable email that renders well across all inboxes (especially Gmail).

8. Email Send (Email Node – Deliver the Final Pulse)
- Sends the formatted summary to your email inbox.
- Subject: Your Daily Business Pulse – {{today}}
- HTML body: Uses the formatted output from the previous step.
- Final output: a well-organized, scannable summary of the day’s communication — focused on what matters.

## Why It Works
- Automates the end-of-day review ritual without effort
- Prioritizes follow-ups, action items, and time-sensitive leads
- Filters out noise and low-value conversations
- Leverages GPT without risk of hallucination or irrelevant output
- Delivers clarity, helping you focus on tomorrow’s most important tasks```language

```

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
