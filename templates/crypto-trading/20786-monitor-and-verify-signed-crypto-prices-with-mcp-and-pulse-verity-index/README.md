# 📈 Monitor and verify signed crypto prices with MCP and Pulse Verity Index

> ⚡ **2 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
Monitor a signed crypto price from the Pulse Verity Index on a schedule. Verify record integrity, apply your own freshness and quality requirements, record decisions in n8n Data Tables, and receive Slack alerts when a failure changes or service recovers.

## How it works
1. Run manually for setup or every ten minutes for one configured crypto symbol.
2. Validate the symbol and example consumer policy, then call get_index_price through the hosted MCP endpoint using your Bearer Auth credential.
3. Preserve the complete signed record and call verify_print. Require verification of the exact full record before evaluating its quality.
4. Evaluate observation age, future timestamps, grade, confidence, dispersion and source count against your configured consumer policy. Unavailable responses, timeouts and invalid verification produce an UNAVAILABLE outcome.
5. Write a compact decision audit to n8n Data Tables and compare it with the persistent prior state. Repeated unchanged notifications are suppressed; an initial healthy check establishes a quiet baseline.
6. Send Slack alerts for initial failures, changed failure reasons or policies, and recovery. Persist notification state after Slack succeeds. An interrupted delivery can still duplicate a later alert.

## Setup
1. Import while inactive. Create a developer key at https://thepulse.markets/developers and select an n8n Bearer Auth credential in both MCP nodes. Never paste credentials into the workflow JSON.
2. Create the two n8n Data Tables using the exact schemas in the workflow canvas notes, and select them in the corresponding nodes. Select your Slack OAuth credential and destination channel.
3. Review the symbol and illustrative consumer thresholds, test manually, then activate a cadence that fits your account limits. Run one execution at a time and configure audit retention and project access.

## Requirements
- n8n with MCP Client, Code, Schedule Trigger, Data Tables and Slack nodes; a Pulse Verity developer key and Slack credentials. Import/export compatibility was checked with n8n 2.42.6. No AI model or community node is required.

## Customization
- Configure the symbol, consumer freshness and quality policy, table selections and Slack channel. The example thresholds are consumer preferences, not disclosures of the proprietary Verity engine.

## Additional info
Signatures establish record integrity, not price correctness. The hosted verifier is trusted over HTTPS. This operations monitor does not trade or authorize settlement. Slack delivery and state persistence are not atomic; an interrupted delivery can duplicate a later notification. Workflow retries and saved execution payloads are disabled. Instance logs follow hosting policy. Audit rows require retention management. Verity account limits and n8n hosting costs apply.

## 🔗 Nodes Used

Slack, Schedule Trigger, Data table, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
