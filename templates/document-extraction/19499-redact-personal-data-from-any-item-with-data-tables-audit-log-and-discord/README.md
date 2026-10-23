# 🔬 Redact personal data from any item with data tables, audit log and Discord

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This sub-workflow redacts common personal data from any incoming item using a policy stored in n8n Data Tables, returns a redacted payload plus a detection report to the calling workflow, and writes an audit entry to a redaction_log table (with an optional Discord self-test notification).

## How it works
1. Triggers when another n8n workflow calls it via an Execute Workflow Trigger and passes in an item (optionally with `payload` and `requested_by`).
2. Reads the current redaction settings from the `redaction_policy` n8n Data Table and attaches them to each incoming item.
3. Scans all strings in the payload and redacts detected email addresses, IBANs (mod-97 validated), payment cards (Luhn validated), phone numbers, and IPv4 addresses using the configured mode (mask, pseudonymise, or remove).
4. Collects a report of how many values were redacted per detector and lists any “unclassified” candidates (like long digit runs or possible names) without changing them.
5. Inserts an audit record into the `redaction_log` n8n Data Table with counts, mode, requester, and payload size (but never the original values).
6. Returns the redacted payload and the redaction report back to the calling workflow.

## Setup
1. Run the “Set Up And Self Test (run once)” path to create the `redaction_policy` and `redaction_log` n8n Data Tables and seed the default policy.
2. If you plan to use pseudonymise mode, set a strong `pseudonym_key` value in the `redaction_policy` table (the workflow refuses to pseudonymise while it is empty).
3. (Optional) Add a Discord Webhook credential to post the self-test summary, or disable/remove the Discord step if you don’t want notifications.
4. From your other workflows, call this sub-workflow and pass either `{ payload, requested_by }` or send the record directly as the item JSON.

## Requirements
- An n8n instance running 2.38 or newer, because the workflow uses the built-in Data Table node. It creates its own two tables when you run Set Up And Self Test once. There is no outside database to provision.
- No API key and no model credential. Detection is regular expressions plus two checksums, Luhn for cards and mod-97 for IBANs, so nothing leaves your instance and there is nothing to pay for per call.
- A Discord webhook, used once, to post the result of the self test. Swap that one node for Slack, Gmail or nothing at all. It does not sit on the path any caller uses.
- A calling workflow. This is a sub-workflow, not something that runs on its own. Add an Execute Sub-workflow node anywhere and send it an item shaped as payload plus requested_by.

## Customization
- Set The Default Policy is where you change things before the first run: the mode, the pseudonym key, one on or off switch per detector, and whether unclassified values are reported. Running the setup writes those eight fields into the redaction_policy table, and from then on the table is the live configuration. The redactor re-reads it on every call, so a change takes effect for every caller immediately without editing or re-saving the workflow.
- Three modes. Mask keeps the shape so a person can still recognise the field, ada@example.org becomes a***@example.org. Pseudonymise replaces the value with a keyed HMAC, so the same address always gives the same token and two installs with different keys cannot be joined. Remove deletes it outright.
- Pseudonymise refuses to run while pseudonym_key is empty, and that is deliberate. An unkeyed hash of an email address can be reversed with a word list, so falling back to one quietly would be worse than refusing. Set any long random string. Changing it later changes every token and nothing links the old ones to the new ones.
- Turn a detector off by setting detect_email, detect_iban, detect_card, detect_phone or detect_ip to no. Adding a detector means adding a validator too, not just a pattern: the whole reason an order number survives is that a pattern alone never decides.
- report_unclassified controls whether the answer lists strings that look like they could identify somebody but matched no detector. Leave it on. It is the only thing standing between a quiet result and a false sense of safety.
- The audit log records counts and detector names, never values. payload_chars is the size of the item once serialised, not a count of fields, so a row says how much text went through without saying what was in it. If you need more context per call, add columns to redaction_log rather than widening what the redactor returns.

## Additional info
This is a tool other workflows call, not a workflow that runs on its own, and it is deliberately model-free. A redactor that sent personal data to a model in order to decide what counts as personal data would be adding a confident opinion about text it cannot verify, at the exact moment you least want one. Everything here either matches a validated pattern or it does not.

The part worth reading twice is what it does when it cannot do its job. An empty policy table refuses, and says so: an empty policy is not evidence that there is nothing to redact. Pseudonymise with no key refuses, and says why. In both cases the item comes back untouched with values_redacted at zero, the refusal is written to the audit log with its reason, and nothing is half-redacted. That was tested by deleting all eight policy rows and by running pseudonymise with the shipped empty key.

Validation is the difference between this and a regular expression. 4111 1111 1111 1111 is redacted as a card. 4111111111111112 is one digit off, fails Luhn, and is left in place, because it is far more likely to be an order number. DE89370400440532013000 is redacted as an IBAN and DE89370400440532013001 fails mod-97 and survives. A 21 digit reference number is past the E.164 limit of 15 and is not a phone number. Every one of those is a look-alike probe in the shipped self test, and they matter more than the positive cases: a detector that fires on everything turns every invoice number into a redacted card.

What it cannot do is more important than what it can. Personal names are not detected, because no pattern distinguishes a person from a place or a product, and pretending otherwise would be the worst kind of false confidence in a tool like this. Instead, anything that looked like it might identify somebody is returned as an unclassified candidate, and every answer carries the sentence that a result with nothing redacted is not evidence that the item holds no personal data. Names in a non-Latin script are missed entirely.

The audit log holds counts and detector names, never the values. A redactor that wrote the originals into a log table would have redacted nothing, just moved the problem, so redaction_log records when, who asked, which mode, payload_chars for the size of the item once serialised, how many values were replaced, how many were unclassified, the per-detector counts and the reason. That is enough to answer how much personal data is flowing through a pipeline without storing any of it.

Run Set Up And Self Test once and it does three things: creates the two tables with typed columns, loads the default policy, and pushes eight known probes through the same detector every caller uses, then posts the result. Five of the probes must be redacted and three must not. If someone later loosens a pattern, the self test says so rather than the change being noticed in production.

Known limits, stated plainly. Personal names, postal addresses and dates of birth are not detected. Non-Latin scripts are missed. Pseudonym tokens are stable only while the key is unchanged, and there is no rotation path. Nothing has been tested above a few hundred characters per item, and two callers writing the audit log at the same instant was never tried. The detectors are ordered so the validated ones consume their digits before the loosest one runs, which is a real dependency: adding a detector at the wrong position in that list could change what the others see.

## 🔗 Nodes Used

Discord, Execute Workflow Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
