# 🎫 Automate IT support: Convert emails to Jira tickets with AI resolution

> ⚡ **1,531 views** · 🎫 [Ticket Management & Triage](../)

## Description

## SmartSupport Flow: Auto-Handle IT Requests from Email to JIRA with Slack notification
### Watch the demo video below:
[![Watch the video](https://s3.ap-southeast-1.amazonaws.com/automatewith.me/gmail-to-jira-n8n-automation-workflow.jpg)](https://youtu.be/nC2mSry3xFo)
### **Who’s it for**
&gt; This workflow is built for **lean IT teams, office managers, and business operators** who receive support requests via email and want to **automate ticket creation, smart AI resolution advice, and seamless communication** with both users and internal teams, all without lifting a finger.  
If your team is tired of manually triaging inbox requests, this AI-powered flow will transform your support handling process.

### **How it works / What it does**

1. **Trigger on New Email**: Uses Gmail Trigger to detect new support request emails.
2. **Fetch Email Content**: Retrieves the full message body and metadata.
3. **Check for Duplication**: Skips processing if the email has already been handled (based on READ/UNREAD label).
4. **Mark as Read**: Updates Gmail to mark the email as processed.
5. **Extract Structured Request**: Uses the `Support Request Reader Agent` powered by OpenAI to extract:
   - Request title
   - Request description
   - Requested by
   - Department
   - Category and priority
6. **Create Jira Ticket**: A main issue is created in Jira using the structured request.
7. **Generate AI-Based Solution**: Invokes the `IT Support Advisor Agent` to propose resolution(s).
8. **Post Comment to Jira**: Adds the suggested solution(s) to the issue as a comment.
9. **Notify IT Team**: Sends the ticket and context to a Slack channel for visibility and action.
10. **(Optional)** Send Email to Requester: Currently deactivated. Can be enabled to acknowledge receipt.

### **How to set up**

1. **Gmail Integration**
   - Connect Gmail in the “Gmail Trigger” and “Get Email Content” nodes.
2. **OpenAI Configuration**
   - Use OpenAI API credentials in both the Reader and Advisor agent models.
3. **Jira Integration**
   - Authenticate your Jira account.
   - Set project key and issue fields in the “Create Main Issue” node.
4. **Slack Notification**
   - Configure Slack connection and select a target channel.
5. **Set up Jira, Slack, Email**
   - Set your company Jira based URL, IT Support slack channel and IT Support email in the Edit Fields (Set) node 
6. **(Optional)** Email Acknowledgment
   - Provide SendGrid credentials and email template in the “Send email to requester” node if re-enabled.

### **Requirements**

- Gmail API access with appropriate permissions  
- OpenAI account with API access (for GPT-4 or GPT-3.5)  
- Jira instance with project and permission to create/comment on issues  
- Slack workspace and Webhook or OAuth setup  
- n8n instance running with all above integrations configured

### **How to customize the workflow**

- **Enhance Email Deduplication**: Adjust the deduplication logic to use `message-id`, `threadId`, or custom headers.
- **Expand Reader Agent**: Configure the LLM to extract more details such as asset tags, urgency levels, or locations.
- **Tailor Advisor Agent**: Adjust prompt to generate multiple solutions, troubleshooting guides, or internal references.
- **Routing by Department**: Add logic to forward requests to different teams based on the request category or department.
- **Enable Email Acknowledgment**: Activate and customize the email notification step to inform requesters that their issue is being handled.

## 🔗 Nodes Used

Slack, Jira Software, Gmail, SendGrid, Gmail Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
