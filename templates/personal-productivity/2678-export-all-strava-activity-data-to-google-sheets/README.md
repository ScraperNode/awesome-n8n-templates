# ⚡ Export all Strava activity data to Google Sheets

> ⚡ **2,684 views** · ⚡ [Personal Productivity](../)

## Description

## What does this template help with?
Save the data of activities recorded and stored in Strava to a Google Sheets document.

## How it works:
- We have a Google Sheets spreadsheet where each row represents a Strava activity with the date, reference, distance, time, and elevation.
Periodically, the workflow checks the latest activities in our Strava account to see if any are missing from the spreadsheet and adds them to the list.
- All fields must be properly formatted according to how they are stored in the Google Sheets spreadsheet.

## Set up instructions
- Complete the Set up credentials step when you first open the workflow. You'll need a Google Sheets and Strava account.
- In the 'activities' node, you must enter the name of the file and the sheet where you want to save the imported data.
- In the 'Strava' node, you must select the corresponding credential.
- You can adjust the format of dates, times, and distances according to your needs in the 'strava_last' node.

The rest of the information is available at  [sherblog.es](https://sherblog.es/de-strava-a-google-sheets-gracias-a-n8n/)

Template was created in n8n v1.72.1

## 🔗 Nodes Used

Google Sheets, Strava, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
