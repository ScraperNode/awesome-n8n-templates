# 💬 Track fitness class attendance and retention with Google Sheets, gpt-5.6-terra, Gmail, and Discord

> ⚡ **3 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Know exactly who showed up, who is drifting away, and what to do about it. This workflow captures fitness class check-ins via webhook, matches members in Google Sheets, has AI label engagement and draft a personal message, logs everything, emails members, and sends Discord alerts plus a weekly AI-written retention report.

*Last updated: September 2026.*

## Quick Overview
This workflow captures fitness class check-ins via a webhook, looks up members in Google Sheets, uses OpenAI to classify engagement and draft a short message, logs attendance back to Google Sheets, emails members via Gmail, and sends Discord alerts plus a weekly AI-written retention report.

## How it works
1. Receives a POST webhook check-in event with member_id, class_name, status, and optional notes.
2. Normalizes the payload, rejects missing required fields, and sends a Discord alert plus a Gmail email to the studio address for invalid entries.
3. Reads the MemberRoster tab in Google Sheets, matches the check-in by member_id, and alerts on Discord plus emails the studio address if the member is not found.
4. Sends the matched member and check-in context to an OpenAI-powered agent to label engagement (at_risk/new/engaged) and generate a short personalized message.
5. Appends the check-in, engagement label, and generated message to the AttendanceLog tab in Google Sheets.
6. Emails the generated message to the member via Gmail and posts a Discord retention alert when the member is flagged as needing attention (for example, a no-show).
7. Runs every Monday morning, computes weekly attendance and churn-risk stats from Google Sheets, uses OpenAI to write a short digest, then emails the report via Gmail and posts it to Discord.

## Setup
1. Create a Google Sheets spreadsheet with MemberRoster and AttendanceLog tabs and ensure the columns used in the workflow (for example member_id, member_name, member_email, membership, join_date, checkin_date, status) exist.
2. Add Google Sheets OAuth2 credentials and update the spreadsheet document ID and sheet names if you are not using the provided ones.
3. Add an OpenAI API credential for the engagement message and weekly insight agent steps.
4. Add Gmail OAuth2 credentials and update the studio/manager email recipients and member email handling as needed.
5. Add Discord bot credentials and set the target server (guild) and channel IDs for invalid, unknown-member, retention alerts, and weekly report posts.
6. Copy the webhook URL for /fitness/checkin and configure your front desk or check-in system to POST events to it.

### Quick Answers
**What happens on each check-in?**  
The member is matched, engagement is labeled (at_risk, new, or engaged), a message is drafted, and everything is logged and emailed.  
**When do alerts fire?**  
Invalid entries, unknown members, and at-risk flags trigger Discord plus Gmail to the studio.  
**What about weekly reporting?**  
Every Monday morning a digest with attendance and churn-risk stats goes out via Gmail and Discord.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Discord, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
