# 🔬 Generate workflow documentation and node names with GPT‑4.1‑mini

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who Is This For?
This workflow serves as a comprehensive **"Workflow Nodes SEO & Documentation Generator"**. It uses AI to analyze, rename, and document n8n workflows, offering a streamlined way to optimize workflow readability and prepare them for sharing.

### **Who Is This For?**
This workflow is designed for **n8n users, workflow managers, and community contributors** who want clean, professional, and easy-to-understand workflows.

### **What This Workflow Does**
This workflow works as a **smart assistant** that:
1. **Automatically renames nodes** with clear, human-readable names based on their purpose.
2. **Generates SEO-friendly workflow titles** suitable for sharing in the n8n community.
3. **Creates structured markdown documentation**, including diagrams and node details, for easy maintenance and sharing.

### **Key Features**
- **Multi-Process Selection**: Choose from "Node Name", "Workflow Name", "Description", or "Other Description" modes via a form.
- **Dynamic Workflow Selection**: Automatically lists all your workflows so you can pick one to edit.
- **AI-Powered Analysis**: Uses an AI Agent (Mistral/OpenAI) to study your workflow and generate better names or text.
- **Validation Logic**: Checks that the AI identified every node before applying changes to prevent errors.
- **Safe Renaming**: Updates node names and links at the same time to keep the workflow working.
- **Version History**: Provides links to compare the new version with the original one.

### **Requirements & Setup**
- **n8n API Credentials**: Required to fetch workflows and save updates.
- **AI Model Credentials**: Requires credentials for an LLM (e.g., Mistral, OpenAI, or OpenRouter) connected to the "OpenAI" node.
- **Google Docs API (Optional)**: If the "Docs" tool is used, credentials are needed for fetching reference data.

### **Important Notes**
- **Form Trigger**: This workflow is triggered via a "Form Trigger" node, which presents a UI for selecting the process and workflow.
- **Data Safety**: The validation step ensures that the AI does not miss any nodes before renaming, preventing workflow corruption.
- **Context Window**: The AI agent uses a "Memory" node with a context window of 10, allowing it to remember previous interactions during generation.
- **Formatting**: The generated documentation uses Markdown and Mermaid.js syntax for visual workflow diagrams.


## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

n8n, AI Agent, Basic LLM Chain, OpenAI Chat Model, Simple Memory, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
