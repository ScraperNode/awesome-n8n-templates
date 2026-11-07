# Retrieve active critical RMM alerts with Nizlo

> Read-only starter workflow for MSP and IT operations teams using self-hosted n8n.

## Description

This workflow manually retrieves up to 50 alerts that Nizlo currently reports as both `ACTIVE` and `CRITICAL`. It gives an operator a bounded starting point for review or for a downstream triage, ticketing, reporting, or notification step that the operator adds separately.

The workflow starts inactive and contains no credential. It does not send a message, create a ticket, run a script, patch or reboot an endpoint, open a remote session, or change Nizlo data.

## Prerequisites

1. A self-hosted n8n instance with community nodes enabled.
2. The public [`n8n-nodes-nizlo`](https://github.com/izikipizi/n8n-nodes-nizlo) package installed from its reviewed GitHub source. The package is not yet published on npm.
3. A Nizlo personal access token whose effective permissions include `alerts.view`. Effective access is the intersection of the token scope and the current role of the technician who created it; independent service accounts are not currently available.

The source repository documents the current GitHub installation path:

```bash
cd ~/.n8n/nodes
npm install github:izikipizi/n8n-nodes-nizlo
```

Restart n8n after installation and follow your own package-review and change-control process before using a third-party community node in production.

## How it works

1. **Run manually** starts the workflow only when an operator chooses to test it.
2. **Get active critical alerts** calls the read-only Nizlo Alerts list operation with `status: ACTIVE`, `severity: CRITICAL`, and a limit of 50.
3. n8n returns the matching alert items for inspection or a downstream step that you define.

## Setup

1. Download and import [`workflow.json`](workflow.json).
2. Review the sticky note and both executable nodes.
3. Create a local Nizlo credential in n8n with a least-privilege personal token.
4. Select that credential on **Get active critical alerts**.
5. Run the workflow manually in a non-production workspace and compare the returned alerts with the Nizlo console before adding any schedule or downstream action.

## Nodes used

- Manual Trigger
- Nizlo community node
- Sticky Note

## Source and maintenance disclosure

The canonical workflow source is maintained in the MIT-licensed [`n8n-nodes-nizlo` repository](https://github.com/izikipizi/n8n-nodes-nizlo/blob/main/examples/active-critical-alerts.json). Nizlo maintains the node and workflow, and contributor Kip Ecklund founded Nizlo. The initial implementation and documentation were AI-assisted and human-reviewed. This contribution is not an independent endorsement by n8n or by this template library.

For the exact read-only boundary, filters, release, and safe evaluation sequence, see the public [n8n RMM integration guide](https://izikipizi.github.io/nizlo-msp-operations-resources/n8n-rmm-integration.html).
