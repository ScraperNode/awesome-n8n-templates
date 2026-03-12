# ⚡ Automate meeting minutes distribution with Google Sheets and Gmail

> ⚡ **947 views** · ⚡ [Personal Productivity](../)

## Description

## Description
This workflow sends a summary of your meeting minutes via Gmail, directly from the notes stored in your Google Sheet.

## Context
Taking notes during meetings is important, but sharing them with the team can be time-consuming. This workflow makes it simple: just write down your meeting minutes in a Google Sheets, and n8n will automatically send them by email after each meeting.

## Who is this for?
Perfect for anyone who:

- Uses Google Sheets to keep track of meeting notes.

- Wants to automatically share minutes with teammates or stakeholders.

- Values speed, productivity, and automation.

## Requirements

- Google account.

- Google Sheets (with your meeting minutes).  You will need to setup  the required columns first : Topic, Status, Owner, Next Step.

- Gmail.

## How it works

⏰ Trigger starts after a new row is added in your Google Sheet.

📑 The meeting minutes are retrieved from the sheet.

📨 Gmail automatically sends the minutes to the configured recipients.

## Steps
🗒️ Use the sticky notes in the n8n canvas to:

![image.png](fileId:2137)
- Add your Google credentials (Sheets + Gmail).

- Define your sheet and recipient email addresses.

- Test the workflow to check if the minutes are sent.

- You’ll get this: An email containing your full meeting minutes, straight from your notes.

![image.png](fileId:2111)

## Tutorial video
[Watch the Youtube Tutorial video](https://www.youtube.com/watch?v=AbnZSf19UHw)

## About me :
I’m Yassin a Project & Product Manager  Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)

## 🔗 Nodes Used

Google Sheets, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
