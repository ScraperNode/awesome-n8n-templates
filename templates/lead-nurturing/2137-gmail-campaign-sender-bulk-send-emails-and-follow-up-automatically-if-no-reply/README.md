# 💬 Gmail campaign sender: Bulk-send emails and follow up automatically if no reply

> ⚡ **57,867 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This workflow allows you to send multi-step email campaigns using n8n, Gmail and Google Sheets.

You define a sequence of emails, and a list of email addresses to send them to. The first email is sent to everyone, but the later emails in the sequence are only sent if no-one has replied to the thread yet.

This means you only need to worry about replying to people who respond to your email, not chasing people who don’t.

### Requirements

1. A list of emails in a Google sheet. You can define extra info that will be available to your email templates (e.g. name, company, etc.)

![table.png](fileId:750)

2. A sequence of emails to send, plus how long to wait to send each one, e.g.

- **On day 0:** “Hi, {name} — nice to meet you at the conference. Was wondering whether {company} would be interested in a quick call about X?”
- **On day 3:** “Hi, {name}, just wanted to check in on this. Let me know if there’s any interest!”
- **On day 7:** “{name}, just wanted to give this one last try”

3. A Gmail account (although you could also swap out that part for any other email service)

### How it works

When sending the emails, n8n inserts a hidden attribute in each one that tags it as being part of the email campaign. It then regularly looks through the email threads with that tag and checks whether:

1. No-one has replied yet
2. It’s time to send the next message

The workflow doesn’t send emails on weekends.

### Notes

- This workflow is not intended for spam! Please use responsibly
- You can use this workflow for multiple different campaigns by making copies of the workflow and changing the sequence / Google Sheet that it uses

## 🔗 Nodes Used

Google Sheets, Execute Sub-workflow, Gmail, Execute Workflow Trigger, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
