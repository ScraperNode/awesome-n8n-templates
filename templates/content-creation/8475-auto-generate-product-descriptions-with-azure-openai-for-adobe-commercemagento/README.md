# 🎬 Auto-generate product descriptions with Azure OpenAI for Adobe Commerce/Magento

> ⚡ **252 views** · 🎬 [Content Creation & Video](../)

## Description

# 🛍️ Automated Product Description Generation for Adobe Commerce (Magento 2)

## Description
This n8n template demonstrates how to automatically generate **product descriptions** for items in **Adobe Commerce (Magento 2)** that are missing one.  

The workflow retrieves product data, converts raw attribute values (like numeric IDs) into **human-readable labels**, and passes the enriched product data to an **LLM** (Azure OpenAI by default). The LLM generates a compelling description, which is then saved back to Magento using the API.  

This ensures all products have professional descriptions without manual writing effort.

**Use cases include:**  
- Auto-generating missing descriptions for catalog completeness.  
- Creating consistent descriptions across large product datasets.  
- Reducing manual workload for content managers.  
- Tailoring descriptions for SEO and customer readability.  

---

## Good to know
- All **attribute options** are resolved to human-readable labels before being sent to the LLM.  
- The flow uses **Azure OpenAI**, but you can replace it with **OpenAI, Anthropic, Gemini, or other LLM providers**.  
- The LLM prompt can be **customised** to adjust tone, length, SEO-focus, or specific brand style.  
- Works out-of-the-box with Adobe Commerce (Magento 2) APIs, but can be adapted for other ecommerce systems.  

---

## How it works
1. **Get Product from Magento**  
   - Retrieves a product that has no description.  
   - Collects all product attributes.

2. **Generate Description with LLM**  
   - Resolves attribute option IDs into **human-readable values** (e.g. `color_id = 23 → "Red"`).  
   - Passes the readable product attributes to an **Azure OpenAI model**.  
   - The LLM creates a clear, engaging product description.  
   - The prompt can be customised (e.g. SEO-optimized, short catalog text, or marketing style).  

3. **Save Description in Magento**  
   - Updates the product via the **Magento API** with the generated description.  
   - Ensures product data is enriched and visible in the webshop immediately.  

---

## How to use
- Configure your **Magento 2 API credentials** in n8n.  
- Replace the **Azure OpenAI** node with another provider if needed.  
- Adjust the **prompt** to match your brand’s tone of voice.  
- Run the workflow to automatically process products missing descriptions.  

---

## Requirements
- ✅ n8n instance (self-hosted or cloud)  
- ✅ Adobe Commerce (Magento 2) instance with API access  
- ✅ Azure OpenAI (or other LLM provider) credentials  
- (Optional) Prompt customisations for SEO or brand voice  

---

## Customising this workflow
This workflow can be adapted for:  
- **Other attributes**: Include or exclude attributes (e.g. only color & size for apparel).  
- **Different LLMs**: Swap Azure OpenAI for OpenAI, Anthropic, Gemini, or any supported n8n AI node.  
- **Prompt tuning**: Adjust instructions to generate shorter, longer, or SEO-rich descriptions.  
- **Selective updates**: Target only specific categories (e.g. electronics, fashion).  
- **Multi-language support**: Generate product descriptions in multiple languages for international shops.  

---

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
