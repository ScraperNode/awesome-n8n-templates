# 🎫 Push Dialpad call information to Syncro

> ⚡ **1,188 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow takes Dialpad call information for an answered call and pushes it into Syncro as either a ticket or an update to an existing ticket. You will need to have a workflow for each technician at this time. It also saves call/ticket information to a Google Sheet to be queried by the dialpad_to_syncro_timer.json workflow. This will match to inbound and outbound calls, so if that's not desired you need to add in an IF to only proceed on either inbound or outbound calls.

&gt; This workflow is part of an MSP collection, The original can be found here: https://github.com/bionemesis/n8nsyncro

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Start, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
