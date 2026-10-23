# 📁 Organize VNTANA showroom assets by style and color via webhook and CSV report

> ⚡ **6 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow receives a VNTANA showroom event (or a manual UUID) via webhook, fetches the showroom, validates naming and metadata rules, reorganizes products into ordered groups, updates the showroom in VNTANA, and returns a CSV report of the new layout.

## How it works
1. Receives a POST webhook containing either a `showroomUuid` field or a VNTANA showroom event payload with `showroom.uuid`.
2. Validates and extracts the showroom UUID from the request body.
3. Calls the VNTANA API to fetch the full showroom details and product list.
4. Enforces organization rules by requiring a `Style` attribute on every product, a `<style>_<color>.ext` filename pattern, and unique color codes within each style group, then builds grouped and sorted ordering data.
5. Updates the same showroom in VNTANA by writing the computed groups and per-product order back via the API.
6. Generates a CSV “receipt” listing each asset UUID, name, assigned group, and order, and returns it as a downloadable file in the webhook response.

## Setup
1. Create and configure a VNTANA API credential in n8n and assign it to the VNTANA API requests.
2. Ensure showroom assets in VNTANA have a non-empty `Style` attribute and follow the `<style>_<color>.ext` naming pattern with unique color codes per style.
3. If triggering from VNTANA, register a VNTANA webhook that POSTs the showroom event to this workflow’s webhook URL, or manually POST `{ "showroomUuid": "..." }` to test.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
