# 📱 Automated animal advocacy news research & weekly digest using Claude AI & Serper

> ⚡ **457 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who’s it for 🎯  
This workflow is designed for animal advocacy organizations, activists, and campaigners who want to automatically receive a **weekly email update** summarizing the latest news and developments related to animal rights, welfare, vegetarianism, and veganism. **It can also be easily altered to allow daily updates.**

## How it works / What it does ⚙️  
Runs on a weekly schedule and uses a multi-tool research agent subworkflow to gather verified news strictly from the past week. It compiles the information and URLs into a clean, well-structured HTML email, then sends it to the specified recipient. URLs are never altered or omitted.

## How to set up 🛠️  
1. Import this workflow into your n8n instance.  
2. Add and install the required research subworkflow:  
   [Multi-tool Research Agent for Animal Advocacy](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/)  
3. Configure API keys in n8n credentials.  
4. Set your topics, instructions, and recipient email in the “Set Preferences” node.  
5. Adjust the schedule node to control when emails are sent.  
6. Test the full workflow to ensure proper operation.

## Requirements 📋  
- n8n instance with internet access  
- Valid API keys  
- The Multi-tool Research Agent subworkflow installed  
- SMTP or email sending configured

## How to customize 🔧  
- **Update Topics:** Change topics in the “Set Preferences” node to focus the research.  
- **Update Instructions:** Tailor summary style and focus in the preferences node.  
- **Email Recipient:** Set who receives the update email.  
- **Scheduling:** Change frequency or time in the Schedule node. Duplicate for daily versions with adjusted research parameters.  
- **HTML Styling:** Modify the “Write HTML” node’s template for custom branding or layout.  
- **Error Handling:** Add workflows to capture and alert on errors for robustness.

---

Adapt and extend as needed for your advocacy goals!

## 🔗 Nodes Used

Send Email, Execute Sub-workflow, Schedule Trigger, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
