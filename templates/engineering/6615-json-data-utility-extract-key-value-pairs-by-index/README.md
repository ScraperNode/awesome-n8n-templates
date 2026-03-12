# ⚒️ JSON data utility: extract key-value pairs by index

> ⚡ **190 views** · ⚒️ [Engineering](../)

## Description

## Extract a key–value pair by index from JSON to fields in n8n

This template takes a JSON object and a **row index** and returns exactly one **key–value pair** at that index. It’s a handy helper when you only need a single entry from a structured JSON payload (e.g., picking one form field for downstream logic).

## Who’s it for
- Makers who want a quick **JSON picker** without writing full parsing logic.
- Developers testing API payloads or building **proofs of concept**.
- Ops/analysts who need to **pluck a single field** for emails, documents or notifications.

## How it works
1. **Manual Trigger** (`When clicking ‘Test workflow’`) starts the flow.
2. **Set → Input JSON Node** holds your sample payload with:
   - `myData`: an object of key → value pairs.
   - `rowIndex`: a 0‑based index indicating which pair to extract.
3. **Code (Python) → Find Key‑Value Pair** iterates `myData` and returns `[key, value]` at `rowIndex` as `result`.
4. **Set → Key** maps `result[0]` to a field named `result`.
5. **Set → Value** maps `result[1]` to a field named `result[1]`.
6. The selected **key** and **value** are then available to any downstream nodes.

## How to set up
1. Open the workflow and select **Input JSON Node**.
2. Replace the sample with your own JSON:
   ```json
   {
     "myData": { "name": "Alice", "age": "30", "city": "Paris" },
     "rowIndex": "1"
   }
   ```
3. Click **Execute Workflow**. Check the **Key** and **Value** nodes for the outputs.

## Requirements
- n8n running (cloud or self‑hosted).
- **Code node (Python)** enabled in your n8n version.
- Input payload structure:
  - `myData`: object with keys/values
  - `rowIndex`: integer (0‑based)

## How to customize
- **Pick by key name** (instead of index): adjust the Python code to look up a specific key.
- **Handle nested objects/arrays**: walk or flatten the structure before selecting.
- **Change output shape**: return `{ "key": ..., "value": ... }` or write directly to next‑node fields.
- **Validate inputs**: add checks for out‑of‑range `rowIndex`, non‑object `myData`, or empty objects.

## Add‑ons
- **Webhook intake**: Replace Manual Trigger with a Webhook to accept live JSON.
- **Schema guard**: Add an If/Function step to ensure `myData` is an object and `rowIndex` is numeric.
- **Audit log**: Append the selected key/value to Google Sheets or a database.

## Use Case Examples
- Pull one field from a large API response to include in an **email**.
- Extract a specific answer from a **form submission** for conditional routing.
- Read a configuration pair from a **settings object** to control a downstream step.

## Common troubleshooting
| Issue | Possible Cause | Solution |
|---|---|---|
| “Index out of range” | `rowIndex` is larger than the number of keys | Use a valid 0‑based index; add a guard in the Code node to clamp or default. |
| Wrong key returned | Object key **order** differs from expectations | Object key order isn’t guaranteed across sources—prefer **pick by key name** for reliability. |
| Empty/invalid output | `myData` is not an object or is empty | Ensure `myData` is a flat object with at least one key. |
| Python errors | Code node’s Python runtime not available | Enable Python in the Code node or convert the snippet to JavaScript. |
| Value type mismatch | Value isn’t a string | Cast as needed in the Set node or normalize types in the Code node. |

## Need Help?
If you’d like this to **pick by key**, handle **nested JSON**, accept data via **Webhook** or fully customized to your needs, write to us and we’ll adapt the template to your exact use case.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
