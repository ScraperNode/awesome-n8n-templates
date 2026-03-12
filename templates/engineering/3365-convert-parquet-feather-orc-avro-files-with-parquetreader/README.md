# ⚒️ Convert parquet, feather, ORC & Avro files with ParquetReader

> ⚡ **668 views** · ⚒️ [Engineering](../)

## Description

# 📄 Convert Parquet, Feather, ORC & Avro Files with ParquetReader

This workflow allows you to upload and inspect Parquet, Feather, ORC, or Avro files via the [ParquetReader API](https://parquetreader.com). It instantly returns a structured **JSON preview** of your data — including rows, schema, and metadata — without needing to write any custom code.

---

## ✅ Perfect For
- Validating schema and structure before syncing or transformation
- Previewing raw columnar files on the fly
- Automating QA, ETL, or CI/CD workflows
- Converting Parquet, Avro, Feather, or ORC to JSON

---

## ⚙️ Use Cases
- Catch schema mismatches before pipeline runs
- Automate column audits in incoming data files
- Enrich metadata catalogs with real-time schema detection
- Integrate file validation into automated workflows

---

## 🚀 How to Use This Workflow

#### 📥 Trigger via File Upload

You can trigger this flow by sending a `POST` request with a file using **curl**, **Postman**, or **from another n8n flow**.

#### 🔧 Example (via `curl`):
```bash
curl -X POST http://localhost:5678/webhook-test/convert \
-F "file=@converted.parquet"
```
&gt; Replace `converted.parquet` with your local file path. You can also send Avro, ORC or Feather files.

#### 🔁 Reuse from Other Flows
You can **reuse this flow** by calling the webhook from another n8n workflow using an **HTTP Request** node.  
Make sure to send the file as **form-data** with the field name `file`.

#### 🔍 What This Flow Does:
- Receives the uploaded file via webhook (`file`)
- Sends it to `https://api.parquetreader.com/parquet` as `multipart/form-data` (field name: `file`)
- Receives parsed data (rows), schema, and metadata in JSON format

---
## 🧪 Example JSON Response from this flow
```json
{
  "data": [
    {
      "full_name": "Pamela Cabrera",
      "email": "bobbyharrison@example.net",
      "age": "24",
      "active": "True",
      "latitude": "-36.1577385",
      "longitude": "63.014954",
      "company": "Carter, Shaw and Parks",
      "country": "Honduras"
    }
  ],
  "meta_data": {
    "created_by": "pyarrow",
    "num_columns": 21,
    "num_rows": 10,
    "serialized_size": 7598,
    "format_version": "0.12"
  },
  "schema": [
    { "column_name": "full_name", "column_type": "string" },
    { "column_name": "email", "column_type": "string" },
    { "column_name": "age", "column_type": "int64" },
    { "column_name": "active", "column_type": "bool" },
    { "column_name": "latitude", "column_type": "double" },
    { "column_name": "longitude", "column_type": "double" },
    { "column_name": "company", "column_type": "string" },
    { "column_name": "country", "column_type": "string" }
  ]
}

```
---

## 🔐 API Info
- Authentication: None required
- Supported formats: .parquet, .avro, .orc, .feather
- Free usage: No signup needed; API is currently open to the public
- Limits: Usage and file size limits may apply in the future (TBD)

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
