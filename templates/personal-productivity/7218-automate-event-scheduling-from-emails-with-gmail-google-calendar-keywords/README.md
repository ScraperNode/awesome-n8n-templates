# ⚡ Automate event scheduling from emails with Gmail & Google Calendar keywords

> ⚡ **1,486 views** · ⚡ [Personal Productivity](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# ⚙ How It Works

This workflow operates as an automated personal assistant for your calendar. It listens to your Gmail inbox for new emails. When an email arrives, it checks the subject and body for keywords like "Meeting" or "Appointment." If a match is found, the workflow extracts key details from the email and automatically creates a new event on your Google Calendar, eliminating the need for manual data entry.

---

# Setup Steps

Follow these steps to get the workflow running in your n8n instance.

### **1. Prerequisites**
You'll need a working n8n instance and access to both your **Gmail** and **Google Calendar** accounts.

### **2. Workflow Import**
Import the workflow's JSON file into your n8n instance. All the necessary nodes will appear on your canvas.

### **3. Configure Credentials**
1.  Click on the `Gmail Trigger` node and `Google Calendar` node.
2.  You will see a red error icon indicating that credentials are not set. Click on it.
3.  Click **"Create new credential"** and follow the instructions to connect your **Gmail** and **Google Calendar** accounts.

### **4. Customize the `If` Node**
This node determines which emails will trigger a calendar event.
1.  Click on the `If` node.
2.  Review the `Value 2` field under the conditions. This is where you specify the keywords that should trigger an event.
3.  You can add more keywords by clicking **"Add Condition"** and using the `OR` operator (e.g., add `call`, `interview`, or `demo`).

### **5. Customize the `Code` Node**
This node extracts the event details from your email. The current code is a basic example using regular expressions to find a date and time.
1.  Click on the `Code` node.
2.  Review the code. You may need to adjust the regular expressions if your emails have a different format for dates and times.
3.  The node will output a JSON object containing the `title`, `date`, and `time` that will be used to create your calendar event.

### **6. Configure the `Google Calendar` Node**
This is the final node that creates the event.
1.  Click on the `Google Calendar` node.
2.  In the `Calendar ID` field, enter the ID of the specific calendar you want the events to be created on. You can find this in your Google Calendar settings.

### **7. Activate the Workflow**
1.  Once all credentials and node configurations are complete, click **"Save"** at the top of the canvas.
2.  Finally, toggle the workflow to **"Active"**. The workflow is now live and will automatically schedule events for you.

## 🔗 Nodes Used

Google Calendar, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
