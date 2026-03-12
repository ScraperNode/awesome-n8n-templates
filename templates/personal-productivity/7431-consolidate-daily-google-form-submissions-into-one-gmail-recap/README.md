# ⚡ Consolidate daily Google Form submissions into one Gmail recap

> ⚡ **500 views** · ⚡ [Personal Productivity](../)

## Description

## Description
Receive one clean Gmail recap each day with all Google Forms submissions. The workflow reads your Form-linked Google Sheets, compiles every request submitted today, and sends a single, structured email at your chosen time—keeping your inbox tidy.

## Context
Instead of receiving dozens of individual notifications, consolidate all daily form submissions into one organized email recap.


## Who is this for?

- Teams managing multiple incoming requests per day.

- Managers who want a daily summary instead of real-time alerts.

- Anyone who prefers to avoid notification spam.

## Requirements

- Google account with Forms & Sheets access

- Google Forms linked to Google Sheets 

- Gmail account with n8n OAuth configured

## Steps
![image.png](fileId:2114)

🗒️ Use the sticky notes in the n8n canvas to:

- Credentials : Add/verify Google (Sheets) and Gmail credentials in n8n.

- Schedule : Add a Cron/Schedule Trigger (default: 17:00/ 5PM, your local time).

- Add Google Sheets node → Read mode.

- Spreadsheet: select your Form-linked sheet.

- Build the Recap Body

- Use a Code (Function) node to assemble a simple HTML list or table from the filtered rows.

- Send Gmail : Add Gmail node and setup your team inbox / distribution list. For the body, paste the HTML body from step 5 and enable HTML.

- Test & Activate : Submit a few sample responses, run once, confirm the email looks right.

- Turn the workflow ON.


You’ll get this:
![image.png](fileId:2113)

A structured Gmail message listing all daily submissions with: submitter name, timestamp, request details, and any custom fields from your form.



## Tutorial video
[Watch the Youtube Tutorial video](https://www.youtube.com/watch?v=iK-BgbcrteQ)

## How it works

⏰ Trigger: workflow runs once a day at your chosen time (default 5 PM).

📑 Collects all requests from that day in the Google Sheet.

📝 Compile: Generates a recap list/table.

📝 Generates a recap list with all submissions.

📨 Sends one Gmail email summarizing all requests of the day.



## About me :
I’m Yassin a Project & Product Manager  Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)

## 🔗 Nodes Used

Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
