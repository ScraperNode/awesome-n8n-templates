# ⚒️ Compare lists and identify common items & differences using custom keys

> ⚡ **436 views** · ⚒️ [Engineering](../)

## Description

This workflow compares two lists of objects (List A and List B) using a user-specified key (e.g. `email`, `id`, `domain`) and returns:

- Items common to both lists (based on the key)
- Items only in List A
- Items only in List B

### How it works:
1. Accepts a JSON input containing:
   - `listA`: the first list of items
   - `listB`: the second list of items
   - `key`: the field name to use for comparison
2. Performs a field-based comparison using the specified key
3. Returns a structured output:
   - `common`: items with matching keys (only one version retained)
   - `onlyInA`: items found only in List A
   - `onlyInB`: items found only in List B

### Example Input:
```json
{
  "key": "email",
  "listA": [
    { "email": "alice@example.com", "name": "Alice" },
    { "email": "bob@example.com", "name": "Bob" }
  ],
  "listB": [
    { "email": "bob@example.com", "name": "Bobby" },
    { "email": "carol@example.com", "name": "Carol" }
  ]
}
```

### Output:
- `common`: `[ { "email": "bob@example.com", "name": "Bob" } ]`
- `onlyInA`: `[ { "email": "alice@example.com", "name": "Alice" } ]`
- `onlyInB`: `[ { "email": "carol@example.com", "name": "Carol" } ]`

### Use Cases:
- Deduplicate data between two sources
- Find overlapping records
- Identify new or missing entries across systems

This workflow is useful for internal data auditing, list reconciliation, transaction reconciliation, or pre-processing sync jobs.

## 🔗 Nodes Used

Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
