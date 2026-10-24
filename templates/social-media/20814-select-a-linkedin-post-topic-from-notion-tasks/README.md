# 📱 Select a LinkedIn post topic from Notion tasks

> ⚡ **6 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives a Notion task via webhook, finds the first available “Assunto” (topic) with a LinkedIn-ready “Anotação” (note) that has not been published yet, and writes the selected relations back to the task and its parent tasks using the Notion API.

## How it works
1. Receives a webhook POST request containing the Notion task page object in `body.tarefa`.
2. Loads the task’s related Notion “Projetos” and their “Taxonomia”, then keeps only projects tagged as “Post”.
3. For each Post project, loads its related Notion “Conhecimentos” and their “Taxonomias”, then keeps only items tagged as “Assunto”.
4. Iterates through the candidate Assunto items and recursively loads their Subitem hierarchy plus related “Anotações” (including their Taxonomias and Resultados).
5. Selects the first Assunto that contains an Anotação tagged “Post” and “LinkedIn” and with an empty “Resultados” relation (not yet published).
6. If a match is found, updates the original Notion task page to relate the chosen “📚 Conhecimentos” and “📝 Anotação”, then updates each related “Item pai” page with the same relations.

## Setup
1. Create an HTTP Bearer Auth credential with your Notion integration token and ensure the integration has access to the task, project, knowledge, annotation, and results pages/databases.
2. Set the workflow variable `Notion_Version` to the Notion API version you want to use for the request header.
3. Provide and select the sub-workflow “Enriquecer Página do Notion” (used to expand Notion relations) in the three workflow-call steps.
4. Ensure your Notion schema matches the property and relation names used (for example “🎯 Projetos”, “🏷️ Taxonomia(s)”, “📚 Conhecimentos”, “📝 Anotações”, “📦 Resultados”, “Item pai”) and that the taxonomies “Post”, “Assunto”, and “LinkedIn” exist.
5. Copy the production webhook URL and configure the source system to send a POST request with the Notion task page object in the `tarefa` field of the JSON body.

## 🔗 Nodes Used

HTTP Request, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
