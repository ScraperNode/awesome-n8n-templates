# ⚙️ Keep Supabase free plan projects alive with scheduled database pings

> ⚡ **142 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Supabase Free Plan Keep-Alive

Prevents Supabase from pausing an inactive project by writing randomised pings to a database table on a recurring schedule.

---

## Overview

The workflow runs every 4 days and performs 25 sequential database writes to the `ping` table in Supabase. Each write is separated by a random delay between 20 and 60 seconds to simulate organic activity rather than a mechanical burst.

---

## Nodes

**Schedule Trigger**
Fires every 4 days automatically. A manual trigger is also included for testing.

**Code – Generate Items**
Creates an array of 25 identical items to drive the loop.

**Loop Over Items**
Processes one item per iteration until all 25 are complete.

**Code – Random Wait**
Assigns a random integer between 20 and 60 seconds to each item before the wait step.

**Wait**
Pauses execution for the duration assigned in the previous step.

**Create a Row**
Inserts a row into the `ping` table in Supabase with the current timestamp as `created_at`.

---

## Setup

1. Create a `ping` table in your Supabase project with a `created_at` column (timestamptz).
2. Add your Supabase credentials to the **Create a Row** node.
3. Activate the workflow to enable the schedule.

---

## Customization

- Change the trigger interval in **Schedule Trigger** if 4 days does not match your project's inactivity threshold.
- Adjust the item count in the first code node to write more or fewer rows per run.
- Modify the random range (currently 20–60 s) in the second code node to change the spacing between writes.

## 🔗 Nodes Used

Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
