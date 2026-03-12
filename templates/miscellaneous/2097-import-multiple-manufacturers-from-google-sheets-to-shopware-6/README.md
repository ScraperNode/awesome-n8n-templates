# 🔧 Import multiple manufacturers from Google Sheets to Shopware 6

> ⚡ **1,270 views** · 🔧 [Miscellaneous](../)

## Description

Effortlessly optimize your workflow by automatically importing hundreds of manufacturers from a Google Sheet into your Shopware online store, saving countless hours of manual work.

## How it works
1. Retrieve all manufactures from a Google Sheet
2. Add each manufacture via Shopware sync API Endpoint to Shopware
3. Upload a logo for each manufacture from a provided public URL to Shopware

## Set Up Steps
1. Add your Shopware url to first node called Settings
2. Create a Google Sheet in your Google account with the following columns ([Demo Sheet](https://docs.google.com/spreadsheets/d/1Qmsjs8usT90fPNnCIaI605W77zoKkOB3t3i8UsdpA5Q/edit?usp=sharing))
	1. name (the name of the manufacturer which has to be unique and is required)
	2. website (url to the manufacturer website) 
	3. description 
	4. logo_url (public manufcaturer logo url. Have to be a png, jpg or svg file) 
	5. translation_language_code_1 (optional. Language Code of your language. For example 'es-ES' for spanish. You have to make sure a language with this code exists in your Shopware shop.)
	6. translation_name_1 (optional. Manufacturer name translated to the language you defined at translation_language_code_1)
	7. translation_description_1 (optional. Manufacturer description translated to the language you defined at translation_language_code_1)
	8. translation_language_code_2 (optional. Same as translation_language_code_1 for another language)
	9. translation_name_2 (optional. Same as translation_name_1 for another language)
	10. translation_description_2 (optional. Same as translation_description_1 for another language)
	11. translation_language_code_3 (optional. Same as translation_language_code_1 for another language)
	9. translation_name_3 (optional. Same as translation_name_1 for another language)
	10. translation_description_3 (optional. Same as translation_description_1 for another language)
3. Connect to your Google account
4. Connect to your Shopware account
	1. Create a [Shopware Integration](https://docs.shopware.com/en/shopware-6-en/settings/system/integrationen)
	2. Connect to Shopware at the nodes "Import Manufacturer" and "Upload Manufacturer Logo" using a Generic OAuth2 API Authentication with Grant Type "Client Credentials". The Access Token URL is https://your-shopware-domain.com/api/oauth/token.
5. Run the workflow

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
