# 📊 Export search console results to Google Sheets

> ⚡ **26,283 views** · 📊 [Market Research & Insights](../)

## Description

## How it works

This workflow gets the search console results data and exports this to google sheets. This makes it easier to visualize and do other SEO related tasks and activities without having to log into Search Console

## Setup and use

1. Set your desired schedule
2. Enter your desired domain
3. Connect to your Google sheets or make a copy of this sheet. 

## Detailed Setup

- **Inputs and Outputs:**
- Input: API response from Google Search Console regarding keywords, page data, and date data.
- Output: Entries written to Google Sheets containing keyword data, clicks, impressions, CTR, and positions.

2. **Setup Instructions:**
- **Prerequisites:**
- An n8n instance set up and running.
- Active Google Account with access to Google Search Console and Google Sheets.
- Google OAuth 2.0 credentials for API access.

- **Step-by-Step Setup:**
1. Open n8n and create a new workflow.
2. Add the nodes as described in the JSON.
3. Configure the **Google OAuth2** credentials in n8n to enable API access.
4. Set your domain in the **Set your domain** node.
5. Customize the Google Sheets document URLs to your personal sheets.
6. Adjust the schedule in the **Schedule Trigger** node as per your requirements.
7. Save the workflow.

- **Configuration Options:**
- You can customize the date ranges in the body of the **HttpRequest** nodes.
- Adjust any fields in the **Edit Fields** nodes based on different data requirements.

3. **Use Case Examples:**
- Useful in tracking website performance over time using Search Console metrics.
- Ideal for digital marketers, SEO specialists, and web analytics professionals.
- Offers value in compiling performance reports for stakeholders or team reviews.

4. **Running and Troubleshooting:**
- **Running the Workflow:**
- Trigger the workflow manually or wait for the schedule to run it automatically.

- **Monitoring Execution:**
- Check the execution logs in n8n's dashboard to ensure all nodes complete successfully.

- **Common Issues:**
- Invalid OAuth credentials – ensure credentials are set up correctly.
- Incorrect Google Sheets URLs – double-check document links and permissions.
- Scheduling conflicts – make sure the schedule set does not overlap with other workflows.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
