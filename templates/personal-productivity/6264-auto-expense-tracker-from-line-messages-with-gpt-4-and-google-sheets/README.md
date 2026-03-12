# ⚡ Auto expense tracker from LINE messages with GPT-4 and Google Sheets

> ⚡ **813 views** · ⚡ [Personal Productivity](../)

## Description

![截圖 20250723 14.35.00.png](fileId:1839)
# Overview
Do you often forget to record expenses?

你是不是會常常忘記紀錄花費?

Let Spending Tracker Bot help you!

讓 Spending Tracker Bot 來幫你!

This AI image/text Spending Tracker LINE Bot Workflow allows you to quickly create a customized spending tracker robot without writing a line of code. At any time, you can speak or send a photo, and the AI will parse it and automatically log the expense to your cloud ledger.

這套 AI 圖片文字記帳 LINE Bot Workflow ，讓你不用寫一行程式碼，就能快速打造一個量身訂製的記帳機器人。無論何時，只需要口述或發送一張照片，AI 就會幫你整理好自動計入雲端帳本

<br />

# Preparation
① Enable the Google Sheets API in GCP and complete the OAuth setup
② Create the Google Sheet and populate the field names (Feel free to modify based on your own needs)
③ Configure the Webhook URL in the LINE Developers Console
④ OpenAI API Key

① 在 GCP 啟用 Google Sheets API，並完成 OAuth 
② 建立並填好 Google Sheet 欄名 (按照自己的需求做更動）
③ 於 LINE Developers 控制台設定 Webhook URL
④ OpenAI API Key

<br />

# Node Configurations

## Webhook
![1753178215306.jpg](fileId:1829)
![1753178274098.jpg](fileId:1831)
Purpose: The URL is used to receive incoming requests from LINE.
Configuration: Paste this URL into the Webhook URL field in your LINE Developers Console.

用途: 要接收 Line 的 URL
設定: 將 URL 放到 Line Webhook URL

## Switch based on Expense Type & Set/Https
![截圖 20250723 14.35.05.png](fileId:1837)
Purpose: To distinguish whether the incoming message is text or an image.
Configuration: Use a Switch node to route the flow accordingly.

用途: 區分 text 或 image
設定: switch 分流

## AI Agent
![截圖 20250722 17.55.27.png](fileId:1826)
Purpose: To extract and organize the required fields.
Configuration: Chat Model & Structured Output Parser.

用途: 整理出需要的欄位
設定: Chat Model & Structured Output Parser

## Create a deduplication field
Purpose: To prevent duplicate entries by creating a unique "for_deduplication" field.
Configuration: Join multiple field names using hyphens (-) as separators.

用途: 確保不會重複寫入，先創建一個"去重使用"欄位
設定: 用 - 連接多個欄位

## Aggregrate & Merge_all
![截圖 20250722 17.53.55.png](fileId:1827)
Purpose: To prevent duplicate entries in the data table.
Configuration: Read the Google sheet, extract the existing "for_deduplication" column into a dedupeList, and compare it against the newly generated "for_deduplication" value from the previous step.

用途: 防止重複寫入資料表
設定：讀取雲端表，將原本的"去重使用欄位"整理成dedupeList，與前一步整理好的"去重使用"欄位做比對

## Response Switch
![截圖 20250723 14.33.55.png](fileId:1838)
Purpose: To route data and send appropriate replies based on the content.
Configuration: Use the replyToken to respond after branching logic. Depending on the result, either write to the data table or return a message:
1. ✅ Expense recorded successfully: &lt;for_deduplication&gt;
2. Irrelevant details or images will not be logged.
3. ⚠️ This entry has already been logged and will not be duplicated.

用途: 資料分流，回應訊息
設定：使用 replyToken ，資料分流後，寫入資料表或回應訊息
1. ✅ 記帳成功 : &lt;去重使用欄位&gt;
2. 不相關明細或圖片，不會計入
3. ⚠️ 此筆資料已記錄過，不會重複記帳 
![截圖 20250723 14.29.32.png](fileId:1835)
![截圖 20250723 14.29.41.png](fileId:1834)
![截圖 20250723 14.29.08.png](fileId:1836)

<br />

## Step by step teaching notes
[【Auto Expense Tracker from LINE Messages with GPT-4 and Google Sheets】](https://hackmd.io/@workcata/r1g-6TpUxe)

[【AI 圖片文字記帳 Line Bot，自動記帳寫入 Google Sheet】](https://hackmd.io/@workcata/Hkz3O7PLxl)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
