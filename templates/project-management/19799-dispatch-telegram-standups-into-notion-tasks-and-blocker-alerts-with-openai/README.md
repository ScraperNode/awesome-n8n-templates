# 📋 Dispatch Telegram standups into Notion tasks and blocker alerts with OpenAI

> ⚡ **2 views** · 📋 [Project Management](../)

## Description

## Quick overview
Converts unstructured Telegram standup messages into individual Notion task cards using OpenAI. Validates task statuses, prevents duplicates with deterministic source keys, alerts project leads of critical blockers, and replies to reporters with an execution receipt while filtering non-standup chat before AI.

## How it works
1. Listens for Telegram messages or runs the built-in manual test fixture.
2. Normalizes sender, chat, date, message IDs, and raw text.
3. Filters messages deterministically so only #DailyPlan and #DailyProgress reach OpenAI, cutting token costs on general chat.
4. Uses OpenAI to parse standup text into structured JSON containing individual tasks, project tags, statuses, priorities, and blocker severities.
5. Validates the JSON schema and splits every task into an independent item.
6. Queries Notion using a deterministic source key (YYYY-MM-DD:username:task_hash) to avoid duplicate creation on repeated or edited reports.
7. Updates matching Notion tasks or creates new task cards accordingly.
8. Escalates critical or moderate blockers to the project lead's Telegram chat and returns a structured completion receipt to the reporter.

## Setup
1. Connect Telegram Bot credentials to the trigger, blocker alert, and confirmation nodes. Disable bot privacy mode in @BotFather if used in Telegram groups.
2. Connect OpenAI API credentials and select your model (default: gpt-4o-mini).
3. Create an internal Notion integration at notion.so/my-integrations and share your Tasks database with it. Connect Notion credentials in n8n.
4. Select your Notion database on both Notion nodes. Ensure the database includes properties: Task Name (Title), Status (Status), Priority (Select), Project (Rich Text), Assignee (Rich Text), Source Key (Rich Text), Date (Date), and Notes (Rich Text).
5. Set YOUR_PROJECT_LEAD_CHAT_ID on the blocker alert node.
6. Click "Test with Sample Standup" to verify task creation and confirmation receipts before activating the workflow.

## Requirements
- Telegram bot token created via @BotFather (with Group Privacy disabled if used in group chats)
- OpenAI API credential with access to gpt-4o-mini or a compatible chat model
- Notion internal integration token connected in n8n
- Notion database shared with the integration, containing properties: Task Name (Title), Status (Status), Priority (Select), Project (Rich Text), Assignee (Rich Text), Source Key (Rich Text), Date (Date), and Notes (Rich Text)
- Telegram Chat ID for project lead or management blocker alerts

## Customization
- Replace #DailyPlan and #DailyProgress in "Check Supported Standup Tag" with your team's preferred report tags
- Adjust allowed task statuses ('To Do', 'In Progress', 'Done', 'On Review') in "Validate and Split Task Items" to match your Notion board
- Switch OpenAI model (e.g. gpt-4o) or refine extraction prompt rules in "Extract Tasks from Standup"
- Customize blocker escalation criteria and HTML message format in "Alert Project Lead"
- Map additional custom Notion properties (e.g. Sprint, Estimation, Priority tags) inside "Create New Notion Task" and "Update Existing Notion Task"

## Additional info
Dispatch Telegram daily standups into Notion tasks and blocker alerts with AI

## 🔗 Nodes Used

Telegram, Telegram Trigger, Notion, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
