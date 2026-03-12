# 📱 Automated email blast with follow-ups & response tracking

> ⚡ **2,362 views** · 📱 [Social Media & Email Marketing](../)

## Description

This n8n workflow automates email blasts with follow-ups and response tracking by reading contact data from a Google Sheet daily, looping through contacts to send personalized emails based on follow-up stages via Gmail, updating the sheet with status changes, and monitoring replies for logging.

## Why Use It

This workflow streamlines email marketing campaigns by automating personalized email distribution, managing follow-up sequences, and tracking responses without manual intervention, saving time, improving engagement, and providing actionable insights into contact interactions.

## How to Import It

1. **Download the Workflow JSON**: Obtain the workflow file from the n8n template or create it based on this document.
2. **Import into n8n**: In your n8n instance, go to "Workflows," click the three dots, select "Import from File," and upload the JSON.
3. **Configure Credentials**: Set up Gmail and Google Sheets credentials in n8n.
4. **Run the Workflow**: Activate the scheduled trigger and test with a sample Google Sheet.

## System Architecture

- **Email Blast Pipeline**:
  - **Daily Trigger - 9 AM**: Initiates the workflow daily at 9 AM via Cron.
  - **Read Contact Data from Google Sheet**: Fetches contact details from the sheet.
  - **Loop Through Contacts**: Processes each contact individually.
  - **Determine Follow-Up Stage**: Identifies the current stage for each contact.
  - **Send Main/Follow-Up Email**: Delivers the appropriate email via Gmail.
  - **Update Sheet Status**: Updates the Google Sheet with the latest status.
- **Response Tracking Flow**:
  - **Check Gmail for Replies**: Monitors Gmail for email responses.
  - **Log Responses**: Records responses in the Google Sheet.


## Google Sheet File Structure

- **Sheet Name**: `EmailCampaign`  
- **Range**: `A1:F10` (or adjust based on needs)

| A          | B          | C             | D             | E             | F             |
|------------|------------|---------------|---------------|---------------|---------------|
| **name**   | **email**  | **stage**     | **last_email_date** | **status** | **response** |
| John Doe   | john@example.com | Initial      | 2025-08-07    | Pending       |               |
| Jane Smith | jane@example.com | Follow-Up 1  | 2025-08-06    | Sent          | "Interested"  |
| Bob Jones  | bob@example.com | Follow-Up 2  | 2025-08-05    | Replied       | "Follow up later" |

- **Columns**:
  - `name`: Contact’s full name.
  - `email`: Contact’s email address for sending emails.
  - `stage`: Current follow-up stage (e.g., Initial, Follow-Up 1, Follow-Up 2).
  - `last_email_date`: Date of the last email sent.
  - `status`: Current status (e.g., Pending, Sent, Replied).
  - `response`: Logged response from the contact (updated after reply detection).

## Customization Ideas
- **Adjust Schedule**: Change the Cron trigger to hourly or weekly based on campaign needs.
- **Add Email Templates**: Customize email content for different stages or audiences.
- **Incorporate SMS**: Add WhatsApp or SMS follow-ups using additional nodes.
- **Enhance Tracking**: Integrate a dashboard (e.g., Google Data Studio) for real-time campaign analytics.
- **Automate Segmentation**: Add logic to segment contacts by industry or interest for targeted emails.

## Requirements to Run This Workflow
- **Google Sheets Account**: For storing and managing contact data and responses.
- **Gmail Account**: For sending emails and checking replies (requires IMAP enabled).
- **n8n Instance**: With Google Sheets and Gmail connectors configured.
- **Cron Service**: For scheduling the daily trigger.
- **Internet Connection**: To access Google Sheets and Gmail APIs.
- **API Credentials**: Gmail OAuth2 and Google Sheets API credentials set up in n8n.

---

### Notes
- Ensure the Google Sheet is shared with the n8n service account or has appropriate permissions.
- Test the workflow with a small contact list to verify email delivery and response logging.
- Adjust the `stage` logic in the "Determine Follow-Up Stage" node to match your campaign structure.

## 🔗 Nodes Used

Email Trigger (IMAP), Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
