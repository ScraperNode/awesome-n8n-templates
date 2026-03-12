# 🎣 Sales lead routing with Gemini Sentiment Analysis & Model Evaluation Framework

> ⚡ **563 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This n8n template demonstrates how to deploy an AI workflow in production while simultaneously running a robust, data-driven Evaluation Framework to ensure quality and optimize costs.

## Use Cases
Model Comparison: Quickly A/B test different LLM models (e.g., Gemini 3 Pro vs. Flash Lite) for speed and cost efficiency against your specific task.

Prompt Regression: Ensure that tweaks to your system prompt do not introduce new errors or lower the accuracy of your lead categorization.

Production Safety: Guarantee that test runs never trigger real-world actions like sending emails to a client or sales team.

## Requirements
A configured Gmail Trigger (or equivalent email trigger).

A Google Gemini account for the LLM models.

An n8n Data Table containing your "Golden Dataset" of test cases and ground truths.

## How it Works
The workflow contains two distinct, parallel execution paths:

### Production Path:

The Gmail Trigger monitors for new emails.

The email text is routed through the Sentiment Analysis node, which categorizes the lead as Positive, Neutral, or Negative.

Check if Evaluating nodes verify the current execution mode. If it is not an evaluation run (the Fail branch), the lead is routed to the corresponding Send Email node for action.

### Evaluation Path:

The When fetching a dataset row trigger pulls test cases (input text and expected sentiment/ground truth) from an n8n Data Table.

Each test case loops through the same Sentiment Analysis node.

The Check if Evaluating nodes route this path to the Success branch, skipping the real email actions.

The Save Output node writes the model's prediction to the Data Table.

The Set Metrics node uses the Categorization metric to compare the prediction against the ground truth, returning a score (0 or 1) to measure accuracy.

## Key Technical Details
Model Switching: Multiple Google Gemini Chat Model nodes are connected via the Model input on the Sentiment Analysis node, allowing you to easily swap and compare models without changing the core logic.

Edge Case Handling: The System Prompt Template in the Sentiment Analysis node is customized to handle tricky inputs, such as negative feedback about a competitor that should be classified as a Positive lead.

Metrics: The workflow uses the built-in Categorization metric, which is ideal for classification tasks like sentiment analysis, to provide objective evidence of performance.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Google Gemini Chat Model, Sentiment Analysis, Evaluation Trigger, Evaluation

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
