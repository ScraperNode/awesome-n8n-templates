# 📖 Generate BigQuery SQL from natural language queries using GPT-4o chat

> ⚡ **2,320 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

Give business users a chat box; get back **valid BigQuery SQL** and live query results.  
The workflow:

1. **Captures** a plain-language question from a chat widget or internal portal.  
2. **Fetches** the current **table + column schema** from your BigQuery dataset (via `INFORMATION_SCHEMA`).  
3. **Feeds** both the schema and the question to **GPT-4o** so it can craft a syntactically correct SQL query *using only fields that truly exist*.  
4. **Executes** the AI-generated SQL in BigQuery and returns the results.  
5. **Stores** a short-term memory by session, enabling natural follow-up questions.

Perfect for analysts, customer-success teams, or any stakeholder who needs data without writing SQL.

---

#### ⚙️ Setup Instructions

1. **Import the workflow**  
   - n8n → **Workflows → Import from File** (or **Paste JSON**) → **Save**

2. **Add credentials**  
   | Service | Where to create credentials | Node(s) to update |
   |---------|----------------------------|-------------------|
   | **OpenAI** | &lt;https://platform.openai.com&gt; → Create API key | **OpenAI Chat Model** |
   | **Google BigQuery** | Google Cloud Console → IAM & Admin → Service Account JSON key | **Google BigQuery** (schema + query) |

3. **Point the schema fetcher to your dataset**  
   - In **Google BigQuery1** you’ll see:  
     ```sql
     SELECT table_name, column_name, data_type
     FROM `n8nautomation-453001.email_leads_schema.INFORMATION_SCHEMA.COLUMNS`
     ```  
   - Replace **`n8nautomation-453001.email_leads_schema`** with **`YOUR_PROJECT.YOUR_DATASET`**.  
   - Keep the rest of the query the same—BigQuery’s `INFORMATION_SCHEMA` always surfaces `table_name`, `column_name`, and `data_type`.

4. **Update the execution node**  
   - Open **Google BigQuery** (the second BigQuery node).  
   - In **Project ID** select your project.  
   - The **SQL Query** field is already `{{ $json.output.query }}` so it will run whatever the AI returns.

5. **(Optional)Embed the chat interface**  

6. **Test end-to-end**  
   - Open the embedded chat widget.  
   - Ask: *“How many distinct email leads were created last week?”*  
   - After a few seconds the workflow will return a table of results—or an error if the schema lacks the requested fields.
   - As specific questions about your data

8. **Activate**  
   - Toggle **Active** so the chat assistant is available 24/7.



#### 🧩 Customization Ideas
- **Row-limit safeguard**: automatically append `LIMIT 1000` to every query.  
- **Chart rendering**: send query results to Google Sheets + Looker Studio for instant visuals.  
- **Slack bot**: forward both the question and the SQL result to a Slack channel for team visibility.  
- **Schema caching**: store the INFORMATION_SCHEMA result for 24 hours to cut BigQuery costs.

---

### Contact
- **Email:** rbreen@ynteractive.com  
- **Website:** https://ynteractive.com  
- **YouTube:** https://www.youtube.com/@ynteractivetraining  
- **LinkedIn:** https://www.linkedin.com/in/robertbreen

## 🔗 Nodes Used

Google BigQuery, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
