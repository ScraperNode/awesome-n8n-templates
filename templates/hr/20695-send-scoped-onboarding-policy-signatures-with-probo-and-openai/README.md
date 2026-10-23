# 👥 Send scoped onboarding policy signatures with Probo and OpenAI

> ⚡ **2 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow triggers when a new user is created in Probo via SCIM, validates the account, waits for profile completion, then uses AI agent to decide which published Probo policies the employee should sign (or sends all if no job title) and requests signatures in Probo.

## How it works
1. Triggers on a Probo USER_CREATED event when a new user is added.
2. Validates the new profile (email format, optional allowed domains, SCIM-only enforcement, blocked “test/shared mailbox” keywords, and required name) and stops for suspicious accounts.
3. Waits a configurable number of hours, then refetches the user from Probo and continues only if the user is still active.
4. Fetches all active, published policy documents in Probo and retrieves the latest published version of each.
5. Builds a prompt that includes the user context (including job title when present) and plain-text excerpts of each policy.
6. If the job title is available, uses an OpenAI chat model to mark each policy as SEND or SKIP and keeps only the policies to send; otherwise, selects all policies.
7. Requests policy signatures in Probo for each selected policy version for the new user.
8. Send a confirmation on a Slack channel for your compliance officer to track 

## Setup
1. Connect SCIM provisioning to Probo so users are created automatically from your identity provider.
2. Add a Probo API credential and set your Probo organization ID in the trigger.
3. Add an OpenAI credential for the chat model used to scope policies by job title (or replace it with another compatible chat model).
4. Review and adjust the configuration values (wait time, allowed email domains, SCIM-only toggle, and blocked email words) before activating the workflow.

## Requirements
- Probo organization

## Customization
- Add a custom wait time if you prefer your employee to receive policies after their 1st day onboarding for example.

## 🔗 Nodes Used

Slack, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
