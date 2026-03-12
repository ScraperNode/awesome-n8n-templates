# ⚡ Daily birthday reminders from Google Contacts to Slack

> ⚡ **3,171 views** · ⚡ [Personal Productivity](../)

## Description

Ensure you never miss a birthday with this automated workflow designed by WeblineIndia. It retrieves your Google Contacts, identifies birthdays happening today, and sends personalized reminders directly to a designated Slack channel. This daily automation keeps your team informed and makes birthday celebrations effortless.

## Steps

### Set Daily Schedule (Cron Node)
- Configure a Cron node to trigger the workflow daily at a specific time (e.g., 8 AM).
- This ensures the workflow runs consistently every day to check for birthdays.

### Retrieve Contacts (Google Contacts - Get Contact Node)
- Use the Google Contacts (Get Contact) node to fetch your contact list.
- Ensure your contacts have birthday details stored for accurate filtering.

### Filter Birthdays (IF Node)
- Add an IF Node to compare the current date with each contact’s birthday.
- Only contacts whose birthdays match today’s date will move to the next step.

### Send Birthday Notifications to Slack (Slack - Send Message Node)
- Use the Slack node to send a personalized birthday message to your chosen Slack channel (e.g., #general or #birthdays).
- Customize the message to include the contact’s name, e.g., "🎉 Today is John Doe's birthday! Let’s celebrate!"
- Configure the node to target a specific Slack channel for seamless notifications.

### Activate Workflow
- Save and activate the workflow.

From now on, the workflow will automatically check for birthdays daily and send timely reminders to your Slack team.

## Outcome
This hassle-free automation keeps your team engaged and ensures no birthday goes unnoticed. Celebrate special days of your contacts effortlessly and maintain meaningful connections.

## About WeblineIndia
This workflow showcases our commitment to delivering [innovative automation solutions](https://www.weblineindia.com/process-automation-solutions.html) that enhance productivity and foster better relationships. Let us help you build the AI automation tools that make a difference.

## 🔗 Nodes Used

Slack, Google Contacts, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
