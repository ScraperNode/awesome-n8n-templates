# 🔬 Export Zammad objects (users, roles, groups, organizations) to Excel

> ⚡ **1,018 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow enables you to export data from Zammad, including Users, Roles, Groups, and Organizations, into individual Excel files. It simplifies data handling and reporting by creating structured outputs for further processing or sharing.

## Features
- Export Users with associated details such as `email`, `firstname`, `lastname`, `role_ids`, and `group_ids`.
- Export Roles and Organizations with their respective identifiers and names.
- Convert all data into separate Excel files for easy access and use.

## Usage
1. Import this workflow into your n8n instance.
2. Configure the required Zammad API credentials (`zammad_base_url` and `zammad_api_key`) in the `Basic Variables` node.
3. Run the workflow to generate Excel files containing Zammad data.

## Issues and Suggestions
If you encounter any issues or have suggestions for improvement, please report them on the [GitHub repository](https://github.com/Sirhexalot/n8n-Export-Zammad-Objects-Users-Roles-Groups-and-Organizations-to-Excel).

We appreciate your feedback to help enhance this workflow!

## 🔗 Nodes Used

HTTP Request, Zammad, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
