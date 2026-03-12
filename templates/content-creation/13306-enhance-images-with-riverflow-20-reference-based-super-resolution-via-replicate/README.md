# 🎬 Enhance images with Riverflow 2.0 reference-based super-resolution via Replicate

> ⚡ **50 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works
This workflow can take an image URL and enhance said image using **[Riverflow 2.0](http://www.riverflow.ai/) Reference-Based Super-Resolution**. This process involves giving the model an image to enhance along with a reference image to specify a certain element to enhance. For example, if we have a photoshoot but the product looks blurry/low quality, we can feed this along with a reference for what the product should look like and it will enhance that element based on the reference we gave. This workflow takes advantage of this and does the following steps:
1. **Input Form** takes in the necessary inputs used for Riverflow 2.0
	- Image (required)
	- Super Resolution References (required, **max 4**)
2. **Inputs are Sanitized** using JavaScript to get in a suitable way to be used in API call.
3. **POST request** is made to the Replicate API to begin generating the new image.
4. a **GET request** is looped over to check the status of the generation; when the generation is done, this loop breaks to output the image or an error if one occurred.
5. The output is then given as a **raw image** to be downloaded or viewed within the workflow (or passed on to elsewhere).
## Setup
This Workflow requires a **Replicate API key** which can be accessed from [Replicate](https://replicate.com/)
## Ideal for
- **Restoring things like**:
	- product labels and packaging text
	- logos and brand marks
	- printed designs on objects 
	- fine text and small UI-like elements inside a scene
- **E-commerce Brands & Retailers** - Perfect for product photography where labels, packaging text, or logos must be crisp. Can automatically enhance images for catalogs, online stores, or marketplaces. Reduces the need for re-shooting or manual touch-ups of blurry product images.
- **Design & Creative Teams** - Can fix blurry renders or low-res concept images while preserving the overall style. Speeds up repetitive image refinement tasks, letting designers focus on creative decisions.
- **Marketing & Advertising Teams** - Helps create high-quality visual assets for ads, social media posts, or campaigns. Allows batch enhancement of multiple creatives using reference images to maintain brand consistency.
## Customization
- **Output Customization** - The enhanced Images produced in this workflow can be part of a larger one and the output can be taken and sent elsewhere such as a cloud service or through webhooks.
- **Parallelism** - This workflow could potentially be adapted to have parallel requests so that various outputs can be generated for the same inputs to increase the chance of better results.
- **Marketing campaign pipeline** - designer can trigger and upload creative drafts; *refsr* can then enhance details and be used part of post processing of the marketing ads.
## Reference-Based Super Resolution: 
### The model will: 
- locate the best matching regions in the original image 
- super-resolve and correct those regions in-place 
- preserve the surrounding scene while improving detail fidelity
### To get the best results: 
- Use clean, high-resolution reference images 
-  Make sure references are cropped tightly around the detail you want restored 
-  Avoid references with glare, motion blur, or heavy perspective distortion 
-  Provide multiple references only when they represent different target details

The model can fix up to 4 matched instances in a single run.
More about Riverflow 2.0: [www.riverflow.ai](http://www.riverflow.ai/)
for more information for API: [Sourceful - Replicate API](https://replicate.com/sourceful/riverflow-2.0-refsr)

## 🔗 Nodes Used

HTTP Request, Stop and Error, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
