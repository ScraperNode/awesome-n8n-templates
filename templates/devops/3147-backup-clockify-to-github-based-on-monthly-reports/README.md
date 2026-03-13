# ⚙️ Backup Clockify to Github based on monthly reports

> ⚡ **692 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

## Purpose

This workflow creates a versioned backup of an entire Clockify workspace split up into monthly reports.

## How it works

- This backup routine runs daily by default
- The Clockify reports API endpoint is used to get all data from the workspace based on time entries
- A report file is being retrieved for every month starting with the current one, going back 3 month in total by default
- If changes happened during a day to any report, it is being updated in Github

## Prerequisites

- Create a **private** Github repository
- Create credentials for both Clockify and Github (make sure to give permissions for read and write operations)

## Setup

- Clone the workflow and select the belonging credentials
- Follow the instructions given in the yellow sticky notes
- Activate the workflow

## 🔗 Nodes Used

GitHub, HTTP Request, Clockify, Stop and Error, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
