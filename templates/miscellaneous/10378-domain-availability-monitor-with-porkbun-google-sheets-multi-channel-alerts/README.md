# 🔧 Domain availability monitor with Porkbun, Google Sheets & multi-channel alerts

> ⚡ **68 views** · 🔧 [Miscellaneous](../)

## Description

This workflow automatically checks a list of desired domain names for availability every 30 minutes. Using the Porkbun API and Google Sheets, it instantly sends detailed notifications via Gmail and Discord the moment a domain becomes available, so you can secure it before anyone else.

## Why Use This Workflow?

**Time Savings:** Eliminates hours of manual domain checking each week. Set your list once and let the automation monitor your targets 24/7.

**Competitive Edge:** Gain a critical speed advantage in acquiring high-value or expiring domains the second they become available.

**Scalability:** Effortlessly monitor hundreds of domains simultaneously without any extra effort or performance degradation.

## Ideal For

- **Domain Investors:** Automatically track and snipe valuable expiring domains for their portfolio without constant manual checks.
- **Marketing Agencies & SEO Specialists:** Secure brandable domains for new clients or build out private blog networks by catching domains as soon as they drop.
- **Startups & Entrepreneurs:** Monitor desired brand names without the daily hassle, ensuring they get the perfect domain the moment it's available.

## How It Works

1. **Trigger:** A schedule trigger initiates the workflow every 30 minutes.
2. **Data Collection:** It retrieves a list of domains to monitor from a designated Google Sheet, specifically targeting rows marked as "no" for availability.
3. **Processing:** The workflow iterates through each domain one by one.
4. **Intelligence Layer:** It makes an API call to Porkbun to check the current availability of the domain. An IF node then determines if the domain is available (`avail` == `yes`).
5. **Output & Delivery:** If a domain is available, the workflow sends a rich HTML email via Gmail and a formatted message to a Discord channel, complete with pricing details and a direct registration link.
6. **Storage & Logging:** The Google Sheet is automatically updated to mark the domain as "available," preventing redundant notifications on future runs.

## Setup Guide

### Prerequisites

| Requirement | Type | Purpose |
|-------------|------|---------|
| [n8n instance](https://n8n.partnerlinks.io/khmuhtadin) | Essential | Workflow execution platform |
| [Porkbun Account](https://porkbun.com/) | Essential | API Access for domain checks |
| Google Cloud Platform | Essential | Storing domain list (Sheets) & sending alerts (Gmail) |
| Discord Server | Optional | Real-time channel notifications |

### Installation Steps

1. Import the JSON file to your [n8n instance](https://n8n.partnerlinks.io/khmuhtadin).
2. **Create a Google Sheet** with two columns: `Domain` (e.g., example.com) and `isAvailable` (e.g., no).
3. **Configure credentials:**
   - **Porkbun**: Log in to Porkbun, go to API Access, create a new key, and copy the API Key and Secret Key into the HTTP Request nodes. A "Validate API KEY" node is included for testing your credentials.
   - **Google Sheets/Gmail**: Authenticate your Google account for the Google Sheets and Gmail nodes.
   - **Discord**: Create a Discord Bot and add the credentials to the Discord node.
4. **Update environment-specific values:**
   - **Get Domains from Sheet**: Enter your Google Sheet ID and select the correct sheet name.
   - **Send Email Alert**: Set your recipient's email address in the "To" field.
   - **Send Discord Notification**: Select your desired Server and Channel ID.
5. **Test execution:**
   - Add a domain you know is available to your Google Sheet (with `isAvailable` set to "no"). Run the workflow manually to verify that all connections work and you receive notifications.

## Technical Details

### Core Nodes

| Node | Purpose | Key Configuration |
|------|---------|-------------------|
| Schedule Trigger | Initiates the workflow on a recurring basis. | Set the desired interval (default: 30 minutes). |
| Google Sheets | Reads the domain list and updates its status. | Sheet ID, Sheet Name, and column mapping. |
| SplitInBatches | Processes each domain from the list individually. | Batch size is set to 1 to check domains sequentially. |
| HTTP Request | Queries the Porkbun API for domain availability. | Porkbun API endpoint and credentials. |
| IF | Routes the workflow based on the API response. | Checks if `response.avail` equals "yes". |
| Gmail | Sends a detailed email alert for available domains. | Recipient email, subject, and HTML body. |
| Discord | Sends a concise notification to a Discord channel. | Server ID, Channel ID, and message content. |
| Wait | Prevents API rate-limiting. | Pauses for 10 seconds between checking domains. |

### Workflow Logic

The workflow is triggered by a schedule, fetching a list of domains from a Google Sheet. 

It uses the `SplitInBatches` node to loop through each domain sequentially. 

For every domain, it calls the Porkbun API. An `IF` node checks the response; if available, it triggers notifications and updates the Google Sheet. 

A `Wait` node is crucial for respecting API rate limits, ensuring the workflow runs smoothly even with large domain lists.

## Customization Options

**Basic Adjustments:**
- **Check Frequency**: Modify the "Schedule Trigger" node to run more or less frequently.
- **Notification Channels**: Remove the Gmail or Discord nodes, or add new ones like Slack or Telegram.
- **Email Content**: Customize the HTML in the Gmail node to match your branding.

**Advanced Enhancements:**
- **Auto-Registration**: Extend the workflow to use Porkbun's domain registration API endpoint to automatically purchase the domain when it becomes available (use with caution).
- **Advanced Filtering**: Add logic to only send notifications for domains with specific TLDs (.com, .io, etc.) or that are not marked as "premium."
- **Tiered Notifications**: Set up different notification channels based on the perceived value of the domain, sending high-priority alerts via SMS for critical domains.

## Troubleshooting

**Common Issues:**

| Problem | Cause | Solution |
|---------|-------|----------|
| Workflow fails at HTTP Request node | Invalid Porkbun API credentials. | Use the separate "Validate API KEY" node to test your keys directly. Regenerate them if needed. |
| No domains are processed | Google Sheets node configuration error or the sheet is empty. | Verify the Sheet ID is correct and that the `isAvailable` column contains "no" for the domains you want to check. |
| Authentication errors | Google or Discord credentials have expired or lack permissions. | Re-authenticate the respective nodes in the n8n credentials panel. |


---

**Created by:** [Khaisa Studio](https://khaisa.studio)

**Category:** Monitoring
**Tags:** Porkbun, Domain, Automation, Google Sheets, Notifications

**Need custom workflows?** [Contact us](https://khaisa.studio/pages/contact)

**Connect with the creator:**

[Portfolio](https://khmuhtadin.com) • [Workflows](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio) • [Threads](https://www.threads.com/@khmuhtadin)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Discord, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
