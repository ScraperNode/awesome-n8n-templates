# 🔬 Transform and validate webhook records with configurable type conversion

> ⚡ **25 views** · 🔬 [Document Extraction & Analysis](../)

## Description

A **self-contained data transformation workflow** that runs entirely inside n8n. No external APIs, no credentials, no third-party services required. Send records via webhook, get transformed and validated data back.

Unlike CRM-specific import workflows, this template is a **standalone data transformer** you can place in front of any system: ERP, CRM, database, or API.

### Who is this for?
Teams that regularly import data from external sources (suppliers, partners, legacy systems) and need to normalize field names, convert types, and validate records before loading into any target system.

### How it works
1. **Receive Data**: A webhook accepts a POST request with an array of records (JSON) or a single record
2. **Configure Mapping**: A Set node defines the field mapping rules, source field, target field, data type, default value, and whether the field is required
3. **Transform Records**: A Code node applies all mappings: renames fields, converts types (string, number, boolean, date with locale support), fills in defaults, and validates required fields
4. **Return Result**: The webhook responds with transformed records and a validation report listing any errors per row

### Key features
- **Zero dependencies**: No credentials, no external services needed
- **Locale-aware type conversion**: Handles comma decimals (`12,50`), German dates (`DD.MM.YYYY`), and `ja/nein` booleans
- **Validation report**: Returns per-row errors for required fields and failed type conversions
- **Flexible input**: Accepts `{ records: [...] }` arrays or single objects

### Setup
1. Activate the workflow
2. Edit the **Configure Field Mapping** node to define your mappings
3. POST your data to the webhook URL

### How to customize
- Add or remove field mappings in the Set node
- Set `removeUnmappedFields` to true to strip fields not in the mapping
- Set `trimStrings` to true to auto-trim whitespace
- Set `emptyStringToNull` to convert empty strings to null values
- Adjust `dateInputFormat`, `dateOutputFormat`, and `decimalSeparator` for your locale
- Connect downstream nodes (database, API, email) after the response to process the output

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
