# 🔬 Draft consulting proposals from client URLs with Anthropic and Gemini

> ⚡ **59 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow uses webhooks, Jina AI website scraping, Anthropic-powered agents, and the Google Gemini API to generate consulting proposal options from a company URL, then drafts a structured 11-section proposal and returns it to a frontend as JSON and HTML.

## How it works
1. Receives a POST webhook request with company details, a company URL, and either an “AI suggest” or “own solution” preference.
2. Fetches and truncates the company website content via Jina AI, falling back to a secondary search result or a minimal text brief when retrieval fails.
3. Uses Anthropic (LangChain) to extract structured company research and then generate structured industry context tailored to the decision maker.
4. Looks up an in-workflow industry knowledge base to inject relevant terminology, KPIs, regulations, and common solution patterns into downstream prompts.
5. Generates either three solution options with Anthropic or refines the user’s own solution via the Google Gemini generateContent API, then returns the solution options to the frontend via a webhook response.
6. Receives a second POST webhook request with the user-selected solution, uses Anthropic to map pain points to solution components, and drafts an 11-section proposal.
7. Formats the proposal into branded HTML and returns the final proposal payload to the frontend via a webhook response.

## Setup
1. Add an Anthropic credential for the Research Agent, Industry Agent, Pain Point Agent, and Proposal Drafter agent.
2. Add an HTTP Query Auth credential with a Google Gemini API key for the solution-refinement request to the Generative Language API.
3. Ensure your input system can POST JSON to the two webhook endpoints (tigerpitch-generate and tigerpitch-solution) and consumes the JSON/HTML responses.
4. Provide required request fields such as company_url, company_name, industry, decision_maker, problem_statement, budget_range, timeline, delivery_type, technologies, and solution_preference (and own_solution when applicable).

## 🔗 Nodes Used

HTTP Request, Webhook, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
