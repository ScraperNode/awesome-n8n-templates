# 📊 Scrape latest Github trending repositories

> ⚡ **9,043 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Scrape Latest 20 TechCrunch Articles

## Who is this for?
This workflow is designed for developers, researchers, and data analysts who need to track the latest trending repositories on GitHub. It is useful for anyone who wants to stay updated on popular open-source projects without manually browsing GitHub’s trending page.

## What problem is this workflow solving?
Manually checking GitHub’s trending repositories daily can be time-consuming and inefficient. This workflow automates the extraction of trending repositories, providing structured data including repository name, author, description, programming language, and direct repository links. 

## What this workflow does
This workflow scrapes the trending repositories from GitHub’s trending page and extracts essential metadata such as repository names, languages, descriptions, and URLs. It processes the extracted data and structures it into an easy-to-use format.

## Setup
1. Ensure you have n8n installed and configured.
2. Import this workflow into your n8n instance.
3. Run the workflow manually or schedule it to execute at regular intervals.
4. (Optional) Customize the extracted data or integrate it with other systems.

## How to customize this workflow to your needs
- Modify the HTTP request node to target different GitHub trending categories (e.g., specific programming languages).
- Add further processing steps such as filtering repositories by stars, forks, or specific keywords.
- Integrate this workflow with Slack, email, or a database to store or notify about trending repositories.

## Workflow Steps
1. **Trigger execution manually** using the **"When clicking ‘Test workflow’"** node.
2. **Send an HTTP request** to fetch GitHub’s trending page using **"Request to Github Trend"**.
3. **Extract the trending repositories box** from the HTML response using **"Extract Box"**.
4. **Extract all repository data** including names, authors, descriptions, and languages using **"Extract all repositories"**.
5. **Convert extracted data into a structured list** for easier processing using **"Turn to a list"**.
6. **Extract detailed repository information** using **"Extract repository data"**.
7. **Format and set variables** to ensure clean and structured data output using **"Set Result Variables"**.

---

**Note:** Since GitHub’s trending page updates dynamically, ensure you run this workflow periodically to capture the latest trends.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
