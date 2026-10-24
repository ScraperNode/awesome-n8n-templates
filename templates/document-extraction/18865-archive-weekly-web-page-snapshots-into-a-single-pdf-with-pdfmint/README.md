# 🔬 Archive weekly web page snapshots into a single PDF with PDFMint

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every Monday at 07:00 UTC to render a predefined list of URLs to PDFs using PDFMint, then merges the successful renders into a single dated archive PDF and outputs a short summary of what was archived.

## How it works
1. Runs every Monday at 07:00 on a schedule trigger.
2. Loads the list of web page URLs to archive and stops if the list is empty.
3. Checks PDFMint usage to confirm enough credits remain for one PDF per page plus one merge operation.
4. Builds a week-based archive name and file name, then renders each URL to an individual PDF with PDFMint.
5. Drops any pages that failed to render so a broken URL does not fail the whole run.
6. If two or more PDFs survived, merges them into a single dated PDF archive with PDFMint; otherwise keeps the single rendered PDF as the archive.
7. Outputs a summary string describing how many pages were archived and the resulting file name.

## Setup
1. Self-host n8n and install/configure the PDFMint community node, then add a PDFMint API key credential.
2. Replace the URLs array and (optionally) the base archive name in the “Set the pages to archive” step.
3. Adjust the schedule rule if you want the archive to run on a different day or time.
4. Ensure your PDFMint plan has enough monthly credits for your page count (one credit per rendered page plus one credit for merging).

## Additional info
Disclosure: I build and run PDFMint, the service this template calls. This is a self-submission, not a third-party recommendation.

Executed before submitting, in n8n 2.36.7 on Node 24 with n8n-nodes-pdfmint@0.4.1 installed from the public npm registry, against the live service. Four runs: three reachable pages produced a 3,737,422-byte, 79-page merged PDF ("Archived 3 of 3"); three pages with one 404 dropped the dead page and merged the rest into 1,544,647 bytes / 70 pages ("Archived 2 of 3"); two pages with one 404 left a single survivor, where the merge is correctly skipped because PDFMint needs two PDFs, and the summary says so; and a run with credits_remaining=0 stopped at the quota check without spending anything. That single-survivor branch exists because the earlier version reported "Archived 1 of 2" when nothing had in fact been archived.

## 🔗 Nodes Used

Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
