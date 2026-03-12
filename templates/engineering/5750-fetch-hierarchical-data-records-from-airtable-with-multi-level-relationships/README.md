# ⚒️ Fetch hierarchical data records from Airtable with multi-level relationships

> ⚡ **245 views** · ⚒️ [Engineering](../)

## Description

# Airtable Hierarchical Record Fetcher

## Description

This n8n workflow retrieves an Airtable record along with its related child records in a hierarchical structure. It can fetch up to 3 levels of linked records and assembles them into a comprehensive JSON object, making it ideal for complex data relationships and nested record structures.

## Features

- **Multi-level Record Fetching**: Retrieves parent record, linked child records (level 2), and optionally grandchild records (level 3)
- **API Call Optimization**: Uses Airtable's `filterByFormula` to minimize API calls by fetching multiple related records in single requests
- **Selective Level 3 Fetching**: Only fetches level 3 records for specified linked fields to optimize performance
- **Rich Text Processing**: Converts Airtable's pseudo-markdown rich text fields to HTML format
- **Hierarchical JSON Output**: Organizes all data in a structured, nested JSON format
- **Flexible Configuration**: Customizable depth and field selection per execution

## Input Parameters

The workflow accepts a JSON array with the following structure:

```json
[
  {
    "base_id": "appN8nPMGoLNuzUbY",
    "table_id": "tblLVOwpYIe0fGQ52", 
    "record_id": "reczMh1Pp5l94HdYf",
    "level_3": [
      "fldRaFra1rLta66cD",
      "fld3FxCaYk8AVaEHt"
    ],
    "to_html": true
  }
]
```

### Parameter Details

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `base_id` | string | Yes | Airtable base identifier |
| `table_id` | string | Yes | Airtable table identifier for the main record |
| `record_id` | string | Yes | Airtable record identifier to fetch |
| `level_3` | array | No | Array of field IDs from level 2 records for which to fetch level 3 children |
| `to_html` | boolean | No | Convert rich text fields from pseudo-markdown to HTML (default: false). This requires `marked` npm package. |

## Output Structure

The workflow returns a hierarchical JSON object with the following structure:

```json
{
   "id": "recXXXXXXX",
   "field_1": ...,
   "field_2": ...,
   "level2_child": [
      {
         "id": "recXXXXXXX",
         "field_a": ...,
         "field_b": ...,
         "level3_child": [
            {
               "id": "recXXXXXXX",
               "field_y": ...,
               "field_z": ...,
            },
            ...
         ]
      },
      ...
   ]
}
```

## 🔗 Nodes Used

Airtable, HTTP Request, Execute Workflow Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
