# 🤝 Automated call summary transfer from Chorus AI to HubSpot CRM

> ⚡ **140 views** · 🤝 [CRM & Sales Operations](../)

## Description

## **Who’s it for:**

SALES teams and AGENCIES that want to automatically send call summaries to their CRM. 

This flow is best suited for agencies and businesses that use ZoomInfo Chorus AI to capture and analyze calls, and HubSpot as their main CRM system for managing client data.

## **How it works / What it does:**

The flow runs every hour and checks Chorus for new call summaries. If new summaries are found, they are added as notes to the corresponding HubSpot company record.

- If the company does not exist in HubSpot, the summary will be skipped.
- If the engagement already exists as a note in HubSpot, it will also be skipped.

In short: **every hour, Chorus → HubSpot notes sync (only when unique & matched).**

## **Workflow Overview**

Here’s how the logic works, step by step:

1. **Triggers**
    - `Run every hour` (scheduled)
    - or `When clicking Execute workflow` (manual testing).
2. **Fetch from Chorus.AI**
    - `Get Chorus Engagement per last day`: requests new engagements from the last 24h.
    - Pagination is handled automatically (up to 15 requests).
    - `Merge paginated engagements`: combines all pages into a single list.
    - `Filter items with empty meeting_summary`: removes calls without summaries.
3. **Loop through engagements**
    - `Loop Over Engagements`: processes each engagement one by one.
4. **Find matching HubSpot company**
    - `Search Company In HubSpot By Name`: looks for an exact match with `account_name`.
    - `If company exists`: continues only if a match is found. Otherwise → `Skip, if company not found`.
5. **Check for existing notes**
    - `Search notes`: searches HubSpot for a note containing the `engagement_id`.
    - `If note not exist`: continues only if no duplicate is found. Otherwise → `Skip, if note already exists`.
6. **Create a new HubSpot note**
    - `Create Note Payload`: builds a formatted note body with:
        - Call date/time
        - Summary text
        - Link to call recording
        - Engagement ID
    - `Create Note`: inserts the note into HubSpot, associated with the matched company.
7. **Loop continues**
    - After processing, the flow moves back to `Loop Over Engagements` until all are handled.

## **Requirements**

- Chorus AI account or an existing API Token.
- HubSpot account with the ability to create applications OR an existing App Token.

## **How to set up:**

1. Generate a [Chorus.AI](http://chorus.ai/) API Token:
    
    Go to **Settings → Personal Settings → API Access → Generate API Token**. Save this token in a secure place.
    
2. In your N8N instance, create new credentials with any name you prefer (e.g., *Chorus.AI - API Token*).
    - Type: **Header Auth**
    - Header Name: `Authorization`
    - Header Value: your generated Chorus API Token
    - Save the credentials.
3. [Create a HubSpot Application](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/overview) with the following access scopes:
    - `crm.objects.contacts.write`
    - `crm.objects.companies.read`
        
        Save the Access Token and Client Secret securely. The Access Token will be used in this flow.
        
4. In your N8N instance, create new credentials with any name you prefer (e.g., *HubSpot App Token*).
    - Type: **HubSpot App Token**
    - App Token: paste the token from step 3
    - Save the credentials.
5. Install this flow in your N8N instance (cloud or self-hosted).
6. After installation, some nodes—`Get Chorus Engagement per last day`, `Search Company In HubSpot By Name`, `Search notes`, `Create Note`—will show errors. This is expected, as they need to be linked to your new credentials.
7. Open the node **`Get Chorus Engagement per last day`** and update the credentials:
    - Authentication: **Generic Credential Type**
    - Generic Auth Type: **Header Auth**
    - Header Auth: select the Chorus credentials you created in step 2.
8. Open the node **`Search Company In HubSpot By Name`** and update the credentials:
    - Authentication: **Predefined Credential Type**
    - Credential Type: **HubSpot App Token**
    - HubSpot App Token: select the credentials from step 4.
9. Repeat step 8 for the node **`Search notes`**.
10. Repeat step 8 for the node **`Create Note`**.
11. Save your updated flow by clicking **Save** in the top-right corner.
12. Run the workflow by clicking **Execute Workflow** to test if all credentials work correctly.
13. Once confirmed, activate your flow by toggling the switch in the top-right corner.

That’s it! 🎉 Your flow will now run every hour, syncing new Chorus call summaries to HubSpot—only when the company names match and the engagement isn’t already logged.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
