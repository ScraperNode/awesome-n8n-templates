# 📖 Send customer visit notifications from Google Calendar to Slack and Sheets

> ⚡ **21 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

# Customer Visit Notification
This workflow monitors Google Calendar for events indicating that a customer will visit the company today or the next day, retrieves the required details, and sends reminder notifications to the relevant stakeholders. It also posts a company-wide announcement to ensure proper preparation and a professional reception for the customer.

## 📌Who is this for?
- Reception / Administration team
- Sales / Account owners in charge of customers
- Management / Related team leaders
- Security / IT / Logistics (for meeting room, equipment, and check-in preparation)

## 📌The problem
- Customer visit information is usually shared manually and can be easily missed.
- Related staff are not informed in time to prepare.
- This causes last-minute preparation for reception, meeting rooms, documents, and support.
- It affects the customer experience and the company’s professional image.

## 📌How it works
- When a customer meeting is scheduled, the system records the information (time, customer name, company, person in charge).
- The system automatically sends notifications to related groups based on timeline:
       - Notify the whole office 1 hour before the visit.
       - Notify related members 24 hours in advance.
- Notifications can be sent via Email / Slack / Internal chat.


## 📌Quick setup
Required information:
- N8n Version 2.4.6
- Google Calendar OAuth2 API: Client ID, Client Secret
- Google Sheets OAuth2 API: Client ID, Client Secret
- Slack App: Bot User OAuth Token


Google Sheets will be used to log all notified events.

## 📌Results
- Everyone is aware of the customer visit schedule.
- Teams can proactively prepare meeting rooms, documents, and manpower.
- Reduce mistakes and missed communication.
- Improve customer experience and company professionalism.

## 📌Take it further
- Customer check-in using QR code / Visitor form
- Send reminders to prepare documents
- Store visit history
- Monthly/quarterly reports for number of customer visits

## 📌Need help customizing?
Contact me for consulting and support:
[Linkedin](https://www.linkedin.com/company/bac-ha-software/posts/?feedView=all) / [Website](https://bachasoftware.com/bhsoft-contacts)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Calendar, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
