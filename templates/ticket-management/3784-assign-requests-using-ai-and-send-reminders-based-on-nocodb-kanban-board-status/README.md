# 🎫 Assign Requests Using AI and Send Reminders Based On NocoDB Kanban Board Status

> ⚡ **685 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Who is it for?

This is automation for support project manager, which helps not only to keep developres informed but also automatically keep clients in the loop - especially useful if you are managing SLA-like agreement.

It is actually simple incident management board using free Kanban board, that is extended in functionality via N8N.

# How It Works?

Script has two entry points.

The first one is incident form. When incident details are provided, automation gets incident definitions from database and pushes both information to AI. AI comparse definitions with client request, refines incident priority and pushed it in NocoDB database.

Second is schedule trigger, which is responsible for regular notificaitons on task status. If task is not picked up or delivered in proper time, then emails or slack messages are being sent both to client and responsible developer.

# How to set up?
- Clone automation
- Create (samples below) two NocoDB tables: one with definitions and second that servers as Kanban board (mind column naming!)
- Set up email and slack connection
- You should be ready to go

# Different incident naming

If your incident level naming is different, you need to update few nodes and few columns in NocoDB. This is because incident naming must be unified through: automation flow, incident definitions and column NocoDB select fields.

So be sure that following is the same:
- NocoDB: Incident definitions, column "Title"
- NocoDB: Tasks table, single select fields:
	- "expected category"
	- "assigned category"
- N8N: Incident Form "Incident Desired Category"

# NocoDB Tables
## Incident definitions table

![Incident Definitions2.png](fileId:1197)

|Title |Definition |Response time|Resolution time|Default assignee|
|single line text|text|number|number|email|

## Tasks table

![Tasks Table.png](fileId:1197)


|email|message|expected category|internal notes|assigned category|status|expected response|expected resolution|assignee|assignee slack|
|email|text|single select|text|single select|single select|date and time|date and time|email|slack username|

## Use kanban board

![Kanban board.png](fileId:1198)

Simply set up Kanban view and stack by "status" field.

# What's More?

That's actually it. I hope that this automation will help your support line be much more streamlined!

There is actually more that you could do with this automation, but it really depends on your needs. For example, you could add Email trigger to handle incoming support requests (but remember to adjust nodes accordingly). Another thing is that you could make different notification schema, depending on your needs (for example I do imagine that you may want a day or two delay before you notify client that task is after due).

# Thank you, perfect!

Glad I could help. Visit my profile for other automations for businesses. And if you are looking for dedicated software development, do not hesitate to reach out!

## 🔗 Nodes Used

Send Email, Slack, NocoDB, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
