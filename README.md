## Schnittstellen-Bandbreite (CSV)
Die Datei `schnittstelle-bandbreite-6.csv` enthält die 6 wichtigsten
Schnittstellen des Systems:

- NVMe
- M.2
- Thunderbolt
- GPU
- OCuLink
- PCIe

Sie wird automatisch in `index.html` geladen und in `API.system.js`
für Kompatibilitätsmessungen genutzt.
## ID_UNIT_GEN
Die Datei `ID_UNIT.js` definiert die neue SEED‑basierte ID‑Einheit:

- SEED = ⟁
- TRIAD = ○ ○ ○
- COMPAT = NVMe, M.2, Thunderbolt, GPU, OCuLink, PCIe

Sie wird von `API.system.js` und `index.html` genutzt.
