# ⚡ Check for bargain flights and get notified using Amadeus and Gmail

> ⚡ **7,913 views** · ⚡ [Personal Productivity](../)

## Description

## What this template does
This workflow uses the Amadeus API, every day to check for bargain flights for an itinerary and price target of your choice. It then automatically emails you once it found a match.

## Setup
1. Create an api account on https://developers.amadeus.com/
2. In **Amadeus Flight Search**, connect to Oauth2 API:
  -- Grant Type - Client Credentials
  -- Access Token URL - https://test.api.amadeus.com/v1/security/oauth2/token
  -- Client ID/Secret - from your account
3. Set your details in **Gmail**
4. Set your desired Origin/Destination airports in FromTo
5. Set the dates ahead you wish to search in **Get Dates** (default is 7 days and 14 days)
6. Set the price target in **Under Price**

## How to test it
After completing the setup steps above, just hit 'Test workflow'!

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
