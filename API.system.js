window.API_SYSTEM = {
    seed: () => ID_UNIT.seed,
    triad: () => ID_UNIT.triad,
    compat: () => ID_UNIT.compat
};

async function loadCSV() {
    const r = await fetch("schnittstelle-bandbreite-6.csv");
    const t = await r.text();
    return t.split("\n").map(l => l.split(","));
}
