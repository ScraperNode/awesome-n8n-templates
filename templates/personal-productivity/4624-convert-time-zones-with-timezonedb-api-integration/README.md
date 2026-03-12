# ⚡ Convert time zones with TimeZoneDB API integration

> ⚡ **312 views** · ⚡ [Personal Productivity](../)

## Description

This n8n template provides a powerful utility for converting a specific time from one time zone to another by leveraging the TimeZoneDB API. This is an essential tool for anyone coordinating global teams, scheduling international events, or simply needing to understand time differences across the world.

---

# 🔧 How it works
- Receive Time Conversion Request: This node acts as the entry point for the workflow, listening for incoming POST requests. It's configured to expect a JSON body containing the following parameters:

  - fromZone: The IANA timezone name for the source time zone (e.g., America/New_York, Asia/Manila, Europe/London).
  - toZone: The IANA timezone name for the target time zone.
  - time: The Unix timestamp (in seconds) representing the time in the fromZone that you wish to convert.

*Important: Your TimeZoneDB API key is handled securely by n8n's credential system and should not be included in the webhook body.*

- Convert Timezone (TimeZoneDB): This node makes an HTTP GET request to the TimeZoneDB API (api.timezonedb.com). It dynamically constructs the API request URL using the fromZone, toZone, and time values extracted from your webhook request. Your API key is securely retrieved from n8n's pre-configured credentials and automatically added as a query parameter. The API performs the conversion and returns a JSON object containing the converted time and other timezone details.

- Respond with Converted Time: This node sends the full conversion result received from TimeZoneDB back to the service that initiated the webhook.

---

# 👤 Who is it for?
### This workflow is extremely useful for:

- Global Businesses & Remote Teams: Seamlessly schedule meetings, set deadlines, and coordinate tasks across different time zones, eliminating confusion and missed appointments.
- Event Organizers & Marketers: Publish event times accurately for a global audience, improving attendance and engagement for webinars, online conferences, or product launches.
- Customer Support Centers: Provide precise response times or service availability to customers in their local time zone, enhancing customer satisfaction.
- Travelers & Digital Nomads: Easily calculate arrival/departure times in local timezones when planning trips or managing schedules across borders.
- Developers & Integrators: Integrate accurate time zone conversion capabilities into custom applications, dashboards, or internal tools without building complex logic from scratch.
- Data Analysts: Standardize timestamps from global data sources for consistent reporting and analysis, especially when dealing with international operations.

---

# 📑 Data Structure
When you trigger the webhook, send a POST request with a JSON body structured as follows:

```
{
  "fromZone": "America/New_York",
  "toZone": "Asia/Manila",
  "time": 1678886400  // Unix timestamp for 2023-03-15 00:00:00 UTC (example)
}
```

*Note: You'll need to obtain a free or paid API Key from TimeZoneDB to use their API.*

The workflow will return a JSON response similar to this (results will vary based on inputs):

```
{
  "status": "OK",
  "message": "",
  "fromZoneName": "America/New_York",
  "fromAbbreviation": "-04",
  "fromTimestamp": 1678886400,
  "toZoneName": "Asia/Manila",
  "toAbbreviation": "+08",
  "toTimestamp": 1678933200,
  "offset": 46800 // difference in seconds
}
```

---

# ⚙️ Setup Instructions
- Get a TimeZoneDB API Key:
  - Go to https://timezonedb.com/register and sign up for a free API key.

- Create an n8n Credential for TimeZoneDB:
  - In your n8n instance, go to Credentials.
  - Click "New Credential" and search for "HTTP Query Auth".
  - Set the Name (e.g., TimeZoneDB API).
  - Set API Key to your TimeZoneDB API key.
  - Set Parameter Name to key.
  - Set Parameter Position to Query.
  - Save the credential.
- Import Workflow:
  - In your n8n editor, click "Import from JSON" and paste the provided workflow JSON.

- Configure TimeZoneDB API Node:

  - Double-click the Convert Timezone (TimeZoneDB) node.
  - Under "Authentication", select "Generic Credential Type".
  - Choose "HTTP Query Auth" as the Generic Auth Type.
  - Select the credential you created (e.g., "TimeZoneDB API") from the dropdown.
  - 
- Configure Webhook Path:
  - Double-click the Receive Time Conversion Request node.
  - In the 'Path' field, set a unique and descriptive path (e.g., /convert-timezone).
  - 
- Activate Workflow:
  - Save and activate the workflow.

---

# 📝 Tips
This time zone converter is an essential building block that can be significantly expanded and integrated:

- Robust Error Handling & Input Validation:
  - Upgrade: Add an IF node after the Receive Time Conversion Request to validate inputs (fromZone, toZone, time). Check if they are present and correctly formatted.
  - Upgrade: After the Convert Timezone (TimeZoneDB) node, add another IF node to check {{ $json.status === 'OK' }}. If the status is not OK, return a descriptive error message from {{ $json.message }} to the webhook caller.
  - Leverage: Provide clear feedback to users when invalid data is provided, preventing workflow failures and improving user experience.

- Flexible Time Input:
  - Upgrade: Currently, the time input must be a Unix timestamp. Add a Function node before the Convert Timezone (TimeZoneDB) node to accept an ISO 8601 string (e.g., "2025-06-03T22:07:42Z") and convert it to a Unix timestamp using new Date($json.body.isoTime).getTime() / 1000.
  - Leverage: Make the API easier to use for callers who prefer ISO dates over Unix timestamps.

- Human-Readable Output:
  - Upgrade: Add a Function node after Convert Timezone (TimeZoneDB). Use JavaScript's Date object and toLocaleString() to format the toTimestamp into a user-friendly string (e.g., "Tuesday, June 3, 2025, 10:07:42 PM").
  - Leverage: Provide a more immediately consumable output that doesn't require further client-side processing, enhancing integration ease.

- Automated Meeting/Event Scheduling:
  - Upgrade: Combine this workflow with a Google Calendar or Outlook Calendar node. Accept a meeting time in one timezone and a list of attendee timezones. Loop through attendees, convert the time, and then add calendar invites for each.
  - Leverage: Fully automate the creation of timezone-aware calendar events, a huge time-saver for international teams.

- Dynamic Website Content:
  - Upgrade: Integrate this webhook into your website's backend. When a user lands on a page with time-sensitive information, detect their IP (and thus their timezone, perhaps using a separate IP lookup service) and then use this workflow to convert all relevant times to their local time.
  - Leverage: Personalize the user experience by showing all times relevant to their location, improving clarity and usability.

- Smart Notification Delivery:
  - Upgrade: If you send out automated notifications (e.g., Slack, Email, SMS) based on a specific time, use this workflow to ensure the notification arrives at a "friendly" local hour for each recipient.
  - Leverage: Avoid sending notifications in the middle of the night for international users, improving engagement and reducing annoyance.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
