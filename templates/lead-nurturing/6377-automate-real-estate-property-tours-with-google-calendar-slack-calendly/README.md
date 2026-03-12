# 💬 Automate real estate property tours with Google Calendar, Slack & Calendly

> ⚡ **669 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How It Works ⚙️

This workflow streamlines your property tour scheduling into two main automated flows:

### A. Property Tour Request & Automated Scheduling
1.  **0. Form Trigger (Property Tour Request):** 🚀 The workflow initiates immediately when a prospective client fills out a property tour interest form on your website or a dedicated landing page. This serves as the initial data input point.
2.  **1. Extract Prospect Data (Function):** 🧹 This node processes the incoming form data, intelligently extracting essential details such as the prospect's full name, email, phone number, and the specific property they are interested in.
3.  **2. Generate Scheduling Link (Function):** 🔗 This node dynamically constructs a personalized scheduling link (e.g., from Calendly or another scheduling tool) that is pre-configured to show your agent's real-time availability.
4.  **3. Send Scheduling Link (Gmail/SMS):** 📧 An automated email or SMS containing this personalized scheduling link is instantly dispatched to the prospect, allowing them to conveniently select a tour time that fits their schedule and aligns with the agent's availability.

### B. Tour Confirmation & Reminders
1.  **4. Webhook: Schedule Confirmation (Waiting for Confirmation):** ⏳ The workflow patiently waits for a webhook signal from your scheduling tool (e.g., Calendly) confirming that the prospect has successfully selected and confirmed a tour slot.
2.  **5. Add Event to Agent's Calendar (Google Calendar):** 🗓️ Upon confirmation, the property tour event is automatically added to the relevant agent's Google Calendar, complete with all prospect and property details, ensuring no appointments are missed.
3.  **6. Send Confirmation Notification (Slack to Agent):** 📢 A detailed notification is sent to the agent's Slack channel or email, immediately informing them about the newly scheduled tour and providing all pertinent information at a glance.
4.  **7. Wait (For Tour Reminder):** ⏱️ This node intelligently waits for a calculated period (e.g., 1 hour) before the scheduled tour time, ensuring the reminder is sent precisely when it's most impactful.
5.  **8. Send Tour Reminder (Gmail):** 🔔 A personalized reminder email or SMS is automatically sent to the prospect a set time before the scheduled tour, significantly helping to reduce no-shows and ensure timely attendance.

## How to Set Up 🛠️

Follow these steps carefully to get your "Property Tour Scheduling Automation" workflow up and running in n8n:

1.  **Import Workflow JSON:**
    * Open your n8n instance.
    * Click on 'Workflows' in the left sidebar.
    * Click the '+' button or 'New' to create a new workflow.
    * Click the '...' (More Options) icon in the top right.
    * Select 'Import from JSON' and paste the entire JSON code for this workflow.

2.  **Configure 0. Form Trigger (Property Tour Request):**
    * Locate the '0. Form Trigger (Property Tour Request)' node.
    * Activate the workflow. n8n will provide a unique 'Webhook URL'.
    * **Crucial Step:** Integrate this 'Webhook URL' into your website's property tour request form (e.g., via Elementor Forms, Gravity Forms, or any other form platform). Ensure your form sends data in JSON format.
    * **Form Fields:** Adjust the 'Form Fields' in this node (e.g., "Full Name", "Email", "Phone Number", "Interested Property ID", "Property Name (optional)") to precisely match the input fields of your actual form. If they don't match, update them here.

3.  **Configure 1. Extract Prospect Data (Function):**
    * Locate the '1. Extract Prospect Data' node.
    * **Adjust Field Names:** Review the `functionCode` within this node. **You MUST adjust the variable assignments (e.g., `formData['Full Name']`, `formData['Interested Property ID']`)** to accurately match the exact field names sent by your *Form Trigger*. Use n8n's 'Test Workflow' feature (after submitting a test form entry) to inspect the incoming `items[0].json.body` data structure and make precise adjustments.

4.  **Configure 2. Generate Scheduling Link (Function):**
    * Locate the '2. Generate Scheduling Link' node.
    * **Set Base Scheduling URL:** Inside the `functionCode`, **replace `'YOUR_CALENDLY_BASE_LINK_FOR_AGENT'`** with the base URL of your Calendly or other scheduling tool link (e.g., `https://calendly.com/your-agent-name`).
    * **Adjust Parameters:** If your scheduling tool supports URL parameters for pre-filling information (e.g., prospect name, email), adjust the code to include them (e.g., `?name=${encodeURIComponent(prospectData.clientName)}&email=${encodeURIComponent(prospectData.clientEmail)}`).

5.  **Configure 3. Send Scheduling Link (Gmail):**
    * Locate the '3. Send Scheduling Link (Gmail)' node.
    * **Credentials:** Select your existing Gmail OAuth2 credential or click 'Create New' to set one up. You'll need to replace `YOUR_GMAIL_CREDENTIAL_ID` with the actual ID or name of your credential from your n8n credentials list.
    * **From Email:** Replace `your-agent-email@example.com` with the desired sending email address for tour requests.
    * The 'To Email', 'Subject', and 'HTML' body fields will be dynamically populated from the previous 'Function' node.
    * **(Optional: Switch to SMS):** Delete this Gmail node and add a Twilio node. Configure its credentials, 'From Phone Number', 'To Phone Number' (from prospect data), and 'Message' (include the scheduling link).

6.  **Configure 4. Webhook: Schedule Confirmation (Waiting for Confirmation):**
    * Locate the '4. Webhook: Schedule Confirmation (Waiting for Confirmation)' node.
    * Activate the workflow. n8n will provide a unique 'Webhook URL'.
    * **Crucial Step:** In your scheduling tool (e.g., Calendly), configure a webhook to send data to this n8n URL whenever an event is scheduled or confirmed. This is vital for the workflow to proceed after the prospect selects a time.

7.  **Configure 5. Add Event to Agent's Calendar (Google Calendar):**
    * Locate the '5. Add Event to Agent's Calendar (Google Calendar)' node.
    * **Credentials:** Select your existing Google Calendar OAuth2 credential or create a new one. Replace `YOUR_GOOGLE_CALENDAR_CREDENTIAL_ID` with the actual ID or name of your credential.
    * **Calendar ID:** Replace `YOUR_AGENT_CALENDAR_ID` with the specific calendar ID of the agent where you want to add the event.
    * **Adjust Event Details:** Ensure 'Event Name', 'Start Date & Time', 'End Date & Time', and 'Description' use the correct expressions to pull data from the incoming scheduling tool webhook (e.g., `{{ $json.payload.event.start_time }}`).

8.  **Configure 6. Send Confirmation Notification (Slack to Agent):**
    * Locate the '6. Send Confirmation Notification (Slack to Agent)' node.
    * **Credentials:** Ensure your Slack API credential is selected.
    * **Channel:** Replace `YOUR_AGENT_SLACK_CHANNEL_ID_OR_NAME` with the exact ID or name of the Slack channel where agents receive tour scheduling notifications (e.g., `#tour-bookings`).
    * **(Optional: Switch to Email):** Delete this Slack node and add a Gmail or SendGrid node. Configure its credentials, 'To Email' (agent's email), 'Subject', and 'HTML' body.

9.  **Configure 7. Wait (For Tour Reminder):**
    * Locate the '7. Wait (For Tour Reminder)' node.
    * **Time Calculation:** The node is set to wait until 1 hour before the scheduled tour start time (`{{ $json.payload.event.start_time }}`).
    * **Timezone:** **Replace `YOUR_TIMEZONE_LIKE_Asia/Jakarta`** with your actual timezone (e.g., `America/New_York`, `Europe/London`). This is crucial for accurate timing.

10. **Configure 8. Send Tour Reminder (Gmail):**
    * Locate the '8. Send Tour Reminder (Gmail)' node.
    * **Credentials:** Ensure your Gmail API credential is selected.
    * **From Email:** Replace `your-agent-email@example.com` with the sending email address.
    * **(Optional: Switch to SMS):** Delete this Gmail node and add a Twilio node, configuring it similarly to step 5 for SMS reminders.

11. **Review and Activate:**
    * Thoroughly review all node configurations. Ensure all placeholder values (like `YOUR_...`) are replaced with your actual information and settings are correct.
    * Click the 'Save' button in the top right corner.
    * Finally, toggle the 'Inactive' switch to 'Active' to enable your workflow. 🟢 Your "Property Tour Scheduling Automation" workflow is now live!

## 🔗 Nodes Used

Function, Slack, Webhook, Google Calendar, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
