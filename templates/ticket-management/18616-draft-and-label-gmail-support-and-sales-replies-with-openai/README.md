# 🎫 Draft and label Gmail support and sales replies with OpenAI

> ⚡ **59 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Automatically triage incoming Gmail messages and prepare AI-generated replies with OpenAI while keeping a human in control.

This workflow monitors unread emails in your Gmail inbox, classifies each message as Support, Sales, Information, or Other, and routes it through the appropriate processing path.

## How it works
1. Monitor Gmail: 
* The Gmail Trigger checks for new unread messages in the inbox.
2. Load Gmail labels: 
* The workflow retrieves the labels available in the connected Gmail account. 
*These are converted into a label map that can be used throughout the workflow.
3. Normalize the email: 
* Relevant information from the incoming message is prepared for processing, including: 
   * Sender 
   * Subject 
   * Email body
4. Classify with OpenAI: 
* OpenAI analyzes the email and assigns one of four categories: 
   * Support — Questions, issues, or requests for assistance 
   * Sales — Pricing, services, purchase intent, or potential customers 
   * Information — General questions about the business 
   * Other — Emails that don't require one of the specialized response paths
5. Route by category: 
* n8n sends the message through the corresponding workflow branch.
6. Generate a reply: 
* Support, Sales, and Information emails are processed by dedicated AI agents. 
* Each agent receives the email together with the business context defined in Manual Configuration. 
* The agent generates a structured response containing a Subject and Body.
7. Validate the AI response: 
* The workflow checks that both Subject and Body exist and contain valid content. 
* Invalid responses are routed to the error path instead of creating an incomplete draft.
8. Create the Gmail draft: 
* Valid responses are saved as drafts in the original Gmail thread. 
* The draft remains available for human review, editing, and manual sending.
9. Apply Gmail labels: 
* The workflow labels each processed email according to its category. 
* Invalid AI responses can be assigned an Error label for easier troubleshooting.

## Setup
1. Import the workflow: Download or copy the template into your n8n instance.
2. Connect Gmail:  
* Create or select your Gmail OAuth2 credentials in the Gmail nodes. 
* The connected account should be the inbox you want the workflow to monitor and manage.
3. Connect OpenAI: 
* Create an OpenAI API credential in n8n using your API key. 
* Assign the credential to the OpenAI nodes included in the workflow. 
* Make sure your OpenAI account has API billing enabled.
4. Configure your business information: 
* Open the Manual Configuration node. 
* Replace the example values with information about your business. 
*Configure fields such as: 
   * Company name 
   * Company description 
   * Services 
   * Target customers 
   * Business hours 
   * Email signature 
   * Frequently asked questions 
   * Other relevant business context 
* The quality of this information directly affects how useful and accurate the generated drafts are.
5. Review the AI instructions: 
* Review the included prompts before using the workflow with real business emails. 
* Adjust the tone, rules, and business-specific instructions where necessary.
6. Test the workflow: 
* Send several test emails covering different scenarios: 
* Support request 
* Sales inquiry 
* General information question 
* Unrelated email 
* Check that classification, routing, draft generation, and labeling behave as expected.
7. Activate the workflow: 
* Once testing is complete, activate the workflow. 
* New matching emails can now be processed automatically.

## Requirements
- n8n — Cloud or self-hosted
- Gmail account
- Gmail OAuth2 credentials configured in n8n
- OpenAI API account
- OpenAI API credentials configured in n8n
- OpenAI API billing enabled
- Gmail labels for: *Support *Sales *Information *Other *Error

## Customization
- Bussiness Context: 
The easiest way to customize the workflow is through the Manual Configuration node. 
Replace the example data with information about your own business so the AI agents can generate more relevant responses.
- AI prompts 
The classification and response-generation prompts can be modified directly. You can customize: 
* Tone of voice 
* Response length 
* Support behavior 
* Sales behavior 
* Company policies 
* Information the AI can use 
* Situations where the AI should avoid answering
- Categories 
The default classification system uses: Support / Sales / Information / Other 
You can modify the classifier and routing logic to support your own categories, such as: Billing / Technical Support / Partnerships / Leads / Internal 
Remember to update the corresponding routing and Gmail labeling logic when adding or changing categories.
- Gmail labels 
You can replace the default labels with your own inbox organization system. 
Update the relevant label references if you change their names or IDs.
- OpenAI model 
The OpenAI model can be changed depending on your preferred balance between: 
* Response quality 
* Latency 
* API cost
- Workflow extensions 
The workflow is intentionally kept relatively simple so it can be used as a foundation for a larger email automation system. 
You can extend it with: 
* Google Sheets or database logging 
* Slack or Telegram notifications 
* CRM integrations 
* Helpdesk systems 
* Knowledge bases 
* Analytics 
* Monitoring 
* Additional email categories 
* Custom error handling

## Additional info
Human-in-the-loop by design

This workflow creates drafts instead of sending emails automatically.

AI-generated responses can therefore be reviewed, edited, or discarded before anything reaches the recipient.

This is intentional and makes the workflow suitable for assisting with business email without giving the AI autonomous control over outgoing communication.

Free Edition

This is the Free Edition of the Email Automation System.

It contains the core email automation pipeline:

Gmail → Classification → Specialized AI Agent → Validation → Draft → Label

A Pro Edition is available for users who need a more complete production-oriented system with advanced configuration, logging, analytics, evaluation, monitoring, and error-handling capabilities.

Production use

Test the workflow with representative emails before connecting it to an important production inbox.

AI-generated content may be incorrect or incomplete. Always review drafts carefully, especially for financial, legal, contractual, security-sensitive, or other high-impact communications.

Need help setting it up?

I can install, configure, and customize the system for your environment and business requirements.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
