# 🔬 Ingest Excel data into Oracle and chat with it using Select AI and Azure OpenAI

> ⚡ **137 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Overview

This n8n workflow template enables querying Excel data stored in an Oracle Database using natural language powered by **Oracle Select AI**.

The solution consists of **two workflows**:

- **Workflow A** uploads an Excel file, creates a table in Oracle Database, inserts the data, and registers the table with Oracle Select AI.
- **Workflow B** provides a chat interface that allows users to query the uploaded data using natural language.

User questions are translated into SQL by Oracle Select AI, executed directly in the database, and returned as query results.

# Features

- **Natural language queries** – Ask questions in plain English  
- **AI-powered SQL generation** – Automatically converts questions to SQL using Oracle Select AI  
- **Real-time responses** – Queries run directly on Oracle Database  
- **Secure by design** – Data never leaves Oracle Database  
- **Chat UI support** – Built-in chat interface when the workflow is public  
- **API-ready** – Can be used as a REST API endpoint  

# Prerequisites

## Oracle Database

- **Oracle Database 23ai or later** (required for Select AI)
- Database user with the following privileges:
  - `CREATE TABLE`
  - `INSERT`
  - `EXECUTE` on `DBMS_CLOUD_AI`

Oracle Select AI supports the following AI providers:
- OCI Generative AI
- OpenAI
- **Azure OpenAI (used in this template)**
- Google Gemini

## Azure OpenAI

- Active **Azure OpenAI** resource
- Deployed GPT model (for example: `gpt-4`, `gpt-4o-mini`)
- Azure **resource name** and **deployment name**

## Oracle Credential for Azure OpenAI

Create an Oracle credential to securely store the Azure OpenAI API key:

```sql
BEGIN
  DBMS_CLOUD.CREATE_CREDENTIAL(
    credential_name =&gt; 'AZURE_OPENAI_CRED',
    username        =&gt; 'azure_openai',
    password        =&gt; 'YOUR_AZURE_OPENAI_API_KEY'
  );
END;
/
```
## Select AI Configuration

In **Workflow A**, update the Select AI configuration node with your environment details:
```
{
  "profile_name": "EXCEL_AI",
  "provider": "azure",
  "azure_resource_name": "YOUR_RESOURCE_NAME",
  "azure_deployment_name": "YOUR_MODEL_DEPLOYMENT",
  "credential_name": "AZURE_OPENAI_CRED",
  "table_name": "AUTO_GENERATED"
}
```
**Note**:
The table name is generated automatically during upload and should not be modified manually.

# Usage
### Upload Excel File (Workflow A)

Upload an Excel file using the webhook endpoint:
```
curl -X POST \
  -F "file=@your-file.xlsx" \
  https://your-n8n-instance.com/webhook/upload-excel
```
**Expected Response**
```
{
  "success": true,
  "tableName": "UPLOAD_EXCEL_20260209123456789",
  "columns": ["ID", "NAME", "AGE", "CITY", "SALARY"],
  "rowCount": 150,
  "selectAIProfile": "EXCEL_AI",
  "message": "Excel file successfully ingested and registered with Oracle Select AI",
  "nextSteps": [
    "Query your data using: SELECT AI EXCEL_AI &lt;your question&gt;",
    "Example: SELECT AI EXCEL_AI show me the top 10 records by salary"
  ]
}
```
The returned *tableName* is used internally by **Workflow B** to scope chat queries to the correct dataset.

### Query Your Data with Select AI (Workflow B)

After the Excel file is uploaded and registered, you can query the data using natural language through Workflow B.

### Example Select AI Queries

After uploading an Excel file, you can query the data using natural language.

Examples:
- Show me the top 10 records by salary from EXCEL_UPLOAD_COMPANY_TABLE
- EXCEL_AI count records grouped by city EXCEL_UPLOAD_TRAVEL_TABLE
- What is the average salary per department from EXCEL_UPLOAD_DEPT_TABLE

![n8n Query Examples](https://i.imgur.com/aYJKYhZ.png)

**Workflow B must be used together with Workflow A** and must be configured with the same:
- Oracle Database 
- Select AI profile name
- Azure OpenAI configuration

# References

Oracle Select AI Documentation
https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/select-ai-examples.html

Azure OpenAI Documentation
https://learn.microsoft.com/azure/ai-services/openai/

Oracle LiveLabs – Select AI Workshop
https://livelabs.oracle.com/ords/r/dbpm/livelabs/run-workshop?p210_wid=3831

## 🔗 Nodes Used

Webhook, Extract from File, Chat Trigger, Oracle Database

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
