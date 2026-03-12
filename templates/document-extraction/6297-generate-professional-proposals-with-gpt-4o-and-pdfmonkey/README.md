# 🔬 Generate professional proposals with GPT-4o and PDFMonkey

> ⚡ **107 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works ⚙️

This workflow is designed to streamline your proposal generation, turning raw client data into a professional document automatically. Here's a step-by-step breakdown of its operation:

1.  **Trigger (Form):** 🚀 The workflow starts when new client data is received via the n8n form. This form serves as the primary input for client details.
2.  **Prepare AI Prompt & Client Info (Function):** 🧹 This node takes the incoming client data from the form and intelligently formats it into a precise prompt for the AI. It also extracts key client details like email and name for later use.
3.  **Generate Proposal Content (AI):** 🧠 The prepared prompt is fed to OpenAI's GPT-4o. The AI then drafts a detailed proposal outline, including problem summary, solutions, scope, and milestones, all structured in a perfect JSON format.
4.  **Generate Proposal PDF (PDFmonkey):** 📄 The AI-generated JSON content is then sent to PDFmonkey. This service takes the structured data and populates it into your pre-designed PDF proposal template, creating a beautiful and professional document.
5.  **Wait (for PDFmonkey Webhook):** ⏳ Crucially, this node pauses the workflow, waiting for PDFmonkey to send a callback webhook indicating that the PDF document has been successfully generated and is ready for download. This ensures reliability.
6.  **Download Generated PDF (HTTP Request):** 💾 Once notified by PDFmonkey, this node sends an HTTP request to download the final PDF document from PDFmonkey's servers.
7.  **Prepare Email Data (Function):** 📧 This node consolidates all the necessary information—client email, name, company, the downloaded PDF's binary data, and the proposal title—preparing it for the final email sending step.
8.  **Send Proposal Email to Client (Gmail):** ✅ The workflow's grand finale! This node compiles a personalized email to the client, attaching the newly generated PDF proposal. It ensures your professional proposal reaches the client's inbox swiftly and automatically.

## How to Set Up 🛠️

Follow these steps carefully to get your "Automated AI Proposal Generator" workflow up and running:

1.  **Import Workflow JSON:**
    * Open your n8n instance.
    * Click on 'Workflows' in the left sidebar.
    * Click the '+' button or 'New' to create a new workflow.
    * Click the '...' (More Options) icon in the top right.
    * Select 'Import from JSON' and paste the provided workflow JSON code.

2.  **Configure Credentials:**
    * **OpenAI Node ("2. Generate Proposal Content (AI)"):**
        * Click on this node.
        * Under 'Credentials', select your existing OpenAI API Key credential or click 'Create New' to set one up.
    * **PDFmonkey HTTP Request Node ("3. Generate Proposal PDF (PDFmonkey)" & "5. Download Generated PDF"):**
        * **Important:** In both of these nodes, under 'Header Parameters', the 'Authorization' value is currently a placeholder string `Bearer YOUR_PDFMONKEY_API_KEY_HERE`. **You MUST replace this with an n8n credential.**
        * **Recommendation:** Create a 'Generic Credential' in n8n (e.g., named 'PDFmonkey API Key') and store your PDFmonkey API Key there. Then, update the 'Authorization' header's value to `= {{ $connections['PDFmonkey API Key'].apiKey }}`.
        * **Important:** Replace `5A836F8C-33AE-405C-A545-B86992D17FCC` with your actual PDFmonkey Document Template ID. This template must be designed in PDFmonkey to accept the JSON output from OpenAI.
    * **Gmail Node ("7. Send Proposal Email to Client"):**
        * Click on this node.
        * Under 'Authentication', select your existing Gmail OAuth2 credential or create a new one.

3.  **Set Up PDFmonkey Webhook (for '4. Wait' node):**
    * The '4. Wait (for PDFmonkey Webhook)' node is crucial for ensuring the PDF is ready before downloading. This node uses a Webhook ID: `3df60168-7ab4-4772-bd33-376063b3f986`.
    * **Go to your PDFmonkey account settings and configure a Webhook:**
        * Set the 'Event' to `document.succeeded`.
        * Set the 'Target URL' to your n8n webhook URL for this specific workflow. You can find this URL by activating the workflow and inspecting the URL of the 'Form Trigger' or by adding a temporary 'Webhook' node.

4.  **Configure Trigger Node (this is now the '0. Form Trigger'):**
    * When you import this JSON, the '0. Form Trigger (Client Data Input)' node will be ready.
    * **To use it:** Simply activate the workflow. n8n will provide a URL for this form. You can share this URL with your clients or team to collect the data directly.
    * The form fields are already defined based on the previous input structure.

5.  **Customize Email Details:**
    * **Gmail Node ("7. Send Proposal Email to Client"):**
        * **Replace `your-agency-email@example.com`** with the actual email address you want the proposals to be sent from.\n        * (Optional) Modify the email subject and body text to match your agency's branding and tone.

6.  **Review and Activate:**
    * Thoroughly review all node configurations to ensure all placeholders (`&lt;YOUR_...HERE&gt;`) are replaced and settings are correct.
    * Click the 'Save' button in the top right corner.
    * Finally, toggle the 'Inactive' switch to 'Active' to enable your workflow. 🟢 Your automated AI proposal generator is now live and ready to empower your sales efforts!

## 🔗 Nodes Used

Function, HTTP Request, Gmail, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
