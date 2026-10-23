# 🎫 Route Discord support messages into ClickUp tasks with OpenAI GPT-4.1-mini

> ⚡ **82 views** · 🎫 [Ticket Management & Triage](../)

## Description

## How it works  
This workflow monitors a Discord channel on a schedule and processes recent messages automatically. Each message is checked against a data table to prevent duplicate processing. New messages are analyzed using an AI model to extract structured task details like assignee, priority, and deadlines. The workflow then formats this data and creates a corresponding ClickUp task with full context.

## Step-by-step  

- **Trigger and fetch messages**  
  - **Schedule Trigger** – Runs the workflow every minute.  
  - **Get many messages** – Retrieves the latest Discord messages from a selected channel.  

- **Process messages in batches**  
  - **Loop Over Items** – Iterates through each message one at a time for controlled execution.  

- **Check for duplicates**  
  - **Get row(s)** – Searches the data table for existing message IDs.  
  - **If** – Filters out messages that have already been processed.  

- **Store new messages**  
  - **Insert row** – Saves new message details (ID, author, content) to the data table.  

- **Generate task metadata with AI**  
  - **Message a model** – Uses OpenAI to extract structured task data like assignee, priority, estimate, and deadlines.  

- **Format task data**  
  - **Format Task** – Converts AI output into ClickUp-compatible fields and formats.  

- **Create ClickUp task**  
  - **Create ClickUp Task** – Creates a new task with assignees, dates, priority, and message context.  

## Why use this?  

- Eliminates manual ticket creation from Discord support messages  
- Ensures no duplicate tasks with built-in tracking logic  
- Automatically assigns tasks based on AI-driven classification  
- Improves response time and team accountability  
- Scales support operations without additional overhead

## 🔗 Nodes Used

Discord, ClickUp, Schedule Trigger, OpenAI, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
