# 🎯 Automatic issue routing in Linear with GPT-4-mini classification

> ⚡ **244 views** · 🎯 [AI Summarization & Classification](../)

## Description

## How it works

This workflow automatically classifies and routes new or updated Linear issues using AI.
When an issue is created or updated, its title and description are analyzed by an OpenAI-powered classifier. The workflow then determines the correct team, routes the issue through the right path, and updates it in Linear.
This ensures accurate, consistent triaging and removes the need for manual assignment.

## Step-by-step

**1. Trigger and validation**  
- **Linear Trigger** – Detects new or updated issues in Linear.  
- **Filter New Issues Only** – Ensures the issue has a valid title.  
- **If (Create or Update)** – Confirms the action is either create or update.  

**2. AI classification**  
- **OpenAI Chat Model** – Provides language model capabilities for classification.  
- **AI Agent (Bug Classifier)** – Uses issue title and description to assign a team ID.  

**3. Routing logic**  
- **Engineering Router** – Checks if classification output is Engineering.  
- **Product Router** – Checks if classification output is Product.  
- **Design Router** – Checks if classification output is Design.  
- **Default Router** – Fallback if no match is found.  

**4. Update Linear issue**  
- **Assign to Engineering** – Updates team assignment in Linear.  
- **Assign to Product** – Updates team assignment in Linear.  
- **Assign to Design** – Updates team assignment in Linear.  
- **Assign to Default** – Assigns to fallback team if no match.  

## Why use this?

- Automates issue triage, eliminating manual team assignment.  
- Speeds up bug resolution by instantly routing to the right team.  
- Ensures consistency in bug categorization using AI-driven analysis.  
- Scales effortlessly with growing issue volume.  
- Reduces human error in issue management.

## 🔗 Nodes Used

Linear Trigger, Linear, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
