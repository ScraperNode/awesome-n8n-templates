# ⚙️ Trigger a build in Travis CI when code changes are push to a GitHub repo

> ⚡ **1,627 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow allows you to trigger a build in Travis CI when code changes are pushed to a GitHub repo or a pull request gets opened.

![workflow-screenshot](fileId:514)

**GitHub Trigger node:** This node will trigger the workflow when changes are pushed or when a pull request is created, updated, or deleted.

**IF node:** This node checks for the action type. We want to trigger a build when code changes are pushed or when a pull request is opened. We don't want to build the project when a PR is closed or updated.

**TravisCI node:** This node will trigger the build in Travis CI. If you're using CircleCI in your pipeline, replace the node with the CircleCI node.

**NoOp node:** Adding this node is optional.

## 🔗 Nodes Used

Github Trigger, TravisCI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
