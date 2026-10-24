# ⚒️ ETL Pipeline for Oracle

> ⚡ **0 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
A configurable ETL pipeline and data sync tool for Oracle database replication and data integration. On a schedule, it finds only the rows changed since the last run — an incremental sync — adjusts them if needed, and updates the target to match. It moves just the changes, not everything.

## How it works
1. Runs every 30 seconds on a schedule.
2. Loads a configuration that defines the batch size and the list of source and target Oracle tables to sync.
3. Splits the configuration into one item per table and reads the last saved watermark for each table from workflow static data.
4. For each table, queries the Oracle Database for rows with a watermark column value greater than the saved watermark, ordered by the watermark and limited to the configured batch size.
5. Builds an Oracle MERGE (upsert) SQL statement from the fetched rows and calculates the new maximum watermark from the returned data.
6. Executes the MERGE against the target Oracle table to insert new rows and update existing rows by primary key.
7. After a successful merge, stores the new per-table watermark in workflow static data and continues to the next table.

## Setup
1. Create and select an Oracle Database credential for the source and target connections (use two credentials if source and target are different databases).
2. Update the table mapping in the configuration to match your environment (source table name, target table name, primary key column, and watermark column).
3. Ensure each source table has a DATE/TIMESTAMP watermark column that is updated on changes and that the target tables exist with matching column names.
4. Adjust the batch size and schedule interval as needed, then activate the workflow so the schedule trigger runs.

## Requirements
- Oracle Database credentials: Configure an Oracle Database credential in n8n for the source. If the target is a different database, configure a second credential for it.
- Watermark column: Each source table needs a reliably increasing DATE/TIMESTAMP column (e.g. UPDATED_AT) — a trigger that stamps it on insert/update works well.
- Matching schema: Source and target tables should share the same column names, and each table needs a primary key plus at least one non-key column.

## Additional info
Instructions

- Add your Oracle Database credentials to the Extract Changes (source) and Load & Merge (target) nodes.
- In the Config node, set batchSize and list your tables (name, targetName, watermarkColumn, pkColumn).
- Add any column mapping or type casting you need in the Build Merge (transform) node.
- Activate the workflow. It will begin polling on the schedule and sync changed rows into the target.
- Test on one small table first, then widen the table list once you've confirmed rows propagate correctly.


Use Case

- Ideal for teams that need to keep a reporting, analytics, or replica Oracle database current from a live source without standing up dedicated CDC tooling — incremental, multi-table replication driven entirely from n8n.

Note: This is polling-based, so latency roughly equals the schedule interval. Hard deletes in the source are not propagated (use a soft-delete flag column if you need them). The sync cursor is stored in workflow static data, which resets if the workflow is re-imported — for production, persist watermarks in a dedicated control table instead.

Nodes in Use

- Every 30s (Schedule Trigger): Runs the pipeline on a fixed interval.
- Config (Code): Central settings — batchSize and the list of tables to sync.
- Fan Out Tables (Code): Emits one item per table and attaches each table's last watermark from stored state.
- Loop Over Tables (Loop Over Items): Processes tables one at a time.
- Extract Changes (Oracle Database): Selects rows changed since the watermark from the source table.
- Build Merge (Code): Transform stage — shapes the rows and assembles the Oracle MERGE statement.
- Load & Merge (Oracle Database): Executes the upsert against the target table.
- Advance Watermark (Code): Persists the new high-water-mark for the table after a successful load.
- Cycle Done (No Operation): Marks the end of a full pass over all tables.

## 🔗 Nodes Used

Schedule Trigger, Oracle Database

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
