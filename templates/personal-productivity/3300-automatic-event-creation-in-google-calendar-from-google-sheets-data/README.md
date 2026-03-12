# ⚡ Automatic event creation in Google Calendar from Google Sheets data

> ⚡ **5,229 views** · ⚡ [Personal Productivity](../)

## Description

This workflow streamlines the process of creating events in Google Calendar using event data stored in a Google Sheet.

The process begins by retrieving the latest event entry from Google Sheets, ensuring only the most recent event details are processed. Once fetched, a Function node formats the event date to align with Google Calendar's required format—ensuring consistency and preventing date-related errors.

After formatting, the structured event details are sent to Google Calendar, where an event is created with essential information such as the event title (summary), description, date, and location. Additionally, the workflow allows customization by setting the event's status as either "Busy" or "Available," helping attendees manage their schedules. A background color can also be assigned for better visibility and categorization.

By automating this process, you eliminate the need for manual event creation, ensuring seamless synchronization between Google Sheets and Google Calendar. This improves efficiency, accuracy, and productivity, making event management effortless.
 
## Prerequisites : 

**Before setting up this workflow, ensure the following:**

- You have an active Google account connected to Google Sheets and Google Calendar.
- The Google Sheets API and Google Calendar API are enabled in the Google Cloud Console.
- n8n has the necessary OAuth2 authentication configured for both Google Sheets and Google Calendar.
- Your Google Sheet has columns for event details (event name, description, location, date, etc.).

|Event Name|Event Description|Event Start Date|Location|
|-|-|-|-|
|Birthday|Celebration|27-Mar-1989|City|
|Anniversary|Celebration|10-Jun-2015|City|



## Customization Options : 

- Modify the Google Sheets trigger to track updates in specific columns.
- Adjust the data formatting function to support:
	- Different date/time formats
	- Time zone settings
	- Custom event colors
	- Attendee invitations

## Steps :
### Step 1: Add the Google Sheets Trigger Node

- Click "Add Node" and search for Google Sheets.
- Select "Google Sheets Trigger" and add it to the workflow.
- Authenticate using your Google account (select an existing account if already authenticated).
- Select the Spreadsheet and Sheet Name to monitor.
- Set the Trigger Event to "Row Added".
- Click "Execute Node" to test the connection.
- Click "Save".

### Step 2: Process Data with Function Node

- Click "Add Node" and search for Function.
- Add the Function Node and connect it to the Google Sheets Trigger Node.
- In the function editor, write a script to extract and format data.
- Ensure the required fields (title, location, date) are properly structured.
- Click "Execute Node" to verify the formatted output.
- Click "Save".

### Step 3: Add the Google Calendar Node

- Click "Add Node" and search for Google Calendar.
- Select "Create Event" operation.
- Authenticate with Google Calendar.
- Map the required fields
	- Title
	- Description
	- Location
	- Start time
- Optional: Set Event Status and Event Colors.
- Click "Execute Node" to test event creation.
- Click "Save".

### Step 4: Final Steps

- Connect all nodes in sequence (Google Sheets Trigger → Function Node → Google Calendar Node).
- Test the workflow by adding a sample row in Google Sheets.
- Verify that the event is created in Google Calendar with the correct title, description, date, and location.

## About WeblineIndia

This workflow was built by the [AI development](https://www.weblineindia.com/ai-development.html) team at WeblineIndia. We help businesses automate processes, reduce repetitive work, and scale faster. Need something custom? You can [hire AI developers](https://www.weblineindia.com/hire-ai-developers.html) to build workflows tailored to your needs.

## 🔗 Nodes Used

Google Calendar, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
