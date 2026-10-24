# 🧾 Answer and track Stripe disputes with OpenAI and Slack

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors Stripe dispute events and runs a daily deadline check, then uses OpenAI to draft a facts-only rebuttal letter, updates dispute evidence in Stripe (draft or submit/accept), and notifies your finance team in Slack about actions taken, upcoming deadlines, and dispute outcomes.

## How it works
1. Triggers when Stripe sends dispute events (created/closed) or every morning on a schedule.
2. On dispute creation, fetches full dispute details from Stripe (including the charge, refunds, and payment intent) and pulls the customer’s recent charge history when available.
3. Applies rule-based logic to decide whether to fight, accept, or take no action, and compiles the Stripe-backed facts and evidence fields needed for a response.
4. When fighting, uses OpenAI to write a rebuttal letter from the provided facts and falls back to a prebuilt facts-only letter if the model output includes unsupported details.
5. Saves evidence to the Stripe dispute as a draft or submits it to the bank based on your settings, and posts a detailed status update to Slack.
6. Each morning, lists open Stripe disputes approaching their evidence deadline and posts a consolidated warning to Slack.
7. When Stripe closes a dispute, formats the outcome and posts a closure update to Slack.

## Setup
1. Add a Stripe API credential and ensure your Stripe account can deliver dispute webhooks to the n8n Stripe Trigger.
2. Add an OpenAI API credential for generating the rebuttal letter.
3. Add a Slack OAuth2 credential and set the destination channel in all Slack message nodes.
4. Fill in the "Dispute Rules" values (business name, product description, refund/cancellation policies, minimum amount, and deadline warning window) and decide whether to enable automatic evidence submission or automatic acceptance.

## Requirements
- A Stripe account (test mode is fine for trying it out)
- An OpenAI API key
- A Slack workspace with a channel for money matters

## Customization
- Set the smallest dispute worth fighting in Dispute Rules
- Turn on automatic submit or accept once you trust the drafts
- Change how many hours ahead the morning warning looks
- Edit the rules for each dispute reason in the Decide Fight Or Accept node

## Additional info
When a customer asks their bank for their money back, Stripe takes it out of your balance right away and gives you a few days to reply with proof. Miss the date and you lose. This workflow reads what Stripe already knows about the payment, decides if you have a case, writes a short letter and saves it on the dispute, so someone only has to check it and press submit.

Example: a customer says the parcel never came, but the payment has a DHL tracking number. The workflow marks it as a strong case, writes the letter with that number, saves it as a draft and tells you in Slack.

Stripe charges an extra fee when you fight a dispute and gives it back only if you win, so small ones may be marked "accept". The bank decides who wins; this just makes sure you answer on time with the right proof.

## 🔗 Nodes Used

HTTP Request, Slack, Stripe Trigger, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
