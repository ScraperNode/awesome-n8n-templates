# 🎫 Triage HVAC issues and AI diagnosis with Gemini Vision, GoHighLevel and WhatsApp

> ⚡ **100 views** · 🎫 [Ticket Management & Triage](../)

## Description

#### Workflow explanation: [Watch on YouTube](https://www.youtube.com/watch?v=nSJzOB9JZlY)


## Automated HVAC triage & AI diagnosis with Gemini Vision, GoHighLevel & WhatsApp

### **Prerequisites & Setup**

Before running or deploying this workflow, you need to configure the following services and credentials:

* **GoHighLevel Custom Fields:** You must create the corresponding custom fields in your GoHighLevel account to capture the AI's output (e.g., Property Address, Issue, Brand, Model Number, Serial Number, Manufactured Date, Refrigerant Type, Probable Issue, Repair Action, Estimated Cost Level, Repair Score, and AI Recommendation).
* **GoHighLevel Developer App (OAuth2):** * Create a free GoHighLevel Developer App.
    * Add the following scopes: `contacts.readonly`, `contacts.write`, `locations.readonly`, `locations/customFields.readonly`, and `locations/customFields.write` *(Note: these custom field scopes replace the standard opportunities scopes).*
    * Generate your Client ID and Secret within the Developer App.
    * Enter these details into your n8n GoHighLevel OAuth2 credentials.
    * Copy the OAuth Redirect URL from n8n, paste it into the App's OAuth redirection settings, and complete the authentication process.
* **WhatsApp API Credentials:** You will need your WhatsApp Access Token and WhatsApp Business Account ID.
* **Gemini API Key:** A valid Google Gemini API key to power the AI vision and diagnostic analysis.

---

### **Node-by-Node Explanation**

**1. When Form Submitted (Trigger)**
This is the starting point of the workflow. It uses n8n's native form trigger to collect a service request. It captures the customer's Name, Email, Phone Number, Property Address, a text description of the issue, and crucially, a file upload of the HVAC unit's nameplate or data sticker. 

**2. Extract File Content**
This node takes the image uploaded in the previous form step and converts/extracts the file content. By assigning the binary data to the `image` property, it makes the picture readable and ready to be sent to external APIs for analysis.

**3. Post to Gemini API**
This HTTP Request node acts as the brain of the operation. It sends the reported issue and the extracted image to the `gemini-3.1-flash-lite` model. The prompt instructs the AI to act as an expert HVAC diagnostic assistant to:
* Read the nameplate to extract the Brand, Model, Serial Number, Date, and Refrigerant Type.
* Analyze the text issue against the equipment data to generate a probable issue, repair action, and an estimated cost level.
* Calculate a "Repair Score" (0 to 100) to recommend whether the unit is worth repairing or replacing.
* Format the entire response strictly as a JSON object.

**4. Parse API Response**
Because AI models can sometimes wrap JSON in markdown blocks or conversational text, this custom JavaScript Code node uses regex to locate the exact JSON block inside the Gemini output. It safely parses it and outputs clean, structured JSON data for the rest of the workflow to use.

**5. Create Lead in GoHighLevel**
This node connects to your CRM. It maps the original client contact details (Name, Email, Phone) alongside all of the deeply detailed AI insights (Property Address, HVAC Brand, Model, Serial, AI Repair Score, Recommended Action) directly into the GoHighLevel custom fields you set up in the prerequisites.

**6. Prepare Binary Image**
Since the workflow's primary data stream has been replaced by the parsed JSON text, this Code node "teleports" the original binary image data from the *Extract File Content* node and stitches it together with the current JSON data. This ensures the WhatsApp node has access to both the text details and the photo.

**7. Send WhatsApp to Technician**
The final step dispatches a WhatsApp message directly to the lead technician. It sends the original photo of the HVAC nameplate accompanied by a neatly formatted caption. The caption includes the client's name, property address, the reported issue, the AI's probable diagnosis and cost estimation, and instructions on next steps.

## 🔗 Nodes Used

HTTP Request, HighLevel, WhatsApp Business Cloud, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
