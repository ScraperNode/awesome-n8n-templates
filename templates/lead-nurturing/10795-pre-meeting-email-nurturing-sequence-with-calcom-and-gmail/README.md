# 💬 Pre-meeting email nurturing sequence with Cal.com and Gmail

> ⚡ **137 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# How it works

Trigger: When a new meeting is booked in Cal.com.

Date Check: The workflow calculates how many days remain before the meeting date.

Email Scheduling: Depending on the time left, it sends a series of pre-written “warm-up” emails using Gmail, designed to set expectations and build interest in your offering.

Timing Control: Emails are automatically spaced out to ensure natural engagement before the meeting.

## How to set up

Connect your Cal.com API key to authenticate and trigger on new bookings.

Connect your Google account to enable Gmail email sending.

Customize the email messages in the Set or Send Email nodes to match your brand voice and tone.

Test with internal bookings to ensure correct timing and delivery before activating for clients.

## Requirements

Cal.com account with API access.

Google account connected to Gmail node.

Active n8n instance (self-hosted or cloud).

## How to customize

Adjust email spacing or timing by modifying the Wait nodes.

Edit the email copy for different purposes (e.g., sales, onboarding, consultation).

Add conditional logic to send different warm-up sequences for specific meeting types or durations.

## 🔗 Nodes Used

Gmail, Cal.com Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
