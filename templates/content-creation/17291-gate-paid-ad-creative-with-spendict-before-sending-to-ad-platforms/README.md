# 🎬 Gate paid ad creative with Spendict before sending to ad platforms

> ⚡ **8 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow takes ad copy, sends it to Spendict’s assess endpoint to score and classify it, and then routes the result based on the returned launch recommendation so only ads that pass the gate proceed to your next step.

## How it works
1. Runs when you manually click “Test workflow”.
2. Defines the ad payload (headline, primary text, target platform, and product context) to be evaluated.
3. Sends the ad copy to Spendict’s `/api/v1/assess` endpoint to receive scores and a `launch_recommendation` verdict.
4. Branches based on the verdict, routing `run` to the “ship it” path and `fix_first` to the “hold” path, with all other values sent to a fallback output.

## Setup
1. Create a Spendict account, generate an API key, and configure HTTP Header Auth with `Authorization: Bearer <your_key>` for the Spendict request.
2. Replace the sample ad fields (headline, primary text, platform, and product context) with your ad generator output, webhook input, or queue payload.
3. Connect your downstream actions to the `run`, `fix_first`, and fallback outputs to decide how to ship, revise, or regenerate ads based on the verdict.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
