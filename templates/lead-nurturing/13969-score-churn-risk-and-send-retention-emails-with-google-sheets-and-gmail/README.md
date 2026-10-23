# 💬 Score churn risk and send retention emails with Google Sheets and Gmail

> ⚡ **29 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Who's it for

This template is for gyms, fitness studios, and membership-based businesses that want to automatically detect at-risk members and act before they cancel. Ideal for operations teams and retention managers who want to replace manual follow-ups with a systematic, automated process.

## How it works

The workflow fetches member records from Google Sheets and passes them through a JavaScript scoring engine that assigns each member a churn risk level: Critical, High, Medium, or Low.

A Switch node routes each member into the appropriate path:
- **Critical and High risk** members receive a personalised retention email via Gmail and their action is logged in Google Sheets
- **Medium risk** members are logged for later monitoring
- **Low risk** members are ignored automatically

## How to set up

1. Copy the sample Google Sheet (link in the sticky note) and connect it to the Google Sheets nodes
2. Connect your Gmail account to the email nodes
3. Adjust the scoring logic in the **Calculate Churn Risk** code node to match your business rules
4. Replace the manual trigger with a Schedule Trigger for daily automated runs

## Requirements

- Google Sheets account
- Gmail account
- Basic understanding of JavaScript to customise the scoring logic

## 🔗 Nodes Used

Google Sheets, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
