# 🔬 Watch vendor sub-processor pages for changes with Groq, Discord and data tables

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors vendors’ public sub-processor list pages on a schedule or on demand, compares the current page contents against a stored baseline in n8n Data Tables, uses Groq to annotate newly added lines, and posts change alerts or quiet summaries to Discord.

## How it works
1. Runs on demand or every Monday at 08:00 to check all enabled vendors stored in n8n Data Tables.
2. Loads each vendor’s sub-processor list URL and the existing register of previously seen entry lines.
3. Fetches each vendor page over HTTP, strips HTML to a capped list of unique text lines, and tags lines that mention configured country keywords.
4. Compares the current lines to the stored register to detect added and removed lines, flags unreachable pages and suspiciously shrunken pages, and raises critical findings when a newly added line mentions a non-approved country.
5. Sends only the newly added lines to Groq to extract the company name and country strictly from the text, then merges the annotations back into the findings.
6. Records the run summary, all findings, and the updated per-vendor register in n8n Data Tables.
7. Posts a Discord webhook message when the verdict is not UNCHANGED, otherwise posts a short “quiet” summary.

## Setup
1. Add Groq API credentials for the Groq chat model node.
2. Create a Discord webhook and add the Discord Webhook credential used by both Discord message nodes.
3. Run the “Set Up Tables (run once)” path to create the sub_vendors, sub_register, sub_findings, and sub_runs n8n Data Tables.
4. Use the “Add a vendor to watch” form to add vendors, their public sub-processor list URLs, and approved countries, then enable/fix any vendors saved as disabled due to invalid URLs.
5. Review and adjust the watch policy values (country keywords, entry cap, and shrink ratio) to match your compliance requirements.

## Requirements
- A free Groq API key for the one model call per run. It only reads the lines that appeared and names the company and country from the line itself, so the free tier is ample.
- A Discord webhook for the alert and the quiet summary. Swap both Discord nodes for Slack or Gmail if you prefer; every finding is written to the tables first either way.
- n8n 2.38 or newer. Data Tables come built into n8n and the workflow creates its own four tables when you run "Set Up Tables (run once)". No outside database.
- Vendors that publish a sub-processor page you can reach. Some vendors block automated requests; those are reported as unreachable rather than skipped quietly, and you will see that on the first check.

## Customization
- Set Watch Policy holds the country word list, the shrink ratio and the entry cap. Add the countries you care about, in the wording your vendors actually use.
- The shrink ratio, 0.5 by default, decides when a page looks broken rather than changed. A page returning under half the entries the register holds is treated as suspect and its removals are held back.
- approved_countries is per vendor and set on the form, falling back to the policy default when you leave it blank.
- The schedule is weekly on Monday. Change the day or hour, or delete it and run Check Now by hand.
- The model in the Groq node. Any model that returns JSON works; it can only describe an added line, so a weaker model degrades to a plainer report and never to a wrong verdict.

## Additional info
Your vendors pass your data to their own suppliers, and under Article 28 you are supposed to know who those sub-processors are and be told when the list changes. Vendors publish the list on a public page and are supposed to notify you. In practice nobody checks, and the page changes quietly.

This checks the pages. A form takes the vendor, its public list page and the countries you have approved for it. Check Now or the Monday schedule fetches each page, strips the markup and reduces it to a set of entry lines. The comparison is a line by line set difference against what was there last time: what appeared, what disappeared. Nothing else is parsed, which is deliberate, because a vendor reformatting their table breaks a parser but not a set difference.

Two failures are treated as failures rather than as good news, and this is the part worth reading twice. A page that cannot be read is UNREACHABLE: the register is left untouched and the run is INCOMPLETE, because an outage must never come out as no changes. A page that fetches but returns far fewer entries than the register holds is SUSPECT and its removals are held back, because a login wall or a redesign must not quietly empty your register. When this was tested against a real vendor page holding 204 entries, capping the read at 100 produced exactly that: suspect, removals withheld, all 204 rows still in place.

Only then does a model get involved, and only to describe. It reads the lines that appeared and names the company and the country from the line itself. A country that is not written in the line is discarded, so it cannot invent a data transfer. It never creates, removes or re-grades a finding, and if it fails to answer the verdict from the rules stands.

Runs go to sub_runs, every change to sub_findings, and every entry to sub_register with first and last seen. A new line naming a country you have not approved is the one thing that raises ALERT. Anything not quiet goes to Discord; a quiet run posts a short summary instead, so silence is never ambiguous.

Known limits, stated plainly. The first check on a new vendor records a baseline and reports no changes, which is correct but easy to misread as a clean bill of health. Country detection matches words in the same line, so a page that puts the country in a separate column will rarely trigger it. Some vendors block automated requests entirely. And a vendor reformatting their page will produce a noisy run before the register settles. This is a change detector for public pages, not a compliance sign-off.

## 🔗 Nodes Used

HTTP Request, Discord, Schedule Trigger, Basic LLM Chain, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
