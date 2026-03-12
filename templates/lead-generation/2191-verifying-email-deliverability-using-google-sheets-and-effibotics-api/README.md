# 🎣 Verifying email deliverability using  google sheets and Effibotics API

> ⚡ **1,795 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow helps marketers verify and update data using EffiBotics Email Verifier API.

Copy and create a list with emails as on this one https://docs.google.com/spreadsheets/d/1rzuojNGTaBvaUEON6cakQRDva3ueGg5kNu9v12aaSP4/edit#gid=0

The trigger checks for any updates in the number of rows that are present in  a sheet and updates the verified emails on Google sheets

Once you update a new cell, the new data is read, and the email is checked for its validity before. The results are then updated in real-time on the sheet.

Happy Emailing!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
