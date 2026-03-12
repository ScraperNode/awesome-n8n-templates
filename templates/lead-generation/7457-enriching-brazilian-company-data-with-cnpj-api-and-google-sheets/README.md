# 🎣 Enriching Brazilian company data with CNPJ API and Google Sheets

> ⚡ **809 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Overview

This workflow automatically enriches Brazilian company data by fetching comprehensive CNPJ information from the MinhaReceita.org API and updating your Google Sheets spreadsheet. Perfect for data analysts, sales teams, and anyone working with Brazilian business databases who needs to enrich company information at scale.

## What it does

- **Reads CNPJ numbers** from your Google Sheets spreadsheet
- **Fetches complete company data** from Brazil's Federal Revenue database via MinhaReceita.org API
- **Updates your spreadsheet** with comprehensive business information including address, tax status, partners, and more
- **Sends Telegram notifications** when the process is complete
- **Processes data in batches** to handle large datasets efficiently

## Key Features

✅ **Free API** - No authentication required, completely free to use  
✅ **Comprehensive Data** - 47+ fields of official Brazilian company information  
✅ **Batch Processing** - Handles up to 100 CNPJs per batch automatically  
✅ **Smart Filtering** - Only processes CNPJs that don't already have data  
✅ **Real-time Updates** - Updates your spreadsheet as data is retrieved  
✅ **Progress Notifications** - Get notified via Telegram when complete  

## Setup Requirements

### Google Sheets Structure
Your spreadsheet must contain at minimum:
- **`cnpj`** column with Brazilian CNPJ numbers (numbers only, no formatting)
- **`razao_social`** column (used to identify records without data)

### Credentials Needed
- **Google Sheets OAuth2** credentials configured in n8n
- **Telegram Bot** credentials for notifications (optional but recommended)

## Available Data Fields

The workflow can populate your spreadsheet with any or all of these official fields from Brazil's Federal Revenue:

### 🏢 Company Information
- `cnpj`, `razao_social`, `nome_fantasia`, `capital_social`
- `porte`, `codigo_porte`, `natureza_juridica`, `codigo_natureza_juridica`

### 📍 Address & Location
- `uf`, `municipio`, `codigo_municipio`, `codigo_municipio_ibge`
- `bairro`, `logradouro`, `descricao_tipo_de_logradouro`
- `numero`, `complemento`, `cep`
- `pais`, `codigo_pais`, `nome_cidade_no_exterior`

### 📞 Contact Information
- `email`, `ddd_telefone_1`, `ddd_telefone_2`, `ddd_fax`

### 💼 Business Classification
- `cnae_fiscal`, `cnae_fiscal_descricao`, `cnaes_secundarios`
- `regime_tributario`, `qualificacao_do_responsavel`

### 📋 Registration Status
- `situacao_cadastral`, `descricao_situacao_cadastral`
- `motivo_situacao_cadastral`, `descricao_motivo_situacao_cadastral`
- `situacao_especial`, `identificador_matriz_filial`, `descricao_identificador_matriz_filial`
- `ente_federativo_responsavel`

### 📅 Important Dates
- `data_inicio_atividade`, `data_situacao_cadastral`, `data_situacao_especial`

### 🏛️ Tax Regime Information
- `opcao_pelo_mei`, `data_opcao_pelo_mei`, `data_exclusao_do_mei`
- `opcao_pelo_simples`, `data_opcao_pelo_simples`, `data_exclusao_do_simples`

### 👥 Partners & Shareholders
- `qsa` (Complete structured data of company partners and shareholders)

## How to Use

1. **Prepare your spreadsheet** with CNPJ numbers in the `cnpj` column
2. **Configure your Telegram ID** in the Settings node for notifications
3. **Set up Google Sheets credentials** in n8n
4. **Add the desired data columns** to your spreadsheet (any combination from the list above)
5. **Run the workflow** - it will automatically process all CNPJs without existing data

## Performance & Limitations

- **API Limits**: None - completely free API from MinhaReceita.org
- **Data Accuracy**: Official data from Brazil's Federal Revenue Service
- **Batch Size**: Configurable (default: 100 records per batch)

## Use Cases

- **Lead Enrichment**: Enhance prospect databases with complete company information
- **Market Research**: Gather comprehensive data about Brazilian companies
- **Compliance & Due Diligence**: Verify company registration status and details
- **Sales Intelligence**: Access contact information and company classification data
- **Data Cleaning**: Standardize and complete existing company databases

## Prerequisites

- N8N instance with Google Sheets integration
- Google Sheets document with CNPJ data
- Basic understanding of Brazilian CNPJ format (14-digit company registration number)
- Telegram bot token (optional, for notifications)

## Important Notes

- CNPJs must be active and registered with Brazil's Federal Revenue Service
- The workflow only processes CNPJs where `razao_social` is empty (avoiding duplicates)
- All data comes from official government sources via MinhaReceita.org
- No rate limiting needed - the API is designed for bulk requests
- Supports both matriz (headquarters) and filial (branch) identification

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
