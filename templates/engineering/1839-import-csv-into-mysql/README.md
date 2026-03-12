# ⚒️ Import CSV into MySQL

> ⚡ **15,624 views** · ⚒️ [Engineering](../)

## Description

This workflow demonstrates how CSV file can be automatically imported into existing MySQL database.

![_25n8nworkflow.png](fileId:689)

Before running the workflow please make sure you have a file on the server:
```
/home/node/.n8n/concerts-2023.csv
```


And the content of the file is the following:

```
Date,Band,ConcertName,Country,City,Location,LocationAddress,
2023-05-28,Ozzy Osbourne,No More Tours 2 - Special Guest: Judas Priest,Germany,Berlin,Mercedes-Benz Arena Berlin,"Mercedes-Platz 1, 10243 Berlin-Friedrichshain",
2023-05-08,Elton John,Farewell Yellow Brick Road Tour 2023,Germany,Berlin,Mercedes-Benz Arena Berlin,"Mercedes-Platz 1, 10243 Berlin-Friedrichshain",
2023-05-26,Hans Zimmer Live,Europe Tour 2023,Germany,Berlin,Mercedes-Benz Arena Berlin,"Mercedes-Platz 1, 10243 Berlin-Friedrichshain",
2023-07-07,Depeche Mode,Memento Mori World Tour 2023,Germany,Berlin,Olympiastadion Berlin,"Olympischer Platz 3, 14053 Berlin-Charlottenburg",

```

**The detailed process is explained in the tutorial**
[https://blog.n8n.io/import-csv-into-mysql](https://blog.n8n.io/import-csv-into-mysql)

## 🔗 Nodes Used

Read Binary File, Spreadsheet File, MySQL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
