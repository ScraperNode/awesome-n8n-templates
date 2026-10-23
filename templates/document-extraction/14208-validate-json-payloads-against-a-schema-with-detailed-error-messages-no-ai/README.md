# 🔬 Validate JSON payloads against a schema with detailed error messages (no AI)

> ⚡ **273 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## What is this?

A modular schema checker that returns detailed error messages on validation failure.

Stop your workflows from breaking due to bad input. This subworkflow validates incoming JSON against a schema you define and returns clear, human readable errors before anything has the chance to break.

The most common use: a webhook receives data, you validate it, and either continue or return a `400` with exactly what was wrong. This is how production APIs handle input validation, and this template brings that same reliability to webhooks in n8n.

Works anywhere you need to check data: webhook payloads, form submissions, API requests, or LLM outputs.

**Supports:** type checks, required fields, enums, regex patterns, numeric ranges, array constraints, conditional logic (`oneOf` / `anyOf` / `allOf`), and rejection of unknown fields.

## Why use this?

Bad input breaks workflows and is a nightmare to debug. This catches it upfront so you can error fast, fail safe, and return useful messages instead of breaking down.

It also makes a self documenting API. The error messages are _so clear_ that the caller doesn't even need to check docs, they're given the fix right in the error.

## How it works

Call this workflow via an **Execute Sub-Workflow** node with two params:

- **`requiredSchema`** - the JSON Schema defining what valid data looks like
- **`paramsToValidate`** - the actual JSON to check (for instance, `$json.body`)

`requiredSchema` must be an expression wrapped in `{{ }}` to be treated like an object.

Returns `{ valid: true }` on success. On failure, returns `valid: false` with a `validationError` string and the full `requiredSchema` so you know exactly what went wrong and what was expected.

_see the "Usage Example" in the template_

### Example error output

```
Validation failed (3 issues):
• name: Missing required field "name" - Customer full name
• email: "not-an-email" is not valid - expected: Contact email address
• plan: "premium" is not an allowed value. Must be one of: starter, pro, enterprise
```

Every error includes the field path, what went wrong, and the description from your schema.

## Don't know JSON Schema?

The template includes a **prompt template sticky note**. Copy it into any LLM chat with an example of your data and it'll generate a ready-to-use schema for you.

## Quick start

1. Add an **Execute Sub-Workflow** node pointing to this workflow
2. Set `requiredSchema` to `={{ your_schema_here }}`
3. Set `paramsToValidate` to `={{ $json.body }}`
4. Route on `valid`: `true` continues, `false` handles the error

## 🔗 Nodes Used

Webhook, Execute Sub-workflow, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
