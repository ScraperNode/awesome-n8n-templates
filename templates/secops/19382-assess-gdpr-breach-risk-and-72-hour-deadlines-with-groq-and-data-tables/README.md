# 🔒 Assess GDPR breach risk and 72-hour deadlines with Groq and data tables

> ⚡ **14 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow collects suspected personal data breach reports via an n8n form, scores them against GDPR risk factors stored in n8n Data Tables, uses Groq to validate additional risk factors from the text, calculates the 72-hour notification deadline, records findings, and posts notifications and daily deadline reminders to Discord.

## How it works
1. Runs once manually to create four n8n Data Tables (risk factors, breach register, findings, and reminders) and upsert a starter set of breach risk factors.
2. Triggers when someone submits the “Report a suspected personal data breach” form with incident details, awareness time, and key risk indicators.
3. Loads the risk factor policy from the risk factor table, scores the report using form answers and keyword matches, and calculates the GDPR 72-hour deadline from the awareness time.
4. Sends the breach description and known factors to Groq to suggest any additional factors only when backed by verbatim quotes, then validates and merges accepted suggestions into a final verdict.
5. Writes one breach assessment into the breach register table and records each matched factor (or a “none” finding) into the findings table.
6. If the verdict requires notifying a supervisory authority, posts the verdict, deadline, and evidence summary to Discord and shows the reporter the appropriate next-step completion page.
7. Runs every morning, checks the breach register for not-yet-notified notifiable breaches nearing or past their deadline, posts a Discord reminder when attention is needed, and logs each reminder run to the reminders table.

## Setup
1. Create and connect a Groq API credential for the Groq chat model used to review and quote-check additional risk factors.
2. Create and connect a Discord Webhook credential for both Discord message steps (initial notifiable alert and daily deadline reminder).
3. Run the “Set Up Tables (run once)” path to create the required n8n Data Tables and load the initial risk factor rows.
4. Review and edit the risk factors in the breach_risk_factors table (titles, severities, keywords, and form mapping) to match your organization’s policy and language.
5. Update the breach_register rows (for example, set authority_notified to “yes”) after reporting to the authority so the daily watchdog stops reminding you.

## Requirements
- A free Groq API key for the one model call per assessment. It only reads the description you type and quotes back the words that show a risk factor, so the free tier is ample.
- A Discord webhook for the breach alert and the daily deadline reminder. Swap both Discord nodes for Slack or Gmail if you prefer; every assessment is written to the tables first either way, so nothing is lost if you remove them.
- n8n 2.38 or newer. Data Tables come built into n8n and the workflow creates its own four tables when you run "Set Up Tables (run once)". There is no outside database and nothing to install.
- Somebody who knows what happened. No legal training is needed. The form asks plain questions: what was involved, how many people, was it encrypted, is it contained.

## Customization
- The ten risk factors live in breach_risk_factors and that table is the policy, not the code. Reword them, add your own, or change which ones count as high severity, which is what decides whether the people affected have to be told.
- Set Breach Policy holds the deadline in hours, the threshold for a high risk verdict, what counts as a large number of people, and the shortest description the workflow will accept.
- The watchdog runs daily and warns 24 hours before a deadline. Change warn_hours_left, or the hour it runs, or delete the schedule and run it by hand.
- Set authority_notified to yes on the breach_register row once you have actually reported. Until you do, the watchdog keeps chasing that breach every morning, which is the intended behaviour.
- The model in the Groq node. Any model that returns JSON works. It can only add a risk factor by quoting your report word for word, so a weaker model finds fewer factors and can never invent one.

## Additional info
Article 33 gives you 72 hours to tell the supervisory authority about a personal data breach, and the clock starts when you become aware of it, not when it happened. Most teams lose the first day working out whether it counts as a breach at all. This gives a first answer in about a minute, writes down how it got there, and then keeps counting down.

Somebody reports what happened on a form. Ten risk factors live in a data table you can edit, and a Code node scores the report deterministically: each Yes answer counts, each keyword found in the description counts, and the deadline is calculated from the moment you say you became aware. Six of the factors are marked high severity, which is what separates telling the authority from also telling the people affected.

Only then does a model get involved, and it is kept on a short leash. It reads your description and may add a risk factor, but only when it quotes the exact words from your report that show it. A suggestion without a real quote is discarded and the report says so. It can raise a verdict and can never lower one, so text pasted into the form cannot talk the rules out of something they already found. When this was tested against a real report, the reporter had ticked contained yes but also written that they did not know whether anything was copied out first; the model raised the severity and quoted that sentence back as its reason.

What it refuses to do is the part worth reading twice. An empty risk factor table gives INCOMPLETE, never a quiet all clear, because a tool with no reference data should refuse to answer rather than answer no. A description too short to assess gives INCOMPLETE. A date you became aware that cannot be read gives INCOMPLETE, because a deadline calculated from a guess is worse than no deadline. And RECORD_ONLY does not mean nothing happened: Article 33(5) requires every breach to be documented, and that row is the document.

Every assessment goes to breach_register with its deadline and its report, and every risk factor to breach_findings with the evidence for it. Notifiable breaches are posted to Discord and the reporter is shown one of three pages: tell the authority and the people, tell the authority, or documented only. Each page says what to do next rather than just showing a verdict.

Known limits, stated plainly. The keywords are English, so a report written in another language matches fewer of them and the verdict can come out low. The number of people affected is read out of free text by taking the digits, so 3 of 5,000 records reads as 35000; that error only ever pushes the verdict up, never down. The watchdog only knows about breaches somebody actually reported through the form, so a breach nobody reported is invisible to it, and it says so rather than reporting all clear. This is a triage aid for whoever owns your breach process. It is not legal advice.

## 🔗 Nodes Used

Discord, Schedule Trigger, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
