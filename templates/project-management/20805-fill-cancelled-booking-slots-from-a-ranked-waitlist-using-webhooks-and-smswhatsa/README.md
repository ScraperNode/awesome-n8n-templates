# 📋 Fill cancelled booking slots from a ranked waitlist using webhooks and SMS/WhatsApp

> ⚡ **1 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow fills cancelled slots automatically: the top three waitlist matches get an offer at once, the first reply wins atomically, and a 30-minute sweeper re-offers expired or declined slots to the next people until the list runs out.

## How it works
1. When a booking is cancelled, your calendar system POSTs the freed slot to a webhook. The payload is checked and invalid payloads get a clean 422 back.
2. Your waitlist is ranked for that exact slot: treatment match counts most, flexibility next, then your own priority score. The top three people get an offer message at the same time.
3. Every offer round is recorded in an offer book: who was offered, who declined, and when the round expires.
4. Replies arrive on a second webhook. The claim guard decides atomically: the first TAKE wins the slot, later takers get a polite answer, and STOP marks the sender as declined and releases the slot at once.
5. A sweeper runs every 30 minutes: it picks up expired or declined slots, excludes everyone already offered or declined, and re-offers to the next people. When the waitlist runs out, the slot closes as exhausted.
6. Runs every 30 minutes on a schedule to find expired, unclaimed offers and re-ranks the remaining waitlist to send re-offers to the next candidates, logging a summary of how many were re-offered or marked exhausted.

## Setup
1. Point your booking system cancellation event at the first webhook URL and your messaging webhook at the claim reply URL.
2. Replace the demo waitlist node with your waitlist sheet. Required columns are listed in the node.
3. Replace the two send placeholders with your WhatsApp Business Cloud or SMS node.
4. Activate the workflow.

## Requirements
- A waitlist with customer name, phone, wanted treatment, a flexible flag, and a priority score. Demo data included.

## Customization
- Ranking weights, offers per round (currently 3), the 30-minute reply window and sweep interval, and all message copy.

## 🔗 Nodes Used

Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
