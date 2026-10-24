# ⚒️ Route AI queries cost‑efficiently with GPT‑4o‑mini, GPT‑4o and confidence scoring

> ⚡ **32 views** · ⚒️ [Engineering](../)

## Description

This workflow implements a **cost-optimized AI routing system** using n8n. It intelligently decides whether a request should be handled by a **low-cost model** or escalated to a **higher-quality model** based on response confidence.

The goal is to **minimize LLM usage costs while maintaining high answer quality**.

A query is first processed by a cheaper model. The response is then evaluated by a confidence-scoring AI agent. If the response quality is insufficient, the workflow automatically escalates the request to a more capable model.

This approach is useful for building scalable AI systems where **most queries can be answered cheaply**, while complex queries still receive high-quality responses.

---

## How It Works

1. **Webhook Trigger**
   - Receives a user query from an external application.

2. **Workflow Configuration**
   - Defines parameters such as:
     - confidence threshold
     - cheap model cost
     - expensive model cost

3. **Cheap Model Response**
   - The query is first processed using `GPT-4o-mini` to minimize cost.

4. **Confidence Evaluation**
   - An AI agent analyzes the response quality.
   - It evaluates accuracy, completeness, clarity, and relevance.

5. **Structured Output Parsing**
   - The evaluator returns structured data including:
     - confidence score
     - explanation
     - escalation recommendation.

6. **Decision Logic**
   - If the confidence score is below the configured threshold, the workflow escalates the request.

7. **Expensive Model Escalation**
   - The query is reprocessed using `GPT-4o` for a higher-quality answer.

8. **Cost Calculation**
   - Token usage is analyzed to estimate:
     - total cost
     - cost difference between models.

9. **Final Response Formatting**
   - The workflow returns:
     - AI response
     - model used
     - confidence score
     - escalation status
     - estimated cost.

---

## Setup Instructions

1. Create an **OpenAI credential** in n8n.

2. Configure the following nodes:
   - `Cheap Model (GPT-4o-mini)`
   - `Expensive Model (GPT-4o)`
   - `OpenAI Chat Model` used by the confidence evaluator agent.

3. Adjust configuration values in the **Workflow Configuration node**:
   - `confidenceThreshold`
   - `cheapModelCostPer1kTokens`
   - `expensiveModelCostPer1kTokens`

4. Deploy the workflow and send requests to the **Webhook URL**.

Example webhook payload:

```json
{
  "query": "Explain how photosynthesis works."
}

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
