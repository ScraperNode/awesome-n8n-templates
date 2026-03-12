# 🤝 Sync Calendly bookings to Easy Redmine CRM with comments and sales activities

> ⚡ **141 views** · 🤝 [CRM & Sales Operations](../)

## Description

**Sync New Calendly Bookings to Esko CRM with Comment, Sales Activity, and Outlook Email**

## Intro/Overview  
This automation workflow automatically syncs newly scheduled Calendly meetings into Easy Redmine CRM. When a meeting is booked via Calendly, it finds the associated lead in Easy Redmine CRM using the invitee’s email address and logs both a comment and a sales activity in the lead’s record.  
In addition, the workflow sends an email in Microsoft Outlook, ensuring the account manager can check and knows about the meeting.

Ideal for sales teams and customer success managers, this workflow ensures your CRM and calendar stay updated with every new meeting—no manual entry required.

## How it works  

**Calendly Trigger**  
- Watches for `invitee.created` events (newly booked meetings)  
- Authenticates with Calendly via OAuth2  

**Get ID from email**  
- Sends a GET request to Easy Redmine CRM to search for a lead using the invitee’s email  
- Extracts the lead ID, required for further CRM actions  

**Add Comment**  
- Posts a comment to the lead’s record in Easy Redmine CRM  
- The comment includes:  
 - Invitee’s full name  
 - Scheduled date/time of the meeting  
 - Meeting description  

**Sales Activity POST**  
- Creates a new sales activity in Easy Redmine CRM under the same lead  
- Includes structured details:  
 - Invitee’s name  
 - Meeting date and time  
 - Description of the meeting  

**Send an email**  
- Sends a notification email in Microsoft Outlook  
- Maps the name, start time, and description using dynamic values from the Calendly booking  
- Ensures the account manager is informed about the scheduled meeting

## How to Use  

**Import the workflow**  
- Copy or download the JSON of this workflow  
- In your n8n editor, click **Import Workflow** and paste/upload the JSON  

**Set up credentials**  
- *Calendly API*:  
 - Use OAuth2 credentials  
 - Ensure proper scopes for reading event data  
 - Follow n8n’s setup guide: https://docs.n8n.io/integrations/builtin/credentials/calendly/  
- *Easy Redmine CRM*:  
 - Add credentials using an API token or OAuth2, depending on your CRM setup  
- *Microsoft Outlook*:  
 - Set up OAuth2 credentials and connect your Outlook email  

**Assign and configure nodes**  
- *Calendly Trigger*:  
 - Confirm it’s set to listen for `invitee.created`  
- *Get ID from email*:  
 - Update the GET request URL to match your Easy Redmine CRM lead search endpoint  
 - Ensure it uses the invitee’s email from the trigger  
- *Add Comment & Sales Activity POST*:  
 - Use your Easy Redmine CRM’s correct endpoints  
 - Map dynamic fields like lead ID, name, meeting time, and description  
- *Send email notification*:  
 - Set up your preferred Outlook email  
 - Map meeting details into email body (e.g. name, time, description)  

**Timezone and formatting**  
- If needed, use a Code node to convert the meeting time if your CRM or Outlook expects a specific format or timezone  

**Test the workflow**  
- Schedule a test meeting via Calendly using an email tied to an existing CRM lead  
- Check Easy Redmine CRM to confirm:  
 - A comment was added  
 - A sales activity was created under the correct lead  
- Check Outlook to confirm:  
 - An email notification was received 

## Example Use Cases  

**Sales Enablement**  
- Log every discovery or demo call automatically, helping reps track all activity in one place  
- Block time in calendars without double-booking risk  

**Customer Success**  
- Keep onboarding and check-in meetings logged, improving visibility across the team  
- Ensure calendar events are created for every scheduled session  

**Lead Qualification**  
- Identify engaged leads based on bookings and trigger follow-up sequences  

## Requirements  
- Calendly account with API access  
- Easy Redmine CRM user with API access  
- Microsoft Outlook account with email access  

## Customization (Optional)  

**Add Filters**  
- Use IF or Switch nodes to handle only specific event types (e.g., demo calls vs intro calls)  

**Extend Comments**  
- Include additional data from Calendly like meeting location or answers to custom questions

## 🔗 Nodes Used

HTTP Request, Calendly Trigger, Microsoft Outlook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
