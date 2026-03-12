# 📋 Intelligent project delivery and task management system

> ⚡ **737 views** · 📋 [Project Management](../)

## Description

## How It Works
Automates daily project monitoring by fetching project data, analyzing tasks and team capacity with anthropic models, and generating resource optimization recommendations. Target audience: project managers, engineering leads, and resource planners managing complex team assignments. Problem solved: manual capacity planning misses bottlenecks; AI analysis identifies effort mismatches and delays proactively. Workflow runs daily checks, merges project and team profiles, analyzes tasks via multiple anthropic agents (breakdown, estimation, assignment), calculates effort allocation, detects delays, generates rebalancing recommendations, notifies stakeholders, and tracks milestones.

## Setup Steps
1. Configure daily trigger schedule. 
2. Connect project management system APIs. 
3. Set anthropic API keys with task analysis prompts. 
4. Enable email notifications for managers. 
5. Connect reporting database for tracking.

## Prerequisites
Anthropic API access, project management tool credentials, team capacity database 

## Use Cases
SaaS teams managing feature backlogs, consulting firms balancing client projects 

## Customization
Adjust effort estimation models. Add Slack notifications for urgency.  

## Benefits
Detects delays 2-3 weeks early, improves team utilization by 25%

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser, Code Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
