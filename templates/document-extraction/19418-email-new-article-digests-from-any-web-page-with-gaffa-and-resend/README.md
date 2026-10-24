# 🔬 Email new article digests from any web page with Gaffa and Resend

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow checks a web page on a schedule, uses Gaffa to extract the listed articles in a browser, filters out URLs it has already seen, and emails you an HTML digest of newly found articles via SMTP.

## How it works
1. Runs every hour on a scheduled trigger.
2. Sets the target page URL and the CSS selector that contains the article list.
3. Uses Gaffa to load the page in a real browser and extract article title, URL, and date/age from the selected element.
4. Splits the extracted article list into individual items.
5. Filters out articles whose URLs were already processed using workflow static data.
6. Builds a single HTML digest and sends it by email via SMTP.

## Setup
1. Install the Gaffa community node (@gaffa-dev/n8n-nodes-gaffa) and add a Gaffa API key credential from gaffa.dev.
2. Add an SMTP email credential and set the From and To email addresses in the email step.
3. Update the page URL and CSS selector values to match the page you want to monitor.
4. Adjust the schedule interval to how often you want the page checked, then activate the workflow.

## 🔗 Nodes Used

Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
