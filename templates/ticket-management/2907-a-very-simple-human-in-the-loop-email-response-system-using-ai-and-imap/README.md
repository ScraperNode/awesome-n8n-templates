# 🎫 A very simple "Human in the Loop" email response system using AI and IMAP

> ⚡ **32,875 views** · 🎫 [Ticket Management & Triage](../)

## Description

### **Functionality**
This workflow automates the handling of incoming emails by summarizing their content, generating appropriate responses, and validating the responses through a "Human-in-the-Loop" system. It integrates with IMAP email services (e.g., Gmail, Outlook) and uses AI models to streamline the email response process.

The workflow ensures that all AI-generated responses are reviewed by a human before being sent, maintaining a high level of professionalism and accuracy. This approach is particularly useful for businesses that receive a high volume of emails and need to respond quickly while ensuring quality control.

---

### **How It Works**
1. **Email Trigger**:
   - The workflow starts with the **Email Trigger (IMAP)** node, which monitors an email inbox for new messages. When a new email arrives, it triggers the workflow.

2. **Email Preprocessing**:
   - The **Markdown** node converts the email's HTML content into plain text for easier processing by the AI models.

3. **Email Summarization**:
   - The **Email Summarization Chain** node uses an AI model (OpenAI) to generate a concise summary of the email. The summary is limited to 100 words and is written in a professional tone.

4. **Email Response Generation**:
   - The **Write email** node uses an AI model (OpenAI) to draft a professional response to the email. The response is based on the email content and is limited to 100 words.

5. **Human-in-the-Loop Approval**:
   - The **Set Email text** node prepares the drafted response for approval.
   - The **Approve Email** node sends the drafted response to a human approver (e.g., an internal email address) for review. The email includes:
     - The original message.
     - The AI-generated response.
   - The **Approved?** node checks if the response has been approved by the human reviewer. If approved, the workflow proceeds to send the response; otherwise, it stops.

6. **Sending the Response**:
   - The **Send Email** node sends the approved response back to the original sender.

---

### **Key Features**
- **Automated Email Summarization**: Summarizes incoming emails to provide a quick overview of the content.
- **AI-Powered Response Generation**: Drafts professional responses to emails using AI.
- **Human-in-the-Loop Approval**: Ensures all AI-generated responses are reviewed and approved by a human before being sent.
- **IMAP Integration**: Works with IMAP email services like Gmail and Outlook.
- **Efficient Email Management**: Reduces the time and effort required to handle incoming emails while maintaining high-quality responses.

This workflow is ideal for businesses looking to automate their email response process while maintaining control over the quality of outgoing communications. It leverages AI to handle repetitive tasks and ensures that all responses are reviewed by a human, providing a balance between automation and human oversight.

---
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, Markdown, AI Agent, Summarization Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
