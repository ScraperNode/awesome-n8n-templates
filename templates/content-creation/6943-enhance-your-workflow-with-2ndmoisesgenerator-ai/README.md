# 🎬 Enhance your workflow with 2Ndmoises_Generator AI

> ⚡ **371 views** · 🎬 [Content Creation & Video](../)

## Description

# Enhance Your Workflow with 2Ndmoises_Generator AI

This n8n workflow integrates with **Replicate’s `moicarmonas/2ndmoises_generator` model** to generate custom outputs based on your prompt. It handles authentication, triggers the prediction, monitors progress, and processes the final result automatically.

---

## 📌 Section 1: Trigger & Authentication

### ⚡ On Clicking ‘Execute’ (Manual Trigger)

* Purpose: Start the workflow manually whenever you want to run it.
* Benefit: Great for testing or running on-demand without needing automation.

### 🔑 Set API Key (Set Node)

* Purpose: Stores your **Replicate API key** in the workflow.
* How it works: Adds your API key as a variable that other nodes can reference.
* Benefit: Keeps credentials secure and reusable.

---

## 📌 Section 2: Sending the AI Request

### 📤 Create Prediction (HTTP Request Node)

* Purpose: Sends a request to the Replicate API to start generating output with the model.
* Input Parameters:

  * **prompt** (text you provide)
  * **seed** (for reproducibility)
  * **width / height / lora\_scale** (generation settings)
* Benefit: Allows full customization of the AI’s generation process.

### 🆔 Extract Prediction ID (Code Node)

* Purpose: Pulls out the **Prediction ID** and **status** from the API response.
* Why important: The ID is required to check the job’s progress later.
* Benefit: Automates polling without manual tracking.

---

## 📌 Section 3: Polling & Waiting

### ⏳ Wait (Wait Node)

* Purpose: Adds a short pause (2 seconds) between checks.
* Benefit: Prevents hitting the API too quickly and avoids errors.

### 🔄 Check Prediction Status (HTTP Request Node)

* Purpose: Calls Replicate again to ask if the prediction is finished.
* Benefit: Automates progress monitoring without manual refresh.

### ✅ Check If Complete (If Node)

* Purpose: Decides whether the model has finished generating.
* Paths:

  * **True** → Move on to processing the result.
  * **False** → Go back to Wait and recheck.
* Benefit: Ensures the workflow loops until a final output is ready.

---

## 📌 Section 4: Handling the Result

### 📦 Process Result (Code Node)

* Purpose: Cleans up the final API response and extracts:

  * Status
  * Output (generated result)
  * Metrics
  * Timestamps (created\_at / completed\_at)
  * Model info
* Benefit: Provides a structured, ready-to-use output for other workflows or integrations.

---

## 📊 Workflow Overview Table

| Section           | Node Name               | Purpose                      |
| ----------------- | ----------------------- | ---------------------------- |
| 1. Trigger & Auth | On Clicking ‘Execute’   | Starts the workflow manually |
|                   | Set API Key             | Stores API credentials       |
| 2. AI Request     | Create Prediction       | Sends request to Replicate   |
|                   | Extract Prediction ID   | Gets prediction ID + status  |
| 3. Polling        | Wait                    | Adds delay before recheck    |
|                   | Check Prediction Status | Monitors progress            |
|                   | Check If Complete       | Routes based on completion   |
| 4. Result         | Process Result          | Extracts and cleans output   |
| Notes             | Sticky Note             | Explains setup + model info  |

---

## 🎯 Key Benefits

* 🔐 **Secure authentication** using Set node for API key storage.
* 🤖 **Hands-free generation** — just provide a prompt, the workflow handles everything else.
* 🔄 **Automated polling** ensures you always get the final result without manual checking.
* 📦 **Clean structured output** ready for downstream use in apps, dashboards, or notifications.

---

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
