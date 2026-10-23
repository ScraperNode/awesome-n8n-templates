# 🔬 Build CMS import rows and collision-safe redirects from a legacy CSV upload

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow uses an n8n Form to upload a legacy content CSV, normalizes source URLs and slugs, generates collision-safe destination slugs, and outputs CMS import rows plus a 301 redirect map with diagnostics for collisions and rejected records.

## How it works
1. Receives a CSV file upload through an n8n Form Trigger.
2. Extracts the CSV rows and applies configurable migration rules such as redirect status code and slug collision suffix behavior.
3. Normalizes each record by cleaning the source URL format and trimming titles and supplied slugs.
4. Generates a destination slug for each record by keeping valid supplied slugs or slugifying titles, then resolves duplicate slugs deterministically with numeric suffixes and rejects rows missing required identity fields.
5. Builds two output collections: CMS content import rows (title, slug, destination path) and a redirect map (from, to, status code), plus a summary, collision list, and rejected list.
6. Returns the result flagged as either ready (no collisions or rejects) or review_required (diagnostics present) as the final form response.

## Setup
1. Prepare a CSV export that includes at least sourceUrl and either slug or title for each row.
2. Update the migration rule defaults (redirectStatusCode, destinationPrefix, and collision suffix policy) to match your CMS and redirect system requirements.
3. Run the form, upload a representative CSV, and review any collisions and rejected rows before importing the generated contentRows and redirects into your target systems.

## 🔗 Nodes Used

n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
