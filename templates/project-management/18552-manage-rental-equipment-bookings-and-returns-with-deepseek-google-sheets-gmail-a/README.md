# 📋 Manage rental equipment bookings and returns with DeepSeek, Google Sheets, Gmail, and Discord

> ⚡ **16 views** · 📋 [Project Management](../)

## Description

Rental bookings, returns, and reminders that stay in sync. This workflow takes booking requests by webhook, has a DeepSeek-powered agent check your Google Sheets inventory for the requested dates, then handles renter messages, staff alerts, return logging, and a weekly operations digest.

*Last updated: September 2026.*

## Quick Overview
This workflow manages rental booking intake, availability checks, reminders, returns, and reporting using Google Sheets, Gmail, Discord, and a DeepSeek (OpenAI-compatible) AI agent to check inventory availability and write a weekly operations digest.

## How it works
1. Receives a rental booking request via a POST webhook, normalizes the fields, and rejects incomplete requests by notifying Discord and emailing the owner via Gmail.
2. Uses a DeepSeek-powered AI agent with a Google Sheets inventory tool to check item availability for the requested dates and generate a renter message plus a short staff summary.
3. Logs the booking to a Google Sheets “Bookings” tab as confirmed or conflict, then emails the renter and posts the outcome to Discord.
4. Runs daily on a schedule, reads confirmed bookings from Google Sheets, identifies pickups due tomorrow plus returns due today or overdue, and emails the appropriate reminders via Gmail.
5. Posts a daily sweep summary to Discord, or posts an “all clear” message when no reminders are due.
6. Receives a return report via a POST webhook, logs it to a Google Sheets “ReturnsLog” tab, decrements the item’s booked quantity in the Google Sheets “Inventory” tab, and sends alerts for unknown items or damaged/missing condition.
7. Runs weekly on a schedule, computes booking/return stats from Google Sheets, has DeepSeek draft a plain-text digest, then emails the digest via Gmail and posts it to Discord.

## Setup
1. Create a Google Sheets file with three tabs named Inventory, Bookings, and ReturnsLog, and ensure the column headers match the fields used in the workflow (for example, Inventory includes item_name and booked_qty).
2. Add Google Sheets OAuth2 credentials and update the spreadsheet ID if you are not using the provided documentId.
3. Add a Gmail OAuth2 credential and update recipient addresses (owner/staff) used for invalid requests, damage reports, and the weekly digest.
4. Add a Discord bot credential and select the target server and channel for alerts and summaries.
5. Add an OpenAI API credential for the DeepSeek chat model (deepseek-v4-flash) used by the availability agent and weekly digest writer.
6. Copy the webhook URLs for /rental/intake and /rental/return and configure your booking form/app to send POST requests with the required fields.

### Quick Answers
**What happens to an incomplete booking request?**
It is rejected: Discord is notified and the owner is emailed via Gmail.

**How is availability checked?**
A DeepSeek-powered AI agent with a Google Sheets inventory tool checks item availability for the requested dates and writes a renter message plus a short staff summary. The booking is then logged as confirmed or conflict.

**What does the daily sweep do?**
It reads confirmed bookings, finds pickups due tomorrow plus returns due today or overdue, emails the reminders via Gmail, and posts a summary to Discord, or an all clear message when nothing is due.

**What happens when equipment comes back?**
The return is logged to ReturnsLog, the item's booked quantity is decremented in the Inventory tab, and alerts go out for unknown items or damaged and missing condition.

**When is the operations digest sent?**
Weekly: booking and return stats are computed from Google Sheets, DeepSeek drafts a plain-text digest, and it goes out by Gmail and Discord.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Discord, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
