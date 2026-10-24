# 🎣 Validate and reconcile CRM lead CSV imports with built-in tools

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow accepts a lead CSV upload via an n8n form, normalizes name/email/phone fields, validates required contact details, and reconciles duplicates into a single audit output showing accepted leads, rejected rows, and field-level conflicts.

## How it works
1. Receives a CSV file upload through an n8n form.
2. Parses the CSV into structured lead records.
3. Applies the configured policy (required fields and identity/duplicate keys) and normalizes name, email casing, and phone formatting.
4. Validates each lead for missing required fields and basic email format, separating valid records from rejected rows with reason codes.
5. Reconciles duplicates by grouping on email or phone, filling missing fields from duplicates while recording any non-empty field disagreements as conflicts.
6. Returns an audit package marked as either ready for import (no rejects or conflicts) or review required, including accepted leads, rejected leads, conflict details, and summary counts.

## Setup
1. Update the field names and rules in the lead-quality configuration (required fields, email field, phone field, and duplicate keys) to match your CSV headers.
2. Use the generated form URL to upload a representative lead CSV file when testing.
3. Review the output payload and use only the accepted lead list for your downstream CRM import when the status is ready (or resolve conflicts/rejections when review is required).

## 🔗 Nodes Used

n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
