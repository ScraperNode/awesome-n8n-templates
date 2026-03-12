# 🎣 Bulk email validation and AI scoring with ZeroBounce

> ⚡ **124 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## ZeroBounce Bulk Email Validation and Scoring

This template uses the [ZeroBounce](https://www.zerobounce.net) node to validate and score email addresses. It is designed to first check if an email is deliverable and then uses A.I. Scoring to assess the sender's deliverability confidence.

This is an example template to demonstrate ways to use the ZeroBounce node and how to manipulate the data with core n8n nodes.

A ZeroBounce API key is needed to use this template. Generate one [here](https://www.zerobounce.net/members/API).


![ZeroBounce Logo](https://raw.githubusercontent.com/zerobounce/n8n-nodes-zerobounce/main/icons/zb-logo-purple.svg)


### 1. Email Validation
The **`Validate email`** node sends the email address to the ZeroBounce API to determine its status (e.g., **`'valid', 'invalid', 'spam trap'`**).
* **Function:** Checks the email address against ZeroBounce's Email Validation API


### 2. A.I. Scoring
For emails confirmed as valid, the workflow proceeds to the **`Score email`** node.
* **Function:** Applies ZeroBounce's proprietary A.I. model to assess the quality of the email, returning a numerical score (**0 to 10**).


### 3. Output
The workflow concludes with the **`Filter by score` Switch Node**, which uses the ZeroBounce score to categorize the email into three confidence tiers:
* **High Score:** Indicates high confidence in deliverability and is ready for immediate campaigns.
* **Medium Score:** Suggests moderate risk; these might be suitable for re-engagement or specialized campaigns.
* **Low Score:** Indicates high risk, even if the status was technically `valid`. These should be suppressed to protect sender reputation.

## 🔗 Nodes Used

Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
