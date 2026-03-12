# 💬 Message buffer system with Redis for efficient processing

> ⚡ **2,204 views** · 💬 [Support Chatbots](../)

## Description

## 🚀 Message-Batching Buffer Workflow (n8n)

**This workflow implements a lightweight message-batching buffer using Redis for temporary storage and a JavaScript consolidation function to merge messages.** It collects incoming user messages per session, waits for a configurable inactivity window or batch size threshold, consolidates buffered messages via custom code, then clears the buffer and returns the combined response—all without external LLM calls.

---

### 🔑 Key Features

* **Redis-backed buffer** queues incoming messages per `context_id`.
* **Centralized Config Parameters** node to adjust thresholds and timeouts in one place.
* **Dynamic wait time** based on message length (configurable `minWords`, `waitLong`, `waitShort`).
* **Batch trigger** fires on inactivity timeout or when `buffer_count` ≥ `batchThreshold`.
* **Zero-cost consolidation** via built-in JavaScript Function (`consolidate buffer`)—no GPT-4 or external API required.

---

### ⚙️ Setup Instructions

1. **Extract Session & Message**

   * Trigger: `When chat message received` (webhook) or `When clicking ‘Test workflow’` (manual).
   * Map inputs: set variables `context_id` and `message` into a Set node named **Mock input data** (for testing) or a proper mapping node in production.

2. **Config Parameters**

   * Add a Set node **Config Parameters** with:

     ```
     minWords: 3         # Word threshold
     waitLong: 10        # Timeout (s) for long messages
     waitShort: 20       # Timeout (s) for short messages
     batchThreshold: 3   # Messages to trigger batch early
     ```
   * All downstream nodes reference these JSON values dynamically.

3. **Determine Wait Time**

   * Node: **get wait seconds** (Code)
   * JS code:

     ```js
     const msg = $json.message || '';
     const wordCount = msg.split(/\s+/).filter(w =&gt; w).length;
     const { minWords, waitLong, waitShort } = items[0].json;
     const waitSeconds = wordCount &lt; minWords ? waitShort : waitLong;
     return [{ json: { context_id: $json.context_id, message: msg, waitSeconds } }];
     ```

4. **Buffer Message in Redis**

   * **Buffer messages**: `LPUSH buffer_in:{{$json.context_id}}` with payload `{text, timestamp}`.
   * **Set buffer\_count increment**: `INCR buffer_count:{{$json.context_id}}` with TTL `{{$json.waitSeconds + 60}}`.
   * **Set last\_seen**: record `last_seen:{{$json.context_id}}` timestamp with same TTL.

5. **Check & Set Waiting Flag**

   * **Get waiting\_reply**: if null, **Set waiting\_reply** to `true` with TTL `{{$json.waitSeconds}}`; else exit.

6. **Wait for Inactivity**

   * **WaitSeconds** (webhook): pauses for `{{$json.waitSeconds}}` seconds before batch evaluation.

7. **Check Batch Trigger**

   * **Get last\_seen** and **Get buffer\_count**.
   * IF `(now - last_seen) ≥ waitSeconds * 1000` OR `buffer_count ≥ batchThreshold`, proceed; else use **Wait** node to retry.

8. **Consolidate Buffer**

   * **consolidate buffer** (Code):

     ```js
     const j = items[0].json;
     const raw = Array.isArray(j.buffer) ? j.buffer : [];
     const buffer = raw.map(x =&gt; {
       try { return typeof x === 'string' ? JSON.parse(x) : x;
       } catch { return null; }
     }).filter(Boolean);
     buffer.sort((a, b) =&gt; new Date(a.timestamp) - new Date(b.timestamp));
     const texts = buffer.map(e =&gt; e.text?.trim()).filter(Boolean);
     const unique = [...new Set(texts)];
     const message = unique.join(' ');
     return [{ json: { context_id: j.context_id, message } }];
     ```

9. **Cleanup & Respond**

   * **Delete** Redis keys: `buffer_in`, `buffer_count`, `waiting_reply`, `last_seen` (for the `context_id`).
   * Return consolidated `message` to the user via your chat integration.

---

### 🛠 Customization Guidance

* **Adjust thresholds** by editing the **Config Parameters** node.
* **Change concatenation** (e.g., line breaks) by modifying the `join` separator in the consolidation code.
* **Add filters** (e.g., ignore empty or system messages) inside the consolidation Function.
* **Monitor performance**: for very high volume, consider sharding Redis keys by date or user segments.

---

© 2025 Innovatex • Automation & AI Solutions • [innovatexiot.carrd.co](https://innovatexiot.carrd.co/) • [LinkedIn](https://www.linkedin.com/in/edisson-andres-garcia-herrera-63a91517b/)

## 🔗 Nodes Used

Redis, Execute Workflow Trigger, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
