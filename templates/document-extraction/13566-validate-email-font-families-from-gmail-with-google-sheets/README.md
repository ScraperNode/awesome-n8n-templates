# 🔬 Validate email font families from Gmail with Google Sheets

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works

- Load Expected Content + Expected Font Family from Google Sheets.
- Parse the email HTML to locate the matching content block.
- Use a JavaScript/HTML extraction node to read the actual font-family applied to that content.
- Merge expected and actual values.
Compare Expected Font vs Actual Font to produce a Result (Match / Mismatch).
- Log Actual Font + Result back into Google Sheets as part of the QA output.

## Setup steps
- **Google Sheets**
Create a sheet with columns:SectionId, Content, ExpectedFontFamily, ActualFontFamily, Result. Populate SectionId + ExpectedContent for each content block you want to verify.
- **Email HTML Source**
Use a Gmail node to pull message HTML or use HTTP Request/Read Binary File + HTML/JS to supply the HTML.
- **Extraction Logic (JS/HTML)**
Use HTML parsing or a JS Function node to locate the HTML element containing the content string. From the matched element, extract the computed font-family. Clean, normalize, and standardize font names for accurate comparison. Return the extracted value as ActualFontFamily.
- **Merge & Compare**
Merge the Google Sheets expected records with the extracted actual font data using SectionId as the key. In the Code (JS) node, compare ExpectedFontFamily vs ActualFontFamily and set Result to Match if equal (or meets your rule), otherwise Mismatch.
- **Write back**
Use Google Sheets to update ActualFontFamily and Result for each row.
### Requirements
- n8n with access to: Google Sheets, Code/HTML, and (optionally) Gmail nodes.
- A Google Sheets document with at least these columns:

SectionId (or Key)
Content
ExpectedFontFamily
ActualFontFamily (output)
Result (output: Match / Mismatch)

## 🔗 Nodes Used

Google Sheets, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
