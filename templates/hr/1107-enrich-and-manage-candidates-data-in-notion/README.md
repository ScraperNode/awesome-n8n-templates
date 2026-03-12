# 👥 Enrich and manage candidates data in Notion

> ⚡ **2,031 views** · 👥 [HR & Recruitment](../)

## Description

This workflow allows you to add candidates’ profile assessments to Notion before an interview.

## Prerequisites
1. Add an input field on your Calendly Invite page where the candidate can enter their LinkedIn URL.
2. Create credentials for your Calendly account. Follow the steps mentioned in the [documentation](https://docs.n8n.io/credentials/calendly/) to learn how to do that.
3. Create credentials for Humantic AI following the steps mentioned [here](https://docs.n8n.io/credentials/humanticAi).
4. Create a page on Notion similar to this [page](https://www.notion.so/n8n/464ee4ca7a5e4252ab21ea018d7450c8?v=d640406f12f24f9ea3509ff45b81a8bb).
5. Create credentials for the Notion node by following the steps in the [documentation](https://docs.n8n.io/credentials/notion/).

![workflow-screenshot](fileId:502)

**Calendly Trigger node:** This node will trigger the workflow when an interview gets scheduled. Make sure to add a field to collect the candidates' LinkedIn URL on your invite page.

**Humantic AI:** This node uses the LinkedIn URL received by the previous node to create a candidate profile in Humantic AI.

**Humantic AI1:** This node will analyze the candidates' profile.


**Notion node:** This node will create a new page in Notion using the information from the previous node.

## 🔗 Nodes Used

Calendly Trigger, Humantic AI, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
