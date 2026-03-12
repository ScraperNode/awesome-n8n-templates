# ⚒️ Automated Airtable to Postgres migration with n8n

> ⚡ **191 views** · ⚒️ [Engineering](../)

## Description

##  Overview

This ETL system automates the process of migrating data from **Airtable** to **PostgreSQL** with a single API request.

* It maps your Airtable schema into a Postgres-compatible structure.
* Automatically creates new tables in your Postgres database.
* Migrates all the data while preserving formats and relationships.

&gt; ⚙️ Originally built in-house to help us migrate off Airtable after exceeding usage limits.

---

## 🔧 How It Works

1. Accepts **Airtable** and **Postgres** credentials via HTTP requests.
2. Authenticates both services and validates schema compatibility.
3. Fetches data from Airtable and maps each table and field to PostgreSQL equivalents.
4. Creates the necessary tables in your Postgres database.
5. Inserts all records in batches.
6. Returns a success response with summary stats.

&gt; **Bonus operations:** You can list or delete created tables using API endpoints.

---

## Setup Instructions (n8n Workflow)

### Step 1: Airtable Configuration

* Generate an **Airtable access token** from the [Airtable developer hub](https://airtable.com/developers/web/api).
* Copy your **Base ID** or URL.

### Step 2: PostgreSQL Configuration

* Gather your PostgreSQL connection details:

  * Host
  * Port
  * Database name
  * Username
  * Password

### Step 3: Deploy in n8n

* Import the workflow into your n8n instance.
* Use a simple HTTP request tool like `curl` or Postman to trigger migration actions.

---

##  API Endpoints & Payloads

Here are the available HTTP endpoints and how to use them.

---

### 1. Test Airtable Credentials

```bash
curl -X POST "https://n8n.com/webhook/123/validate-airtable" \
  -H "Content-Type: application/json" \
  -d '{
    "airtable": {
      "airtableId": "app12345",
      "airtableToken": "pjhy.iyhhs"
    }
  }'
```

### 2. Test PostgreSQL Credentials

```bash
curl -X POST "https://n8n.com/webhook/123/validate-postgres" \
  -H "Content-Type: application/json" \
  -d '{
    "postgres": {
      "host": "aws-0-us-west-1.pooler.supabase.com",
      "port": "6543",
      "user": "postgres.username",
      "password": "gamjgnrkxetb",
      "database": "postgres"
    }
  }'
```

---

### 3. Sync Airtable Data to Postgres

```bash
curl -X POST "https://n8n.com/webhook/123/sync" \
  -H "Content-Type: application/json" \
  -d '{
    "host": "aws-0-us-west-1.pooler.supabase.com",
    "port": "6543",
    "user": "postgres.username",
    "password": "gamjgnrkxetb",
    "database": "postgres",
    "airtableId": "app73PqALbM3AM0xN",
    "airtableToken": "patNCueRkrLI98fEq.9ae7f9786e9ad73ac21ca26d8046f08ad77e135ae950a6e2ff3760d85aca3db4",
    "action": "Move"
  }'
```

#### Expected Response:

```json
[
  {
    "statusCode": 200,
    "statusMessage": "Data migration successful",
    "recordsProcessed": 152,
    "tablesProcessed": 3
  }
]
```

---

### 4.List All Created Tables

```bash
curl -X POST "https://n8n.com/webhook/123/list-tables" \
  -H "Content-Type: application/json" \
  -d '{
    "postgres": {
      "host": "aws-0-us-west-1.pooler.supabase.com",
      "port": "6543",
      "user": "postgres.username",
      "password": "gamjgnrkxetb",
      "database": "postgres"
    }
  }'
```

---

### 5. Delete Migrated Tables

```bash
curl -X POST "https://n8n.com/webhook/123/delete-tables" \
  -H "Content-Type: application/json" \
  -d '{
    "postgres": {
      "host": "aws-0-us-west-1.pooler.supabase.com",
      "port": "6543",
      "user": "postgres.username",
      "password": "gamjgnrkxetb",
      "database": "postgres"
    }
  }'
```

---

## Technical Notes

* **Schema Mapping**: Field types from Airtable are mapped to PostgreSQL equivalents (e.g. `singleLineText → VARCHAR`, `number → INTEGER`, `checkbox → BOOLEAN`, etc.).
* **Linked Records**: Relationships in Airtable bases are resolved and converted into foreign key-friendly formats.
* **Batch Inserts**: Records are inserted in optimized chunks to improve performance and avoid payload limits.
* **Error Handling**: Invalid credentials, schema mismatches, or connection issues will return proper HTTP status codes and error messages.

---

##  Usage Scenarios

* Airtable to Postgres migration during scale-up.
* Backup or sync Airtable records to a SQL environment.
* Use Postgres-powered dashboards while editing in Airtable.

---

## Requirements

* Airtable Pro/Developer Account
* PostgreSQL database (e.g. Supabase, Render, or local instance)
* n8n instance with webhook exposure
* Basic familiarity with HTTP requests (`curl`, Postman, or integrations)

---

## Need Help?

Feel free to reach out via **LinkedIn** or **Email** if you need help adapting this workflow for your organization or extending it with extra transformations.

**Happy productivity!**

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
