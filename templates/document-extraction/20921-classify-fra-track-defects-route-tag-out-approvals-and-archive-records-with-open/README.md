# 🔬 Classify FRA track defects, route tag-out approvals, and archive records with OpenAI, Slack, and Google Drive

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow automates daily railway track safety management by integrating defect classification, risk calculations, and communication. It uses OpenAI to categorize inspector notes by FRA severity, determines speed restrictions, and orchestrates critical Slack approvals for immediate tag-outs, before archiving records to Google Drive and posting final inspection summaries.

## How it works
1. Runs every day at 05:00 on a schedule.
2. Fetches all segments due for inspection for the current date from the track-inspection system API and processes each segment as a separate item.
3. Uses OpenAI to classify each segment’s inspector defect notes into one of four categories: No Defect, Class 1-2 Minor, Class 3-4 Serious, or Class 5 Immediate Halt.
4. Computes the normal maximum speed, any required speed restriction, a remedial timeframe, and a recommended action based on the segment’s track class and defect category.
5. For Class 5 Immediate Halt segments, sends a Slack approval request that lets a supervisor approve, approve with edits, or reject the tag-out; for all other categories, marks the record as not requiring approval.
6. Uploads a JSON record for each segment and outcome to Google Drive and posts the final category, action, and speed restriction to a Slack channel.

## Setup
1. Add credentials for the track-inspection system API (HTTP Header Auth), OpenAI, Slack, and Google Drive.
2. Replace the track-inspection API URL in the HTTP request node and ensure the response includes segment_id, track_class, and inspector_defect_notes as one item per segment.
3. Set your Slack channel ID in both Slack message nodes and confirm Slack “send and wait for approval” is enabled for your workspace.
4. Set the target Google Drive drive ID and folder ID for the archive upload.
5. Review and adjust the track-class speed table and remedial-day defaults in the speed restriction calculation code to match your railroad’s policy.

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, Schedule Trigger, OpenAI Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
