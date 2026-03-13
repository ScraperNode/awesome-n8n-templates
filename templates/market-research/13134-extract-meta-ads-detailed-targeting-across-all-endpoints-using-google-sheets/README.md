# 📊 Extract Meta Ads detailed targeting across all endpoints using Google Sheets

> ⚡ **39 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Meta Ads Detailed Targeting Extractor (Universal, Switch by Endpoint)

This workflow is a **universal automation** for all four Meta Detailed Targeting API endpoints: **Search**, **Suggestions**, **Browse**, and **Validation**. You use a single Google Sheets tab with an `endpoint` column; a Switch node routes each row to the correct branch; results are written to **four separate sheets** in the same spreadsheet. It is designed for media buyers, performance marketers, and analysts who manage targeting research, audience suggestions, browse trees, and validation in bulk and want one workflow instead of four.

#### **Use Case**
Working with Meta’s Detailed Targeting API usually means separate flows for search, suggestions, browse, and validation. This workflow is ideal if you want to:
- **Centralize targeting operations** in one place: one input sheet, one workflow, four result sheets.
- **Drive everything from Google Sheets**: add rows with `endpoint` (search | suggestions | browse | validation), `ad_account_id`, and endpoint-specific parameters; run manually or on new rows.
- **Keep results organized** by endpoint: `search_results`, `suggestions_results`, `browse_results`, `validation_results` in the same document.
- **Run on demand or on row add**: use Manual Trigger for full-sheet runs or Google Sheets Trigger to process only new rows.

#### **How it Works**

The workflow is organized into clear blocks:

**1. Trigger & input**
- **Manual Trigger** → **Read Input (Google Sheets)** — reads the entire `targeting_requests` sheet for ad-hoc or test runs.
- **Google Sheets Trigger** — runs when a new row is added to `targeting_requests`; only new rows are processed (no re-processing of existing data).
- **Read Input (Google Sheets)** always reads from the same sheet: `targeting_requests`.

**2. Validation & routing**
- **Valid rows (ad_account_id + endpoint)** — Filter node keeps only rows where both `ad_account_id` and `endpoint` are non-empty.
- **Switch by endpoint** — routes each row to one of four branches based on `endpoint`: `search`, `suggestions`, `browse`, or `validation` (values must match exactly, including case).

**3. Each branch (Search, Suggestions, Browse, Validation)**
- **API** (Facebook Graph API) — calls the corresponding edge: `targetingsearch`, `targetingsuggestions`, `targetingbrowse`, or `targetingvalidation` with parameters from the row (`act_{ad_account_id}/...`).
- **Merge** (combine by position) — merges the API response with the original request row so each result keeps context (e.g. `ad_account_id`, `q`, `targeting_list`).
- **Split** (field: `data`) — expands the API `data` array into one item per targeting result.
- **Format** — maps fields to flat columns for the sheet: `endpoint`, `ad_account_id`, `query`, `limit_type`, `targeting_id`, `targeting_name`, `audience_size_lower_bound`, `audience_size_upper_bound`, `path`, `description`, `type`; for Validation branch, `valid` is also included.
- **Save to Google Sheets** — appends to the branch-specific sheet: `search_results`, `suggestions_results`, `browse_results`, or `validation_results`.

**4. Output**
- All four Save nodes write to the **same spreadsheet** (same Document ID), each to its own sheet. The `valid` column is populated only in `validation_results`; other sheets leave it empty.

---

### **Input sheet: `targeting_requests`**

Required columns for every row:

| Column           | Description |
|------------------|-------------|
| `endpoint`       | One of: `search`, `suggestions`, `browse`, `validation` (lowercase). |
| `ad_account_id`  | Meta ad account ID (without the `act_` prefix). |

Endpoint-specific columns:

| Endpoint       | Required              | Optional |
|----------------|-----------------------|----------|
| **search**     | `q` — search query    | `limit` (default 25), `limit_type`, `locale` |
| **suggestions**| `targeting_list` — JSON array, e.g. `[{"type":"interests","id":"6003263791114"}]` | `limit` (up to 45), `limit_type`, `locale` |
| **browse**     | —                     | `limit_type`, `locale` |
| **validation** | One of: `targeting_list`, `id_list`, or `name_list` (string/JSON per Meta API docs) | `locale` |

If **search** has no `q`, or **suggestions** / **validation** lack the required targeting input, the API call will fail.

---

### **Output sheets (same document)**

Use the same **Document ID** in Read Input, Google Sheets Trigger, and all four Save nodes. Create (or let n8n create) these sheet names:

| Sheet                 | Branch      | Notes |
|-----------------------|-------------|-------|
| `search_results`      | Search      | endpoint, ad_account_id, query, limit_type, targeting_id, targeting_name, audience_size_*, path, description, type |
| `suggestions_results` | Suggestions | Same columns; `query` holds the `targeting_list` from the request |
| `browse_results`      | Browse      | Same columns; `query` empty |
| `validation_results`  | Validation  | Same columns + **valid** (true/false from API) |

---

### **Setup Instructions**

**1. Credentials**
- Connect **Google Sheets** OAuth2 in: Read Input (Google Sheets), Google Sheets Trigger (if used), and all four Save nodes.
- Connect **Facebook Graph API** credentials in each of the four API nodes (e.g. same “Facebook Graph” credential set).

**2. Spreadsheet & sheets**
- Set the **Document ID** in:
  - **Read Input (Google Sheets)** — Document = your spreadsheet, Sheet = `targeting_requests`.
  - **Google Sheets Trigger** — same Document ID and sheet `targeting_requests` (if you use the trigger).
  - All four **Save …_results** nodes — same Document ID; each node uses its own Sheet name: `search_results`, `suggestions_results`, `browse_results`, `validation_results`.
- Create the input sheet `targeting_requests` with the columns described above and the four result sheets (or allow n8n to create them on first append).

**3. Switch by endpoint**
- Ensure the `endpoint` column in `targeting_requests` contains exactly: `search`, `suggestions`, `browse`, or `validation` (lowercase, as in the Switch conditions).

**4. Triggers**
- Keep **Manual Trigger** for full-sheet runs; use **Google Sheets Trigger** for row-added automation. When using the trigger, run the workflow only when new rows are added so existing rows are not processed again.

**5. Activate**
- Save and activate the workflow. Test with a few rows per endpoint before processing large sheets.

---


The workflow reuses the same patterns as other Meta Detailed Targeting templates: read from Sheets, call Facebook Graph API, Merge by position, Split Out on `data`, then append to Sheets. The difference is the single input sheet with an `endpoint` column, Switch-based routing, and four dedicated branches writing to four sheets in one spreadsheet.

## 🔗 Nodes Used

Google Sheets, Facebook Graph API, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
