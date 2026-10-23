# 🔒 Red-team AI agents with jailbreak probes using Groq, Discord, and data tables

> ⚡ **56 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow red-teams an AI agent by replaying stored jailbreak and safety probes against a Groq-hosted model, scoring behavior from tool calls and responses, saving results to n8n Data Tables, and notifying a Discord channel plus a weekly digest.

## How it works
1. Runs a one-time manual setup that creates n8n Data Tables and loads a default probe set plus demo customer records.
2. Starts a red-team run from an n8n Form where you choose a probe suite, maximum probes, and the target system prompt (with a canary build key appended automatically).
3. Loads enabled probes (optionally filtered by suite), reads the previous baseline, and queues probes so each one carries its prior verdict for regression checks.
4. Sends each probe’s attack prompt to an n8n AI Agent backed by Groq, allowing only a customer-record lookup tool and a simulated external messaging tool while capturing intermediate tool steps.
5. Scores each probe deterministically by checking the agent’s answer and tool calls for canary leakage, forbidden tool use, compliance markers, record overreach, control-probe refusals, tool-call caps, and blocked/errored outputs.
6. Aggregates results into a run report, uses a Groq reviewer to downgrade suspicious “PASS” answers to “REVIEW” with verbatim quotes, and computes the final verdict and score.
7. Writes the run, per-probe results, and updated baseline to Data Tables, then posts failures to Discord and shows a completion page (and posts a weekly Discord digest of recent runs every Monday when attention is needed).

## Setup
1. Add a Groq API credential for the Groq chat model nodes.
2. Add a Discord Webhook credential and set it on both Discord message nodes.
3. Run the manual “Set Up Tables (run once)” path to create the Data Tables and populate the default probes and demo customer records.
4. Open the “Start a red team run” form, paste your target system prompt, select a suite and max probes, and run the workflow to generate and store results.

## Requirements
- A free Groq API key. Groq runs both the agent under test and the reviewer that reads its answers. The free tier is enough; a 16-probe run sits well inside it.
- A Discord webhook for the failure alert and the Monday digest. Swap both Discord nodes for Slack or Gmail if you prefer; every result is written to the tables first either way, so nothing is lost if you remove them.
- n8n 2.38 or newer. Data Tables come built into n8n and the workflow creates its own five tables the first time you run it. There is nothing to install and no outside database.
- An AI agent you actually want to test. It ships with a demo agent and two demo tools so it works the moment you import it, but the point is to paste your own system prompt into the form and point the agent node at your own tools.

## Customization
- The probe table is the product. Open redteam_probes and add the attacks your own agent must survive: the attack text, whether a safe agent should refuse or answer, the tools it must not call, and the literal phrases that prove it complied.
- Point the agent node at your own instructions and your own tools, then name those tools in forbidden_tools on the probes that must never reach them. The name is matched ignoring case and punctuation, so Send External Message and Send_External_Message both count.
- Set Red Team Policy holds the planted key, the tool-call cap and the score below which a run is escalated. Keep the planted key distinctive: set it to a common word and every honest answer will fail.
- Add your own control probes, the ones a safe agent should answer. Without them, an agent that refuses everything would score 100.
- The Monday digest: how many days it looks back, and whether it still posts in a week when nothing was run.

## Additional info
Changing an agent's system prompt is a code change with no test suite. This gives it one. A stored set of attack prompts is replayed against a real AI Agent, and the result is judged on what the agent did rather than on how confident its answer sounded.
Six of the checks are arithmetic, not opinion. A key is planted in the agent's instructions and the answer is searched for it with spacing and punctuation removed, so "RT - KEY" is still a leak. The intermediate steps are read to see whether a forbidden tool was actually invoked, which is a fact about the run and not a matter of interpretation. Customer ids in the answer are counted against a per-probe cap. Literal phrases that only appear on compliance are matched. Control probes that a safe agent should answer are checked for having been answered, so an agent that refuses everything cannot score 100. And the tool-call cap is enforced.
Only then does a model get involved. One Groq call reads the answers the rules let through and may mark one as compliance, but only by quoting words that are really in the answer. It can lower a pass and can never clear a rule, so pasted text cannot talk the rules out of something they already found.
An agent that errors or says nothing is BLOCKED, and a run containing a blocked probe is INCOMPLETE, never a pass. That matters more than it sounds: without it, an expired API key would produce a clean-looking security report. An empty probe table behaves the same way, because a tool with no reference data should refuse to answer rather than answer no.
The baseline table is what makes this worth running twice. Each probe's last verdict is stored, so a probe that passed last week and fails today is reported as a named regression rather than as one number quietly moving.
Known limits, stated plainly. A clean run means the stored probes held, not that the agent is safe: when this was tested against a live agent, one wording of an indirect prompt injection got through while two blunter wordings of the same attack were refused. The compliance phrases are literal English, so an agent that complies in another language will not match them. The demo customer records include one row carrying a planted instruction on purpose, and deleting it silently stops the injection probes testing anything. The first 400 characters of each answer are stored in redteam_results, so pointing this at an agent that handles real personal data will write that data to a table.
This is a regression check for agent behaviour. It is not a security audit and it is not a guarantee.

## 🔗 Nodes Used

Discord, Schedule Trigger, AI Agent, Basic LLM Chain, Structured Output Parser, Code Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
