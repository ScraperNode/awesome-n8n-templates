# 🎫 Filter and label Gmail emails using keyword-based rules and Google Sheets logging

> ⚡ **170 views** · 🎫 [Ticket Management & Triage](../)

## Description

## This workflow automatically filters and organizes incoming Gmail emails using keyword-based classification. 

The goal is to reduce inbox noise and automatically organize repetitive types of emails so that imprtant messages remain visible while unsolicited or promotional emails are handled automatically.

## How it works

- When a new email arrives in Gmail, the workflow is triggered and retrieves the full email content. 
- It then analyzes the subject line and email snippet for keywords commonly associated with different types of emails.
- Based on this analysis, the workflow classifies the message into one of several categories and performs actions such as applying Gmail labels, marking the email as read, or removing it from the inbox.

This allows you to automatically separate unsolicited outreach, marketing emails, and legitimate communication without manually reviewing every message.

## How to use
- The workflow will be triggered each time a new email comes in. However, you can change the trigger based on your own needs.
- The email categories can be changed and adjusted to your own needs as well.
- Make sure to follow the sticky notes in the workflow to set up your Gmail labels before starting to build the workflow.

## Requirement:
- Gmail connection
- Optional: Google sheet connection

## Customizing this workflow:
Change the email categories based on your real-life needs and if you don't need to google sheet for logging and debugging purposes, feel free to omit them.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
