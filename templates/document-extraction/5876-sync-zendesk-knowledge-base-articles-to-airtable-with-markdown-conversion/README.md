# 🔬 Sync Zendesk knowledge base articles to Airtable with markdown conversion

> ⚡ **324 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who is it for
* Customer service or support teams who want to use their Zendesk articles in other tools.
* Content/Knowledge managers consolidating or migrating knowledge bases.
* Ops/automation specialists who want Markdown versions of articles (could be adapted to Notion, Google Sheets, or any Markdown-friendly system).

## How to get started
* Download the template and install it on your instance
* Set Zendesk and Airtable credentials
* Modify the Zendesk base_url and Airtable's table and base
* Run the workflow once manually to get your existing articles
* Finally, modify the Schedule Trigger (by default it runs every 30 days) and activate the workflow

## Prerequisites
* **Airtable base** set up using [this template](https://airtable.com/apptzJnbB6FphIprO/shrA6AhTkogTgrRn5). It includes the fields `Title`, `Content`, `URL` and `Article ID`.
* **Zendesk account** with API access (read permissions for help center articles)
* **Zendesk API credentials** (see instructions below)
* **Airtable API credentials** (see instructions below)

## Getting Your Credentials
**Airtable:**
1. [Sign up or log in to Airtable](https://airtable.com/).
2. Go to [your account settings](https://airtable.com/account) and generate a **Personal Access Token** (recommended scopes: `data.records:read`, `data.records:write`).
3. In n8n, create new Airtable credentials using this token.

**Zendesk:**
1. Log in to your Zendesk dashboard.
2. Go to **Admin Center &gt; Apps and Integrations &gt; Zendesk API**.
3. Enable “Token Access,” and create an API token.
4. In n8n, add Zendesk credentials with your Zendesk domain, email, and the API token.

## How it works
### 1. **Triggers**
* **Manual:** For first setup, use the Manual Trigger to fetch **all** existing articles.
* **Scheduled:** Automatically runs every N days to fetch **only new or updated** articles since the last run.

### 2. **Fetch Articles from Zendesk**
* Calls the Zendesk Help Center API, using pagination to handle large volumes.

### 3. **Extract and Prepare Data**
* Splits out each article, then collects fields: `id`, `url`, `title`, and `body`.
* Converts the article body from HTML to Markdown (for portability and easier reuse).

### 4. **Upsert Into Airtable**
* Inserts new articles, or updates existing ones (using `Article ID` as the unique key).
* Fields stored: **Title**, **Content** (Markdown), **URL**, **Article ID**.

## Airtable Template
* Use [this Airtable template](https://airtable.com/apptzJnbB6FphIprO/shrA6AhTkogTgrRn5) as your starting point.
* Make sure the table has columns: **Title**, **Content**, **URL**, **Article ID**. You can add more depending on your needs.

## Example Use Cases
* Migrating Zendesk articles to another knowledge base.
* Building an internal knowledge hub in Airtable or Notion.
* Creating Markdown backups for compliance or versioning.

## Service
If you need help implementing the template or modifying it, [just reach out 💌](mailto:hello@agentstudio.io?subject=Store%20Zendesk%20KB%20Articles)

## 🔗 Nodes Used

Airtable, HTTP Request, Markdown, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
