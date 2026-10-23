# 📱 Publish Notion posts to LinkedIn via webhook

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow receives a Notion task via webhook, finds the first related Notion “Resultado” tagged as Post and LinkedIn, publishes its content (optionally with an attached image) to LinkedIn as a personal post or organization post, and then updates the Notion result with the LinkedIn URL, date, and completion status.

## How it works
1. Receives a POST webhook request containing a Notion task page object in `body.tarefa`.
2. Calls the “Enriquecer Página do Notion” sub-workflow to load the task’s related results, parent tasks (recursively), and project client accounts from Notion.
3. Selects the first Notion result tagged with the “post” and “linkedin” taxonomies (checking the task first, then the closest ancestors) and extracts the post content plus a LinkedIn organization ID from related client accounts.
4. If no tagged result is found, loads project knowledge items (and subitems) from Notion and picks the first pending LinkedIn post result (not “Concluído”, with no URL and no date), stopping with an error if the content is empty.
5. If the selected result has files in the Notion “Arquivos” property, downloads the first file and attaches it as image media for the LinkedIn post.
6. Publishes the text (and image when present) to LinkedIn as an organization post when an organization ID exists, otherwise as a personal profile post.
7. Builds the LinkedIn post URL from the returned URN and updates the Notion result page via the Notion API, setting the URL, the current date, and the status to “Concluído”.

## Setup
1. Create and connect credentials for LinkedIn OAuth2 and Notion (HTTP Bearer Auth), and ensure both have access to the target profile/page and Notion workspace pages.
2. Provide the “Enriquecer Página do Notion” sub-workflow in your n8n instance and select it in both Execute Workflow steps.
3. Set the `Notion_Version` variable in n8n to a valid Notion API version string used by the Notion API request.
4. Confirm your Notion database schema matches the property names used by the workflow (including “📦 Resultados”, “🏷️ Taxonomias”, “Conteúdo”, “Arquivos”, “URL”, “Data”, and “Status”) and that taxonomy names include “post” and “linkedin”.
5. Update the LinkedIn personal profile identifier used for posting (the configured `person` value) and ensure organization IDs are stored in the related Notion account record’s “ID” property when you want to post as an organization.
6. Copy the production webhook URL and configure the source system to send a POST request with the Notion task page object in the JSON body field `tarefa`.

## 🔗 Nodes Used

HTTP Request, Webhook, Execute Sub-workflow, LinkedIn

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
