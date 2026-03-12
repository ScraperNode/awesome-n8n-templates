# 🎬 Magento 2: auto-fix missing image alt tags with product name

> ⚡ **66 views** · 🎬 [Content Creation & Video](../)

## Description

### This n8n workflow connects to a Magento 2 store and automatically updates product images that are missing alt tags (labels). It fetches product data via the Magento 2 REST API, identifies media gallery entries with empty or null labels, and updates them by assigning the corresponding product name as the alt text.

#### This is useful for:

- Improving SEO and accessibility by ensuring all product images have descriptive alt tags.
- Automating manual content cleanup tasks for product catalogs.
- Keeping your store compliant with basic accessibility and usability standards.

#### ⚙️ How It Works
- Manual Trigger
- The workflow is designed to run manually or on a schedule (can be modified).
- Fetch Product Data
- The Get All Product Skus HTTP node pulls a paginated list of products using Magento's REST API
- The Split Out and Loop Over Items nodes iterate through each product.
- Filter Products With Images
- The If node checks if a product has at least one image.
- Label Missing Alt Texts
- The Code node inspects each image's label field. If it's empty or null, it sets it to the product’s name.
- Update Back to Magento 2
- The HTTP Request (PUT) node updates each product using Magento’s V1/products/:sku endpoint, sending the updated image labels back to the store.

#### 🧠 Use Case
Problem: Magento 2 stores often have hundreds or thousands of product images, and it’s common to miss assigning alt text (label) to all of them—especially for bulk-imported or older products.

#### Solution: This workflow ensures every product image has an alt label (minimum: product name), thus improving:

- Search engine optimization (SEO)
- Product discovery
- Accessibility compliance (WCAG)
- Store quality score (for marketplaces or audits)

#### 🧪 Requirements
- Magento 2 REST API access
- A valid Bearer Token for Magento 2
- Magento endpoint URL
- Basic understanding of how your store handles image paths and media entries

#### 🔒 Credentials Required
Magento 2 Bearer Auth: Set up as a credential in n8n using your Magento 2 API access token.

#### 🛠️ Modifications You Can Make
- Increase the pageSize in the GET request to process more products per run.
- Set up a Cron trigger to run this regularly.
- Update other missing fields like position, disabled, or types programmatically.
- Include logging or email notifications after each batch update.

#### 🧰 Helpful For
- Magento Developers & Store Managers
- SEO/Accessibility Compliance Teams
- Automation Engineers managing eCommerce workflows

#### 📂 Category
E-commerce → Magento 2 (Adobe Commerce)

#### 💬 Need Help?
💡 Having trouble setting it up or want to customize this workflow further?
Feel free to reach out — I’m happy to help with setup, customization, or Magento 2 API integration issues.

Contact: Author

#### 👤 Author
**Kanaka Kishore Kandregula**
Certified Magento 2 Developer
https://gravatar.com/kmyprojects
https://www.linkedin.com/in/kanakakishore

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
