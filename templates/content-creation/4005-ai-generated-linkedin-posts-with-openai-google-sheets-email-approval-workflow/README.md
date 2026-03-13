# 🎬 AI-generated LinkedIn posts with OpenAI, Google Sheets & email approval workflow

> ⚡ **43,248 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### How it works
This workflow automates the process of creating, approving, and optionally posting LinkedIn content from a Google Sheet. Here's a high-level overview:
1. **Scheduled Trigger**: Runs automatically based on your defined time interval (daily, weekly, etc.).
2. **Fetch Data from Google Sheets**: Pulls the first row from your sheet where Status is marked as Pending.
3. **Generate LinkedIn Post Content**: Uses OpenAI to create a professional LinkedIn post using the Post Description and Instructions from the sheet.
4. **Format & Prepare Data**: Formats the generated content along with the original instruction and post description for email.
5. **Send for Approval**: Sends an email to a predefined user (e.g., marketing team) with a custom form for approval, including a dropdown to accept/reject and an optional field for edits.
6. **(Optional) Image Fetch**: Downloads an image from a URL (if provided in the sheet) for future use in post visuals.


### Set up steps
You’ll need the following before you start:

- A Google Sheet with the following columns: Post Description, Instructions, Image (URL), Status
- Access to an OpenAI API key
- A connected Gmail account for sending approval emails
- Your own Google Sheets and Gmail credentials added in n8n

### Steps:
1. Google Sheet Preparation:
Create a new Google Sheet with the mentioned columns (Post Description, Instructions, Image, Status, Output, Post Link).
Add a row with test data and set Status to Pending.

2. Credentials:
In n8n, create OAuth2 credentials for:
a. Google Sheets
b. Gmail
c. OpenAI (API Key)
Assign these credentials to the respective nodes in the JSON.

3. OpenAI Model:
Choose a model like gpt-4o-mini (used here) or any other available in your plan.
Adjust the prompt in the "Generate Post Content" node if needed.

4. Email Configuration:
In the Gmail node, set the recipient email to your own or your team’s address.
Customize the email message template if necessary.

5. Schedule the Workflow:
Set the trigger interval (e.g., every morning at 9 AM).

6. Testing:
Run the workflow manually first to confirm everything works.
Check Gmail for the approval form, respond, and verify the results.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, LinkedIn, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
