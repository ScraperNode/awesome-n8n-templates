# 🔬 Find and log GDPR request evidence with Groq and Data Tables

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow handles GDPR access or erasure requests by taking an email identifier, searching multiple connected systems (demo n8n Data Tables by default), recording per-system evidence, and generating a Groq-written plain-English summary plus a case register entry with a response deadline.

## How it works
1. Receives a GDPR request either from another n8n workflow input or from a built-in form with a subject email and request type (Access or Erasure).
2. Applies a policy guard (including a minimum identifier length) and refuses to search if the identifier is too short to safely match.
3. Searches three demo systems stored as n8n Data Tables (CRM contacts, support tickets, and a mailing list) while continuing even if a system errors.
4. Compiles per-system results, including whether each system answered, failed, or was not searched, and records an evidence row per system in an n8n Data Table.
5. Calculates the overall verdict (DATA_FOUND, NO_DATA_FOUND, INCOMPLETE, or NOT_SEARCHED) and a due date based on a 30-day response window.
6. Sends the verdict and findings to Groq to produce a constrained one-paragraph summary that cannot override the code-decided outcome.
7. Stores the case in a register Data Table using a hash of the identifier, then either shows a result page for form submissions or returns the case details to the calling workflow.

## Setup
1. Add a Groq API credential and select it in the Groq Chat Model node.
2. Create and select two n8n Data Tables for logging: one for per-system evidence (case_id, searched_at, system_name, status, records_found, detail) and one for the case register (case_id, subject_hash, request_type, received_at, due_at, verdict, systems_answered, systems_failed, records_found, summary, note).
3. Select or create the three demo Data Tables used as source systems (CRM contacts, support tickets, mailing list), or replace those searches with your real systems while ensuring they provide an email field (and optionally a record_ref).
4. If you call this as a sub-workflow, pass subject_identifier and request_type into the workflow inputs and consume the returned case_id, verdict, due_at, and findings.

## Requirements
- A free Groq account and API key. Groq is the AI service that writes the short plain-English summary at the end. The free tier is enough, and the AI is not what decides the result.
- n8n Data Tables, which come built into n8n. You need two: one holds a row for every system searched, the other holds one row per request. No external database or spreadsheet is needed.
- Somewhere to search. It ships pointing at three demo tables so you can try it in about two minutes, then you point each search at a real place you keep customer data, such as your CRM, helpdesk or mailing list.

## Customization
- Add or remove the systems it searches. Each place you keep customer data is one search step. Copy a step, point it at your system, then add its name to the short list inside Collect Findings Per System so it gets its own evidence row.
- Change the reply deadline and the minimum identifier length, both in Set GDPR Policy. The deadline is one month by default, which is what the law allows. Shorten it if your own policy is stricter.
- Decide what happens after the answer. The workflow only reports, so connect the result to an email, a Slack message, a ticket, or a person's queue. Route INCOMPLETE to a human, because that one means the search did not finish.

## Additional info
In plain terms: someone writes in and says "tell me what you hold about me" or "delete everything you have on me". By law you have about a month to answer, and you are expected to have looked everywhere, not just in the first place you thought of. This workflow does the looking and writes down what it found.

You give it an email address. It searches each system you have connected, one at a time, and writes a separate line for each: which system, did it answer, how many records it held, and their reference numbers. That per-system line is the bit an auditor will ask to see. A single "we checked, nothing found" note proves nothing.

You get one of four answers. DATA_FOUND means records were located and here they are. NO_DATA_FOUND means nothing was found, and it is only possible when every system actually replied. INCOMPLETE means one of your systems was down or unreachable. NOT_SEARCHED means the request did not include enough detail to look anything up.

The INCOMPLETE answer is the reason this exists. If a system times out and a tool quietly reports "no data found", you could end up telling a regulator you hold nothing about someone when the truth is you never finished checking. Here that cannot happen: "nothing found" is unreachable unless every system answered. It will also report INCOMPLETE even when it did find records, because a half-finished search is not a complete answer.

Two more things worth knowing. The decision is made by ordinary code counting results, not by the AI; the AI only writes the summary paragraph, so wording inside your own records cannot talk it into a different answer. And the record it keeps stores a scrambled version of the email rather than the address itself, so the tool does not build its own pile of personal data.

What it will not do: it never deletes anything, and it does not tell you whether a request is valid or what the law requires in your case. It hands you the list and a deadline; a person decides the rest.

Honest limits. It matches on one exact email address, so someone recorded under a second address or a misspelling will not be found. Each search reads its table and filters in code, which is fine for normal internal volumes but should be pushed into the query if you point it at something very large. And the deadline is recorded but nothing chases it; there is no reminder built in.

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, Structured Output Parser, n8n Form Trigger, Groq Chat Model, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
