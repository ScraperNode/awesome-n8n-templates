# 💬 Run autonomous SDR outreach with Apollo, OpenAI, Gmail, and Google Sheets

> ⚡ **16 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs daily to find and email new leads from Apollo, using Serper news search and OpenAI to draft personalized outreach, then tracks everything in Google Sheets and handles Gmail replies by classifying intent, updating lead status, and optionally creating Google Calendar meetings.

## How it works
1. Runs on a daily schedule to define your ICP filters and search Apollo for matching people.
2. Splits the Apollo results into individual prospects and checks Google Sheets to avoid emailing leads that are already in your CRM sheet.
3. Enriches each new lead’s company via the Apollo Organizations Enrich endpoint and fetches recent company news via the Serper news search API.
4. Sends the lead and research context to OpenAI (gpt-4o-mini) to generate a short personalized cold email, then sends it via Gmail and logs the lead to Google Sheets.
5. Polls Gmail for new unread replies, looks up the sender in Google Sheets, and uses OpenAI (gpt-4o-mini) to classify the reply intent.
6. Routes replies by intent to either create a Google Calendar meeting and send a confirmation email, send an answer for questions, or update the lead status in Google Sheets for not interested/other outcomes.

## Setup
1. Add credentials/keys for Apollo (HTTP request headers), Serper (X-API-KEY header), OpenAI, Gmail OAuth2, Google Sheets OAuth2, and Google Calendar OAuth2.
2. Replace placeholder values like YOUR_APOLLO_API_KEY, YOUR_SERPER_API_KEY, and update the Gmail “sendTo” addresses (currently set to sales@yourcompany.com).
3. Create or select a Google Sheets spreadsheet with a Leads sheet that includes the columns used (for example Email, FirstName, LastName, Company, Domain, Title, Status, DateContacted, FollowUpCount, Replied, LastReplyIntent).
4. Update the ICP values in the criteria step (titles, locations, employee ranges, per-page limit) to match your target audience.
5. Review the Gmail trigger search query (is:unread -in:sent -category:promotions) and adjust it to match how your inbox labels prospect replies.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Calendar, Gmail, Gmail Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
