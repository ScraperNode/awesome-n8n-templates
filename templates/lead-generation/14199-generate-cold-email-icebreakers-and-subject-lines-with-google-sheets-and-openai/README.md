# 🎣 Generate cold email icebreakers and subject lines with Google Sheets and OpenAI

> ⚡ **73 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Email List Personalization - Icebreaker & Subject Line Generator

Reads an enriched lead list from Google Sheets, generates a personalized icebreaker + subject line for each lead using OpenAI, and writes results back to the same sheet -- ready for your email sequencer.

---

### Who is this for?

SDRs, founders, and agency owners running cold outbound who want personalized first lines without spending 2-3 minutes per lead on manual research. Sits between your Apollo / Sales Nav export and Instantly / Smartlead / Lemlist.

### What problem does this solve?

Generic cold emails get ignored. Writing unique icebreakers for 200+ leads/day is not realistic by hand. This workflow does it at ~$0.002/lead with GPT-4.1-mini -- spartan, human-sounding copy that references real prospect details.

### How it works

1. **Read Lead Sheets** from Google Sheets (enriched with LinkedIn data)
2. **Filter Empty Rows** rows where `icebreakers` or `subjectLine` is empty (safe to re-run)
3. **Limit To 200 Leads** batch to 200 leads per run
4. **Process One-By-One** with an IF safety check before each API call
5. **Genrates Icebreaker** a JSON response with few-shot examples locking the tone:
   - `icebreaker` -- spartan one-liner referencing their company/role/industry
   - `subjectLine` -- personalized with name + relevant hook
   - `shortenedCompanyName` -- strips "Agency", "Inc.", "LLC" for natural copy
   - `verdict` -- `true` for real people, `false` for company pages (filter before sending)
6. **Write Result To Sheet** to the same row via `row_number` match key
7. **Rate Limit Delay** between calls to avoid throttling

### Setup

1. **Google Sheets** -- Connect OAuth2 in both sheet nodes. Point to your lead spreadsheet.
2. **OpenAI** -- Connect API key. Default: GPT-4.1-mini. Swap to GPT-4o for premium campaigns.
3. **Sheet columns needed:** `first_name`, `last_name`, `email`, `job_title`, `company`, `linkedin_industry`, `location`, `summary`, `linkedin_description`, `linkedin_specialities`, `linkedin_company_employee_count`, `linkedin_founded_year`, `icebreakers`, `subjectLine`, `row_number`
4. **Customize the prompt** -- Swap the few-shot examples in the OpenAI node to match your voice and offer.
5. **Test first** -- Set Limit to 5, run manually, review output, then scale.

### Customization tips

- **Trigger** -- Replace Manual Trigger with Schedule or Google Drive Trigger for automation
- **Batch size** -- Adjust the Limit node to match your daily send volume
- **Model** -- GPT-4.1-mini ($0.002/lead) vs GPT-4o ($0.01/lead)

---

**Built by Devon Toh**

## 🔗 Nodes Used

Google Sheets, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
