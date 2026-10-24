# 🎫 Classify GitHub issues and create Linear tasks using OpenAI

> ⚡ **78 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works  
This workflow automatically processes new GitHub issues and uses AI to classify them by type and priority. It extracts key issue data, sends it to an AI model for structured analysis, and formats the output for task creation. The workflow then creates a task in Linear and adds a comment back to the GitHub issue. This ensures consistent triage and faster issue handling without manual effort.

## Step-by-step  

- **Capture and filter new issues**  
  - **Github Trigger** – Listens for new issues or comments in the repository.  
  - **If** – Filters events to process only newly opened issues.  
  - **Edit Fields** – Extracts and structures title, description, author, and URL.  

- **AI classification and formatting**  
  - **Information Extractor** – Sends issue data to AI for classification (type, priority, labels).  
  - **Code in JavaScript** – Cleans, validates, and formats AI output for consistent use.  
    - **OpenAI Chat Model (sub-node)** – Provides the language model powering the AI classification. 
  - **Merge** – Combines original issue data with AI-processed output. 

- **Task creation and feedback**  
 
  - **Create an issue** – Creates a structured task in Linear with priority and description.  
  - **Create a comment on an issue** – Posts a comment back to GitHub with classification results.  

## Why use this?  

- Eliminates manual issue triage and prioritization work  
- Ensures consistent classification using AI-driven logic  
- Speeds up response time for bugs, features, and questions  
- Automatically syncs GitHub issues with Linear tasks  
- Improves team visibility with instant feedback on each issue

## 🔗 Nodes Used

GitHub, Github Trigger, Linear, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
