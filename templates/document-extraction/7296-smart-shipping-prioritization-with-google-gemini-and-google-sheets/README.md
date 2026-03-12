# 🔬 Smart shipping prioritization with Google Gemini and Google Sheets

> ⚡ **529 views** · 🔬 [Document Extraction & Analysis](../)

## Description

**How it works**
This template waits for an external button to be pressed via webhook, then reads a Google Sheet with pending shipments. The sheet contains the columns: idEnvio, fechaOrden, nombre, direccion, detalle, and enviado. It determines the next shipment using Google Gemini Flash 2.5, considering not only the date but also the customer’s comments. Once the next shipment is selected, the column “enviado” is updated with an X, and the shipping information is forwarded to Unihiker’s n8n Terminal.

**Setup**
Create a new Google Sheet and name it "Shipping".

Add the following column headers in the first row: idEnvio, fechaOrden, nombre, direccion, detalle, and enviado.

Connect your Google Sheets and Google Gemini credentials.

In your n8n workflow, select the Shipping sheet in the Google Sheets node.

Copy the webhook URL and paste it into the .ino code for your Unihiker n8n Terminal. 🚀

## 🔗 Nodes Used

Google Sheets, Webhook, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
