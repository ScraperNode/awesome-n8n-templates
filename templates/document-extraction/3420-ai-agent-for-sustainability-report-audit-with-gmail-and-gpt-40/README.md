# 🔬 🌲 AI agent for sustainability report audit with Gmail and GPT-40

> ⚡ **1,675 views** · 🔬 [Document Extraction & Analysis](../)

## Description

*Tags: Sustainability, CSRD, Reporting, ESG, Compliance, Automation*

### Context  
Hey! I'm [Samir](https://samirsaci.com), a **Supply Chain Engineer and Data Scientist from Paris**, founder of  
[LogiGreen Consulting](https://www.logi-green.com/)  

We help **companies automate sustainability workflows** using AI, Data Analytics, and No-Code tools like N8N.  

&gt; Sustainability Reporting meets Automation with n8n!

📬 For business inquiries, you can add me on [Here](https://www.linkedin.com/in/samir-saci)

### What is a CSRD XHTML Report?  
Under the **Corporate Sustainability Reporting Directive (CSRD)**, companies must publish their ESG disclosures in a **machine-readable XHTML format**, embedding **XBRL tags** that make the report structured and standardized.  

[![What is XHTML](https://www.samirsaci.com/content/images/2025/04/temp.png)](https://youtu.be/npeJZv5U7og)

These files must follow strict formatting and tagging rules to ensure **compliance**, **traceability**, and **accessibility** for both regulators and analysts.


### Who is this template for?  
This workflow is designed for **sustainability teams, ESG consultants**, or **developers** who want to **automatically check the structure and format** of CSRD reports submitted in XHTML.


### How does it work?  
This N8N workflow automates the audit process:  
1. **📤 Input Node** → Uploads or fetches the XHTML file via URL or Webhook.  
2. **🧪 Validates Structure** → Uses a custom code node to parse HTML and identify required tags (e.g., `&lt;ix:nonNumeric&gt;`, namespaces).  
3. **📋 Outputs a Report** → Returns a summary report of errors, warnings, and key metadata (like entity name, reporting period).  
4. **📤 Export Option** → Save the results in Google Sheets or send via email.

### Prerequisite  
- A sample XHTML file that you can find in my [GitHub Repository](https://github.com/samirsaci/n8n-templates)
- **Google Sheets API** and **OpenAI API** credentials

### Next Steps  
Follow the **sticky notes** inside each node to adjust parsing rules or extend validation to specific XBRL tags relevant to your sector (e.g., GHG emissions, water usage).

**📺 Check my complete tutorial to understand how to use it: **  

[![CSRD Parser Visual](https://www.samirsaci.com/content/images/2025/04/temp-2.png)](https://youtu.be/npeJZv5U7og)

🎥 [Check My Tutorial](https://youtu.be/npeJZv5U7og)

🚀 Interested in combining **CSRD compliance** with **automation and analytics**? Let’s connect on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Notes  
- This workflow includes an example XHTML file to test the validator.  
- You can plug this into your internal systems or even extend it with AI to **auto-summarize the sustainability report**.

*This workflow has been created with N8N 1.82.1*  
*Submitted: April 3rd, 2025*

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
