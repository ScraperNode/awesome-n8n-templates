# 💬 Collect star rating feedback with self-contained HTML forms and data tables

> ⚡ **303 views** · 💬 [Support Chatbots](../)

## Description

## Customer Feedback Survey

This n8n template lets you collect lightweight customer feedback through a responsive HTML form with a mandatory 1–5 star rating and an optional message. Submissions are stored in an n8n Data Table (including any query-string context like `userId` or `source`) and the user is redirected to a branded “Thank you” page.

### How it works
* **Form page** (`/feedback`): Renders a styled HTML form (stars + message) with configurable text, colors, and button labels.  
* **POST handler** (`/feedback`): Receives form data, saves `rating`, `message`, and serialized query params to a Data Table.  
* **Confirmation page**: Returns a clean success screen after a valid submission.  
* **No external services**: Runs fully on n8n nodes (Webhook, HTML, Data Table, Set, Respond to Webhook).

### Use cases
* Capture quick CSAT/NPS-style ratings after support chats or trials.  
* Embed lightweight feedback on landing pages or in-product prompts.  
* Attribute feedback to campaigns by passing URL parameters (e.g., `?plan=pro&source=email`).

### Setup
1. Import the template and **publish** the two webhooks (`GET /feedback` for the form, `POST /feedback` for submissions).  
2. Open **Form Configuration** and adjust title, copy, button labels and make sure the POST URL is set correctly.  
3. (Optional) Edit **Theme Configuration** to match your brand (colors, radius, shadow, max width).  
4. Verify the **Data Table** mapping or point it to your own table.  
5. Visit the form URL, submit test feedback, and confirm rows appear in the Data Table.

### Requirements
* Works entirely within n8n — **no external credentials needed**.

### Privacy notes
* Only the fields you submit are stored.  
* If you include URL query parameters, they are saved as JSON for attribution or debugging.

### Screenshots

![Screenshot 20251016 164423.png](fileId:2987)![Screenshot 20251016 164442.png](fileId:2985)![Screenshot 20251016 164503.png](fileId:2986)

## 🔗 Nodes Used

Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
