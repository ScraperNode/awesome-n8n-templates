# ⚒️ Import CSV files from filesystem into Postgres

> ⚡ **5,923 views** · ⚒️ [Engineering](../)

## Description

-- Disclaimer: This template is mainly made for self-hosted users who can reach CSV files in their file system. For Cloud users, just replace the first few nodes with your file system of choice, like Google Drive or Dropbox --

## How to automatically import CSV files into postgres

### 1、project description
This workflow demonstrates how CSV file can be automatically imported into existing PostgreSQL database.
![Import CSV into PostgreSQL.png](fileId:957)

Before running the workflow please make sure you have a file on the server:
```
/tmp/t1.csv
```

The name of the test database is db01, and you can replace it.

then create table t1
```
create table t1(id int,name varchar(10));
```


And the content of the file is the following:
|id|name|
|-|-|-|
|1|a|
|2|b|
|3|c|


### 2、Other
If you want to import a custom csv file, please refer to the following methods.
#### 2.1、Create a table in the database
SQL Commands:
https://www.postgresql.org/docs/current/sql-createtable.html

#### 2.2、Upload csv file 
Upload csv file to N8N server and make sure it can be read.

## 🔗 Nodes Used

Postgres, Read Binary File, Spreadsheet File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
