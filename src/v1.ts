export const v1 = {
  "workbench": "Impact Metrics Ledger",
  "table": "Outcome records",
  "metrics": [
    "Verified Impact",
    "Follow-up Coverage",
    "CSR Readiness"
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
  "generators": [
    "CSR summary",
    "Anonymized impact CSV",
    "Chapter dashboard JSON"
  ],
  "validations": [
    "No impact counted without baseline/evidence",
    "Follow-up after handoff",
    "Sensitive fields excluded from anonymized export"
  ],
  "sampleScenario": "Volta chapter uses Impact Metrics Ledger with Riverside Community Bakery to produce a release-ready v1.0 packet."
};
