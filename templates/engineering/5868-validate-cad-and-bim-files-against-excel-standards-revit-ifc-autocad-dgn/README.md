# ⚒️ Validate CAD and BIM files against Excel standards (Revit, IFC, AutoCAD, DGN)

> ⚡ **1,027 views** · ⚒️ [Engineering](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## CAD-BIM Multi-Format Validation Pipeline

This workflow enables automated validation of CAD and BIM files in multiple formats (Revit, IFC, DWG, DGN) for compliance with project standards and requirements.

### Key Features

- Converts Revit, IFC, DWG, and DGN models into open data tables
- Runs automated validation checks on model naming, structure, attributes, and completeness
- Generates error reports and QTO (Quantity Take-Off) tables for all processed files

### How it works

1. Upload one or more project files in Revit (.rvt), IFC (.ifc), DWG, or DGN formats
2. The pipeline automatically processes each file and validates against configurable rules in Excel form
3. Error summaries and QTO tables are generated 
4. All outputs are available for download as Excel 


- **Converter Path:**  
  Make sure the converter executable (e.g. `RvtExporter.exe`) is placed in `DDC Exporter\datadrivenlibs\`.  
  Specify the full path in the workflow settings if required.



- **Troubleshooting:**  
  - If conversion fails, double-check the path to the executable.
  - Only supported formats can be processed (see GitHub Readme).
  - Review logs in `/output` for error details.

- **Docs & Issues:**  
  [Full Readme on GitHub](https://github.com/datadrivenconstruction/cad2data-Revit-IFC-DWG-DGN-pipeline-with-conversion-validation-qto)

## Consulting and Training
We work with leading construction, engineering, consulting agencies and technology firms around the world to help them implement open data principles, automate CAD/BIM processing and build robust ETL pipelines.

If you would like to test this solution with your own data, or are interested in adapting the workflow to real project tasks, feel free to contact us.

## Author
 [DataDrivenConstruction.io ](https://DataDrivenConstruction.io )
 [info@datadrivenconstruction.io](mailto:info@datadrivenconstruction.io)

**Docs & Issues:**  
  [Full Readme on GitHub](https://github.com/datadrivenconstruction/cad2data-Revit-IFC-DWG-DGN-pipeline-with-conversion-validation-qto)

## 🔗 Nodes Used

Read Binary File, Write Binary File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
