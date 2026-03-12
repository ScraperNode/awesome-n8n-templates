# 💬 Automated client journey appointment reminders & follow-ups with Twilio

> ⚡ **350 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

### How It Works ⚙️

This workflow is a comprehensive, AI-powered system that acts as a virtual client relationship manager for any appointment-based business. It handles the entire client journey—from appointment booking to follow-up and re-engagement—all on autopilot.

1.  **Appointment Trigger**: The workflow starts when a new event is created in your **Google Calendar**.
2.  **Client Data Management**: It queries your client CRM database (**Airtable** or **Google Sheets**) to check if the client's email exists, preparing to send a personalized message.
3.  **Dynamic Reminders**: An `If` node splits the workflow. It sends a personalized welcome message for **new clients** and a standard reminder for **returning clients**, drastically reducing no-shows.
4.  **Post-Appointment Follow-up**: A `Wait` node pauses the workflow until after the appointment ends. It then sends a personalized "thank you" message via **Twilio** with a link to a review or survey.
5.  **Re-engagement Loop**: A separate `Cron` trigger runs weekly, automatically identifying clients who haven't rebooked in a set period (e.g., 30 days) and sends them a personalized offer to encourage them to return.
6.  **Data Logging**: It automatically logs all client data and engagement actions into a central database like Airtable or Google Sheets, creating a real-time dashboard for your business.

### How to Set Up 🛠️

1.  **Import the Workflow**: Copy the provided workflow JSON and import it into your n8n instance.

2.  **Configure Credentials**:
    * **Google Calendar**: Add your OAuth2 credential.
    * **Twilio**: Add your API credentials.
    * **Google Sheets / Airtable**: Add your credentials for your chosen CRM.

3.  **Customize Workflow Nodes**:
    * **Node 1 (`Google Calendar Trigger`)**: Select your Google Calendar credential and the calendar you use for bookings.
    * **Node 2 (`Google Sheets / Airtable`)**: Connect to your client CRM. Adjust the filter to search by the client's email from the calendar event.
    * **Node 4 & 5 (`Twilio Reminders`)**: Replace `YOUR_TWILIO_NUMBER` with your Twilio number. Customize the message body to fit your business.
    * **Node 6 (`Wait`)**: Adjust the `Wait Duration` if you want to send the follow-up message at a different time after the appointment.
    * **Node 7 (`Twilio Follow-up`)**: Replace the placeholder `[LINK TO YOUR REVIEW/SURVEY PAGE]` with your actual link.
    * **Nodes 8, 9, 10 (`Re-engagement Loop`)**: This is an optional, high-value part of the workflow. Configure the `Cron` node to run on your desired schedule. Adjust the filter in the `Find Clients` node to your specific re-engagement criteria (e.g., last visit date is older than 30 days).

4.  **Save & Activate**: Once all settings and credentials are configured, save the workflow and click the "Inactive" toggle in the top-right corner to make it live.

## 🔗 Nodes Used

Google Sheets, Twilio, Google Calendar Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
