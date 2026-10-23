# ⚙️ Create sustained capacity review tasks from OpenObserve metrics to Twenty CRM

> ⚡ **2 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow checks Prometheus-style infrastructure metrics in OpenObserve on a schedule, detects sustained pressure based on coverage and threshold rules, and then creates or updates a matching review task in Twenty CRM with evidence from the latest and previous time windows.

## How it works
1. Runs on a manual trigger for preview or every 30 minutes on a schedule.
2. Defines a capacity policy (PromQL, time window, step, threshold, coverage, and sustained-breach rules) and validates it while calculating aligned start and end timestamps.
3. Queries OpenObserve for the metric’s history over the computed time range using a Prometheus range query.
4. Evaluates each returned time series for data freshness/coverage, breach duration and fraction, and trend versus the previous window, then classifies it as healthy, transient pressure, sustained pressure, insufficient data, or no data.
5. Builds a stable review-task title and a Markdown evidence block for each sustained-pressure series, including labels, threshold stats, and the PromQL used.
6. For each series, either looks up and updates the existing Twenty CRM task (replacing only the marked evidence block) or creates a new task when preview mode is disabled, then returns a consolidated run report of created/updated/preview/skipped outcomes.

## Setup
1. Add an OpenObserve API credential and ensure the target metric is queryable via PromQL in your OpenObserve metrics data.
2. Add a Twenty CRM API credential with permission to search, create, and update tasks.
3. Update the capacity policy fields (especially the PromQL and rule_key) to match your 0–100 percentage metric and desired thresholds, then keep titles and evidence markers unchanged for safe updates.
4. Run the manual preview with preview_only enabled to verify the returned series and classifications, then set preview_only to false before enabling the 30-minute schedule.

## 🔗 Nodes Used

Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
