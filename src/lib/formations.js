/** Plantillas de formación — filas de arriba (ataque) a abajo (portería) */

export const FORMATION_PRESETS = {
  "4-3-3": {
    label: "4-3-3",
    rows: [
      { roles: ["ED", "DC", "EI"], numbers: [11, 9, 7] },
      { roles: ["MC", "MCO", "MC"], numbers: [8, 10, 6] },
      { roles: ["LD", "DFC", "DFC", "LI"], numbers: [2, 4, 5, 3] },
      { roles: ["POR"], numbers: [1] },
    ],
  },
  "4-4-2": {
    label: "4-4-2",
    rows: [
      { roles: ["DC", "DC"], numbers: [9, 10] },
      { roles: ["ED", "MC", "MC", "EI"], numbers: [7, 8, 6, 11] },
      { roles: ["LD", "DFC", "DFC", "LI"], numbers: [2, 4, 5, 3] },
      { roles: ["POR"], numbers: [1] },
    ],
  },
  "4-2-3-1": {
    label: "4-2-3-1",
    rows: [
      { roles: ["DC"], numbers: [9] },
      { roles: ["EI", "MP", "ED"], numbers: [11, 10, 7] },
      { roles: ["MC", "MC"], numbers: [6, 8] },
      { roles: ["LD", "DFC", "DFC", "LI"], numbers: [2, 4, 5, 3] },
      { roles: ["POR"], numbers: [1] },
    ],
  },
  "3-5-2": {
    label: "3-5-2",
    rows: [
      { roles: ["DC", "DC"], numbers: [9, 10] },
      { roles: ["ED", "MC", "MCO", "MC", "EI"], numbers: [7, 6, 8, 14, 11] },
      { roles: ["DFC", "DFC", "DFC"], numbers: [4, 5, 3] },
      { roles: ["POR"], numbers: [1] },
    ],
  },
  "1-4-3-3": {
    label: "1-4-3-3",
    rows: [
      { roles: ["ED", "DC", "EI"], numbers: [11, 9, 7] },
      { roles: ["MC", "MCO", "MC"], numbers: [8, 10, 6] },
      { roles: ["LD", "DFC", "DFC", "LI"], numbers: [2, 4, 5, 3] },
      { roles: ["POR"], numbers: [1] },
    ],
  },
};

const ROLE_LABELS = {
  POR: "Portero",
  LD: "Lat. der.",
  LI: "Lat. izq.",
  DFC: "Central",
  MC: "Medio",
  MCO: "Mediapunta",
  MP: "Enganche",
  ED: "Ext. der.",
  EI: "Ext. izq.",
  DC: "Delantero",
};

export function parseFormation(code) {
  if (!code) return null;
  const key = code.trim().replace(/\s/g, "");
  if (FORMATION_PRESETS[key]) return FORMATION_PRESETS[key];
  const normalized = key.replace(/^1-/, "");
  if (FORMATION_PRESETS[normalized]) return FORMATION_PRESETS[normalized];

  const parts = normalized.split("-").map(Number).filter((n) => !Number.isNaN(n));
  if (parts.length < 2) return null;

  const rows = [];
  let num = 1;
  for (let i = parts.length - 1; i >= 0; i--) {
    const count = parts[i];
    const roles = [];
    const numbers = [];
    for (let j = 0; j < count; j++) {
      roles.push(i === 0 && parts.length > 1 ? "POR" : "JUG");
      numbers.push(num++);
    }
    rows.unshift({ roles, numbers });
  }
  return { label: normalized, rows };
}

export function getRoleLabel(role) {
  return ROLE_LABELS[role] || role;
}

export const FORMATION_OPTIONS = ["4-3-3", "4-4-2", "4-2-3-1", "3-5-2"];
