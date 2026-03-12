# 📊 Automate competitor research with Exa.ai, Notion and AI agents

> ⚡ **28,407 views** · 📊 [Market Research & Insights](../)

## Description

This n8n workflow demonstrates a simple multi-agent setup to perform the task of competitor research. It showcases how using the HTTP request tool could reduce the number of nodes needed to achieve a workflow like this.

## How it works
* For this template, a source company is defined by the user which is sent to Exa.ai to find competitors.
* Each competitor is then funnelled through 3 AI agents that will go out onto the internet and retrieve specific datapoints about the competitor; company overview, product offering and customer reviews.
* Once the agents are finished, the results are compiled into a report which is then inserted in a notion database.

Check out an example output here: https://jimleuk.notion.site/2d1c3c726e8e42f3aecec6338fd24333?v=de020fa196f34cdeb676daaeae44e110&pvs=4

## Requirements

* An OpenAI account for the LLM.
* Exa.ai account for access to their AI search engine.
* SerpAPI account for Google search.
* Firecrawl.dev account for webscraping.
* Notion.com account for database to save final reports.

## Customising the workflow

Add additional agents to gather more datapoints such as SEO keywords and metrics.

Not using notion? Feel free to swap this out for your own database.

## 🔗 Nodes Used

HTTP Request, Notion, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
