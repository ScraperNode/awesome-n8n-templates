# ⚒️ Fetch reliable FX exchange rates with Frankfurter and open.er-api

> ⚡ **6 views** · ⚒️ [Engineering](../)

## Description

### This workflow fetches foreign exchange (FX) rates using multiple public APIs.

It validates all inputs, queries providers sequentially, and merges results into a single enforced output schema. The workflow is designed to guarantee complete coverage for the requested currencies. If full coverage cannot be achieved, it fails explicitly instead of returning partial data.

An optional `trim` flag allows the final output to be limited to only the currencies originally requested.

## Who it’s for
This template is intended for developers and automation builders who need reliable FX rates as part of a larger workflow, such as reporting, pricing, analytics, or financial automation.

It can be used as a standalone workflow or reused as a sub-workflow via the Execute Workflow node.

## How it works
The workflow starts by validating and normalizing the input parameters. An internal FX state is initialized and acts as the single source of truth throughout execution. Optional static rates can be defined at this stage and always take precedence over provider data.

Rates are fetched from a primary provider first. After each provider call, coverage is checked to determine whether all requested currencies have been resolved. If coverage is complete, the workflow stops early.

If some currencies are still missing, a secondary provider is queried. If coverage is still incomplete after the fallback provider, the workflow fails.

When coverage is complete, the workflow optionally trims the output and returns the final FX payload.

## How to set up
- Provide a `baseCurrency` (ISO currency code).
- Provide a `currencies` array containing the currencies to fetch (ISO currency code).
- Set the `trim` flag to control whether the output is reduced to the requested currencies only.
- Run the workflow manually for testing, or call it from another workflow using the Execute Workflow trigger.

## How to customize the workflow
You can define static FX rates during the initialization step. Static rates always override provider results and can be used for fixed or pegged currencies.

Additional FX providers can be added by cloning the provider fetch nodes and connecting them to the existing coverage and error-handling logic.

## Requirements
- None. The workflow uses public APIs and does not require authentication or paid services.

## 🔗 Nodes Used

HTTP Request, Stop and Error, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
