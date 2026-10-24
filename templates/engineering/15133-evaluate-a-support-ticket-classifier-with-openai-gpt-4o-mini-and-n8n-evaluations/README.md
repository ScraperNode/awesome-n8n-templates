# ⚒️ Evaluate a support ticket classifier with OpenAI GPT-4o-mini and n8n evaluations

> ⚡ **217 views** · ⚒️ [Engineering](../)

## Description

Measure how well your AI classifier actually performs. This template shows how to evaluate a support ticket classifier using n8n's built-in evaluation system, comparing AI predictions against expected labels with exact match scoring.

## What you'll do

Open the workflow and review the production path (webhook receives a ticket, AI Agent classifies it by category and urgency, response is returned). Open the Evaluations tab and click Run Test to feed each Data Table row through the AI Agent. Inspect per-test-case scores and aggregate metrics to see which tickets the classifier got right and which it missed. Tweak the prompt or model, re-run, and compare runs side by side.

## What you'll learn

How n8n's Evaluation Trigger, Data Tables, and Evaluation node fit together How to use the "Check if Evaluating" operation to keep evaluation traffic out of production How to score structured AI outputs against known correct answers using exact match How to seed a test set from real execution history rather than synthetic examples

## Why it matters 

Classification accuracy that looked great in testing can quietly drop the moment your inputs shift. Building an evaluation path next to your production workflow gives you a repeatable way to measure quality, catch regressions before users do, and ship prompt changes with data instead of vibes.

This template is a learning companion to the Production AI Playbook, a series that explores strategies, shares best practices, and provides practical examples for building reliable AI systems in n8n.

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, Evaluation Trigger, Evaluation

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
