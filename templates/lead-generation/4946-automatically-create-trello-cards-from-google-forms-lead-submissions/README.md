# 🎣 Automatically create Trello cards from Google Forms lead submissions

> ⚡ **913 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

Transform your lead generation process with this powerful n8n workflow that automatically captures form submissions from Google Forms and creates organized lead cards in Trello.

🎯 Who Is This For?
This workflow is perfect for:

- Sales teams who need to quickly organize and track incoming leads.
- Marketing professionals running lead generation campaigns
- Small business owners wanting to streamline their customer acquisition process
- Consultants and service providers collecting client information through forms
- Anyone who wants to eliminate manual data entry between forms and project management tools

🛠️ Tools Involved & Prerequisites
Required Tools:

- n8n
- Google Forms - for lead capture forms
- Trello - for lead management and organization

Prerequisites:

- Active Google account with Forms access
- Trello account with board creation permissions

⚙️ How It Works
This workflow automatically transforms Google Form submissions into organized Trello cards for lead management:

1. Form Trigger: When someone submits your Google Form, the workflow instantly captures all their information
2. Data Mapping: The system takes the form responses and maps them to the appropriate Trello card fields
3. Trello Card Creation: Each lead becomes a structured Trello card with the person's name and company as the title, plus all form data organized in custom fields

🚀 Setup Instructions
1. Import the workflow template into your n8n instance
2. Access the set up instructions here: https://www.notion.so/Google-Forms-to-Trello-Automation-Setup-Instructions-213718e8c6ba807f9972ff2f81f1057a?source=copy_link

## 🔗 Nodes Used

HTTP Request, Trello, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
