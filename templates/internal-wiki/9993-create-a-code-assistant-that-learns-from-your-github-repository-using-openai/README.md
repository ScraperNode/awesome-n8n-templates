# 📖 Create a code assistant that learns from your GitHub repository using OpenAI

> ⚡ **858 views** · 📖 [Internal Wiki & Knowledge Base](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI Agent for GitHub
AI Agent to learn directly from your **GitHub repository**.  
It automatically syncs source files, converts them into vectorized knowledge

## How It Works

Provide your **GitHub repository** — the workflow will automatically **pull your source files** and **update the knowledge base (vectorstore)** for the AI Agent.  
This allows the AI Agent to answer questions directly based on your repository’s content.

---

## How to Use

1. **Commit** your files to your GitHub repository.  
2. **Trigger** the `Sync Data` workflow.  
3. **Ask** questions to the AI Agent — it will respond using your repository knowledge.

---

## Requirements

- A valid **GitHub account**  
- An **existing repository** with accessible content  

---

## Customization Options

- Customize the **prompt** for specific or detailed tasks  
- Replace or connect to your own **vector database provider**

## 🔗 Nodes Used

GitHub, HTTP Request, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
