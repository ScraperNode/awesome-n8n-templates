# 🤝 Sync Salesforce leads and opportunities to PostgreSQL with backfill and incremental ETL

> ⚡ **98 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Salesforce Leads & Opportunities to PostgreSQL (Backfill & Incremental Sync ETL)

This workflow extracts Lead and Opportunity data from Salesforce, transforms and normalizes the data, and loads it into PostgreSQL as a structured data bank for reporting and analytics.

It is designed for scalable data ingestion and supports both historical backfill and incremental sync in a single workflow.

---

### Use Case

This workflow is suitable when you need to:

- Centralize Salesforce data into a database for reporting
- Build a data warehouse for BI tools (Looker Studio, Metabase, etc.)
- Track lead-to-opportunity lifecycle
- Merge multiple Salesforce objects into a unified dataset
- Maintain a clean and normalized CRM data layer

---

### Two Input Modes

#### 1. Historical Backfill (Manual Trigger)

Run once to populate historical data.

- Set start_date and end_date in the "Set Historical Date Range" node
- Data is split into 7-day batches
- Each batch is processed sequentially to reduce API load

---

#### 2. Incremental Sync (Schedule Trigger)

Runs automatically (e.g. daily).

- Date range is generated dynamically using ISO datetime
- Typically pulls data from yesterday until today
- No manual input required

---

### Batch Processing

Date ranges are processed in weekly batches.

This helps:
- Prevent large API requests
- Reduce timeout risk
- Improve stability during backfill
- Keep memory usage efficient

---

### Core Workflow Logic

#### 1. Data Extraction
- Fetch Lead records from Salesforce
- Fetch Opportunity records from Salesforce
- Filter using CreatedDate (since_datetime and until_datetime)

---

#### 2. Phone-Based Routing

Records are split into two paths:

- Records without phone:
  - Skip normalization
  - Still included in final dataset

- Records with phone:
  - Processed for normalization
  - Used for merging

This ensures no data is lost even if phone is missing.

---

#### 3. Phone Normalization (+62)

Phone numbers are standardized into:

+62XXXXXXXXXX

Steps:
- Remove spaces and symbols
- Remove all non-digit characters
- Convert 0xxxx → 62xxxx
- Ensure no duplicated prefix (e.g. 6262)
- Add "+" prefix

This uses Indonesia's International Direct Dialing (IDD) code: +62

---

#### 4. Opportunity De-duplication

- Duplicate opportunities are removed
- Based on normalized phone key

This ensures clean merging and avoids duplicate enrichment.

---

#### 5. Lead–Opportunity Merge

Merge is done using normalized phone fields:

- body.nomorlead
- body.nomoroppty

Behavior:
- Lead is the primary dataset
- Opportunity enriches lead

Records without phone:
- Still preserved
- Not removed

---

#### 6. Data Standardization

All records are transformed into a unified schema:

- Source_Object
- SF_Id
- CreatedDate
- CreatedById
- Name
- Phone
- Clean_Phone
- Email
- LeadSource
- Status
- StageName
- OwnerId
- AccountId
- Amount

---

#### 7. Upsert to PostgreSQL

- Uses UPSERT (insert or update)
- Matching key: sf_id

Behavior:
- New data → insert
- Existing data → update

Ensures:
- No duplicate records
- Idempotent execution

---

### Data Flow Summary

Salesforce (Lead + Opportunity)
→ Date Filtering
→ Batch Processing (weekly)
→ Phone Routing
→ Phone Normalization (+62)
→ Opportunity Deduplication
→ Lead–Opportunity Merge
→ Data Standardization
→ PostgreSQL (Upsert)

---

### Setup Requirements

Before using this workflow, prepare the following:

#### 1. Salesforce
- Salesforce OAuth2 credential
- Access to:
  - Lead object
  - Opportunity object
- Ensure API access is enabled

---

#### 2. PostgreSQL
- Active PostgreSQL database
- Credentials configured in n8n
- Table created (see schema below)

---

#### 3. n8n Environment
- n8n instance (cloud or self-hosted)
- Salesforce node configured
- PostgreSQL node configured

---

#### 4. Date Configuration (Backfill)
- Set start_date and end_date manually in:
  "Set Historical Date Range" node

---

#### 5. Schedule Configuration (Incremental)
- Configure Schedule Trigger
- Recommended:
  - Daily execution
  - Off-peak hours

---

### Minimal PostgreSQL Table Schema

CREATE TABLE n8n_salesforce_data (
  sf_id TEXT PRIMARY KEY,
  Source_Object TEXT,
  CreatedDate TIMESTAMP,
  CreatedById TEXT,
  Name TEXT,
  Phone TEXT,
  Clean_Phone TEXT,
  Email TEXT,
  LeadSource TEXT,
  Status TEXT,
  StageName TEXT,
  OwnerId TEXT,
  AccountId TEXT,
  Amount NUMERIC,
  synced_at TIMESTAMP DEFAULT NOW()
);

---

### Important Notes

- sf_id is used as the unique key for upsert
- Clean_Phone is recommended for indexing if used in analytics
- Data consistency depends on phone normalization quality
- Schema must be updated manually if additional fields are added

---

### Known Limitations

- Phone-based matching may fail if:
  - Phone numbers are inconsistent
  - Phone is missing in both Lead and Opportunity

- No deduplication for Leads (only Opportunities handled)

- No retry logic for API failures (can be added)

---

### Recommended Improvements

- Add index on Clean_Phone for faster queries
- Add logging table for monitoring ETL runs
- Add retry and error handling nodes
- Extend support for:
  - Contact
  - Account
  - Campaign data

---

### Summary

This workflow provides a reliable and scalable way to:

- Extract Salesforce data
- Normalize and merge datasets
- Store structured data in PostgreSQL
- Enable analytics and reporting pipelines

It is best suited for teams building a lightweight data warehouse layer on top of Salesforce.

## 🔗 Nodes Used

Postgres, Salesforce, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
