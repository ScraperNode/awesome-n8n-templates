# 👥 Fetch SAP SuccessFactors PerPerson data via SAML 2.0 bearer OAuth2 flow

> ⚡ **166 views** · 👥 [HR & Recruitment](../)

## Description

### SAP SuccessFactors via SAML 2.0 Bearer Assertion based on OAuth 2 configuration

#### How it works
1. Configure SuccessFactors OAuth2 SAML client within SuccessFactors
2. Get SAML assertion, exchange for bearer token for API connection
3. Fetch PerPerson data via OData v2
4. Flatten to person-employment records as an example call to SuccessFactors API


#### Set up steps
- It takes ~10-20 minutes to register OAuth2 client in SuccessFactors Admin Center and setup the flow with the credentials.

- The configuration nodes have to be filled with your URLs and credentials.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
