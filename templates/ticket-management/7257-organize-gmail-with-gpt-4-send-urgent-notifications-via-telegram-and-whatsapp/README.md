# 🎫 Organize Gmail with GPT-4 & send urgent notifications via Telegram and WhatsApp

> ⚡ **1,365 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow automatically transforms your messy inbox into a neatly organized space while ensuring you never miss a critical message. It connects to your Gmail account and triggers for every new email.
Using a powerful AI agent, the workflow first analyzes the email's content, sender, and metadata to classify it and apply the appropriate Gmail label (e.g., "Finance," "Marketing," "Dev Tools").
In parallel, a second AI agent determines if the email is urgent (like a security alert, OTP, or payment reminder) and generates a concise summary. If an email is marked as urgent, the workflow instantly sends a notification with the summary to your Telegram and WhatsApp, allowing you to take immediate action.
This workflow is perfect for anyone looking to automate their email management, reduce inbox clutter, and stay on top of important, time-sensitive communications.

Step-by-Step Explanation
This workflow is designed to intelligently categorize incoming emails and notify you of urgent messages. Here is a breakdown of how it operates:
1. Trigger: New Email Received
Node: Gmail Trigger
Action: The workflow initiates whenever a new email arrives in your connected Gmail inbox.
2. Fetch Full Email Content
Node: Get a message
Action: It takes the ID of the new email from the trigger and fetches the complete message body, subject, sender, and headers.
3. AI-Powered Categorization
Node: AI Agent2
Action: This AI agent analyzes the full email content. Based on a detailed prompt that includes classification rules (e.g., if the sender is GitHub, classify as "Dev Tools"), it determines the most appropriate category and outputs the corresponding Label ID.
4. Label Management and Application
Node: Loop Over Items -&gt; Create Label if Doesn't exist -&gt; Get Existing Labels -&gt; Filter -&gt; Add label to thread
Action: This sequence ensures the email gets the correct label.
It first attempts to create the Gmail label suggested by the AI. The node is set to continue even if the label already exists.
It then fetches a list of all your current Gmail labels.
A Filter node finds the exact ID of the label that matches the AI's suggestion.
Finally, it applies this label to the email thread, neatly organizing it in your inbox.
5. Urgency Analysis and Summarization
Node: AI Agent
Action: Concurrently, a second AI agent analyzes the email to determine its urgency (classifying it as "urgent" or "normal") and generates a two-sentence summary.
6. Parse AI Output
Node: Code
Action: A simple code node cleans up the JSON output from the urgency analysis to ensure it's correctly formatted for the next step.
7. Conditional Notification Logic
Node: If
Action: This node checks the output from the previous step. It proceeds only if the email's urgency is marked as "urgent."
8. Send Instant Alerts
Nodes: Send a text message (Telegram) & Send message (WhatsApp)
Action: If an email is deemed urgent, the workflow immediately sends an alert containing the email summary to your specified Telegram chat and WhatsApp number.

## 🔗 Nodes Used

Telegram, Gmail, Gmail Trigger, WhatsApp Business Cloud, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
