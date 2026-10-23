# 👥 Rank engineering candidates by role fit with weighted scoring in Judgment

> ⚡ **1 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow scores and ranks candidate profiles for different role types by using the Judgment community node to rate four dimensions and apply different weight sets, producing comparable fit scores for Senior IC, Engineering Manager, and equal-weight baselines.

## How it works
1. Runs manually when you click Test Workflow.
2. Creates three sample candidate profile items and merges them into a single stream for batch scoring.
3. Uses Judgment to rate each candidate on depth, leadership, design, and generalist breadth using a shared five-level rubric, then computes a composite score weighted for a Senior IC role.
4. Scores the same candidates again with the same four dimensions but weights tuned for an Engineering Manager role.
5. Scores the candidates a third time using JSON-defined dimensions and equal weights as a baseline.
6. Outputs one report row per candidate per role profile with the composite score, fit percentage, and a per-dimension breakdown.

## Setup
1. Install the `n8n-nodes-judgment` community node (Settings → Community Nodes) on a self-hosted n8n instance.
2. Create and select a Judgment API credential for the three Judgment scoring steps (and set a custom base URL if required).
3. Replace the sample candidate items with your own data source, ensuring each item includes a `profile` field (and optionally a `candidate` name).
4. Update the four dimension prompts, shared five-point scale, and the weight sets to match your hiring rubric and the roles you want to compare.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
