# ⚒️ Evaluation metric example: Correctness (judged by AI)

> ⚡ **1,719 views** · ⚒️ [Engineering](../)

## Description

## AI evaluation in n8n

This is a template for n8n's [evaluation feature](https://docs.n8n.io/advanced-ai/evaluations/overview). 

Evaluation is a technique for getting confidence that your AI workflow performs reliably, by running a test dataset containing different inputs through the workflow.

By calculating a metric (score) for each input, you can see where the workflow is performing well and where it isn't.

## How it works

This template shows how to calculate a workflow evaluation metric: **whether an output matches an expected output** (i.e. has the same meaning).

The workflow takes questions about the causes of historical events and compares them with the reference answers in the dataset.

- We use an evaluation trigger to read in our dataset 
- It is wired up in parallel with the regular chat trigger so that the workflow can be started from either one. [More info](https://docs.n8n.io/advanced-ai/evaluations/tips-and-common-issues/#combining-multiple-triggers)
- If we're evaluating (i.e. the execution started from the evaluation trigger), we calculate the correctness metric using AI
- We pass this information back to n8n as a metric
- If we're not evaluating we avoid calculating the metric, to reduce cost

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Chat Trigger, OpenAI, Evaluation Trigger, Evaluation

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
