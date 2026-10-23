# 🎫 Log GDPR Article 22 decisions and route review requests with Groq and Discord

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow logs automated decisions via an n8n form, checks them against GDPR Article 22 criteria using Groq and configurable effect rules stored in n8n Data Tables, alerts your team in Discord when safeguards are needed, and tracks/monitors human review requests with weekly reminders.

## How it works
1. Manually runs a one-time setup that creates four n8n Data Tables and loads a predefined set of Article 22 “effect” rules into the rules table.
2. Receives a decision record from an n8n form submission, loads the effect rules, and evaluates whether the decision is solely automated and indicates any legal or similarly significant effects based on form answers and keyword matches.
3. Sends the decision text and rules to Groq (via an LLM chain) to propose additional effects only when it can provide verbatim quotes from the submitted decision details.
4. Produces an Article 22 verdict (including “INCOMPLETE” when there is not enough information) and generates an evidence-backed report explaining which effects were counted and why.
5. Inserts the decision, verdict, and report into the art22_decisions table and logs each identified effect (or a “none” marker) into the art22_effect_findings table.
6. If the verdict indicates safeguards are required or no valid lawful basis is recorded, posts an alert with the report to Discord and shows a dedicated completion page to the person logging the decision.
7. Receives a human review request from a second n8n form, looks up the referenced decision in the decisions table, sets an Article 12(3)-style deadline, records the request in the art22_reviews table, and notifies reviewers in Discord.
8. Runs every Monday morning to read decisions and review requests, detects missing safeguards and overdue/due-soon requests, and posts a weekly Discord summary when attention is needed.

## Setup
1. Add a Groq API credential for the Groq chat model node.
2. Add a Discord Webhook credential for the Discord message nodes and set it to post to the channel where your data protection/review team monitors alerts.
3. Run the “Set Up Tables (run once)” path once to create the Data Tables (art22_effect_rules, art22_decisions, art22_effect_findings, art22_reviews) and load the initial effect rules.
4. Review and, if needed, edit the effect rules (keywords, weights, and form mappings) in the art22_effect_rules table to match your organization’s terminology.
5. Share the two n8n form URLs (decision logging and human review request) with the relevant internal users and data subjects as appropriate.

## Requirements
- A free Groq API key for the one model call per decision. It only reads the decision text you paste and quotes back the words that show an effect, so the free tier is ample.
- A Discord webhook for the alert and the Monday summary. Swap both Discord nodes for Slack or Gmail if you prefer; every decision and every request is written to the tables first either way.
- n8n 2.38 or newer. Data Tables come built into n8n and the workflow creates its own four tables when you run "Set Up Tables (run once)". There is no outside database and nothing to install.
- A system that makes decisions about people, and somebody who knows how it works. No legal training is needed. The form asks whether a person can change the outcome and what the decision affects.

## Customization
- The eight effects live in art22_effect_rules and that table is the policy. Reword them, add the effects your sector cares about, and edit the keyword list each one matches on.
- Set Article 22 Policy holds the three lawful bases that count under Art. 22(2) and the shortest decision text the workflow will accept. If your regulator reads the exceptions differently, change the list here rather than in code.
- Set Review Policy holds the response window, one month by default under Art. 12(3), and how many days before the deadline the Monday summary starts warning you.
- Set safeguards_documented to yes on an art22_decisions row once human intervention, the right to express a point of view and the right to contest all actually exist. Until then the Monday summary keeps listing that decision.
- The model in the Groq node. Any model that returns JSON works. It can only add an effect by quoting the decision text word for word, so a weaker model finds fewer effects and can never invent one.

## Additional info
Article 22 is the one people get wrong in both directions. Some teams think it bans every automated decision; others think it never applies to them. It has two limbs and both must hold: the decision must be made solely by automation, and it must have a legal or similarly significant effect on the person. Only then do the three exceptions in Art. 22(2) matter, and only then does Art. 22(3) require safeguards. This applies that test the way it is actually written and writes down the answer.

The first form logs one decision a system made about somebody. Eight effects live in a data table you can edit, drawn from Recital 71 and the WP29 guidelines: credit, employment, access to a service, pricing, benefits, legal or enforcement outcomes, health, and education. Each Yes answer counts one, and each keyword found in the decision text counts one. The verdict is one of ART22_SAFEGUARDS_REQUIRED, ART22_NO_LAWFUL_BASIS, NOT_SOLELY_AUTOMATED, NO_SIGNIFICANT_EFFECT or INCOMPLETE.

The detail that catches real systems is the sign-off. A person who rubber stamps an outcome without the authority or the competence to change it is not human intervention, which is what the guidance says, so the workflow treats that as solely automated. The same loan decline was run three times with only the human involvement answer changed: no human gave safeguards required, a real reviewer who can change it gave not solely automated, and a sign-off that changes nothing gave safeguards required again.

Only then does a model get involved. It reads the decision text and may add an effect, but only when it quotes the exact words that show it. A suggestion without a real quote is discarded and the report says so. It can raise a verdict and can never lower one, so text pasted into the form cannot talk the rules out of something they already found.

The second form is for the person on the receiving end, and it is the part most tools skip. Somebody asks for a human to look, to put their point of view, or to contest the decision. The workflow looks the reference up in the register, sets the one month Art. 12(3) deadline, records the request and notifies a reviewer. A reference that is not in the register gives INCOMPLETE, never nothing to review, because a missing row is not a reason to close somebody's request. No reference at all and a completely empty register are treated the same way: the request stands and a person has to go and find the decision.

Known limits, stated plainly. The keywords are English, so a decision written in another language matches fewer of them. The verdicts describe what was typed on the form, not an audit of the system, so NOT_SOLELY_AUTOMATED means somebody said a human can change it and you should keep the evidence that the review is real. The Monday summary only knows about decisions somebody logged, so a system nobody logged is invisible to it, and it reports two empty tables as nothing logged rather than as nothing happening. This is a triage aid for your privacy team. It is not legal advice.

## 🔗 Nodes Used

Discord, Schedule Trigger, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
