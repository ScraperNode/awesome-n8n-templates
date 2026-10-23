# ⚒️ Build self-improving agent skills with cognee

> ⚡ **231 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
A self-improving loop for agent skills, powered by the cognee Verified Node. When a skill's review scores below your threshold, it proposes a rewrite, and you approve the before/after diff before it's applied. No code required.

## How it works
1. Execute your workflow.
2. Set the demo inputs (skill name, dataset name, skill procedure markdown, review task text, and the score threshold).
3. Ingest the skill into cognee.
4. Cognee reviews the skill’s performance and returns a JSON with a score and gaps.
5. If the score is below the threshold, the workflow requests a cognee improvement proposal for the skill.
6. The workflow retrieves the full proposal from cognee and builds a human-readable before/after diff.
7. If the proposal is approved, the workflow applies the improvement in cognee, fetches the updated skill, and outputs the updated procedure and diff.

## Setup
1. Create a cognee API credential in n8n and use it in all cognee nodes (Ingest Skill, Review Skill, Propose Improvement, Get Proposal, Apply Improvement, Get Skill). Information for the credential (URL and API key) can be found in your Cognee Cloud account.
2. Update the skill parameters (skill_name, dataset_name, skill_markdown, task_text, score_threshold, and approved) to match your use case.
3. Ensure the referenced cognee dataset name exists so the skill can be stored and retrieved consistently.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
