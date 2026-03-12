# 🔬 Get Malaysia tax ID number (TIN) for multiple business reg num (SSM) or NRIC

> ⚡ **245 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## BACKGROUND
Malaysia's Inland Revenue (LHDN) provides an API to get the tax id number for a business entity, based on a given Business Registration number (BRN or SSM), or NRIC (MyKad). 

## PROBLEM

However, the API only allows one search at a time.

## SOLUTION

This free workflow lets you do a batch search to get TIN for multiple SSM or NRIC. 

This is useful if you need to prepare your internal DB for e-invoicing

## PRE-REQUISITES

1) Get your connection client id and client secret from myhasil.gov.my website

2) Prepare your Google Sheet containing a list of SSM and NRIC you want to get the TIN

3) Create N8N credential to connect to your google sheet above

## SUPPORT

Questions? Ask alex at halfborg dot com

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
