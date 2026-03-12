# 🤝 Workflow for two-way sync between Airtable and HubSpot

> ⚡ **42 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Who's it for
This template is for sales teams, marketing operations (M-Ops), or freelancers who use Airtable as a "control panel" or staging area for new leads. If you're tired of manually copying and pasting approved leads into HubSpot, this workflow automates the entire process for you.

## How it works
This workflow runs on a schedule (e.g., every 5 minutes) to check for new leads.

**1. Before:** Your Airtable has new leads with a **'📥 New Lead'** status.
![Screenshot 20251115 110214.png](fileId:3307)

**2. The Trigger:** You (or a teammate) manually review and change a lead's status to **'👍 Ready to Sync'**.
![Screenshot 20251115 110325.png](fileId:3308)
**3. The Workflow Runs:** n8n fetches all leads in that view (up to 50 at a time) and loops through them one by one. For each lead, it:
* Finds (or creates) a **Company** in HubSpot based on the email domain.
* Creates (or updates) a **Contact** in HubSpot based on the email.
* Automatically **associates** that Contact with that Company.

**4. After:** The workflow automatically updates the *same* Airtable row with the new HubSpot IDs and a **'✅ Synced'** status, completing the 2-way sync.
![Screenshot 20251115 110358.png](fileId:3309)
This template includes a full batch-processing loop, robust error-handling (it logs failures back to Airtable), and detailed sticky notes to guide you.

## How to set up
Setup should take less than 10 minutes. All detailed instructions are in the sticky notes inside the workflow.

1.  **Copy the Airtable Base:** This is a mandatory first step! You must use this template.
    * ➡️ **[Click Here to Copy the Base Template](https://airtable.com/appthZgrzxKzQPEYa/shrRoRtIXoL1tlDVv)**
    * (First time using Airtable? [Sign up here with my link](https://airtable.com/invite/r/Isr7G94S))

2.  **Add Your Credentials:**
    * [How to connect Airtable to n8n (Video)](https://www.youtube.com/watch?v=xFFfkBeI2rQ)
    * [How to connect HubSpot to n8n (Video)](https://www.youtube.com/watch?v=KzP52kRsRrk)

3.  **Configure 3 Nodes:**
    * `Schedule Trigger`: Set how often you want it to run (e.g., every 5 minutes).
    * `get 👍Ready to Sync`: Select your Airtable credential and the Base you copied. Also, Do this for the other Airtable nodes.
    * `Search company`: Select your HubSpot credential. Also, Do this for the othe HubSpot nodes.

4.  **Activate!** Save and activate the workflow. To test it, just change a lead's 'Status' in Airtable to **'👍 Ready to Sync'**.

## Requirements
* An **Airtable** account.
* A **HubSpot** account (a free developer sandbox account is recommended for testing).
* n8n credentials for both Airtable and HubSpot (using a Private App Token for HubSpot).

## How to customize the workflow
* **Add More Fields:** Easily sync more data (like 'Phone Number' or 'Lead Source') by adding columns in your Airtable, then adding those fields to the `Create or update a contact` node in n8n.
* **Change the Schedule:** Adjust the `Schedule Trigger` to run more or less frequently.
* **Add Notifications:** Connect a Slack or email node to the `👍Done! Going for next record` (success) or specially `👎Failed! Going for next record1` (error) paths to get real-time alerts.

## 🔗 Nodes Used

Airtable, HubSpot, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
