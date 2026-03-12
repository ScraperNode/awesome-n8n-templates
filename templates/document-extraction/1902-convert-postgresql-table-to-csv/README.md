# 🔬 Convert PostgreSQL table to CSV

> ⚡ **3,182 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Convert PostgreSQL table to CSV
CSV is a super useful and universal way to transfer data between different tools. This workflow gives an example of how to take data from PostgreSQL and convert it easily into a CSV.

## What you need
Before running the workflow, please make sure you have access to a remote PostgreSQL server and have table data:

```
book_title,book_author,read_date
Demons,Fyodor Dostoyevsky,2022-09-08
Ulysses,James Joyce,2022-05-06
Catch-22,Joseph Heller,2023-01-04
The Bell Jar,Sylvia Plath,2023-01-21
Frankenstein,Mary Shelley,2023-02-14
```
## How it works
1. Trigger the workflow on click
2. Declare the name of the Excel file and sheet names
3. Remotely connect to the PostgreSQL database and specify query execution 
4. Write the query data to CSV 

The detailed process is explained further in the tutorial:
[https://blog.n8n.io/postgres-export-to-csv/](https://blog.n8n.io/postgres-export-to-csv/)

## 🔗 Nodes Used

Postgres, Spreadsheet File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
