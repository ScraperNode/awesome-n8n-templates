# 🔬 Screen GDPR DPIA needs with Groq, n8n forms, data tables and Discord

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects GDPR processing details via an n8n Form, scores them against editable DPIA screening criteria stored in n8n Data Tables, uses Groq to validate additional criteria with verbatim quotes, records results in tables, and posts REQUIRED alerts and a weekly digest to Discord.

## How it works
1. Runs a one-time manual setup to create three n8n Data Tables (dpia_criteria, dpia_screenings, dpia_findings) and populate dpia_criteria with the nine EDPB/WP29 DPIA screening criteria.
2. Receives a DPIA screening submission from an n8n Form with the project description, data categories, data subjects, scale, and yes/no/not sure answers.
3. Loads the criteria from dpia_criteria and deterministically counts criteria met based on form answers, scale thresholds, and keyword matches in the submitted text.
4. Sends the full criteria list and the processing description to Groq and accepts only additional criteria that include an exact quote found in the description.
5. Produces a final verdict (REQUIRED, CONSIDER, NOT_REQUIRED, or INCOMPLETE) with an evidence-backed report, then records one screening row in dpia_screenings and one finding row per met criterion in dpia_findings.
6. If the verdict is REQUIRED, sends the report to Discord and shows a “required” completion page; otherwise it shows a completion page with the verdict and reasoning.
7. Every Monday, reads recent rows from dpia_screenings, summarises verdict counts for the lookback window, and posts a weekly digest to Discord when attention is needed (or when configured to report quiet weeks).

## Setup
1. Add a Groq API credential for the Groq chat model and a Discord webhook credential for both Discord message steps.
2. Run the “Set Up Tables (run once)” path to create dpia_criteria, dpia_screenings, and dpia_findings and load the initial nine criteria.
3. Review and adjust the screening thresholds and minimum description length in the screening policy, and optionally edit titles/keywords in the dpia_criteria table to match your organisation’s terminology.
4. Open and share the n8n Form trigger URL with your team so they can submit processing activities for screening.
5. (Optional) Adjust the weekly digest schedule, lookback_days, and post_when_quiet settings to fit your reporting cadence.

## Requirements
- A free Groq API key. Groq runs the language model that reads your project description. The free tier is plenty; one screening is a few hundred words.
- A Discord webhook URL for the alerts and the Monday summary. If your team lives in Slack or email, swap the two Discord steps for Slack or Gmail. Results are written to the tables either way, so nothing is lost.
- n8n 2.38 or newer. Data Tables come built into n8n, and the workflow creates its own three tables the first time you run it. There is no database to set up and nothing to install.
- Somebody who knows the project. No legal training is needed to run this. The form asks plain questions about what the project does with people's data.

## Customization
- The nine questions live in the dpia_criteria table. Open it and reword them, or add your own. Each row carries a list of trigger words separated by a | character.
- How strict it is. Set Screening Policy holds the numbers: two criteria met means a DPIA is required, one means consider it. Move those if your privacy team wants a different bar.
- The shortest description it will accept is 40 characters. Anything shorter comes back as INCOMPLETE instead of a verdict, so a one-word answer cannot produce a confident result.
- The Monday summary: how many days it looks back, and whether it still posts in a week when nothing was screened.
- The model. Any Groq model that returns JSON works. A weaker one simply adds fewer criteria; it cannot change the verdict on its own.

## Additional info
"Do we need a DPIA for this?" usually gets asked late, and the honest answer is a shrug followed by a meeting. This gives a first answer in about a minute and writes down how it got there, so the next person can check the reasoning instead of taking someone's word for it.
The nine things it looks for are the European Data Protection Board's own list from its DPIA guidelines (WP248 rev.01): scoring or profiling people, automated decisions that affect them, systematic monitoring, sensitive data, large scale, combining datasets, vulnerable people such as children, patients or employees, new technology, and processing that stops someone using a service or exercising a right. The guidelines say two or more usually mean a DPIA is needed, so two is the default.
The counting is arithmetic, not opinion. Each Yes on the form counts. Each trigger word found in your description counts. A stated scale of 10,000 people or more counts as large scale. A "Not sure" is written down but never counted, and is shown back to you as something a person still has to decide.
Only then does the model get involved, and it is kept on a short leash. It reads your description and may add a criterion the keywords missed, but only if it quotes the exact words from your text that show it. A suggestion without a real quote is thrown away, and the report says so. The model can push a verdict up and can never pull one down, so text pasted into the form cannot talk the rules out of something they already found.
What it will not do. If the criteria table is empty it answers INCOMPLETE, never "no DPIA needed", because a tool with no reference data should refuse to answer rather than answer no. A description that is too short gets the same treatment. The trigger words are English, so a description written in another language matches fewer of them and the verdict can come out too low; the model step covers some of that, but it is a model and it misses things. And it tells you whether to start a DPIA, not what the DPIA will conclude. It is not legal advice.
Every screening is stored with the criteria that were met and the evidence for each one, so months later somebody can see why the answer was what it was. The Monday summary counts the verdicts and names the projects that need a DPIA. A week with nothing screened is reported as a week with nothing screened, not as all clear.

## 🔗 Nodes Used

Discord, Schedule Trigger, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
