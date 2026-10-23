# 🎫 Sort Gmail leads, meetings, and trash with OpenAI classification

> ⚡ **25 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow monitors Gmail for new messages, applies rule-based pre-classification, and uses OpenAI to categorize ambiguous emails as lead, review, or trash, then applies Gmail labels and schedules automatic deletion for trash threads.

## How it works
1. Triggers every 5 minutes when a new Gmail message is received.
2. Fetches the full email content from Gmail and extracts key fields like sender, subject, body, and thread ID.
3. Applies deterministic rules to classify emails as team, meeting, website form, trash (bulk/OTP), or unknown.
4. Adds Gmail labels for team and meeting emails, and skips processing for website form submissions.
5. Sends only unknown emails to OpenAI for classification into LEAD, REVIEW, or TRASH and parses the returned JSON safely.
6. Labels lead and review emails in Gmail, and for trash emails calculates a deletion timestamp, labels them as pending deletion, waits until that time, and then moves the entire Gmail thread to trash.

## Setup
1. Connect a Gmail OAuth2 credential and ensure the trigger and Gmail actions point to the correct mailbox.
2. Add an OpenAI API credential and select a model in the OpenAI classification step.
3. Replace the placeholder Gmail label IDs (TEAM, MEETINGS, LEADS, REVIEW, PENDING_DELETE) with labels from your Gmail account.
4. Update the pre-classification rule lists (team member addresses and form sender addresses) to match your organization.
5. Set the business timezone in the deletion scheduling code to match your locale.

## 🔗 Nodes Used

Gmail, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
