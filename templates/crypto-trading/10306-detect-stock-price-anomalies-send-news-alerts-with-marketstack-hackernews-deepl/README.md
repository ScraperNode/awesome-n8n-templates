# 📈 Detect stock price anomalies & send news alerts with Marketstack, HackerNews & DeepL

> ⚡ **759 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Price Anomaly Detection & News Alert (Marketstack + HN + DeepL + Slack)

## Overview
This workflow monitors a stock’s closing price via **Marketstack**. It computes a **20-day moving average** and **standard deviation (±2σ)**. If the latest close is outside ±2σ, it flags an **anomaly**, fetches **related headlines from Hacker News**, **translates** them to Japanese with **DeepL**, and **posts both original and translated text to Slack**. When no anomaly is detected, it sends a concise “normal” report.

## How it works
1) Daily trigger at 09:00 JST  
2) Marketstack: fetch EOD data  
3) Code: compute mean/σ and classify (normal/high/low)  
4) IF: anomaly? → yes = news path / no = normal report  
5) Hacker News: search related items  
6) DeepL: translate EN → JA  
7) Slack: send bilingual notification

## Requirements
- Marketstack API key
- DeepL API key
- Slack OAuth2 (bot token / channel permission)

## Notes
- Edit the ticker in **Get Stock Data**.
- Adjust **N** (days) and **k** (sigma multiplier) in **Calculate Deviation**.
- Keep credentials out of HTTP nodes (use n8n Credentials).

## 🔗 Nodes Used

Slack, Hacker News, DeepL, Marketstack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
