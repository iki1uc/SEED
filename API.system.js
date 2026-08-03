// API.system.js
window.API_SYSTEM = {
    idMode: () => ID_UNIT.mode,
    idLevel: () => ID_UNIT.level,
    idVector: () => ID_UNIT.vector
};
async function loadCSV() {
    const r = await fetch("schnittstelle-bandbreite-6.csv");
    const t = await r.text();
    return t.split("\n").map(l => l.split(","));
}
