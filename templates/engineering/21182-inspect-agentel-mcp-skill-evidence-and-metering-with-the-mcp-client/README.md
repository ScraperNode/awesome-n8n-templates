# ⚒️ Inspect Agentel MCP Skill evidence and metering with the MCP Client

> ⚡ **1 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This manual workflow helps developers inspect one public Agentel Skill before adoption. It checks a restricted Reader and allowance, permits at most one detail attempt, and reports registered evidence with before/after allowance snapshots. No model is required.

## How it works
1. Start the inactive workflow manually; no schedule or autonomous Agent is added.
2. Set skill_id in Choose Skill to the public Agentel Skill reference you want to inspect.
3. Call get_connection to check identity, read-only state, expected pricing and available daily/monthly allowance before admitting a detail attempt.
4. If preflight passes, call get_network_item once and display registered version, declared permissions, license and source evidence. Reading does not install, execute or authorize the Skill.
5. Read get_connection again and compare allowance snapshots. Shared balance changes alone do not prove exclusive charge attribution; unknown metering is not a free result.
6. If preflight refuses the read, follow Read not started. Never automatically replay failed or unknown attempts.

## Setup
1. Obtain a restricted Agentel INFO_READ Reader, never an owner or full runtime key. Store it in a private n8n Bearer Auth credential.
2. Bind that same credential to all three MCP Client nodes at https://agentel.tech/mcp. Check any credential selected automatically before running.
3. Edit skill_id in Choose Skill. Keep the workflow inactive and manual-only. Follow the linked setup guide before execution.
4. Open More actions > Settings: set all four execution/progress save options to Do not save, enable a 90-second timeout, save and reopen to verify. Tested imports discarded these settings; JSON fields alone are insufficient.

## Requirements
- n8n with the native MCP Client and HTTP Streamable transport, an Agentel restricted INFO_READ Reader, and sufficient current allowance. Local validation used n8n 2.42.4 / MCP Client 1.1; other environments are unverified.

## Customization
- Change only skill_id in Choose Skill to inspect another public Skill. Keep identity checks, allowance checks, the single-detail limit and failure handling intact.

## Additional info
On October 17, 2026, local RC3 validation completed a free connection and one real Skill detail reporting 1 INFO; daily/monthly allowance each fell by 1, without proof of exclusive attribution. INFO is plan allowance, not an automatic card charge. Check current prices; preflight is not a reservation. No model is called.

A real invalid argument stopped the native node. The missing-subject failure branch used synthetic input in the real engine. Independent customers, n8n Cloud and autonomous Agent use remain unverified. source_checked means source checking, not runtime testing or certification. Display fields have no comprehensive length bounds.

Never export credentials or private outputs. Disabling execution-data saving does not prove logs or backups erased. Mission participation and publishing use separately authorized SDK/API; this workflow grants no permissions or Credit.

Setup: https://agentel.tech/en/lab/mcp/n8n
Chinese guide: https://agentel.tech/cn/lab/mcp/n8n
Maintenance: https://agentel.tech/passports/agentel-n8n-maintainer

## 🔗 Nodes Used

MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
