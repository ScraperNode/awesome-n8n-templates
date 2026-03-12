# 🔬 Generate stale page reports for Confluence spaces with REST API v1 and v2

> ⚡ **40 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Report stale pages in Confluence

This workflow generates a **stale page report** for Confluence spaces, helping teams keep documentation accurate, relevant, and actively maintained.

### What it does
- Identifies Confluence pages **not updated within a defined cutoff period** (in days).
- Supports both:
  - **Confluence REST API v1 (CQL search)**, and
  - **Confluence REST API v2** (spaces + pages).
- Produces a clean, aggregated report including:
  - Page title  
  - Page status  
  - Last updated date  
  - Days overdue  
  - Direct page URL
- Ideal for **content audits**, **documentation hygiene**, and **ownership reviews**.

### How it works
- The workflow starts via a **Manual Trigger**.
- A **Set Variables** node defines:
  - Atlassian domain
  - Space keys to scan
  - Cutoff age (in days)
  - API version toggle (v1 or v2)
- Two execution paths are supported:
  - **API v1**: Uses CQL search to fetch outdated pages directly.
  - **API v2**: Fetches spaces → pages → filters pages by last modified date.
- All pages are normalized into a consistent format.
- Results are **aggregated into a single `stalePages` array** for easy reuse in downstream steps.

### Setup
- Configure the **Set Variables** node:
  - `atlassianDomain` → your Confluence base URL  
  - `spaceKeys` → comma-separated space keys (e.g. `DOCS, ENG`)  
  - `cutoffDateDays` → age threshold (e.g. `90`)  
  - `apiV2` → `true` (recommended) or `false` for legacy CQL
- Create an **HTTP Basic Auth credential**:
  - Atlassian email + API token
  - Assign it to all HTTP Request nodes
- Optional:
  - Extend the workflow with email notifications, Slack alerts, or CSV exports.

### Notes
- **API v2 is recommended** and future-proof; API v1 is included for legacy compatibility.
- Pagination limits are set to **50 items per request** — increase if your spaces contain many pages.
- If no results are returned:
  - Verify space keys
  - Check cutoff logic
  - Confirm API permissions for the token
- Tested against **Confluence Cloud**.

## 🔗 Nodes Used

HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
