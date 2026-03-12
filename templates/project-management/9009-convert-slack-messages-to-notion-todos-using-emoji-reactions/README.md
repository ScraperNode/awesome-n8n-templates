# 📋 Convert Slack messages to Notion todos using 📝 emoji reactions

> ⚡ **341 views** · 📋 [Project Management](../)

## Description

This n8n workflow turns Slack messages into actionable Notion todos — using nothing more than a simple emoji reaction.

By reacting to any Slack message with the 📝 emoji, the workflow will automatically capture the message, extract its content, and create a new Notion to_do item with a link back to the original message. A daily scheduled Slack message then reminds you of any tasks left unchecked in Notion.

Perfect for async teams who live in Slack but organize work in Notion, this template helps you bridge the gap between communication and execution—without switching tools or relying on memory.

## Who’s it for

- Teams that use Slack and Notion daily
- Product managers, leads, and async-first teams who want quick capture of action items
- Anyone tired of copy-pasting Slack messages into Notion manually

## How it works
### Emoji-triggered Notion capture

1. The workflow listens for the reaction_added event from Slack.
2. When a user reacts to a message with :memo:, it fetches the full message content and permalink. 
3. It creates a to_do block in Notion with the message and a direct link to the original Slack thread.

### Daily Slack reminder

1. Every day at 08:00, the workflow scans all to_do blocks in a designated Notion page. 
2. It filters out those that are still unchecked.
3. It aggregates the unchecked tasks and sends a single Slack message to the user with the list of open todos.

## How to set up

- Connect your Slack account and configure the trigger to watch for the :memo: reaction.
- Connect your Notion account and select a page where todos should be created.
- Customize the schedule time if needed (default is 08:00).
- (Optional) Set up the final Slack message node to send reminders to yourself or a specific team channel.

## Requirements

- A Slack app with permission to read messages and reactions
- A Notion integration with access to edit the target page
- A Notion page with blocks enabled (or create one manually)

## How to customize the workflow

- Change the emoji from :memo: to another (e.g. :fire: for urgent, :idea: for brainstorms)
- Add logic to assign Notion tasks to specific team members
- Use Slack threads, tags, or message metadata to auto-categorize tasks
- Modify the daily reminder to include due dates, priorities, or Slack buttons to check off tasks

## 🔗 Nodes Used

Slack, Notion, Schedule Trigger, Filter, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
