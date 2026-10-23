# 🔬 Extract bank statement transactions from PDFs to Google Sheets with Google Drive and Gemini

> ⚡ **29 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Accountants, freelancers and small businesses in Latin America who copy bank statement transactions by hand.

## How it works
1. Drop a statement PDF into a Google Drive folder.
2. The workflow downloads it and extracts the text.
3. Google Gemini returns every transaction as JSON (date, description, amount, debit/credit, balance), handling both 1.234,56 and 1,234.56 formats.
4. Each transaction is appended as a row in Google Sheets.
5. Always check totals against the original statement.

## Setup
1. Add Google Drive, Google Sheets and Google Gemini credentials (free API key from https://aistudio.google.com/apikey).
2. Pick the folder in the trigger.
3. Create a sheet with headers: Fecha | Descripcion | Importe | Tipo | Saldo | Archivo, and select it in the Sheets node.
4. Text-based PDFs only (run OCR first for scans).
5. Activate the workflow once the credentials are added.

## Requirements
- n8n (cloud or self-hosted) and a Google account. The default model (gemini-3.5-flash-lite) is on the Gemini API free tier, so it runs at no cost within the free rate limits (free-tier data may be used by Google to improve its products; switch to a paid key for sensitive statements).

## Customization
- Change the model or prompt in "IA: leer movimientos"
- Swap the trigger for Gmail attachments
- Add a category column to the prompt

## Additional info
Text-based PDFs only (run OCR first for scans). Always check totals against the original statement.

Made by Agente Diario — daily AI & agents newsletter in Spanish: https://agentediario.beehiiv.com/subscribe?utm_source=n8n

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Drive Trigger, Filter, Extract from File, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
