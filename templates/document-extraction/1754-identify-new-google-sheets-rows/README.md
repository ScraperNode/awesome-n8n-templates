# 🔬 Identify new Google Sheets rows

> ⚡ **4,838 views** · 🔬 [Document Extraction & Analysis](../)

## Description

![image.png](fileId:652)

This workflow identifies new rows in Google Sheets using a separate column keeping track of already processed rows.

For this approach to work, the sheet needs to meet two requirements:
- A unique identifier for each row is required
- A column used to differentiate new/processed rows is present

Our example sheet looks like this:

![image.png](fileId:649)

So the row identifier is named `ID`, the new/processed column is called `Processed`. Update the workflow accordingly if your columns have different names.

Now if the workflow runs, it discovers all three rows as new. After processing them, it will add a timestamp to the Processed column:

![image.png](fileId:650)

The next time the workflow is executed it will skip the existing rows and only process newly added data:

![image.png](fileId:648)

![image.png](fileId:651)

## 🔗 Nodes Used

Google Sheets, Interval, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
