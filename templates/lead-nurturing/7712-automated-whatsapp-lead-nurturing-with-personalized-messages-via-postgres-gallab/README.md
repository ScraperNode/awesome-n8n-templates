# 💬 Automated WhatsApp lead nurturing with personalized messages via Postgres & Gallabox

> ⚡ **255 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# n8n Workflow: WhatsApp Lead Nurturing (MQL)

## 🔄 Purpose
This workflow **fetches unqualified leads** from Postgres at defined retry intervals, sends **personalized WhatsApp template messages** via Gallabox API, and **logs message activity** while updating lead status in the database.

---

## 🧩 Workflow Structure

1. **Schedule Trigger**
   - Type: `n8n-nodes-base.scheduleTrigger`
   - Runs the workflow automatically at set intervals (seconds-based).
   - Entry point of the workflow.

2. **Execute a SQL query**
   - Type: `n8n-nodes-base.postgres`
   - Fetches leads from `mql_contacts` that:
     - Have `count` = 0, 1, 2, or 3.
     - Respect time delays:  
       - `count=1` → after 3 minutes  
       - `count=2` → after 5 minutes  
       - `count=3` → after 8 minutes  
     - Must have `disposition = unqualified`.

3. **Loop Over Items4**
   - Type: `n8n-nodes-base.splitInBatches`
   - Iterates over each lead individually.
   - Ensures one-by-one processing.

4. **Code1**
   - Type: `n8n-nodes-base.code`
   - Selects message content based on:
     - Lead’s **model** (`nexus`, `magnus`, `reo`, `general`).
     - Current **count** (0–3).
   - Ensures personalized, varied message text.

5. **new_lead_4**
   - Type: `n8n-nodes-base.httpRequest`
   - Sends WhatsApp template message through Gallabox API.
   - Dynamic fields:
     - Lead’s **name** and **phone**.
     - **Message details** selected from Code1.
     - Quick reply buttons: *Show Brochure*, *Get Showroom Location*, *Not Interested*.

6. **Insert rows in a table4**
   - Type: `n8n-nodes-base.postgres`
   - Inserts a record into `mql_logs`.
   - Captures:
     - Phone, name, disposition.
     - Message count, message_id, timestamps.
     - Gallabox API response (status, code).

7. **Update rows in a table4**
   - Type: `n8n-nodes-base.postgres`
   - Updates `mql_contacts`:
     - Increments **count** by 1.
     - Updates **last_message_sent** timestamp.
     - Matches using phone number.

8. **Sticky Notes**
   - Provide inline documentation:
     - SQL query purpose.
     - Message matrix explanation.
     - Gallabox API role.
     - Postgres update/logging details.

---

## ⚙️ Data Flow Summary

- **Trigger** → Runs every X seconds  
- **SQL Query** → Fetches eligible leads (unqualified, retry intervals)  
- **Loop** → Processes each lead sequentially  
- **Code1** → Chooses personalized message based on model & count  
- **HTTP Request** → Sends WhatsApp template via Gallabox  
- **Insert Log** → Stores activity in `mql_logs`  
- **Update Contact** → Updates count & last sent in `mql_contacts`  
- **Cycle repeats** until all leads are processed  

---

## 📊 Use Case
- Automates **WhatsApp drip campaigns** for unqualified leads.  
- Respects retry intervals to avoid spamming.  
- Uses **personalized message variations** based on product model & retry count.  
- Provides full traceability with logs and lead updates.

## 🔗 Nodes Used

HTTP Request, Postgres, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
