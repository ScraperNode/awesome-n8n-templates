# 👥 Route equipment requests to Procurement with manager approval via Gmail

> ⚡ **488 views** · 👥 [HR & Recruitment](../)

## Description

This workflow streamlines how employees request **equipment/items** and how those requests reach the **Procurement** team. It validates the employee by enrollment number, detects whether a **manager** exists, and then either requests approval (if the requester has a manager) or routes the request **directly to Procurement** (if the requester is a manager). All messages are written in a professional tone using an LLM, and emails are sent via Gmail with a built-in **approve/deny** step for managers.

## Who’s it for

HR/IT/Operations teams that handle equipment requests, need a lightweight approval flow, and want clean, professional emails without manual drafting.

## How it works

1. Employee submits their **enrollment number**.
2. Workflow fetches employee (and manager, if any).
3. Employee describes the requested item(s).
4. If a manager exists → an **approval email** (double opt-in) is sent to the manager.

   * Approved → notify employee and forward a polished request to **Procurement**.
   * Denied → notify employee.
5. If the requester is a **manager** → skip approval and send directly to **Procurement**.
6. End pages confirm the outcome.

## Requirements

* MySQL (or compatible DB) with an `employees` table (`id, name, email, enrollment_number, manager`).
* Gmail credentials (OAuth) in n8n.
* LLM provider (OpenAI or compatible) for message polishing.

## How to customize

* Replace the Procurement **NoOp** nodes with your email, helpdesk, or ERP integration.
* Adjust email copy and tone in the LLM prompt nodes.
* Add tracking IDs, SLA text, or CCs for auditing.
* Style the forms with your brand (CSS blocks provided).

## 🔗 Nodes Used

MySQL, Gmail, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
