# 👥 Generate Indian CTC offers and payroll breakdowns with DevDeskApp

> ⚡ **2 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow generates an India-specific payroll breakdown and offer dispatch payload from candidate hiring data using DevDeskApp for slug creation, CTC-to-in-hand calculations, UUID tracking, and SHA-256 hashing.

## How it works
1. Runs when you click “Test workflow” in n8n.
2. Creates a sample candidate hiring record with role details, joining date, annual CTC, and basic salary percentage.
3. Uses DevDeskApp to slugify the candidate name and role into a URL-safe identifier.
4. Uses DevDeskApp to convert the annual CTC into estimated monthly gross, in-hand salary, and deductions based on the provided basic percentage.
5. Uses DevDeskApp to generate a UUID and a SHA-256 checksum of key compensation fields for tracking and integrity.
6. Produces a final JSON payload containing an offer reference ID, candidate details, formatted payroll breakdown, and the security checksum for downstream dispatch (for example to Slack or an HR system).

## Setup
1. Install and enable the DevDeskApp n8n community node package so the DevDeskApp slugify, calculator, and crypto operations are available.
2. Replace the sample candidate data (name, role, annual CTC, basic percentage, and other fields) with your own input source if you want to use real hiring records.
3. Review or adjust the basic salary percentage used for the CTC calculation to match your organization’s payroll policy.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
