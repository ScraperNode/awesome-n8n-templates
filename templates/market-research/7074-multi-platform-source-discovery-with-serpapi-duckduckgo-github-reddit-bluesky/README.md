# 📊 Multi-platform source discovery with SerpAPI, DuckDuckGo, GitHub, Reddit & Bluesky

> ⚡ **1,024 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Source Discovery - Automatically Search More Up-to-Date Information Sources

## 🎬 Overview
**Version** : 1.0

This workflow utilizes various nodes to discover and analyze potential sources of information from platforms like Google, Reddit, GitHub, Bluesky, and others. It is designed to streamline the process of finding relevant sources based on specified search themes.

## ✨ Features

- Automated source discovery from multiple platforms.
- Filtering of existing and undesired sources.
- Error handling for API requests.
- User-friendly configuration options.

## 👤 Who is this for?

This workflow is ideal for researchers, content marketers, journalists, and anyone looking to efficiently gather and analyze information from various online sources.

## 💡 What problem does this solve?

This workflow addresses the challenge of manually searching for relevant information sources, saving time and effort while ensuring that users have access to the most pertinent content. Ideal use-cases include:

- Resource Compilation for Academic and Educational Purposes
- Journalism and Research
- Content Marketing
- Competitor Analysis

## 🔍 What this workflow does

The workflow gathers data from selected platforms through search terms. It filters out known and undesired sources, analyzes the content, and provides insights into potential sources relevant to the user's needs.

## 🔄 Workflow Steps

### 1. Search Queries

- Fetch sources using SerpAPI search, DuckDuckGo, and Bluesky.
- Utilizes GitHub repositories to find relevant links.
- Leverages RSS feeds from subreddits to identify potential sources.

### 2. Filtering Step

- Removes existing and undesired sources from the results.

### 3. Source Selection

- Analyzes the content of the identified sources for relevance.

## 📌 Expected Input / Configuration

The workflow is primarily configured via the **Configure Workflow Args (Manual)** node or the **Global Variables** custom node.

- Search themes: Keywords or phrases relevant to the desired content.
- Lists of known sources and undesired sources for filtering.


## 📦 Expected Output

A curated list of potential sources relevant to the specified search themes, along with insights into their content.

## 📌 Example

![printscreen1.png](fileId:1965)

![printscreen2.png](fileId:1964)

![printscreen3.png](fileId:1961)

![printscreen4.png](fileId:1962)

![printscreen5.png](fileId:1963)

![printscreen6.png](fileId:1966)

## ⚙️ n8n Setup Used

- **n8n version:** 1.105.3
- **n8n-nodes-serpapi:** 0.1.6
- **n8n-nodes-globals:** 1.1.0
- **n8n-nodes-bluesky-enhanced**: 1.6.0
- **n8n-nodes-duckduckgo-search**: 30.0.4
- **LLM Model:** mistral-small-latest (API)
- **Platform:** Podman 4.3.1 on Linux
- **Date:** 2025-08-06

## ⚡ Requirements to Use / Setup

- Self-hosted or cloud n8n instance.
- Install the following custom nodes: SerpAPI, Bluesky, and DuckDuckGo Search.
    - [n8n-nodes-serpapi](https://github.com/serpapi/n8n-nodes-serpapi)
    - [n8n-nodes-duckduckgo-search](https://github.com/samnodehi/n8n-nodes-duckduckgo)
    - [n8n-nodes-bluesky-enhanced](https://github.com/brianmoney/n8n-nodes-bluesky)
- Install the Global Variables Node for enhanced configuration:
	- [n8n-nodes-globals](https://github.com/umanamente/n8n-nodes-globals) (or use Edit Field (Set) node instead)
- Provide valid credentials to nodes for your preferred LLM model, SerpAPI, and Bluesky. Credentials for GitHub recommended.

## ⚠️ Notes, Assumptions \& Warnings

- Ensure compliance with the terms of service of any platforms accessed or discovered in this workflow, particularly concerning data usage and attribution.
- Monitor API usage to avoid hitting rate limits.
- The workflow may encounter errors such as 403 responses; in such cases, it will continue by ignoring the affected substep.
- Duplicate removal is applied, but occasional overlaps might still appear depending on the sources.
- This workflow assumes familiarity with n8n, APIs, and search engines.
- Using AI agents (Mistral or substitute LLMs) requires access to their API services and keys.
- This is not a *Curator of News*. It is designed to find websites that are relevant and useful to your searches. If you are looking for a relevant news selector, please check this [workflow](https://n8n.io/workflows/6157-multi-source-news-curator-with-mistral-ai-analysis-summaries-and-custom-channels/).

## ℹ️ About Us

This workflow was developed by the Hybroht team. Our goal is to create tools that harness the possibilities of technology and more. We aim to continuously improve and expand functionalities based on community feedback and evolving use cases. For questions, reach out via [contact@hybroht.com](mailto:contact@hybroht.com).


---

### ⚖️ Warranty & Legal Notice

This free workflow is provided "as-is" without any warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.

By using this workflow, you acknowledge that you do so at your own risk. We shall not be held responsible for any damages, losses, or liabilities arising from the use or inability to use this workflow, including but not limited to any direct, indirect, incidental, or consequential damages.

It is your responsibility to ensure that your use of this workflow complies with all applicable laws and regulations.

---

## 🔗 Nodes Used

HTTP Request, RSS Read, Reddit, Schedule Trigger, Filter, Mistral Cloud Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
