# 💬 Line Message API : push message & reply

> ⚡ **10,339 views** · 💬 [Support Chatbots](../)

## Description

# Workflow Description
This workflow demonstrates how to use the **LINE Messaging API** to handle two scenarios:
1. Replying to a user's message using a **reply token**.
2. Sending a **push message** to a specific LINE user using their **user ID**.

---

## Key Features
1. **Webhook Integration**: Receives and processes incoming messages from LINE using a webhook.
2. **Conditional Logic**: Checks if the received event type is a message and handles it accordingly.
3. **Reply Message**: Automatically responds to the user's message using the LINE reply token.
4. **Push Message**: Sends a test message to a specific LINE user using their unique user ID.

---
## Pre-Configuration
To simplify the setup process, create a **Header Auth** credential in n8n:
- **Name**: `Authorization`
- **Value**: `Bearer {line token}`  
This will authenticate all API requests to the LINE Messaging API.
---

## Node Configurations

### 1.1. Webhook from LINE Message
- **Purpose**: Captures incoming events from the LINE Messaging API.
- **Configuration**:
  - **HTTP Method**: `POST`
  - **Path**: `{n8n-webhook-page}`

---

### 1.2. If Condition
- **Purpose**: Checks if the received event type is `message`.
- **Configuration**:
  - **Condition**:
    - `{{ $json.body.events[0].type }} equals "message"`

---

### 1.3. Line: Reply with Token
- **Purpose**: Replies to the user's message using the LINE reply token.
- **Configuration**:
  - **Method**: `POST`
  - **URL**: `https://api.line.me/v2/bot/message/reply`
  - **JSON Body**:
    ```json
    {
      "replyToken": "{{ $('Webhook from Line Message').item.json.body.events[0].replyToken }}",
      "messages": [
        {
          "type": "text",
          "text": "收到您的訊息 : {{ $('Webhook from Line Message').item.json.body.events[0].message.text }}"
        }
      ]
    }
    ```

---

### 2.1. Manual Trigger: Test Workflow
- **Purpose**: Triggers the workflow for testing the push message functionality.
- **Configuration**: No additional setup required.

---

### 2.2. Edit Fields
- **Purpose**: Prepares the unique LINE user ID for the push message.
- **Configuration**:
  - **Field**:
    - `line_uid`: `Uxxxxxxxxxxxx`

---

### 2.3. Line: Push Message
- **Purpose**: Sends a test message to a specific LINE user.
- **Configuration**:
  - **Method**: `POST`
  - **URL**: `https://api.line.me/v2/bot/message/push`
  - **JSON Body**:
    ```json
    {
      "to": "{{ $json.line_uid }}",
      "messages": [
        {
          "type": "text",
          "text": "推播測試"
        }
      ]
    }
    ```

---

# 工作流程描述
此工作流程展示如何使用 **LINE Messaging API** 處理兩種情境：
1. 使用 **reply token** 回應使用者的訊息。
2. 使用使用者的 **user ID** 發送 **推播訊息**。

---

## 主要功能
1. **Webhook 整合**：透過 Webhook 接收並處理來自 LINE 的訊息。
2. **條件邏輯**：檢查接收到的事件類型是否為訊息並進行處理。
3. **回應訊息**：使用 LINE 的 reply token 自動回覆使用者的訊息。
4. **推播訊息**：使用 LINE User ID 向指定用戶發送測試訊息。

---


## 預先設定
為簡化設定流程，請在 n8n 中建立 **Header Auth** 憑證：
- **名稱**：`Authorization`
- **值**：`Bearer {line token}`  
此設定將用於認證所有 LINE Messaging API 的請求。
---

## 節點設定

### 1.1. Webhook from LINE Message
- **用途**：接收來自 LINE Messaging API 的事件。
- **設定**：
  - **HTTP 方法**：`POST`
  - **路徑**：`{n8n-webhook-page}`

---

### 1.2. If 條件判斷
- **用途**：檢查接收到的事件類型是否為 `message`。
- **設定**：
  - **條件**：
    - `{{ $json.body.events[0].type }} 等於 "message"`

---

### 1.3. Line: Reply with Token
- **用途**：使用 LINE reply token 回應使用者訊息。
- **設定**：
  - **方法**：`POST`
  - **URL**：`https://api.line.me/v2/bot/message/reply`
  - **JSON 主體**：
    ```json
    {
      "replyToken": "{{ $('Webhook from Line Message').item.json.body.events[0].replyToken }}",
      "messages": [
        {
          "type": "text",
          "text": "收到您的訊息 : {{ $('Webhook from Line Message').item.json.body.events[0].message.text }}"
        }
      ]
    }
    ```

---

### 2.1. 手動觸發：測試工作流程
- **用途**：測試推播訊息功能。
- **設定**：無需額外設定。

---

### 2.2. Edit Fields
- **用途**：準備推播訊息所需的 LINE 使用者 ID。
- **設定**：
  - **欄位**：
    - `line_uid`：`Uxxxxxxxxxxxx`

---

### 2.3. Line: 推播訊息
- **用途**：向特定 LINE 使用者發送測試訊息。
- **設定**：
  - **方法**：`POST`
  - **URL**：`https://api.line.me/v2/bot/message/push`
  - **JSON 主體**：
    ```json
    {
      "to": "{{ $json.line_uid }}",
      "messages": [
        {
          "type": "text",
          "text": "推播測試"
        }
      ]
    }
    ```

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
