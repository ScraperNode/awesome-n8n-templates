# 📊 TW-Request-Agri data open platform-daily market sheep pricing

> ⚡ **603 views** · 📊 [Market Research & Insights](../)

## Description

This workflow automates the process of fetching agricultural transaction data from the **Taiwan Agricultural Products Open Data Platform** and storing it in a **Google Sheets document** for further analysis.

## Key Features
1. **Manual Trigger**: Allows manual execution of the workflow to control when data is fetched.
2. **HTTP Request**: Sends a request to the Open Data Platform's API to retrieve detailed transaction data, including:
   - Pricing (Upper, Middle, Lower, Average)
   - Transaction quantities
   - Crop and market details
3. **Split Out Node**: Processes each record individually, ensuring accurate handling of every data entry.
4. **Google Sheets Integration**: Appends the data into a structured Google Sheets document for easy access and analysis.


---

## Node Configurations

### 1. **Manual Trigger**
- **Purpose**: Start the workflow manually.
- **Configuration**: No setup needed.

### 2. **HTTP Request**
- **Purpose**: Fetch agricultural data.
- **Configuration**:
  - **URL**: `https://data.moa.gov.tw/api/v1/SheepQuotation`
  - **Query Parameters**:
    - `Start_time`: `2024/12/01`
    - `End_time`: `2024/12/31`
    - `MarketName`: `台北二`
    - `api_key`: `&lt;your_api_key&gt;`
  - **Headers**:
    - `accept`: `application/json`

### 3. **Split Out**
- **Purpose**: Split the API response data array into individual items.
- **Configuration**:
  - **Field to Split Out**: `Data`

### 4. **Google Sheets**
- **Purpose**: Append the data to Google Sheets.
- **Configuration**:
  - **Operation**: `Append`
  - **Document ID**: `&lt;your_document_id&gt;`
  - **Sheet Name**: `Sheet1`
  - **Mapped Fields**:
    - `TransDate`, `TcType`, `CropCode`, `CropName`, `MarketCode`, `MarketName`
    - `Upper_Price`, `Middle_Price`, `Lower_Price`, `Avg_Price`, `Trans_Quantity`


---

此 **Workflow** 從 **台灣農業產品開放資料平臺** 獲取農產品交易數據，並將其儲存到 **Google Sheets 文件** 中進行進一步分析。

## 主要功能
1. **Manual Trigger**：允許手動執行工作流程，以控制數據獲取的時間。
2. **HTTP Request**：向開放資料平臺的 API 發送請求，獲取詳細的交易數據，包括：
   - 價格 (Upper, Middle, Lower, Average)
   - 交易數量
   - 作物和市場詳細資料
3. **Split Out Node**：逐筆處理每一筆記錄，確保數據準確無誤。
4. **Google Sheets Integration**：將數據追加到結構化的 Google Sheets 文件中，方便存取和分析。

---

## 節點設定

### 1. **Manual Trigger**
- **用途**：手動啟動工作流程。
- **設定**：無需額外設定。

### 2. **HTTP Request**
- **用途**：抓取農產品數據。
- **設定**：
  - **URL**: `https://data.moa.gov.tw/api/v1/SheepQuotation`
  - **查詢參數 (Query Parameters)**：
    - `Start_time`: `2024/12/01`
    - `End_time`: `2024/12/31`
    - `MarketName`: `台北二`
    - `api_key`: `&lt;your_api_key&gt;`
  - **標頭 (Headers)**：
    - `accept`: `application/json`

### 3. **Split Out**
- **用途**：將 API 回應的數據陣列分解為個別項目。
- **設定**：
  - **Field to Split Out**: `Data`

### 4. **Google Sheets**
- **用途**：將數據追加至 Google Sheets。
- **設定**：
  - **Operation**：`Append`
  - **Document ID**：`&lt;your_document_id&gt;`
  - **Sheet Name**：`Sheet1`
  - **映射欄位 (Mapped Fields)**：
    - `TransDate`, `TcType`, `CropCode`, `CropName`, `MarketCode`, `MarketName`
    - `Upper_Price`, `Middle_Price`, `Lower_Price`, `Avg_Price`, `Trans_Quantity`

請多利用 Curl Import 功能
例如
```language
curl -X GET "https://data.moa.gov.tw/api/v1/AgriProductsTransType/?Start_time=114.01.01&End_time=114.01.01&MarketName=%E5%8F%B0%E5%8C%97%E4%BA%8C" -H "accept: application/json"
```

[農業資料開放平台 文件](https://data.moa.gov.tw/api.aspx)

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
