# ⚒️ Stress-test decisions and compare plans with Gemini and Claude

> ⚡ **6 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
Get an honest second opinion on a plan or decision before you act. Gemini plays devil's advocate and proposes a Plan B, Claude weighs both and recommends A, B or a mix. Works as a form or as a sub-workflow for AI agents.

## How it works
1. Input comes from a form (logged-in n8n users only) or from another workflow through Execute Workflow, with the fields plan, goal and context.
2. A Code node wraps each piece of user text in quoted blocks and neutralises block markers inside it, so instructions in the text are treated as content, not commands.
3. Gemini reviews the plan as devil's advocate: it proposes a different Plan B, names what Plan A overlooks and its biggest risk, in a fixed JSON schema.
4. Claude weighs Plan A against Plan B and returns a recommendation (A, B or mixed) with reasoning, next steps, strengths, weaknesses and open questions, also in a fixed schema.
5. If Gemini fails, Claude takes over both roles. If Claude fails, the report says INCOMPLETE and gives no recommendation.
6. Form users see the formatted report. Calling workflows receive the result as JSON.

## Setup
1. Add a Google Gemini API credential to Gemini Devil's Advocate Model.
2. Add an Anthropic API credential to Claude Synthesis Model.
3. Set your own error workflow in the workflow settings.
4. Activate the workflow and open the form URL of When Plan Submitted, or call it from another workflow with plan, goal and context. One run takes about a minute and uses both APIs.

## Requirements
- Google Gemini API key
- Anthropic API key

## Customization
- Swap either model sub-node for another provider. Keep the two different, so they don't share the same blind spots.
- Adjust the review instructions in Normalize and Quote Input and Create Synthesis Prompt.
- Use When Triggered by Workflow to add the review as a step before an AI agent acts.

## Additional info
Your input is sent to both model providers. Don't submit personal or confidential data unless your agreements with them allow it.

## 🔗 Nodes Used

Execute Workflow Trigger, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
