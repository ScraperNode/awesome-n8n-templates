# 🤝 Bidirectional company sync between ProspectPro and HubSpot with status tracking

> ⚡ **135 views** · 🤝 [CRM & Sales Operations](../)

## Description

This template syncs prospects from ProspectPro into HubSpot. It checks if a company already exists in HubSpot (by ProspectPro ID or domain), then updates the record or creates a new one. Sync results are logged back in ProspectPro with tags to prevent duplicates and mark errors, ensuring reliable and repeatable integrations.

## ✨ Features

- Automatically sync ProspectPro prospects to HubSpot companies

- Smart search logic: match by ProspectPro ID first, then by domain

- Creates new HubSpot companies when no match is found

- Updates existing HubSpot companies with latest ProspectPro data

- Logs sync results back into ProspectPro with tags (HubspotSynced, HubspotSyncFailed)

- Extendable and modular: use as a trigger workflow or callable sub-flow

## ⚙ Requirements

- n8n instance or cloud workspace

- Install the ProspectPro Verified Community Node

- ProspectPro account & API credentials (14-day free trial)

- HubSpot account with OAuth2 app and API credentials

## 🔧 Setup Instructions

- Import the template and set your credentials (ProspectPro, HubSpot).

- Connect to a trigger (e.g., ProspectPro "New website visitor") or call as a sub-workflow.

- Add a propery to Hubspot for the ProspectPro ID if you don't already have one

- Adjust sync logic in the "Continue?"-node and HubSpot fields to match your setup.

- Optional: extend error handling, add Slack/CRM notifications, or sync back HubSpot data into ProspectPro.

## 🔐 Security Notes

- Prevents re-processing of failed syncs using the HubspotSyncFailed tag

- Error branches included for failed updates/creates

- Manual resolution required if sync errors persist

## 🧪 Testing

- Run with a ProspectPro ID of a company with a known domain

- Check HubSpot for creation or update of the company record

- Verify updated tags (HubspotSynced / HubspotSyncFailed) in ProspectPro

## 📌 About ProspectPro

ProspectPro is a B2B Prospecting Platform for Dutch SMEs. It helps sales teams identify prospects, track website visitors, and streamline sales without a full CRM.

**Website:** https://www.prospectpro.nl
**Platform:** https://mijn.prospectpro.nl
**API docs:** https://www.docs.bedrijfsdata.nl
**Support:** https://www.prospectpro.nl/klantenservice

Support hours: Monday–Friday, 09:00–17:00 CET

## 📌 About HubSpot

HubSpot is a leading CRM platform offering marketing, sales, and customer service tools. It helps companies manage contacts, automate workflows, and grow their customer base.

**Website:** https://www.hubspot.com
**Developer Docs:** https://developers.hubspot.com

## 🔗 Nodes Used

HTTP Request, HubSpot, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
