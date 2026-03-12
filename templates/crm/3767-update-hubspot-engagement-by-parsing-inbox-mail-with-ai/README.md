# 🤝 Update Hubspot engagement by parsing inbox mail with AI

> ⚡ **1,240 views** · 🤝 [CRM & Sales Operations](../)

## Description

## **Who is this for?**  
This workflow is designed for Customer Success Managers (CSM), sales, support, or marketing teams using **HubSpot CRM** who want to automate customer engagement tracking when new emails arrive. It’s ideal for businesses looking to streamline CRM updates without manual data entry.  

## **Problem Solved / Use Case**  
Manually logging email interactions in HubSpot is time-consuming. This workflow **automatically** parses incoming emails, checks if the sender exists in HubSpot, and either:  
- Creates a new contact + logs the email as an engagement (if the sender is new).  
- Logs the email as an engagement for an existing contact.  

## **What This Workflow Does**  
1. **Triggers** when a new email arrives in a connected IMAP inbox.  
2. **Parses the email** using AI (OpenAI) to extract structured data.  
3. **Searches HubSpot** for the sender’s email address.  
4. **Updates HubSpot**:  
   - Creates a contact (if missing) and logs the email as an engagement.  
   - Or logs the engagement for an existing contact.  

## **Setup**  
1. **Configure Email Account**: Replace the default IMAP node with your email provider
2. **HubSpot Credentials**: Add your HubSpot API key in the HubSpot nodes.  
3. **OpenAI Integration**: Ensure your OpenAI API key is set for email parsing.  
## **Customization Tips**  
- **Improve AI Prompt**: Modify the OpenAI prompt to extract specific email data (e.g., customer intent).  
- **Add Filters**: Exclude auto-replies or spam by adding a filter node.  
- **Extend Functionality**: Use the parsed data to trigger follow-up tasks (e.g., Slack alerts, tickets).  

**Need Help?** Contact [thomas@pollup.net](mailto:thomas@pollup.net) for workflow modifications or help.

**Discover my other workflows [here](https://n8n.io/creators/zeerobug/)**

## 🔗 Nodes Used

Email Trigger (IMAP), HubSpot, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
