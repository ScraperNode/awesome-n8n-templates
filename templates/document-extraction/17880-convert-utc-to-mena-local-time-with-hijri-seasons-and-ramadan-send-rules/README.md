# 🔬 Convert UTC to MENA local time with Hijri seasons and Ramadan send rules

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This sub-workflow takes a UTC timestamp and MENA locale inputs and returns a typed object with local time, workweek/weekend status, Hijri (Umm al-Qura) season flags, and Ramadan-aware sendability rules including a suggested next send time.

## How it works
1. Receives inputs from another workflow (or a manual self-test) including `ts_utc`, `tz`, `country`, and `audience`.
2. Applies default values for missing inputs (for example Baghdad time zone, Iraq country code, and a current UTC timestamp).
3. Converts the UTC timestamp to the target IANA time zone, calculates the UTC offset, determines the local weekday, and flags workdays/weekends based on a per-country weekend table.
4. Computes the local day boundaries in UTC and the next workday start time to support rollups and scheduling.
5. Derives the Umm al-Qura Hijri date and flags Ramadan, Eid al-Fitr, Eid al-Adha, Hajj window, and any user-provided holiday overrides.
6. Classifies the local time into a daypart and evaluates whether the timestamp is inside an allowed send window (including Friday prayer blocking and Ramadan late-night rules), returning `is_sendable`, `block_reason`, and `send_after` when blocked.
7. Outputs either a self-test report with pass/fail assertions or a flattened “contract” object that downstream workflows can rely on.

## Setup
1. In your parent workflow, add an Execute Workflow step that calls this sub-workflow and passes `ts_utc` (ISO 8601), `tz` (IANA time zone), `country` (for example `iq`, `sa`, `ae`, `eg`), and `audience` (`b2c` or `b2b`).
2. If you need to reflect local holiday announcements (for example Eid by moon sighting), pass `holiday_overrides` as an array of `{ date: "YYYY-MM-DD", country: "*"|"iq"|..., name: "..." }`.
3. Optionally run the built-in manual self-test to validate weekend rules, day boundaries, and Ramadan send-window behavior in your environment.

## Requirements
- None. No credentials, no API keys, no npm packages, no external calls.

## Customization
- Every country defaults to a Fri-Sat weekend except `ae`, which is Sat-Sun. Edit the `WEEKEND` map. Pass `holiday_overrides` to correct Eid dates, since Umm al-Qura is astronomical while real announcements follow local moon sighting.

## 🔗 Nodes Used

Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
