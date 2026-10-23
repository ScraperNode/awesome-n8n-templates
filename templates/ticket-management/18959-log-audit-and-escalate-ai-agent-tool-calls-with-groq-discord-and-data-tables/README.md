# 🎫 Log, audit and escalate AI agent tool calls with Groq, Discord and data tables

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs a chat-based support agent powered by Groq, records every tool call the agent makes into an n8n Data Table, and appends an audit note that flags any numbers in the final answer that don’t appear in the question, tool inputs, or tool results.

## How it works
1. Receives a chat message via an n8n Chat trigger and starts/continues a session.
2. Uses a Groq chat model to run an agent that can call a Calculator tool and a demo order lookup tool and returns intermediate tool steps.
3. Converts the agent’s intermediate steps into one log row per tool call, including session ID, tool name, tool input, tool output, and a final-answer excerpt.
4. Audits the final answer by checking whether each number in the response is supported by the question, tool inputs, or tool results, and generates an audit note.
5. Writes the tool-call rows and audit note to an n8n Data Table as a “flight log” for the session.
6. Replies to the user with the agent’s answer plus a short flight-log line listing the tools used and the audit note.

## Setup
1. Add a Groq API credential and select it in the Groq Chat Model node.
2. Create/select an n8n Data Table for the flight log and map columns for session_id, logged_at, step_index, tool_name, tool_input, observation, final_answer_excerpt, and audit_note.
3. Replace the demo order lookup tool code with your real order-status lookup (or other business tools) while keeping the same tool interface if desired.

## Requirements
- A free Groq API key. Groq is the AI service the agent uses to answer. The free tier is plenty. The logging and the number check are ordinary code, so they carry on working whatever model you swap in.
- n8n Data Tables, which come built into n8n. You need one table to hold the log. There is no outside database or spreadsheet to set up.
- Nothing else. It ships with two working demo tools, so you can run it once and watch the log fill up before you connect anything of your own.

## Customization
- Swap in your own tools. The order lookup is a demo with three made up orders and it says so on the canvas. Replace it with whatever your agent really calls. None of the logging is tied to a particular tool, so anything you add is recorded the same way with no extra wiring.
- Change the model in the Groq Chat Model node. The log records what the agent did, not which model did it, so nothing further down needs changing.
- Decide what to do with the log. It is an ordinary table, so you can point a dashboard at it, raise an alert when the audit note names a number, or simply leave it and read it on the day somebody asks.

## Additional info
The problem this solves is a small one that turns up late. An agent gives someone an answer, they act on it, and a week later somebody asks why it said that. Usually there is nothing to look at. The chat has gone, and the agent cannot reliably tell you what it did.

This keeps the receipts. After every reply it writes one row for each tool the agent used: which tool ran, what it was given, what came back, and which conversation it belonged to. Six rows means six tool calls, in order. If the agent answered without using any tool at all, that is written down too, and it is often the row you most want to find.

It also writes a short audit note. Every number in the answer is checked against what the tools returned, what the tools were asked, and the original question. If a number appears in none of those, the note names it. That is the number the agent did not get from anywhere, and it is the usual shape of a confident wrong answer. The reply the person sees carries the answer plus a one line summary of which tools were used, so they can see what it rests on without opening the table.

Be clear about what that check is. It is arithmetic on digits, not judgement. A sentence that is completely made up but contains no numbers will pass without comment. Matching is also loose, so a short number like 2 will nearly always be found somewhere by chance. It is most useful on long specific numbers, which is where invented figures usually show up. Treat the note as something to look at, not a verdict.

What it will not do: it does not block, correct or rewrite what the agent said, and it does not judge whether the answer was any good. It records what happened and points at numbers that came from nowhere. A person decides the rest.

One thing worth knowing before you rely on it. The log depends on the agent node handing back its intermediate steps, which is a normal built in option and is switched on in the template. If that changes in a future n8n release the log goes empty rather than wrong, and every row would read as though no tool had been used.

## 🔗 Nodes Used

Discord, Schedule Trigger, AI Agent, Basic LLM Chain, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
