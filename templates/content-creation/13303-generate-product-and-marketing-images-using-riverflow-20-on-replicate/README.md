# 🎬 Generate product and marketing images using Riverflow 2.0 on Replicate

> ⚡ **29 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works
This workflow is designed to take user inputs in order to generate an image using the **[Riverflow 2.0](http://www.riverflow.ai/)** model through the **Replicate API**. It can handle both image generation as well as image editing. Additionally, for specific text modifications, the source text and font can be provided to help guide the model. Here is a high-level overview of how this workflow operates:

1. An **initial input form** acts as the trigger for this workflow. It takes in all the parameters required by Riverflow 2.0, including:
   - Model
   - Font URLs + Texts
   - Resolution
   - Initial Image
   - Instruction (Required)
   - Aspect Ratio
   - Transparency
   - Enhance Prompt
   - Max Iterations
   - Safety Checker
   - Super Resolution References
   - Number of Outputs
2. These inputs are then **sanitized** using a script and passed into a sub-workflow that handles the HTTP requests.
3. **Sub-Workflow**: This workflow takes all the given parameters and makes a **POST request** to start the Riverflow 2.0 generation, followed by a looped **GET request** to check once the status is complete. The outputs are then stored in a **data table**, which is very important.  
   - This is done in a sub-workflow so that images can be generated in parallel when multiple outputs are required.  
   - **The data table allows communication between the parent workflow and the parallel-running sub-workflows.**
4. In the parent workflow, we poll the data table to check if outputs from the sub-workflow have been generated. This is done using a loop and querying the data table to see if the outputs have been inserted.
5. Once we have the outputs (as URLs), the raw image is also provided so that the image can be viewed or downloaded directly from the workflow (the URLs are also given if they need to be used).

## Setup
- This workflow requires a **Replicate API key**, which can be obtained from [https://replicate.com/](https://replicate.com/).  
- Additionally, a **n8n data table** is needed to store outputs from parallel processes.

## Ideal for
- **E-commerce Brands**: Riverflow 2.0 is heavily used for product and packaging designs and images and was developed by [Sourceful](https://sourceful.com/). Using this workflow will help brands create images for e-commerce purposes.
- **Marketers**: Teams can generate multiple creative variations in parallel for paid ads, social media, email campaigns, and A/B testing. Instead of manually editing assets, marketers can automate background changes, color variations, and creative iterations to rapidly test and scale winning campaigns.
- **Design and Creative Teams**: Creative teams can use this workflow to quickly prototype visual concepts, enhance product renders, upscale images, and generate multiple design directions in minutes. It reduces repetitive production work and allows designers to focus on higher-level creative decisions.

## Customization
- **Connect to External Systems**: Outputs from this workflow can be passed to an external database or system such as Shopify or Google Drive.
- **Post-processing Automation**: This workflow can be extended into a larger image automation pipeline. Generated assets can automatically undergo resizing, background removal, format conversion, watermarking, compression optimization, or thumbnail generation, ensuring images are production-ready without manual intervention.
- **Ad Monitoring and Reports**: Generated images can feed directly into marketing workflows (e.g., paid ads or social campaigns). Performance metrics such as CPM, CTR, and conversion rate can be tracked and logged, enabling teams to measure creative effectiveness and iterate on prompts or variations based on real performance data.

More Infomation about Riverflow 2.0: [www.riverflow.ai](http://www.riverflow.ai/)

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, n8n Form Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
