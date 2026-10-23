# 📊 Generate .com brand names with OpenAI and API Ninjas into Google Sheets

> ⚡ **84 views** · 📊 [Market Research & Insights](../)

## Description

Use OpenAI to generate short, memorable brand names for your app and automatically check .com availability — results go straight into Google Sheets.

**Categories:** AI, Marketing

---

## Description

This n8n workflow helps you find an available .com domain for your product. It uses OpenAI to generate batches of creative, on-brand names (e.g. for a digital wardrobe / closet app, inspired by names like Whering, Acloset, Stylebook), then checks each suggestion via API Ninjas. Available domains are appended to a sheet, taken ones to a separate sheet. On each run it reads both sheets so it never suggests or re-checks the same names. The loop runs until you have at least **15 available domains** or hit **10 iterations** (20 names per iteration).

---

## Good to know

- **API Ninjas** free tier supports **.com only**. Under heavy load you may see occasional 502 errors; the workflow uses Continue On Fail and only processes successful responses. Add a **Wait** node (200–500 ms) before "Check domain (API Ninjas)" if needed.
- **OpenAI** usage depends on your plan (tokens and rate limits). Each iteration sends one request for 20 names.
- State is passed through the pipeline so that newly checked domains are excluded in the next iteration — no duplicates in suggestions or in the sheets.

---

## How it works

1. **Start:** Manual Trigger runs **Read sheet available** and **Read sheet closed** (in sequence). **Build initial state** builds `alreadyChecked` from both sheets and sets `totalFound` from the available count.

2. **Prepare prompt** builds a system and user prompt with your app context and the current `alreadyChecked` list, then **Generate names (OpenAI)** returns 20 new names. **Normalize to domains** cleans and turns them into `.com` domains.

3. **Check domain (API Ninjas)** checks each name. **Merge name and API result** combines normalized names with API results (only items with a valid `available` field).

4. **Filter available only** and **Closed only** split results; **Append to sheet available** and **Append to sheet closed** write to Google Sheets. **State for next run** updates `totalFound`, appends this round’s domains to `alreadyChecked`, and increments the iteration. **Exit or loop** stops when `totalFound &gt;= 15` or `iteration &gt; 10`, otherwise loops back to **Prepare prompt** with the updated state.

---

## How to use

1. Use the **Manual Trigger** to run the workflow.
2. Configure credentials: **OpenAI** (e.g. OpenAI Vision), **Api ninjas** (Header Auth, `X-Api-Key` from [api-ninjas.com](https://api-ninjas.com)), and **Google Sheets account**.
3. In one Google spreadsheet create two sheets named **available** and **closed**, each with header row: `domain`, `name`. Set this document and sheet names in the four Google Sheets nodes (Read sheet available, Read sheet closed, Append to sheet available, Append to sheet closed).
4. If you see repeated 502s, add a **Wait** node (200–500 ms) before **Check domain (API Ninjas)** or enable **Retry On Fail** on that node.

---

## Requirements

- n8n (2.2.3+ recommended)
- **OpenAI** API key (for name generation)
- **API Ninjas** API key (for domain availability) or other API
- **Google Sheets** (one document with two sheets: **available**, **closed**; columns: `domain`, `name`)

---

## Customising this workflow

- **Different niche:** Edit the **Prepare prompt** node to change the app context and style (e.g. another app category, different reference names). The prompt enforces short names (under 14 characters), letters only, and excludes already-checked domains.
- **Target count and iterations:** In **Exit or loop**, change the conditions (e.g. `totalFound &gt; 15` to another number, or `iteration = 10` to allow more rounds).
- **Other TLDs:** The free API Ninjas tier is .com only; with a paid plan you could extend the workflow to check other zones.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
