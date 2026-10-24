# 📋 Track Facebook event RSVPs in Airtable and send Slack capacity alerts

> ⚡ **15 views** · 📋 [Project Management](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Facebook Event RSVP Webhook → Airtable Attendee Tracking → Slack Capacity Alerts

This workflow automatically tracks Facebook Event RSVPs, stores attendee data in Airtable, checks event capacity and notifies your team on Slack when the event becomes full. It eliminates manual RSVP tracking and prevents overbooking.

### Quick Start: Get Up and Running Fast

1. Create a custom Facebook webhook endpoint in n8n.
2. Connect Airtable and select your preferred table.
3. Ensure required fields exist in the Airtable table.
4. Set the event capacity value.
5. Connect Slack and choose the notification channel.
6. Activate the workflow.


## What It Does

This workflow begins when a new RSVP is received from a Facebook Event through a custom webhook endpoint. The incoming data is cleaned and standardized to extract only the required RSVP details, ensuring consistent processing.

Each RSVP is then stored in Airtable using an upsert operation. This ensures attendee records are created or updated correctly while preventing duplicate entries if Facebook sends the same RSVP more than once.

After storing the data, the workflow checks how many people are marked as attending for the event. If the total reaches or exceeds the defined capacity, a Slack notification is sent to the team. The workflow also records that the alert has been sent to avoid duplicate notifications.


## Who’s It For

* Event organizers and coordinators
* Marketing and operations teams
* Community and meetup managers
* Businesses running limited-capacity events
* Teams using Airtable to manage event data


## Requirements to Use This Workflow

* A running **n8n** instance
* Facebook Developer access to configure a **custom webhook**
* An **Airtable base** with **any table name of your choice**
* The Airtable table must contain the required fields (see below)
* A **Slack workspace** with permission to send messages


## How It Works & How To Set Up

### 1. Webhook Configuration

Create a custom webhook endpoint in n8n and configure Facebook to send Event RSVP data to this endpoint.

### 2. Data Normalization

A Set node extracts and formats key RSVP fields such as event ID, user ID, RSVP status and timestamp.

### 3. Airtable Storage

You can select **any Airtable table**.
The workflow requires the following fields to exist in that table:

* `event_Id` (Text)
* `user_Id` (Text)
* `rsvpStatus` (Single select or Text)
* `receivedAt` (Date)
* `capacity_alert_sent` (Checkbox)

The upsert operation ensures records are updated without duplication.

### 4. Capacity Evaluation

The workflow searches the selected Airtable table for all attendees marked as “attending” for the same event and counts them.

### 5. Slack Notification

If the count reaches or exceeds the configured capacity value, a Slack alert is sent. The workflow then updates Airtable to mark that the alert has already been sent.


## How To Customize Nodes

* **Airtable Table**: Select any table as long as required fields exist.
* **Capacity Limit**: Modify the static value in the IF node.
* **Slack Channel**: Change the destination channel or user.
* **Webhook Endpoint**: Rename the webhook path for different environments.
* **RSVP Status Logic**: Adjust filters to include or exclude statuses.


## Add-ons

* Early warning alerts (e.g., 80% or 90% capacity)
* Waitlist automation after capacity is reached
* Email or Telegram notifications instead of Slack
* Dynamic event capacity from Airtable
* Error handling and retry logic for API limits


## Use Case Examples

* Managing workshop and training registrations
* Tracking attendance for community meetups
* Preventing overbooking for conferences or seminars
* Alerting staff when venue limits are reached
* Automating RSVP monitoring for internal company events

This workflow can support many more event-based automation scenarios.


## Troubleshooting Guide

| Issue                  | Possible Cause                   | Solution                                      |
| ---------------------- | -------------------------------- | --------------------------------------------- |
| No RSVPs received      | Webhook not configured correctly | Verify Facebook webhook URL and subscription  |
| Duplicate Slack alerts | Alert flag not checked           | Ensure `capacity_alert_sent` logic is enabled |
| Wrong attendee count   | Field name mismatch              | Confirm Airtable field names match exactly    |
| Slack message not sent | Invalid Slack credentials        | Reconnect Slack account in n8n                |
| Airtable errors        | API rate limit                   | Add retry logic or reduce execution frequency |


## Need Help?

If you need help setting up this workflow, customizing add-ons or building similar automation, our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** can help.

Our team specializes in creating scalable business automation using n8n and modern cloud tools.

[Contact **WeblineIndia**](https://www.weblineindia.com/contact-us.html) to get expert assistance or to build tailored workflows for your business needs.

## 🔗 Nodes Used

Airtable, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
