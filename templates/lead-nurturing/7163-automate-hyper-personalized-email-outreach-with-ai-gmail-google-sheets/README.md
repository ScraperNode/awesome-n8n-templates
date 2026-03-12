# 💬 Automate hyper-personalized email outreach with AI, Gmail & Google Sheets

> ⚡ **10,766 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# This n8n template from [Intuz](https://www.intuz.com/) provides a complete and automated solution for hyper-personalized email outreach. 

It powerfully combines AI with Gmail and Google Sheets, using specific keywords and prospect data to automatically craft unique, compelling email content that boosts engagement and secures more replies. 

Instead of manually replying to every lead or inquiry, this template does the heavy lifting for you, ensuring every response is relevant, thoughtful, and timely.

It reads each person's unique inquiry, uses OpenAI to craft a perfectly tailored and human-like response, and sends it directly from your Gmail account. Ideal for sales, marketing, and customer support teams looking to boost engagement and save hours of manual work.

## Use Cases:
- Sales Teams: Instantly follow up with new leads from your website's contact form with a personalized touch.

- Customer Support: Provide initial, intelligent responses to support tickets, answering common questions or acknowledging receipt of a complex issue.

- Marketing Automation: Nurture leads by responding to content downloads or webinar sign-ups with relevant, non-generic information.

- Founders & Solopreneurs: Manage all incoming business inquiries (partnerships, media, etc.) efficiently without sacrificing quality.


## How It Works:
1. Trigger the Flow (Manual): Start the automation whenever you're ready to process a new batch of inquiries from your sheet.

2. Fetch Inquiries from Google Sheets: The workflow connects to your specified Google Sheet and reads each row. It pulls the contact's First Name, Email ID, the Inquiry Intent (e.g., "Demo Request," "Pricing Inquiry"), and the full text of their Original Inquiry.

3. Sync Your Signature: Before writing the email, an HTTP Request node dynamically fetches your display name from your Gmail account settings. This ensures the signature in the generated email (Thanks, {{Your Name}}) is always accurate.

4. Craft a Hyper-Personalized Reply with AI: It uses this context to generate a high-quality, professional, and friendly email reply in HTML format. For example:
- If the intent is "Technical Support," the AI will generate a helpful, empathetic response addressing the technical issue.
- If the intent is "Partnership Proposal," it will draft a professional reply acknowledging the proposal and outlining the next steps.

5. Send via Gmail: The final node takes the AI-generated message, adds a relevant subject line (e.g., "Re: Your Demo Request"), and sends it directly to the contact's email address from your connected Gmail account.

This process loops for every single row in your Google Sheet, turning a list of names into a series of meaningful conversations.

## Setup Instructions:
To get this workflow running, you'll need to configure a few things:

1. Credentials:
Google: Connect your Google account via OAuth2 and ensure you have enabled access for Google Sheets, Google Drive, and Gmail.
2. OpenAI: Add your OpenAI API key as a credential.
3. Google Sheet Setup:
Create a Google Sheet with the following exact column headers:
-First Name
-Email ID
-Inquiry Intent (A short category like "Demo Request", "Billing Issue", etc.)
-Original Inquiry (The full text of the email or message you received).
4. Node Configuration:
Get row(s) in sheet: Select your Google Sheet document and the specific sheet name.
Message a model (OpenAI): Choose your preferred OpenAI model (e.g., gpt-4-turbo, gpt-3.5-turbo).
5. HTTP Request & Send Personalized emails: These nodes should automatically use your configured Gmail credentials. No changes are typically needed.


## Connect with us

- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz


## For Custom Worflow Automation 


Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
