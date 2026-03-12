# 📊 Extract Title tag and Meta description from url for SEO analysis with Airtable

> ⚡ **3,865 views** · 📊 [Market Research & Insights](../)

## Description

Extract Title tag and meta description from url for SEO analysis.

## How it works
The workflows takes records from Airtable, get the url in the records and extract from the related webpage the title tag (&lt;title&gt;) and meta description (&lt;meta name="description" content="Some content"&gt;). 

If title tag and/or meta description tag isn't available on the webpage, the result will be empty.

## Setup
1. Set a Base in Airtable with a table with the following structure:
  `url` (field type url), `title tag` (field type text string), `meta desc` (field type text field)

Minimum suggested table structure is:

**url** (https://example.com), **title** (Title example), *meta desc** (This is the meta description of the example page)

2. Connect Airtable to both Airtable nodes in the template and, with the following formula, get all the records that miss `title tag` and `meta desc`.
Formula: 
```
AND(url != "", {title tag} = "", {meta desc} = "")
```

3. Insert the url to be analyzed in the table in the field `url` and let the workflow do the rest. 


## Extra

* You can also calculate the length for title tag and meta desc using formula field inside Airtable. This is the formula:
  `LEN({title tag})` or `LEN({meta desc})`
* You can automate the process calling a Webhook from Airtable. For this, you need an Airtable paid plan.

## 🔗 Nodes Used

Airtable, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
