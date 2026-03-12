# 🔬 Convert SQL table into Excel spreadsheet

> ⚡ **5,978 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow demonstrates how easy it is to export SQL query to Excel automatically!

![n8ncanvassmall.png](fileId:700)

Before running the workflow please make sure you have access to a remote SQL server (MS SQL, MySQL, PostgreSQL etc.) with a sample table:

```
Date,Band,ConcertName,Country,City,Location,LocationAddress,
2023-05-28,Ozzy Osbourne,No More Tours 2 - Special Guest: Judas Priest,Germany,Berlin,Mercedes-Benz Arena Berlin,"Mercedes-Platz 1, 10243 Berlin-Friedrichshain",
2023-05-08,Elton John,Farewell Yellow Brick Road Tour 2023,Germany,Berlin,Mercedes-Benz Arena Berlin,"Mercedes-Platz 1, 10243 Berlin-Friedrichshain",
2023-05-26,Hans Zimmer Live,Europe Tour 2023,Germany,Berlin,Mercedes-Benz Arena Berlin,"Mercedes-Platz 1, 10243 Berlin-Friedrichshain",
2023-07-07,Depeche Mode,Memento Mori World Tour 2023,Germany,Berlin,Olympiastadion Berlin,"Olympischer Platz 3, 14053 Berlin-Charlottenburg",

```

**The detailed process is explained in the tutorial**
[https://blog.n8n.io/export-sql-to-excel](https://blog.n8n.io/export-sql-to-excel)

## 🔗 Nodes Used

Spreadsheet File, MySQL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
