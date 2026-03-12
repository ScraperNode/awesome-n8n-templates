# 🎫 Reply to Outlook emails with OpenAI

> ⚡ **27,368 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Who is this template for?
This template is for any Microsoft Outlook user who wants a trained AI agent to reason and reply on their behalf. Teach your agent tone and writing style to replicate your own, or develop a persona for a shared inbox.

## Requirements
- Outlook with authentication credentials
- OpenAI account with authentication credentials
- A few sample email replies of various lengths and topics

### How it works:
1. Connect your Outlook account.

![Screenshot 20250305 at 5.27.06 PM.png](fileId:984)

2. Select (filter) which email sender(s) your trained AI agent will reply to. 

*[Tip: pick a sender that has some repeatability either with a topic (ie. sales) or an individual (coworker@yourcompany.com)]*

![Screenshot 20250305 at 6.22.11 PM.png](fileId:983)

3. Connect your OpenAI account. Choose your AI model (ie. gpt-4o-mini)

![Screenshot 20250305 at 5.41.05 PM.png](fileId:982)

4. Add Prompt (User Message) and select "system message" from the option below 

![Screenshot 20250305 at 5.46.13 PM.png](fileId:987)


5. Update the instructions by filling in your name (or persona), response style, and add full email replies from the topic or individual you want the AI agent to emulate.

[Tip: Add actual replies from your email sent folder, including your greeting and sign off. Paste each email sample between a set of &lt;example&gt; .... &lt;/example&gt; tags]

![Screenshot 20250305 at 5.47.32 PM.png](fileId:986)

6. Configure the reply (or reply all) to remain within the original email string

![Screenshot 20250305 at 6.03.30 PM.png](fileId:985)

7. Test it! Send an email from the address to which your agent wants to respond. Check your sent (or draft) folder for the result.


![Screenshot 20250305 at 6.30.21 PM.png](fileId:981)

8. Enjoy all the free time you now have!!
9. If you have questions or need assistance, email us at: support@teambisonandbird.com


++This template does not include retrieving email addresses out of the message or body of the email.++

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Microsoft Outlook Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
