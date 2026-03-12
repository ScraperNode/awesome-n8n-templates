# 📱 Create AI newsletters with GPT-4o, human approval workflow, and SendGrid

> ⚡ **103 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Generate AI newsletters from form inputs and send via SendGrid

Streamline your email marketing process with this AI-powered "Human-in-the-Loop" workflow. It allows you to generate high-quality, targeted newsletters from a simple form input, review them via email, and automatically distribute them to your subscribers upon approval.

## ## Who is this for?
Digital marketers, content creators, community managers, and small business owners who want to maintain consistent communication with their audience but need to reduce the time spent on drafting and formatting emails.

## ## What does this workflow do?
1. **Input Collection:** Starts with a user-friendly n8n Form where you input the newsletter topic, target audience, and sender details.
2. **Data Logging:** Automatically saves the form responses to a Google Sheet for your records.
3. **AI Generation:** Uses OpenAI (GPT-4o) to draft a catchy subject line and valuable body content formatted in Markdown based on your inputs.
4. **Approval Process:** Sends a "Review Request" email to your inbox (via Gmail). This email contains a preview of the newsletter and a special link to approve it.
5. **Execution Wait:** The workflow pauses and waits for you to click the approval link.
6. **Distribution:** Once approved, it converts the Markdown to HTML and sends the final newsletter to your subscriber list using SendGrid.

## ## Requirements
- **OpenAI API Key:** To utilize GPT-4o for content generation.
- **Google Cloud Account:** Required for the Google Sheets (logging) and Gmail (approval notifications) nodes.
- **SendGrid Account:** Required for sending the final newsletter to your subscribers.
- **n8n version:** Ensure you are using a version that supports the LangChain nodes.

## ## How to set up
1. **Configure Credentials:** Set up your credentials for OpenAI, Google (Sheets & Gmail), and SendGrid within n8n.
2. **Subscriber List:** Open the **Workflow Configuration** node (Set node). Replace the placeholder with your comma-separated list of subscriber emails.
3. **Google Sheets:** Create a Google Sheet with columns for `topic`, `target`, `sender`, and `admin_email`. Update the **Store Form Responses** node with your Document ID and Sheet Name.
4. **Sender Verification:** In the **SendGrid** node, ensure the "From Email" matches a verified sender identity in your SendGrid account.
5. **Test:** Click "Test Workflow," fill out the Form Trigger URL, and check your email for the approval draft. Click the link in the email to finish the process.

## ## How to customize
- **Change the AI Model:** You can swap the OpenAI model node for Anthropic (Claude) or a local LLM if preferred.
- **Adjust the Prompt:** Edit the system message in the **Generate Newsletter Content** agent node to change the tone or structure of the newsletter.
- **Swap Email Providers:** If you don't use SendGrid or Gmail, simply replace these nodes with the email service of your choice (e.g., Mailchimp, Outlook, AWS SES).

## 🔗 Nodes Used

Google Sheets, Gmail, SendGrid, Markdown, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
