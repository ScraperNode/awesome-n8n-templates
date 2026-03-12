# 💬 Automated lead nurturing & qualification with Gmail, Google Sheets & Slack

> ⚡ **115 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

### How It Works ⚙️

This workflow automates the entire lead management lifecycle, from initial capture and qualification to agent assignment and personalized nurturing, ensuring no lead is left behind and agents focus on high-potential prospects.

1.  **0. Webhook / Form Trigger (Lead Capture):** 🚀 The workflow initiates immediately when a new lead submits an inquiry form on your website, a landing page, or via a webhook from an external lead source (e.g., Zillow, Realtor.com if integrated).
2.  **1. Qualify & Categorize Lead (Function / If):** 📝 This node processes the incoming lead data. It can:
    * Validate essential information (e.g., valid email/phone).
    * Categorize the lead based on source, property interest, or keywords in their message (e.g., "Buyer", "Seller", "Rental Inquiry", "Hot Lead").
    * Assign a preliminary "lead score" if desired.
3.  **2. Update CRM (HubSpot / Salesforce / Custom):** 📊 The lead's details, along with their assigned category and score, are immediately pushed to your Customer Relationship Management (CRM) system. This ensures a centralized and always-updated database.
4.  **3. Assign Agent (Function / Google Sheets Lookup):** 🧑‍💻 Based on the lead's category (e.g., location interest, property type, lead score), this node dynamically assigns the lead to the most appropriate agent in your team. This can involve looking up agent availability or specialization from a Google Sheet.
5.  **4. Initial Auto-Response (Gmail / SendGrid):** 📧 An immediate, personalized email is sent to the lead. The content of this email can vary based on the lead's category (e.g., a "Thank you for your inquiry" for a general lead, or "Here's more info on [Property Name]" for a specific property inquiry).
6.  **5. Notify Assigned Agent (Slack / Gmail):** 📢 The newly assigned agent receives an instant notification via Slack or email with all the lead's details and any assigned tasks or next steps.
7.  **6. Start Nurturing Sequence (Wait / Gmail / If):** 🔄 Based on the lead's category and score, a multi-stage nurturing sequence is initiated. This typically involves:
    * **Wait Node:** Pauses for a predefined period (e.g., 3 days, 7 days).
    * **Email Node:** Sends a follow-up email with relevant information (e.g., similar properties, neighborhood guides).
    * **If Node:** Checks if the lead has responded or taken any action (e.g., opened previous email, clicked a link) to decide the next step in the sequence, or to exit the sequence if the lead has been engaged by an agent. This part can be significantly expanded.

---

### How to Set Up 🛠️

Setting up this comprehensive workflow requires careful configuration of each node and understanding of your lead management rules.

1.  **Import Workflow JSON:**
    * Open your n8n instance.
    * Click on 'Workflows' in the left sidebar.
    * Click the '+' button or 'New' to create a new workflow.
    * Click the '...' (More Options) icon in the top right.
    * Select 'Import from JSON' and paste the entire JSON code for this workflow.

2.  **Prepare Your Data Sources & Tools:**
    * **Lead Capture Form/Source:** Ensure your website forms or external lead sources can send data to a webhook or are accessible via API.
    * **CRM System:** Have your CRM (e.g., HubSpot, Salesforce, or a custom Google Sheet/Airtable setup) ready for integration. You'll need API keys/credentials.
    * **Agent Assignment Logic (Optional Google Sheet):** If using rules-based assignment, prepare a Google Sheet listing agents, their specialties, and areas.
    * **Email Sending Service:** Gmail, SendGrid, Mailchimp, etc., with necessary credentials.
    * **Internal Communication Tool:** Slack or another email account for agent notifications.

3.  **Configure 0. Webhook (Lead Capture):**
    * Locate the '0. Webhook (Lead Capture)' node.
    * Activate the workflow once it's fully configured. n8n will provide a unique 'Webhook URL'.
    * **Crucial Step:** Configure your website forms or external lead sources to send data (usually JSON) to this 'Webhook URL' whenever a new lead is captured.
    * **Test Data:** Submit a test lead through your form to see the incoming data structure in n8n. This is vital for configuring subsequent nodes accurately.

4.  **Configure 1. Qualify & Categorize Lead (Function):**
    * Locate the '1. Qualify & Categorize Lead (Function)' node.
    * **Customize Logic:** Review the `functionCode` within this node.
        * Adjust `lead.name`, `lead.email`, `lead.phone`, `lead.message`, `lead.source` to accurately match the field names coming from your webhook trigger.
        * Implement or refine the simple categorization logic (e.g., `if (message.toLowerCase().includes('buy'))`) to fit your specific lead types and scoring criteria.
        * Output new data points like `leadCategory` and `leadScore`.

5.  **Configure 2. Update CRM (Google Sheets):**
    * Locate the '2. Update CRM (Google Sheets)' node.
    * **Credentials:** Set up or select your Google Sheets OAuth2 credential.
    * **Spreadsheet ID:** **Replace `YOUR_CRM_SPREADSHEET_ID`** with the ID of your Google Sheet serving as your CRM.
    * **Sheet Name:** Enter the exact name of the sheet (tab) (e.g., `Leads`).
    * **Operation:** Ensure it's set to `Append`.
    * **Map Data:** Map the extracted lead details (`name`, `email`, `phone`, `message`, `source`, `leadCategory`, `leadScore`, `captureDate`, `assignedAgentEmail`, `assignedAgentName`, `Status`) to the corresponding column headers in your Google Sheet. **Ensure the column names in the JSON match your sheet exactly.**

6.  **Configure 3. Assign Agent (Function):**
    * Locate the '3. Assign Agent (Function)' node.
    * **Customize Logic:** Review the `functionCode`.
        * **Agent Data:** The example uses hardcoded agents. For a real system, you'd likely fetch agents from another Google Sheet (using a `Google Sheets` node *before* this function) or an internal database.
        * **Assignment Rules:** Modify the logic to fit your team's assignment rules (e.g., round-robin, based on lead category, property location, agent availability).
        * Ensure the function outputs `assignedAgentEmail` and `assignedAgentName`.

7.  **Configure 4. Initial Auto-Response (Gmail):**
    * Locate the '4. Initial Auto-Response (Gmail)' node.
    * **Credentials:** Select your existing Gmail OAuth2 credential.
    * **From Email:** **Replace `your-agency-email@example.com`** with your actual sending email address.
    * **To Email:** `={{ $json.email }}` (the lead's email from the incoming data).
    * **Subject & HTML:** Customize the subject and email body. Use expressions like `{{ $json.name }}` for personalization. **Remember to replace `[YOUR_WEBSITE_LINK]` with your actual website link.**

8.  **Configure 5. Notify Assigned Agent (Slack):**
    * Locate the '5. Notify Assigned Agent (Slack)' node.
    * **Credentials:** Select your existing Slack API credential.
    * **Channel:** **Replace `YOUR_SLACK_CHANNEL_ID_OR_NAME`** with the Slack channel where you want notifications (e.g., `#new-leads` or a specific agent's channel if you have one per agent).
    * **Text:** Customize the message to include all relevant lead details for the agent. **Remember to replace `[CRM_LINK_HERE]` with a direct link to your CRM where the agent can view the lead.**

9.  **Configure 6. Nurturing Sequence - Wait 1:**
    * Locate the '6. Nurturing Sequence - Wait 1' node.
    * **Amount & Unit:** Adjust `amount` (e.g., 3) and `unit` (e.g., `days`) to define the waiting period before the first nurturing email.

10. **Configure 7. Nurturing Sequence - Email 1 (Gmail):**
    * Locate the '7. Nurturing Sequence - Email 1 (Gmail)' node.
    * **Credentials:** Select your Gmail OAuth2 credential.
    * **From Email:** **Replace `your-agency-email@example.com`** with your actual sending email.
    * **To Email:** `={{ $json.email }}`.
    * **Subject & HTML:** Customize the follow-up email content. This is your first nurturing touchpoint. Use expressions like `{{ $json.name }}`. You can add more nurturing steps by adding more 'Wait' and 'Gmail' nodes, potentially with 'If' nodes to branch based on lead engagement.

11. **Review and Activate:**
    * Thoroughly review all node configurations. **Ensure all placeholder values (like `YOUR_...` and example emails) are replaced with your actual information.**
    * Click the 'Save' button in the top right corner.
    * Finally, toggle the 'Inactive' switch to 'Active' to enable your workflow. 🟢 Your "Comprehensive Lead Nurturing & Qualification" workflow is now live!

## 🔗 Nodes Used

Function, Google Sheets, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
