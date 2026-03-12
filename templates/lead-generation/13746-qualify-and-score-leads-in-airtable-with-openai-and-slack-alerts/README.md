# 🎣 Qualify and score leads in Airtable with OpenAI and Slack alerts

> ⚡ **5 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## 🧩 Description
Automatically qualify, score, and route new leads using a hybrid AI + rule-based scoring engine. This workflow analyzes incoming leads from Airtable, enriches them with OpenAI-powered qualification, applies deterministic business rules, and instantly alerts your sales team in Slack when a high-intent lead is detected.

## 🎯 Who’s it for

- Sales teams that want instant alerts for high-intent leads
- Founders who need automated qualification without hiring SDRs
- Marketing teams running paid campaigns and capturing inbound leads
- RevOps teams building structured, explainable scoring systems

If you store leads in Airtable and want AI-assisted qualification with fallback logic (not just blind AI scoring), this template is for you.

## 🤖 What it does
This workflow implements a **hybrid lead scoring model**:

1. Triggers when a new lead is created in Airtable.
2. Normalizes and standardizes lead data.
3. Sends structured context to OpenAI for qualification.
4. Validates the AI response (strict JSON parsing).
5. Falls back to deterministic scoring if AI fails.
6. Combines AI score (50% weight) + rule-based score.
7. Updates Airtable with:
	- Final score (0–100)
	- Hot/Warm/Cold tag
	- AI reasoning
	- Confidence level

8. Sends Slack alerts:
	- 🔥 Hot leads (score ≥ 80)
	- ⚠️ AI scoring failures (manual review required)

Unlike basic AI-only scoring, this workflow guarantees reliability by combining LLM reasoning with business logic.

## 🔄 How it works 

 1. **Lead intake & guardrail**
	- **Airtable Trigger** watches for new records.
	- A guard condition prevents re-processing already scored leads (processed = true).

2. **AI qualification engine**
	- A structured prompt sends lead context to OpenAI.
	- A code node vlidates and safely parses the JSON.
	- If invalid - fallback scoring is activated + Slack alert.

3. **Deterministic scoring layer**
Business logic evaluates:
	- Company size
	- Role authority (Founder, Executive, Manager)
	- Industry relevance
	- Intent message length

	The deterministic score is capped at 50.

	**How deteministic scoring works?**
Larger companies receive higher baseline scores:
	- `1-10: 5`
  	- `11-50: 10`
  	- `51-200: 20`
  	- `201-500": 25`
  	- `501-1000": 30`
	- `1000+: 35`
	
	You can increase or decrease these values depending on your Ideal Customer Profile (ICP).

	**Industry boost**
	- `Technology/Software: 10`
  	- `SaaS/Cloud Services: 15`
  	- `Cybersecurity: 20`
  	- `IT Services/Consulting: 10`
	
	If your product is industry-specific, this is where you fine-tune relevance.
 
	**Role authority boost** 	
	Decision-making power increases lead quality:

	- `Founder → +20`
	- `Executive → +20`
	- `Manager → +10`
	- `Head → +10`

	The workflow detects these keywords inside the role field and applies the corresponding boost.
	**Intent boost (message length)**
	Longer intent messages imply higher purchase interest:
	- `100 characters → +15`
	- `50 characters → +8`
		
4. **Hybrid scoring formula**	
`Final Score = (AI Score × 0.5) + Deterministic Score`

	Tag thresholds:
	- `80–100 → Hot`
	- `50–79 → Warm`
	- `0–49 → Cold`
5. **CRM update**

	The workflow updates Airtable with:
	- `score`
	- `ai_score`
	- `deterministic_score`
	- `tag`
	- `ai_reason`
	- `score_confidence`
	- `processed = true`

6. **Sales alert logic**
	If:
	- Tag = Hot
	- Score ≥ 80

	→ Slack sends an immediate notification to the sales team.

## 📋 Requirements
You’ll need:

- Airtable account (Base with Leads table)
- OpenAI API credentials
- Slack bot credentials
- n8n (Cloud or Self-hosted)

No API keys are hardcoded. All credentials use secure n8n credential storage.

## 🛠️ How to set up

1. **Import the workflow.**
2. **Connect credentials**:
	- Airtable
	- OpenAI
	- Slack

3. **Update:**
	- Airtable Base ID
	- Table name
	- Slack channel

4. **Ensure your Airtable table includes:**
	- lead_id (unique)
	- first_name (text)
	- last_name (text)
	- email	
	- phone
	- job_role (single select)
	- industry (single select)
	- company_size (single select)
	- intent_message (long text)	- 
	- score (number)
	- ai_score (number)
	- deterministic_score (number)
	- tag (text)
	- ai_tag (text)
	- score_confidence (text)
	- created_at (created time) 
	- processed (checkbox/boolean)

	Activate the workflow.

## 🎛️ How to customize

This template uses a hybrid scoring model, combining:

- 🤖 AI qualification score (50% weight)
- 📊 Deterministic rule-based scoring (fully customizable)

All deterministic scoring logic can be modified inside the `Hybrid Lead Scoring Engine` Code node.

That node contains the full business rule logic for:

- Company size scoring
- Industry boosts
- Role authority boosts
- Intent-based scoring

**Final score** calculation formula
You can easily adjust:
- AI scoring weight (currently 50%)
- Hot lead threshold (currently 80)
- Slack notification logic
- AI prompt instructions (to match your ICP)

You can also:
- Add email notifications
- Route Warm leads to nurturing workflows
- Push Hot leads into a CRM like HubSpot or Salesforce

## ✨ Why this template is different
- Uses AI with validation and fallback
- Prevents double-processing
- Preserves explainability (AI reasoning stored in CRM)
- Avoids over-reliance on LLM output
- Production-ready structure with clear separation of logic blocks

This is not just AI scoring — it’s a resilient, sales-ready qualification engine.

## 🔗 Nodes Used

Airtable, Slack, Airtable Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
