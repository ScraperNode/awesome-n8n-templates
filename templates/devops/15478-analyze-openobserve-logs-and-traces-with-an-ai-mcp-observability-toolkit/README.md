# ⚙️ Analyze OpenObserve logs and traces with an AI MCP observability toolkit

> ⚡ **78 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# 🔎 AI Observability Toolkit for OpenObserve MCP Server (Logs + Traces)

An MCP server that exposes **10 specialized AI tools** for deep observability over your OpenObserve logs and traces.

Designed for AI agents to perform:

- Schema inspection  
- Error fingerprinting  
- Traffic anomaly detection  
- Latency profiling  
- Dependency bottleneck detection  
- Precise trace forensics  

This server transforms OpenObserve into a structured, AI-queryable observability engine.

---

# 🧠 Overview

Instead of giving an AI raw log access, this MCP server provides **purpose-built forensic tools**.

The AI can:

- Inspect available fields before writing queries
- Detect real root causes instead of duplicate errors
- Identify traffic spikes
- Profile p99 latency per operation
- Detect cold starts
- Identify slow dependencies
- Map exactly which span failed inside a trace
- Run flexible SQL queries on demand

---

# 🛠️ Exposed MCP Tools

---

## 1️⃣ Stream Schema Inspection

**Purpose:**  
Allows the AI to see available fields before constructing queries.

**What it does:**
- Executes `DESCRIBE default`
- Prevents hallucinated fields
- Enables safe query generation

---

## 2️⃣ Unique Error Fingerprinting

**Purpose:**  
Groups identical error messages to reveal true root causes.

**What it does:**
- Groups by `message`
- Counts occurrences
- Returns top recurring failures

---

## 3️⃣ Volume Trend Analysis

**Purpose:**  
Detects sudden spikes in log volume.

**What it does:**
- 1-minute histogram over `_timestamp`
- Surfaces abnormal traffic bursts
- Useful for detecting DDoS or recursive loops

---

## 4️⃣ Log Pattern Discovery

**Purpose:**  
Summarizes common log prefixes to understand normal behavior.

**What it does:**
- Groups by first 20 characters of `message`
- Helps anomaly detection
- Builds behavioral baseline

---

## 5️⃣ P99 Latency Analysis (Traces)

**Purpose:**  
Identifies the slowest 1% of operations.

**What it does:**
- Uses `approx_percentile_cont(duration, 0.99)`
- Groups by `operation_name`
- Surfaces performance outliers

---

## 6️⃣ Cold-Start Identification (Traces)

**Purpose:**  
Detects slow initialization spans.

**What it does:**
- Filters `operation_name = 'init'`
- Identifies unusually long startup spans
- Useful for serverless and containerized systems

---

## 7️⃣ Dependency Hotspots (Traces)

**Purpose:**  
Finds which external service causes the most delay.

**What it does:**
- Groups by `service_name`
- Calculates average duration
- Orders by slowest dependency

---

## 8️⃣ SQL Logs Query

**Purpose:**  
Flexible SQL execution for logs.

**What it does:**
- Accepts full SQL query
- Time-bounded search
- Supports root cause analysis, security auditing, performance debugging

---

## 9️⃣ Span Error Mapping (Traces)

**Purpose:**  
Pinpoints exactly which span failed inside a trace.

**What it does:**
- Filters spans where `status_code &gt;= 400`
- Requires `trace_id`
- Returns `span_id` and `operation_name`

---

## 🔟 SQL Traces Query

**Purpose:**  
Flexible SQL execution for trace data.

**What it does:**
- Accepts full SQL query
- Time-bounded search
- Enables advanced trace-level investigations

---

# ⚙️ Architecture Notes

- All tools are exposed via MCP Server Trigger
- Connected using `ai_tool` bindings
- Queries are time-bounded using `start_time` and `end_time`
- Uses HTTP Basic Auth for OpenObserve
- Logs endpoint: `/api/default/_search`
- Traces endpoint: `/api/default/_search?type=traces`

---

# 🚀 Use Cases

- Why did my API slow down in the last hour?
- What are the most common errors today?
- Which service dependency is causing latency?
- Show me where this trace failed.
- Is there abnormal traffic right now?

The AI can now answer all of these using your real telemetry.

## 🔗 Nodes Used

MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
