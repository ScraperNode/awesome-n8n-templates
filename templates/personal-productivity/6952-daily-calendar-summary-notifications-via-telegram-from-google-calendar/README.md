# ⚡ Daily calendar summary notifications via Telegram from Google Calendar

> ⚡ **1,436 views** · ⚡ [Personal Productivity](../)

## Description

## Context:
This workflow automatically sends you a daily message on Telegram summarizing all your meetings and events for the day, straight from your Google Calendar.

## For who ? 
Perfect for anyone who:
- Uses Google Calendar to manage their schedule.
- Wants Telegram reminders for daily events.
- Loves automation and productivity tools.

## Requirements:
- Telegram.
- Google account.
- Google Calendar.


## Steps:
![image.png](fileId:1936)

🗒️ Use the sticky notes in the n8n canvas to:
- Add your Telegram and Google credentials.
- Execute and test the workflow.
- Check if you receive your daily summary on Telegram.

You'll get this:

![capure workflow message.png](fileId:1935)

![capture workflow 2 message.png](fileId:1934)


## Tutorial video:
[Watch the Youtube Tutorial video](https://www.youtube.com/watch?v=eIELi1iWCl4)

## How does it work?
- ⏰ The trigger runs every day at 7AM.
- 📅 Your Google Calendar is checked.
- 🔢 If there are events or meetings, a number &gt; 0 is returned. Otherwise, it's 0.
- 📝 A text message is generated with a summary of all your events, including all relevant details.
- ❌ If no events are found, a "no event" message is sent.

## About me :
I’m Yassin a Project & Product Manager  Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)

## 🔗 Nodes Used

Telegram, Google Calendar, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
