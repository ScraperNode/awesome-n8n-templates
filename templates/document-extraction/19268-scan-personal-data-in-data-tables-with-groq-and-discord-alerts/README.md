# 🔬 Scan personal data in data tables with Groq and Discord alerts

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow inventories personal data across n8n Data Tables by sampling rows, classifying columns with regex patterns, and using Groq to judge ambiguous columns from names and masked value shapes, then stores results in Data Tables and alerts a Discord channel when special-category data is found.

## How it works
1. Runs manually on demand or every Monday at 07:00.
2. Loads scan settings and detection patterns from the n8n Data Table pattern store, then lists all Data Tables on the instance and skips excluded table names.
3. For each remaining table, samples a few rows from n8n Data Tables and classifies each column using name and value regexes while masking sampled values into non-sensitive “shapes.”
4. Sends only column names and masked shapes for unclassified candidates to Groq, which suggests table purposes and any additional personal-data columns.
5. Merges Groq’s suggestions back into the results (only adding valid columns) and records a run summary in the pdi_runs Data Table.
6. Upserts one inventory row per column into the pdi_inventory Data Table with category, sensitivity, confidence, source, evidence, and sample shape.
7. Sends a Discord webhook alert if any special-category columns (health, biometric, belief, criminal) are detected.

## Setup
1. Add a Groq API credential for the Groq chat model node.
2. Add a Discord webhook credential and set it to the channel where you want special-category alerts posted.
3. Run the “Set Up Tables” manual trigger once to create pdi_patterns, pdi_inventory, and pdi_runs and load the initial detection patterns.
4. Review and adjust the scan policy values (rows to sample, table-name exclusions, and minimum confidence) before activating the weekly schedule.

## Requirements
- A free Groq API key for the one model call per scan. The prompt carries column names and masked shapes only, never a value, so the free tier covers dozens of tables.
- A Discord webhook for the special-category alert. Swap the node for Slack or Gmail if you prefer; every column is written to the tables first either way.
- n8n 2.38 or newer. Data Tables come built into n8n and the workflow creates its own three tables and loads fifteen detection patterns when you run "Set Up Tables (run once)". Listing every table and creating tables both need the Data table "Table" operations.
- Someone with admin access. The scan reads every data table on the instance except its own, so it should be run by a person who is allowed to see all of them.

## Customization
- Add rows to pdi_patterns for identifiers in your own language or business: a name regex, an optional value regex, a category, a sensitivity (personal, special or possible) and a note. The fifteen shipped patterns are English.
- Set Scan Policy holds the knobs: sample_rows per table, exclude_name_patterns for tables to skip, and min_confidence. Name-only matches score 70, value matches 85, both 95, and a contact found inside free text 80.
- The model only ever adds columns, and only ones that really exist with a category from the known eight, so a weaker model degrades to nothing added rather than to a wrong inventory. Any Groq model that returns JSON works.
- Two constants at the top of Prepare The Judge Input cap how much the model is shown: 12 tables and 8 unclassified columns each. Raise them if your model copes; a bigger prompt buys nothing once it stops answering cleanly.
- The Monday schedule: change the day or the hour, or delete it and run the scan by hand.

## Additional info
"Where do we hold personal data?" is the first question in a data subject request, a breach, a DPIA and an Article 30 record, and the honest answer in most teams is "in a few tables, we think". If those tables are n8n Data Tables, this answers from the tables themselves rather than from memory.
It lists every table, samples a few rows from each, and classifies every column twice: by its name against a pattern table you own, and by the sampled values against patterns for emails, phones, IBANs and IP addresses. Free-text columns are checked for contacts hiding inside notes.
Values never leave the Code node. They are masked before anything else sees them, so what is stored and what is sent to the model is a shape: j***@***.com, #####, YYYY-MM-DD. That is the point of the design, and it is why the model call is safe to make at all.
The single model call at the end sees column names and those shapes, guesses what each table is for, and may add a column the patterns missed. The workflow then checks the column really exists and the category is one of the eight known ones. The model can add, never remove, so a bad answer costs you a spurious row and never a missing one.
You get one row per column with the category, the sensitivity, a confidence, the source of the verdict (name, value, both, or the model) and the evidence, plus one row per run with the counts. Special-category columns, meaning health, biometric, belief or criminal, are posted to Discord.
Limits, stated plainly. A column with an opaque name and hashed or empty values is not found, which is why every run records how many columns were scanned: a short inventory should never be mistaken for a clean one. Name matching is deliberately over-eager, so a column called fingerprint holding a hash is reported as biometric for a person to dismiss. Value matching is deliberately conservative: a long unbroken token is treated as an id, never as a phone number, so a phone stored as a bare digit string is only caught by its column name. The shipped patterns are English. Sampling a few rows is a choice, and a sparse column may need a larger sample_rows.
It reads every table it can see and stores column shapes in a table on the same instance, so give it to an admin, not to everyone. This is an inventory aid, not a compliance sign-off.

## 🔗 Nodes Used

Discord, Schedule Trigger, Basic LLM Chain, Structured Output Parser, Groq Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
