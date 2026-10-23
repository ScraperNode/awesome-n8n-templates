# 🔒 Monitor landing page defacement with Snapshot Site, Discord and email

> ⚡ **4 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick Overview
This workflow runs every 15 minutes to compare a live landing page against a baseline screenshot using Snapshot Site, and alerts your team via Discord and email when the mismatch indicates possible defacement or hijacking.

## How it works
1. Runs every 15 minutes on a schedule.
2. Uses Snapshot Site to compare the current landing page URL against a stored baseline screenshot URL and calculates a mismatch percentage.
3. Checks whether the Snapshot Site comparison returned an API/comparison error and posts a failure message to Discord if it did.
4. If the comparison succeeds, evaluates the mismatch percentage and treats 30% or higher as an abnormal change.
5. Sends a defacement alert to a Discord channel and an email recipient in parallel when an abnormal change is detected.
6. Ends without notification when the mismatch is below the alert threshold.

## Setup
1. Install the `n8n-nodes-snapshot-site` community node and add Snapshot Site API credentials.
2. Set the baseline screenshot URL (beforeUrl) and the live page URL (afterUrl), and adjust the mismatch threshold as needed.
3. Add a Discord Webhook credential and set the target Discord channel for failure and defacement alerts.
4. Add an SMTP credential and update the from/to email addresses for the defacement email notification.

## 🔗 Nodes Used

Send Email, Discord, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
