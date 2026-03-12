# ⚡ Public holiday lookup with Nager.Date API via webhook

> ⚡ **590 views** · ⚡ [Personal Productivity](../)

## Description

This n8n template empowers you to instantly fetch a list of public holidays for any given year and country using the Nager.Date API. This is incredibly useful for scheduling, planning, or integrating holiday data into various business and personal automation workflows.

---

# 🔧 How it works
- Receive Holiday Request Webhook: This node acts as the entry point, listening for incoming POST requests. It expects a JSON body containing the year (e.g., 2025) and countryCode (e.g., US for United States, PH for Philippines, DE for Germany) for which you want to retrieve public holidays.
- Get Public Holidays: This node makes an HTTP GET request to the Nager.Date API (date.nager.at). It dynamically uses the year and countryCode from your webhook request to query the API. The API responds with a JSON array, where each object represents a public holiday with details like its date, name, and type.
- Respond with Holiday Data: This node sends the full list of public holidays received from Nager.Date back to the service that initiated the webhook.

---

# 👤 Who is it for?
### This workflow is ideal for:

- Businesses with International Operations: Automatically check holidays for different country branches to adjust production schedules, customer service hours, or delivery estimates.
- HR & Payroll Departments: Accurately calculate workdays, plan leave schedules, or process payroll taking public holidays into account.
- Event Planners: Avoid scheduling events on public holidays, which could impact attendance or venue availability.
- Travel Agencies: Inform clients about holidays in their destination country that might affect local business hours or attractions.
- Content & Social Media Schedulers: Plan content around national holidays to maximize engagement or avoid insensitive postings.
- Personal Productivity & Travel Planning: Integrate holiday data into your calendar or task management tools to plan trips or personal time off more effectively.
- Developers: Easily integrate a reliable source of public holiday data into custom applications, dashboards, or internal tools without managing complex datasets.

---

# 📑 Data Structure
When you trigger the webhook, send a POST request with a JSON body structured as follows:

```
{
  "year": 2025,
  "countryCode": "PH" // Example: "US", "DE", "GB", etc.
}
```

You can find a comprehensive list of supported country codes on the Nager.Date API documentation: https://www.nager.at/Country

The workflow will return a JSON array, where each element is a holiday object, like this example for a single holiday:

```
[
  {
    "date": "2025-01-01",
    "localName": "New Year's Day",
    "name": "New Year's Day",
    "countryCode": "PH",
    "fixed": true,
    "global": true,
    "counties": null,
    "launchYear": null,
    "types": [
      "Public"
    ]
  }
  // ... more holiday objects
]
```

---

# ⚙️ Setup Instructions
- Import Workflow: In your n8n editor, click "Import from JSON" and paste the provided workflow JSON.
- Configure Webhook Path:
  - Double-click the Receive Holiday Request Webhook node.
  - In the 'Path' field, set a unique and descriptive path (e.g., /public-holidays).
- Activate Workflow: Save and activate the workflow.

---

# 📝 Tips
This workflow is a foundation for many powerful automations:

- Conditional Branching for Specific Holidays: Add an IF node after "Get Public Holidays" to check for a specific holiday (e.g., "Christmas Day"). You can then trigger different actions (e.g., send a reminder, adjust a schedule) only for that particular holiday.
- Filtering and Aggregating Data:
  - Use a Filter node to only keep holidays of a certain type (e.g., "Public").
  - Use a Code or Function node to count the number of public holidays, or extract just the names and dates into a simpler list.
- Storing Holiday Data:
  - Google Sheets/Airtable: Automatically append new holidays to a spreadsheet for easy reference or further analysis.
  - Database: Store holiday data in a database (like PostgreSQL or MySQL) to build a custom holiday calendar application.
- Scheduling and Reminders:
  - Connect this workflow to a Cron or Schedule node to run periodically (e.g., once a year at the start of the year).
  - Use the retrieved holiday dates to set up reminders in your calendar (Google Calendar node) or send notifications (Slack, Email, SMS) a few days before an upcoming holiday.
- Integrate with Business Logic:
  - Employee Leave Management: Cross-reference employee leave requests with public holidays to ensure accuracy.
  - Automated Messages: Schedule automated "Happy Holiday" messages to customers or employees.
  - E-commerce Shipping: Adjust estimated shipping times based on upcoming non-working days.
- API Key (Not needed for Nager.Date free tier): The Nager.Date API used here does not require an API key for basic public holiday lookups, which makes this template very easy to use out-of-the-box.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
