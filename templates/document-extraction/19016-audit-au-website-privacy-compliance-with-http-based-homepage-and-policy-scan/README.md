# 🔬 Audit AU website privacy compliance with HTTP-based homepage and policy scan

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This on-demand workflow audits a website against African Union data protection signals by fetching the homepage and privacy policy with HTTP requests, detecting common trackers and cookie consent indicators, scoring compliance, and rendering an HTML audit report.

## How it works
1. Runs manually when you click Test workflow.
2. Uses the provided website URL to fetch the homepage HTML via an HTTP request.
3. Scans the homepage HTML to detect common tracking scripts (Google Tag Manager, Meta Pixel, Hotjar), cookie-consent cues, and a link to a privacy policy, then generates candidate privacy policy URLs.
4. Fetches each candidate privacy policy page and selects the first page that looks like a real privacy policy based on text heuristics.
5. Calculates a site compliance score and gaps list based on the presence of a privacy policy, cookie consent, and trackers loading without consent.
6. If a readable policy page is found, performs a keyword-based quality assessment against AU Convention-style criteria (controller details, purposes, consent, rights, transfers, security/retention, transparency).
7. Renders the results into a formatted HTML audit report showing the scores, gaps, and policy assessment details.

## Setup
1. There are no credentials required because this workflow uses HTTP requests. Open the workflow and enter the website url.
2. Enter the target site in the **website_url** field (including https://) to execute the workflow.
3. Run the workflow and view the final HTML output (Audit Report) in the rendered report to read the compliance grading score.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
