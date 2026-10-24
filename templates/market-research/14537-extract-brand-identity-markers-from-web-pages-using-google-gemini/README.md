# 📊 Extract brand identity markers from web pages using Google Gemini

> ⚡ **46 views** · 📊 [Market Research & Insights](../)

## Description

## Web Page to Brand Identity Markers
**This n8n template retrieves verbal brand identity markers from any web site.**

#### Customer Perception Review
How does a customer coming to your web site perceive your content? Use this to check against the key messages you want the customer to understand after visiting your web site.

#### Brand Identity Extraction
Marketing Agencies need to understand for each customers their specific tone and communication style to replicate it for updates and new content.

### How it works
- Execute the workflow and enter any web site address
- The HTTP node retrieves the web page
- The core logic is the Gemini AI prompt to review the web page content and respond with a pre-defined JSON data structure containing the verbal brand identity markers
- The JSON structure returned from the AI node is parsed and displayed on a web page. 

### How to customize
- Inject your own processing logic after the "Extract AI Response" node
- You can directly access the JSON fields returned. For an example see how the HTML node creates the web page with the JSON data.

### Requirements
- Gemini account for LLM

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

For support reach out to the creator at blakewise.com

Happy Hacking!

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
