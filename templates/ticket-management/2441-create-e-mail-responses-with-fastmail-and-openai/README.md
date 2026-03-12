# 🎫 Create e-mail responses with Fastmail and OpenAI

> ⚡ **3,364 views** · 🎫 [Ticket Management & Triage](../)

## Description

### Workflow Description:
This n8n workflow automates the drafting of email replies for Fastmail using OpenAI's GPT-4 model. Here’s the overall process:

1. **Email Monitoring**: The workflow continuously monitors a specified IMAP inbox for new, unread emails.
2. **Email Data Extraction**: When a new email is detected, it extracts relevant details such as the sender, subject, email body, and metadata.
3. **AI Response Generation**: The extracted email content is sent to OpenAI's GPT-4, which generates a personalized draft response.
4. **Get Fastmail Session and Mailbox IDs**: Connects to the Fastmail API to retrieve necessary session details and mailbox IDs.
5. **Draft Identification**: Identifies the "Drafts" folder in the mailbox.
6. **Draft Preparation**: Compiles all the necessary information to create the draft, including the generated response, original email details, and specified recipient.
7. **Draft Uploading**: Uploads the prepared draft email to the "Drafts" folder in the Fastmail mailbox.

### Prerequisites:
1. **IMAP Email Account**: You need to configure an IMAP email account in n8n to monitor incoming emails.
2. **Fastmail API Credentials**: A Fastmail account with JMAP API enabled. You should set up HTTP Header authentication in n8n with your Fastmail API credentials.
3. **OpenAI API Key**: An API key from OpenAI to access GPT-4. Make sure to configure the OpenAI credentials in n8n.

### Configuration Steps:
1. **Email Trigger (IMAP) Node**:
   - Provide your email server settings and credentials to monitor emails.

2. **HTTP Request Nodes for Fastmail**: 
   - Set up HTTP Header authentication in n8n using your Fastmail API credentials.
   - Replace the `httpHeaderAuth` credential IDs with your configured credential IDs.

3. **OpenAI Node**:
   - Configure the OpenAI API key in n8n.
   - Replace the `openAiApi` credential ID with your configured credential ID.

By following these steps and setting up the necessary credentials, you can seamlessly automate the creation of email drafts in response to new emails using AI-generated content. This workflow helps improve productivity and ensures timely, personalized communication.

## 🔗 Nodes Used

Email Trigger (IMAP), HTTP Request, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
