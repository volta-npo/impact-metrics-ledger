export const domain = {
    "kind": "impact-ledger",
    "title": "Impact Metrics Ledger",
    "purpose": "A purpose-built impact ledger interface for a lightweight ledger for tracking client outcomes after volta projects ship.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Outcome records",
    "metricLabels": [
        "Verified Impact",
        "Follow-up Coverage",
        "CSR Readiness"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Eastside Youth Arts Collective",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "verified outcomes collected after project handoff",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "input-asset",
            "label": "Input asset",
            "type": "text",
            "sample": "Project baseline captured",
            "placeholder": "Enter input asset"
        },
        {
            "id": "output-format",
            "label": "Output format",
            "type": "text",
            "sample": "CSR summary",
            "placeholder": "Enter output format"
        },
        {
            "id": "review-threshold",
            "label": "Review threshold",
            "type": "number",
            "sample": 85,
            "placeholder": "Enter review threshold"
        },
        {
            "id": "approved-channel",
            "label": "Approved channel",
            "type": "text",
            "sample": "Owner handoff packet",
            "placeholder": "Enter approved channel"
        }
    ],
    "rows": [
        "Project baseline captured",
        "Handoff date recorded",
        "30-day follow-up logged",
        "60-day follow-up logged",
        "90-day follow-up logged",
        "Evidence approved",
        "Anonymization reviewed",
        "CSR summary generated"
    ],
    "artifacts": [
        "CSR summary",
        "Anonymized impact CSV",
        "Chapter dashboard JSON"
    ],
    "checks": [
        "No impact counted without baseline/evidence",
        "Follow-up after handoff",
        "Sensitive fields excluded from anonymized export"
    ],
    "sampleClient": "Eastside Youth Arts Collective"
};
//# sourceMappingURL=domain.js.map