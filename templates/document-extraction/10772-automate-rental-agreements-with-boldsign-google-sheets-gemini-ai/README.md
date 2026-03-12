# 🔬 Automate rental agreements with BoldSign, Google Sheets & Gemini AI

> ⚡ **97 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Complete Video Documentation: [https://youtu.be/O-bKlX3G7_4](`https://youtu.be/O-bKlX3G7_4`)

### Explanation WITH clean Video timestamps:


  * **Prerequisites**: You need a rental agreement document, a BoldSign account (which has a free tier for testing) [[00:44](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=44)], a Google Sheet, and an n8n instance.
  * **BoldSign Setup**: How to upload your agreement as a template, drag-and-drop the signature and text fields [[01:13](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=73)], get your API key [[01:57](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=117)], and set up a webhook to notify n8n when the agreement is signed or completed [[02:13](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=133)].
  * **Workflow Logic**: The video walks through the two main flows:
    1.  **Form Submission**: A tenant fills out a form, which triggers n8n to save the details to Google Sheets and then call the BoldSign API to send the agreement to both the owner and tenant [[03:01](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=181)].
    2.  **Completion**: When both parties sign, BoldSign sends an event to the n8n webhook, which then filters for the "Completed" event and updates the Google Sheet [[09:12](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=552)].
  * **Bonus**: It also covers the Telegram bot setup, which lets an owner ask an AI about the status of agreements [[11:52](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=712)].

-----

### Prerequisites

Before you build this, you'll need a few things:

  * **An n8n Instance**: This can be on n8n.cloud or self-hosted.
  * **A Google Sheet**: Create a new sheet with columns like `Tenant Name`, `Tenant Email`, `Property`, `Estimated Rent per month`, `contract expiry`, and `agreement status`.
  * **A BoldSign Account**:
      * An API Key. [[01:57](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=117)]
      * A prepared rental agreement document (like a PDF or .docx).
      * A **BoldSign Template** created from that document. You'll need to drag and drop the required fields (like signatures, dates, text boxes) onto the template. [[01:13](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=73)]
  * **A Telegram Bot (Optional)**: If you want the AI status checker, you'll need to create a bot with Telegram's BotFather to get an API token.
  * **A Google Gemini API Key (Optional)**: For the AI agent.

-----



*In BoldSign, you would replace the `{{...}}` and `[Date]` parts with draggable form fields.*

-----

### Understanding the BoldSign API Node

The key to sending the agreement is the **`Send aggrement to Tenant's Email`** node. This is a standard **HTTP Request** node, not a special BoldSign node.

  * **`Method`**: `POST`
  * **`URL`**: `https://api.boldsign.com/v1/template/send?templateId=enter-your-template-id`
      * This is the official BoldSign API endpoint for sending a document based on a template. You must replace `enter-your-template-id` with the actual ID of the template you created in BoldSign [[07:04](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=424)].
  * **`Authentication`**: `Header Auth`
      * BoldSign uses an API key in the header. You would create a credential in n8n where the `Name` is `X-API-KEY` and the `Value` is the secret API key you got from your BoldSign account [[07:16](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=436)].
  * **`Body`**: The `jsonBody` is the most important part [[08:02](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=482)]. It's a JSON object that tells BoldSign who to send the agreement to and what data to pre-fill.
      * `title`: Sets the document title, like "Rental Agreement - 123 Main St".
      * `roles`: This array defines the signers.
          * One role is for the "Owner", dynamically filling their name and email from the form data.
          * The second role is for the "Tenent" (Tenant), also filling their name and email.
      * `existingFormFields` & `mergeFields`: This is where you dynamically insert data *into* the document. You map the data from your n8n form (like `{{ $('Retrive Data from submitted form').item.json.address }}`) to the `id` of the fields you created in your BoldSign template [[08:16](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=496)].

-----

### Workflow Explanation (From Scratch)

This workflow is actually three separate flows that work together.

#### Flow 1: New Tenant Onboarding (Form to Agreement)

This is the main flow that kicks everything off when a new tenant is interested.

1.  **Node: `Tenant Form` (Form Trigger)**

      * **What it is**: This node creates a public web form [[03:10](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=190)]. This is the starting point.
      * **From Scratch**: You'd drag in a `Form Trigger` node. You add fields for "Your Name" (tenant's name) and "Your Email" (tenant's email).
      * **This Workflow**: It also cleverly uses **hidden fields** [[03:18](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=198)] to store the *owner's* details, the property address, and the rent. This is a simple way to manage a single property. For multiple properties, you might use a database or a Google Sheet lookup.

2.  **Node: `Retrive Data from submitted form` (Set)**

      * **What it is**: This node takes the messy data from the form and organizes it into clean, named variables (like `tenant_name`, `address`, `estimated_rent`) [[05:25](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=325)].
      * **From Scratch**: It's good practice to do this so the rest of your workflow is easy to read. It also calculates the `expiry_date` as one year from today.

3.  **Node: `Save the tenant Details` (Google Sheets)**

      * **What it is**: This logs the new tenant in your Google Sheet *before* the agreement is sent [[05:51](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=351)].
      * **From Scratch**: You'd set this to "Append or Update" mode. It maps the variables ( `tenant_name`, `tenant_email`, etc.) to the correct columns in your sheet.

4.  **Node: `Send aggrement to Tenant's Email` (HTTP Request)**

      * **What it is**: This is the **BoldSign API** call we just detailed. It takes all the data and sends the official signing request to both the owner's and tenant's email addresses [[06:47](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=407)].

5.  **Node: `Update Agreement Status` (Google Sheets)**

      * **What it is**: After the email is *successfully* sent, this node finds the row you just created (using the tenant's email as a key) and updates the `agreement status` column to **"Pending Signing"** [[08:55](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=535)]. This is great for tracking.

#### Flow 2: Handling Signed Agreements (Webhook)

This flow *listens* for activity. It doesn't run on a schedule; it waits for BoldSign to tell it something happened.

1.  **Node: `Webhook` (Webhook Trigger)**

      * **What it is**: This node generates a unique URL [[02:45](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=165)]. You copy this URL and paste it into your BoldSign account's webhook settings [[09:28](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=568)].
      * **From Scratch**: Now, *any* time an event happens in BoldSign (like the document is viewed, signed, or completed), BoldSign will send a data packet to this URL, triggering the workflow.

2.  **Node: `If` (If)**

      * **What it is**: This is a filter. The webhook gets *all* events, but we only care about the final one [[10:49](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=649)].
      * **From Scratch**: It's set to check the incoming data from the webhook. It looks at a header called `x-boldsign-event` and only continues if the value `equals` **"Completed"** [[11:02](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=662)]. This means it will ignore the "Signed" event (when just one person signs) and only proceed when *both* parties have signed.

3.  **Node: `Retrieve Tenant Email` (Set)**

      * **What it is**: This node digs into the large JSON data packet from the webhook to find the tenant's email [[11:17](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=677)].
      * **From Scratch**: It uses a JavaScript `.find()` function to look through the `signerDetails` and pull the email for the person whose role was "Tenent" (Tenant). This gives us the unique key to update our spreadsheet.

4.  **Node: `Update Agreement Status as completed` (Google Sheets)**

      * **What it is**: The final step\! Just like in Flow 1, this node finds the correct row in the Google Sheet (using the tenant's email) and updates the `agreement status` column to **"Completed"** [[11:32](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=692)].

#### Flow 3: AI-Powered Status Bot (Telegram)

This is a bonus flow that lets the owner "chat" with the Google Sheet.

1.  **Node: `Telegram Trigger`**

      * **What it is**: This listens for any new message sent to your Telegram bot [[11:52](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=712)].

2.  **Node: `AI Agent` (Langchain Agent)**

      * **What it is**: This is the "brain". It takes the `message.text` from the Telegram user [[12:30](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=750)].
      * **From Scratch**: Its prompt tells it to be a helpful assistant for rental agreements and to use the tools it's given.

3.  **Node: `Google Gemini Chat Model` (Google Gemini)**

      * **What it is**: This is the Large Language Model (LLM) that the agent uses to think and form sentences.

4.  **Node: `Fetch Rental Agreements` (Google Sheets Tool)**

      * **What it is**: This is *not* a regular node, but a **Tool** plugged into the AI Agent [[12:35](http://www.youtube.com/watch?v=O-bKlX3G7_4&t=755)].
      * **From Scratch**: You give the AI agent this "tool" and tell it: "This tool, named 'Fetch Rental Agreements', can get all the data from the Google Sheet." When the user asks, "What's the status of Jane Doe's agreement?", the AI knows it must use this tool to get the sheet data *before* it can answer.

5.  **Node: `Send a text message` (Telegram)**

      * **What it is**: This takes the final `output` from the AI Agent and sends it as a reply to the user in Telegram.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Telegram Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
