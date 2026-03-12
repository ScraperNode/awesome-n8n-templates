# 🎯 Smart Gmail Labeling Automation with Text Classifier and GPT-5

> ⚡ **2,206 views** · 🎯 [AI Summarization & Classification](../)

## Description

## What this workflow does

This workflow automatically organizes your Gmail inbox by fetching recent emails, analyzing their content with AI, and applying the appropriate Gmail labels based on the results.

**Step by step:**
1. **Schedule Trigger** runs the workflow automatically at your chosen interval  
2. **Gmail Fetch** retrieves the latest emails from your inbox  
3. **Loop Over Items** processes each email individually  
4. **AI Text Classifier** analyzes email subject and body content to determine the right category  
5. **Add Labels** applies the matching Gmail label according to the AI classification  
6. **Loop Back** continues until all emails are processed and organized  

## How to set up

1. **Connect your Gmail account** to the Gmail nodes for fetching emails and adding labels
2. **Add your OpenAI API key** to the OpenAI Chat Model node for AI-powered classification
3. **Configure the schedule trigger** to run at your preferred interval (default: every 5 minutes)
4. **Customize email categories** in the Label Classifier node based on your organizational needs
5. **Set up Gmail labels** that match your classification categories in your Gmail account
6. **Adjust the time range** for fetching emails (default: last 5 minutes) and email limit (default: 10)
7. **Test the workflow** with a few sample emails to ensure proper classification and labeling
8. **Monitor the workflow execution** to verify emails are being processed and labeled correctly

## How to customize this workflow to your needs

* **Adjust classification categories**: modify the Label Classifier node to include categories like "Work", "Bills", "Social", "Newsletters", or any custom categories you need
* **Change time intervals**: customize the schedule trigger to run hourly, daily, or at specific times based on your email volume
* **Add more label actions**: create additional Gmail label nodes for more granular categorization (urgent, follow-up, archive, etc.)

## Need help customizing?

**Contact me for consulting and support:**   
📧 **billychartanto@gmail.com**

## 🔗 Nodes Used

Gmail, Schedule Trigger, OpenAI Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
