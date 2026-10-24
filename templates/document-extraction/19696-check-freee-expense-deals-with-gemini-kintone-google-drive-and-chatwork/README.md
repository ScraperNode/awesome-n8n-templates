# 🔬 Check freee expense deals with Gemini, kintone, Google Drive and Chatwork

> ⚡ **22 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily and pulls recent expense deals from freee, asks Google Gemini to flag anything unusual, logs the deal and AI comment to kintone, archives a JSON summary to Google Drive, and notifies your accounting team in Chatwork.

## How it works
1. Runs every day at 9:00 on a scheduled trigger.
2. Loads configuration values (freee company ID, kintone app details, Gemini model, Google Drive folder ID, and Chatwork room ID).
3. Fetches up to 50 expense deals from freee for the previous day (or the last three days when run on Monday).
4. Sends the first returned deal’s date, amount, and account item ID to Google Gemini and generates a short Japanese review comment.
5. Creates a kintone record containing the deal details and the Gemini comment.
6. Uploads a JSON file with the same summary into a specified Google Drive folder.
7. Posts a message to a Chatwork room with the deal details and AI comment to notify the accounting team.

## Setup
1. Connect credentials for freee (OAuth2), Google Gemini (API key via header auth), kintone (API token via header auth), Google Drive (OAuth2), and Chatwork (X-ChatWorkToken via header auth).
2. Update the Config values with your freee company ID, kintone subdomain and app ID, Chatwork room ID, Gemini model name, and Google Drive folder ID.
3. Ensure your kintone app has field codes that match what the workflow sends (発行日, 金額, 取引ID, AI所見コメント, 勘定科目ID), or edit the request body to match your field codes.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
