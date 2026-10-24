# ⚒️ Track IBM Quantum backend drift with Bell tests, Sheets, Gmail and OpenAI

> ⚡ **3 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
Quantum processors drift every single day. This workflow runs a Bell state test on the least busy IBM Quantum backend, picks the healthiest qubit pair straight from live calibration data, logs every run to Google Sheets, and emails you a short OpenAI written note about what actually changed.

## How it works
1. Every morning the schedule trigger loads your settings from one Set node: shot count, minimum qubits, the CZ error ceiling, the QPU seconds you want kept in reserve, and the tag that ties everything together.
2. It reads how much QPU time your IBM Quantum plan has left. If you are below the reserve it emails you and stops there, so an active schedule can never quietly drain a free Open Plan allowance.
3. It asks IBM which backend is least busy right now, then downloads that machine's live calibration report. That report is refreshed by IBM roughly every few hours and it changes constantly.
4. A Code node scores every two qubit link on the chip. For each CZ pair it adds the gate error to the readout error of both qubits, then sorts. Links whose calibration looks broken get filtered out first. On a 156 qubit Heron processor that means ranking around 350 candidate pairs before choosing one.
5. The winning pair gets a Bell state circuit written directly in the backend's native gate set, using rz, sx and cz on the physical qubit indices. This matters more than it sounds. IBM's runtime does not transpile for you, and a textbook circuit with h and cx comes straight back rejected with error 1517. Generating ISA gates in the workflow means you never need a local Qiskit install.
6. The job goes to the Sampler with your tag attached, the run is written to Google Sheets as pending together with a full snapshot of the calibration numbers, and this flow ends. Nothing waits on the queue, which can be sixteen seconds or over an hour depending on the hour of the day.
7. A second trigger wakes up when IBM reports that tagged job as finished. It fetches the measurement counts, finds the pending row by job ID, and computes the correlation: the share of shots that landed on 00 or 11, which for a perfect Bell pair would be 1.0.
8. That measured number gets compared against what the calibration data predicted before the job ran. The gap between the two is the interesting part, and it is the thing you cannot get from IBM's published numbers alone.
9. The row is completed in place, the recent history is read back, and OpenAI writes three to five sentences comparing today against the rolling average. The prompt is deliberately strict: it is told not to invent numbers and not to blame a qubit pair change unless the history actually shows one.
10. You get an email. A normal digest when things look fine, a degradation alert when the correlation falls under your threshold. Both carry the full table of numbers underneath the summary.
11. A third trigger watches for tagged jobs that failed or were cancelled and emails you the reason IBM gave, including the error code. The pending row stays in the sheet so you can still see which qubits that job was aimed at.

## Setup
1. Add four credentials: IBM Quantum Platform API, Google Sheets OAuth2, Gmail OAuth2, and an OpenAI API key. The IBM credential is the same one you would use from a Python script, nothing special.
2. Create a Google Sheet and add a tab named exactly runs. Leave it completely empty. The workflow writes all 25 column headers itself on the first run, so you do not need to prepare anything. They come from the Create Pending Log Entry node, which returns exactly the fields that become columns.
3. Select that spreadsheet in all four Google Sheets nodes: Log Pending Benchmark to Sheet, Locate Pending Entry in Sheet, Update Benchmark Log Entry, and Fetch Benchmark History.
4. Put your email address in three places. Set Watchtower Parameters covers the morning flow, Set Alert Configuration covers the scoring flow, and Alert Job Failure Report has its own field. They are separate because each trigger runs in its own execution and cannot read the others.
5. Keep the jobTag value in Set Watchtower Parameters identical to the tag filter on both IBM Quantum trigger nodes. If they drift apart the triggers will never see your jobs.
6. Check the numbers in Set Watchtower Parameters against your plan. The defaults are 512 shots and a 60 second reserve, which suit the free Open Plan. Raise shots if you have paid access and want tighter statistics.
7. Run the morning flow once by hand and confirm a pending row appears in the sheet. Then activate the workflow and let the second trigger pick the job up when IBM finishes it.

## Requirements
- An IBM Quantum Platform account. The free Open Plan is enough.
- The IBM Quantum (Unofficial) community node, verified and installable directly from the n8n canvas.
- A Google account for Sheets and Gmail.
- An OpenAI API key for the summary step.
- Around 1 to 2 QPU seconds per run at 512 shots, so roughly 40 seconds a month on a daily schedule.

## Customization
- Change shots, minQubits, maxAcceptableCzError and qpuSecondsReserve in Set Watchtower Parameters. Everything operational lives in that one node.
- Change correlationAlertThreshold and historyWindowDays in Set Alert Configuration to control when you get shouted at and how far back the comparison reaches.
- Swap Gmail for Slack, Discord or Telegram. The four email nodes are independent leaves, so replacing them touches nothing else.
- Replace the Bell circuit in Determine Optimal Qubit Pair with any ISA circuit you want tracked over time. The scoring node only cares about the counts.
- Pin a specific backend instead of using least busy, if you want to follow one machine rather than whichever is free.
- Run it more than once a day. The two phase design means a shorter interval costs nothing in held executions.

## Additional info
This workflow was built and tested against real IBM Quantum hardware, not a simulator and not mock data. Everything below actually happened.

Machines used: ibm_marrakesh and ibm_kingston, both 156 qubit Heron r2 processors.

The qubit picker was checked against a live calibration report. Out of 352 CZ links on ibm_marrakesh it scored 338 and chose the pair q139 and q155, with a combined link score of 0.0093 against a median of 0.0295. That pair had a CZ gate error of 0.0022 and readout errors of 0.0026 and 0.0045. The filter also earns its place: the same chip had a CZ pair reporting a gate error of exactly 1.0, meaning that link was simply broken, and it was excluded automatically.

Real jobs, all 512 shots on ibm_marrakesh, all with the same q139 and q155 pair:

da1mdaiein7c73bdjmbg gave counts 00=259, 11=243, 01=5, 10=5, a correlation of 0.9805.
da1nlom3kjvs7386vgng gave a correlation of 0.9570 about ninety minutes later.
da1nn3qein7c73bdl4gg gave 0.9434 three minutes after that, with counts 00=245, 11=238, 01=10, 10=19.

The calibration data predicted 0.9908 for all three. Same machine, same qubits, same evening, and the measured quality slid by nearly four percent while IBM's published numbers did not move at all. That gap is the whole point of running this.

Five things worth knowing, all found by testing rather than by reading docs:

The circuit builder in the community node cannot emit an sx gate, so a textbook Bell circuit built with it will not run on Heron hardware. This workflow generates the ISA QASM in a Code node instead, which is why it works without a local transpile step.

Sampler results arrive under pubs[0].counts, not under a top level counts field. Worth knowing if you write your own parser.

The Get Results operation does not throw an error when the wait window expires. It returns a normal success item carrying timedOut set to true. An error output branch will never catch it. This is exactly why the workflow was rebuilt around the completion trigger instead of a blocking wait, after one real run sat in the queue for more than fifteen minutes while another finished in sixteen seconds.

GPT-5 class reasoning models reject the temperature parameter. The OpenAI node here sends only reasoningEffort.

The Google Sheets node writes its own header row into a completely empty tab, so template users do not have to prepare 25 columns by hand.

One last note on budget. The IBM Open Plan allowance is a rolling 28 day window rather than a calendar month, so seconds come back gradually instead of resetting on a date. The IBM console counts the first day of that window whole while the API counts from the exact hour, which is why the two can disagree by a minute or so. The guard node in this workflow reads the API figure, and the 60 second default reserve is set deliberately wide to absorb that difference.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
