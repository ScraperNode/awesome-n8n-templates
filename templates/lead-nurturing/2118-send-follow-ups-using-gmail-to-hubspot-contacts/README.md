# 💬 Send follow-ups using Gmail to Hubspot contacts

> ⚡ **2,852 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Use Case
Following up at the right time is one of the most important parts of sales. This workflow uses Gmail to send outreach emails to Hubspot contacts that have already been contacted only once more than a month ago, and records the engagement in Hubspot. 

## Setup 
1. Setup HubSpot Oauth2 creds (Be careful with scopes. They have to be exact, not less or more. Yes, it’s not simple, but it’s well documented in the n8n docs. Be smarter than me, read the docs)
2. Setup Gmail creds.
3. Change the email variables in the `Set keys` node

## How to adjust this template
There's plenty to do here because the approach here is really just a starting point. Most important here is to figure out what your rules are to follow up. After a month? More than once?

Also, remember to update the follow-up email! Unless you want to sell n8n 😉

## 🔗 Nodes Used

HTTP Request, HubSpot, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
