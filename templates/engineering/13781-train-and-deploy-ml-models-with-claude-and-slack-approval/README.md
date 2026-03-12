# ⚒️ Train and deploy ML models with Claude and Slack approval

> ⚡ **0 views** · ⚒️ [Engineering](../)

## Description

### What this workflow does

This workflow automates the full machine learning lifecycle end-to-end using Claude AI as the intelligent decision-maker at every stage. Send one HTTP request with a dataset URL and a business goal — and the pipeline handles everything from raw CSV to a human-approved, documented model ready for GitHub.

The pipeline runs in 5 sequential phases:

**Phase 1 — Strategy**
Claude Sonnet 4 receives the dataset URL, target variable, and business goal. It outputs a structured JSON plan covering feature ideas, algorithm choices, and the evaluation metric. A fallback parser ensures the pipeline continues even if the LLM output is slightly malformed.

**Phase 2 — Data Engineering**
The workflow fetches the CSV via HTTP Request and runs it through a custom quoted-field CSV parser (handles commas inside quoted name fields, common in datasets like Titanic). It drops rows with missing targets, imputes missing Age values, and encodes categorical columns (Sex, Embarked) into numeric form.

**Phase 3 — Feature Engineering**
Claude Haiku reviews the cleaned dataset and confirms the 3 best features to engineer. A Code node then creates `FamilySize` (SibSp + Parch + 1), `IsAlone` (binary flag), and `TitleEncoded` (extracted and mapped from passenger name). A row-count validation gate ensures no data is silently lost.

**Phase 4 — Training & Evaluation**
Three algorithms are trained from scratch in pure JavaScript — no external ML libraries required:
- **Logistic Regression** via gradient descent (200 epochs)
- **Random Forest** via 10 bagged decision stumps
- **XGBoost** via gradient boosting with residual-based stump selection

Precision, recall, F1, and accuracy are computed for each. Claude Sonnet then acts as an LLM judge: it reads all three result sets alongside the original business goal and selects the winner with a one-sentence justification. A deterministic fallback (highest F1) runs if the LLM response fails to parse.

**Phase 5 — HITL Deployment**
Claude Sonnet writes a structured `MODEL_CARD.md` covering model overview, performance metrics, training data summary, feature engineering decisions, intended use, and limitations. The full results are then posted to a Slack channel as a formatted approval request. A human can review the results and reply to approve or reject deployment.

An optional Supabase audit log records each phase transition with timestamp, phase name, status, and run ID.

---

### Tested results

Tested on the Titanic dataset (891 rows):

| Model | F1 Score | Accuracy |
|---|---|---|
| Logistic Regression | 0.712 | 0.787 |
| Random Forest | 0.739 | 0.804 |
| **XGBoost** | **0.761** | **0.821** |

Claude correctly identified XGBoost as the winner and generated a complete model card in under 10 seconds.

---

### What you need

| Requirement | Details |
|---|---|
| **Anthropic API key** | Used in P1, P4 (Claude Sonnet 4), and P3 (Claude Haiku). Get at console.anthropic.com |
| **Slack Bot Token** | OAuth bot token with `chat:write` scope. Bot must be invited to the target channel via `/invite @bot-name` |
| **Supabase project** *(optional)* | For audit logging. Replace `YOUR_PROJECT.supabase.co` and `YOUR_SUPABASE_SERVICE_ROLE_KEY` in the 5 log nodes, or delete them |
| **Public CSV URL** | The dataset must be reachable by your n8n instance via HTTP GET |

---

### Setup steps

1. Import the workflow JSON into your n8n instance
2. Add your **Anthropic API** credential and assign it to the 3 `lmChatAnthropic` nodes (P1, P3, P4)
3. Add your **Slack Bot Token** credential and assign it to the P5 Slack node. Replace `YOUR_SLACK_CHANNEL_ID` with your real channel ID (e.g. `C012AB3CD`)
4. *(Optional)* Set up the Supabase audit log table using the SQL in the setup sticky note, then replace the two placeholder values in the 5 log HTTP Request nodes
5. Activate the workflow and send a test request:

```bash
POST https://your-n8n-instance.com/webhook/mlops-v2
Content-Type: application/json

{
  "dataset_url": "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv",
  "target_variable": "Survived",
  "business_goal": "Predict passenger survival to optimise lifeboat boarding policy"
}
```

---

### Extending the workflow

The Phase 5 sticky note includes a tip for extending the HITL loop: add a Webhook node to receive the Slack approval callback and an If node to branch into a GitHub API call that commits the model card to a new repository. The `model_card_b64` field (Base64-encoded model card content) is already assembled in the payload, ready to be passed directly to the GitHub Contents API.

---

### Node count & complexity

- **28 nodes** total (22 active, 6 sticky notes)
- **3 LLM calls** (Claude Sonnet ×2, Claude Haiku ×1)
- **5 JavaScript Code nodes** (all pure JS, no external libraries)
- **5 Supabase log nodes** (optional, deletable)
- **1 Slack node**
- **Fan-out connections** used to run log nodes as parallel dead-ends without blocking the main data path

---

### Tags
`AI`, `Machine Learning`, `MLOps`, `Claude AI`, `Slack`, `Automation`, `Data Science`, `HITL`, `LLM`

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
