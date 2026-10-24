# 🎣 Manage idempotent lead intake via webhook, Postgres, and HTTP APIs

> ⚡ **15 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives lead submissions via a webhook and uses PostgreSQL to enforce idempotency so the same Idempotency-Key is processed at most once, replaying stored results on retries. For newly claimed requests, it calls external enrichment, CRM, and notification APIs before returning a consistent response.

## How it works
1. Receives a POST request on a webhook endpoint with an Idempotency-Key (and optional X-Client-Id) plus a JSON lead payload.
2. Ensures the PostgreSQL idempotency_keys table and required indexes exist, then validates the request and generates a canonical fingerprint for the payload.
3. Atomically claims the Idempotency-Key in PostgreSQL with a lease, or loads the existing record if the key already exists.
4. Routes the request to either execute processing (new claim), replay a previously stored completed response, or return an error for in-progress, mismatched payload, or store-unavailable scenarios.
5. For newly claimed requests, sends the lead to an enrichment API, computes a deterministic lead score and tier, then creates/updates the lead in a CRM API and sends a notification via a third HTTP endpoint.
6. Classifies the overall outcome, stores the final HTTP status and response body back to PostgreSQL, and responds to the original webhook with Idempotency-Key and an Idempotent-Replayed flag.

## Setup
1. Add PostgreSQL credentials and ensure the database user can create tables/indexes and read/write the idempotency_keys table.
2. Replace the placeholder enrichment, CRM, and notification URLs in the workflow configuration (currently pointing to httpbin.org) with your real endpoints.
3. Configure the source system to send POST requests to the webhook URL and include an Idempotency-Key header (and X-Client-Id if you need per-client scoping).
4. Review and adjust policy settings in the workflow configuration such as allowedSources, leaseSeconds, timeouts, maxScoreThreshold, and set allowSimulation=false for production.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
