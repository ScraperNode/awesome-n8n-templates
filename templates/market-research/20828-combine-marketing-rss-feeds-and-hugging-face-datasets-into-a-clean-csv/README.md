# 📊 Combine marketing RSS feeds and Hugging Face datasets into a clean CSV

> ⚡ **9 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every three days to collect marketing data from two public Hugging Face datasets and four RSS feeds, standardizes and quality-checks the combined records, and outputs a cleaned CSV plus a JSON quality report.

## How it works
1. Runs every three days on a schedule and loads the Hugging Face dataset names, row window, and RSS feed URLs from a configuration step.
2. Fetches rows from two Hugging Face datasets (ad copy and campaign performance) and maps them into a shared schema while recording per-source availability.
3. Reads the latest items from four marketing RSS feeds, strips HTML from titles and summaries, and maps each article into the same shared schema while tolerating individual feed failures.
4. Merges all sources, normalizes dates to YYYY-MM-DD, removes duplicates, drops records missing essential fields, and flags incomplete records with quality reasons.
5. Generates a CSV file containing the cleaned records and a JSON file summarizing per-source health, counts of removed records, and completeness metrics.

## Setup
1. Import the workflow (no credentials are required because it uses public Hugging Face datasets and public RSS URLs).
2. Optionally update the dataset names, row offset/length, and RSS feed URLs in the configuration step.
3. Execute the workflow once and download the generated files from the CSV and JSON file output steps, then activate the workflow to refresh every three days.

## 🔗 Nodes Used

HTTP Request, RSS Read, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
