# ⚒️ Monitor AI quality drift with GPT-4o-mini evaluations and Slack alerts

> ⚡ **44 views** · ⚒️ [Engineering](../)

## Description

Catch AI quality drift before your users do. This template ties scheduled evaluation, LLM-as-a-Judge scoring, and threshold-based alerts into a continuous monitoring loop that fires a Slack alert the moment a response drops below your quality bar.

## What you'll do

Open the workflow and review the production path (Daily Schedule kicks off the AI Agent, Production logic handles real traffic). Open the Evaluations tab and click Run Test to feed your golden dataset through the AI Agent. Watch the judge model score each response and the Check Threshold node compare the average against your threshold (default 3.5/5). See a Slack Alert fire when a test case scores below the threshold, or All Clear when scores are healthy.

## What you'll learn

How to turn one-time evaluations into continuous monitoring on a schedule How to apply per-test-case thresholds so individual failures trigger immediate alerts How to combine the Evaluations tab (trend tracking) with workflow-level alerting (real-time) How to grow a golden dataset over time by feeding production failures back into your test set

## Why it matters 

AI workflows degrade silently. A model update changes behavior, input patterns shift, and quality drops without throwing a single error. Continuous monitoring with alert thresholds turns evaluation from a pre-deployment check into a safety net that runs forever, so you find out about a problem from your dashboard, not your customers.

This template is a learning companion to the Production AI Playbook, a series that explores strategies, shares best practices, and provides practical examples for building reliable AI systems in n8n.

## 🔗 Nodes Used

Slack, Schedule Trigger, AI Agent, OpenAI Chat Model, OpenAI, Evaluation Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
