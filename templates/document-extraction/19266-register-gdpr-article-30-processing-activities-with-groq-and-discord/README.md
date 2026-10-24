# 🔬 Register GDPR Article 30 processing activities with Groq and Discord

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow uses an n8n Form to capture GDPR Article 30 processing activity details, checks completeness against an editable checklist in n8n Data Tables, uses Groq to flag additional quoted issues, stores the register and findings in Data Tables, and posts non-complete items plus a weekly digest to Discord.

## How it works
1. Runs a one-time manual setup to create three n8n Data Tables (ropa_checklist, ropa_register, ropa_findings) and upsert a GDPR Article 30 checklist.
2. Receives a new processing-activity submission from an n8n Form.
3. Loads the checklist from the ropa_checklist table and applies rule-based validation to compute a completeness score, status (COMPLETE/REVIEW/INCOMPLETE), and a human-readable report.
4. Sends the record and checklist to a Groq chat model to propose additional review points that must include verbatim quotes from the submission, then validates and merges accepted points into the final status.
5. Inserts the submitted activity and its report into the ropa_register table and writes each rule/model finding into the ropa_findings table.
6. If the status is not COMPLETE, posts the report to Discord and shows a “points to fix” completion page; otherwise, shows a “recorded” completion page.
7. Runs every Monday morning to summarise the register from ropa_register and posts a weekly digest to Discord when there are open items or when configured to post even if quiet.

## Setup
1. Add a Groq API credential for the Groq chat model node.
2. Add a Discord webhook credential and choose the target channel/server for both Discord message steps.
3. Run the “Set Up Tables (run once)” path once to create the ropa_checklist, ropa_register, and ropa_findings Data Tables and load the initial checklist.
4. Open the n8n Form trigger, copy its public URL, and share it with the teams who will register processing activities.
5. Optionally edit the checklist rows in ropa_checklist and the vague-phrase policies in the workflow to match your organisation’s Article 30 guidance and review standards.

## Requirements
- A free Groq API key for the reviewer model. The free tier is enough; checking one record sits far below its 8,000 tokens per minute limit.
- A Discord webhook for the alerts and the Monday digest. Swap both Discord nodes for Slack or Gmail if you prefer; the rows are written to the tables first either way, so nothing is lost if you remove them.
- n8n 2.38 or newer. Data Tables come built into n8n and the workflow creates its own three tables and loads the twelve checklist rows when you run "Set Up Tables (run once)". There is nothing to install and no outside database.
- Somebody who knows the processing activity. No legal training is needed to fill the form; it asks plain questions about what the activity does with people's data.

## Customization
- The checklist lives in ropa_checklist. Edit the labels, the article references, the required flag, the minimum answer length and the guidance. Add a row and a matching form field for anything else your DPO wants in the record.
- Set Register Policy holds the phrases that make a retention period or a purpose count as vague. Add your own, separated by the | character, in whatever language your team writes in.
- Set Digest Policy: how many days the Monday digest looks back, and whether it still posts in a quiet week.
- The reviewer model in the Groq node. Any model that returns JSON works. It can only add points and only with a verbatim quote, so a weaker model degrades to "nothing to add" rather than to a wrong status.
- The completeness score counts required items only. If you mark more of the checklist as required, existing records will score lower the next time they are registered, which is usually what you want.

## Additional info
Article 30 asks every controller to keep a record of its processing activities, and that record is the first thing a supervisory authority asks for. In most organisations it is a spreadsheet nobody has checked since it was written. This makes each entry earn its place.
The checklist is the list from Article 30(1): purposes, categories of data subjects and data, recipients, transfers with their safeguards, retention and security measures, plus the fields a usable register needs, such as the owner, the controller role and the legal basis. Each row says whether it is required and how short an answer may be, and you can edit all of it.
The rules check the record first, and they are string checks, not opinion: a missing required item, a transfer outside the EEA with no safeguard named, special categories with no Article 9 condition anywhere in the record, no legal basis chosen, a retention that is not a period, a purpose that is generic. Hard misses make the record INCOMPLETE, softer points make it REVIEW, and a clean record is COMPLETE. An empty checklist table gives INCOMPLETE rather than a quiet pass, because a tool with no reference data should refuse to answer instead of answering no.
Only then does a Groq model read the record. It may raise a point, but only with a verbatim quote from the field it criticises, and the workflow checks the quote is really there. A point without a real quote is discarded and the report says it was discarded. The model can raise COMPLETE to REVIEW; it can never clear a rule or fill in a missing item, so text pasted into the form cannot talk the rules out of something they already found.
Every registration is stored with a completeness score and the full report, and every point is stored with its source, so an auditor can see what the rules found and what the model added. Anything not COMPLETE is posted to Discord and shown to the person who filled in the form, with the points to fix. A Monday digest counts the whole register by status and names the incomplete activities; a quiet week is reported as quiet, not as done.
Limits, stated plainly. The checks are string checks, not legal judgement. The Article 9 condition test looks for the usual phrases and is satisfied by writing them, whether or not you mean them. The vague-phrase lists are English out of the box. The reviewer is a model and misses things. Processors keep a different record under Article 30(2), and this form is written for controller activities. None of this is legal advice.

## 🔗 Nodes Used

Discord, Schedule Trigger, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
