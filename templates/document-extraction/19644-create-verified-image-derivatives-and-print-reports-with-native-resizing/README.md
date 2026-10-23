# 🔬 Create verified image derivatives and print reports with native resizing

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs manually to calculate target pixel dimensions for planned print sizes, recommend an enlargement factor from your allowed scales, estimate crop loss from aspect-ratio differences, and export the full plan as a downloadable CSV.

## How it works
1. Runs when you manually execute the workflow.
2. Loads your image metadata (pixel dimensions and desired print size in centimeters), along with the target DPI and allowed enlargement factors.
3. Calculates the target pixel dimensions for each print size, determines the required scale to fill the target area, and selects the smallest allowed factor that meets the requirement.
4. Estimates the percentage of content likely to be cropped when the source and print aspect ratios differ and flags images that exceed the configured enlargement options.
5. Generates a CSV report and outputs it as a downloadable binary file.

## Setup
1. Update the image list with your real filenames and dimensions (widthPx, heightPx, printWidthCm, printHeightCm).
2. Set your targetDpi and the comma-separated availableScales values to match the upscaling factors you can actually use.
3. Run the workflow and download the CSV from the final step’s binary output. Review the crop-loss percentage and any records exceeding your available scale factors before processing or printing the images.

## Additional info
I work on [Upscayl](https://upscayl.app/). You can manually use the resulting plan with Upscayl or another image enlargement tool. This template only calculates a plan from metadata: it does not upload images or call an upscaling API. Configured scale factors are user inputs, not verified product capabilities. Transformation logic passed six local checks; full execution inside n8n has not been independently verified.

## 🔗 Nodes Used

Edit Image, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
