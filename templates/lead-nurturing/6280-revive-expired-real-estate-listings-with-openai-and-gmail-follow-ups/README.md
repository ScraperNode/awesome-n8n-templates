# 💬 Revive expired real estate listings with OpenAI and Gmail follow-ups

> ⚡ **732 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works
1. This automation helps revive expired property listings by:
2. Reading listing data from a Google Sheet that tracks all properties.
3. Filtering listings where the last_activity date is older than 30 days.
4. Generating a personalized email using OpenAI (GPT-4) to re-engage the owner.
5. Sending the email to the property owner using Gmail or SMTP.
6. (Optional): Updating the listing's status to followed_up in the Sheet once the email is sent.
7. This workflow ensures no opportunity is missed by proactively reactivating cold leads.


## Set Up Steps
1. **Prepare your Google Sheet**
   - Create a Google Sheet with these columns:
     - `title`, `owner_name`, `email`, `property_type`, `location`, `last_activity`
   - Fill in sample data for testing.

2. **Connect Google Sheets in n8n**
   - Add a **Google Sheets node**.
   - Use the "Read Rows" operation to load the listing data.

3. **Filter listings inactive for 30+ days**
   - Use a **Set node** to convert `last_activity` to a Date.
   - Add an **IF node** or **Code node** to check if the listing is older than 30 days.

4. **Generate email content with OpenAI**
   - Add an **OpenAI node**.
   - Use dynamic input (e.g. owner name, property type) to create a follow-up message.

5. **Send the email**
   - Add a **Gmail node** or **SMTP node** to send the email to the property owner.

6. **(Optional) Update status**
   - Use a **Google Sheets "Update Row" node** to change the listing's status to `followed_up`.

7. **Test the full workflow**
   - Manually trigger the workflow or schedule it to run daily/weekly.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
