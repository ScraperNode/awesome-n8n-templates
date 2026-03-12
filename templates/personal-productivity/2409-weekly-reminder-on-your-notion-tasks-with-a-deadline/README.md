# ⚡ Weekly reminder on your notion tasks with a deadline

> ⚡ **2,205 views** · ⚡ [Personal Productivity](../)

## Description

## Who might benfit from this workflow?
Everyone organizing him/herself by using a notion database for tasks but losing track on some important tasks having a deadline. The weekly reminder helps you to not forget about your notion tasks.

## How it works:
- The workflow fetches all your notion tasks from a desired database but the closed ones
- It generates a html template for each tasks containing a headline and a short list of key data (prio, status deadline, tags)
- It creates two groups based on the deadline date if a task is already overdue or not
- It generates a complete html email containing both groups and some sugar around them
- It sends the email to your desired email
- It uses Pushover to send you a push notification to your phone
- It is scheduled by the beginning of each week

## How to set it up:
- Fill out the "Set Workflow vars" node with your data
- Connect your notion account and select the database your tasks are stored at
- define the status filters to the ones you are using for your tasks
- Setup your email server to enable the email node to deliver your html email
- Create a Pushover account and setup the authentication for the Pushover node
- Adjust the last html node to change email style for your desire

## How to customize this workflow for your needs?
- You might adjust the filtering of the notion fetch node to filter for other statuses than provided in the example.
- You apply your custom design to the html email
- You could remove the filter which is filtering for tasks having a deadline and just send yourself a reminder for all tasks

---
### You need help implementing this or any other n8n workflow?
Feel free to contact me via LinkedIn or [my business website](https://www.unitize.de).

### You want to start using n8n?
Use this link to [register for n8n](https://n8n.partnerlinks.io/edr9c63lw12z)
(This is an affiliate link)

---

## 🔗 Nodes Used

Send Email, Pushover, Notion, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
