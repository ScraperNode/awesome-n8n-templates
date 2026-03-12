# ⚒️ Benchmark content safety guardrails with automated test suite & reports

> ⚡ **614 views** · ⚒️ [Engineering](../)

## Description

## 🛡️ Evaluate Guardrails Node Accuracy with Automated Test Suite

This workflow benchmarks the **n8n Guardrails node** across multiple safety categories -including PII, NSFW, jailbreak attempts, secret keys, and unsafe URLs.  
It runs **36 structured test cases**, classifies each as PASS or VIOLATION, calculates accuracy metrics, and emails a detailed HTML report.


### 🔄 How it works
1. The workflow loops through 36 predefined test prompts.  
2. Each prompt is checked by the **Guardrails node** for violations.  
3. Results are recorded as PASS or VIOLATION.  
4. The system calculates metrics (accuracy, precision, recall, F1).  
5. A formatted Markdown → HTML report is generated and sent via Gmail.

### ⚙️ Set up steps
1. Add your **OpenAI** and **Gmail** credentials in n8n.  
2. Replace `YOUR_MAIL_HERE` in the Gmail node with your own address.  
3. *(Optional)* Change the model in the **OpenAI Chat Model** node.  
   - Default: `gpt-4o-mini`  
   - You can switch to `gpt-5` or another available model if needed.  
4. Click **Execute Workflow**: test cases will run automatically.  
5. Check your inbox for the results.

### 🧠 Who it’s for
- AI safety testers and workflow developers  
- n8n users experimenting with the Guardrails node  
- Teams validating LLM moderation, filtering, or compliance setups

### 🧩 Requirements
- n8n **v1.119+**  
- Guardrails node enabled  
- OpenAI credentials (optional but recommended)  
- Email integration (Gmail or SendGrid)


## 💡 Why it’s useful
Use this test suite to understand how accurately the Guardrails node identifies unsafe content across different categories. The generated metrics help you fine-tune thresholds, compare models, and strengthen AI moderation workflows.

### Example result
![image.png](fileId:3279)
![image.png](fileId:3280)

## 🔗 Nodes Used

Gmail, Markdown, OpenAI Chat Model, Guardrails

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
