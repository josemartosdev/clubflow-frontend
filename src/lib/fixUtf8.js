/**
 * Repara texto con tildes corruptas (ej. Alev??n → Alevín, GestiÃ³n → Gestión).
 * Cubre datos legacy importados con mala codificación.
 */
const MOJIBAKE = /\u00C3[\u0080-\u00BF]|\u00C2[\u0080-\u00BF]|\?\?/;

const REPLACEMENTS = [
  [/Alev\?\?n/g, "Alevín"],
  [/M\?\?ndez/g, "Méndez"],
  [/Garc\?\?a/g, "García"],
  [/L\?\?pez/g, "López"],
  [/Mart\?\?n/g, "Martín"],
  [/Fern\?\?ndez/g, "Fernández"],
  [/Jim\?\?nez/g, "Jiménez"],
  [/Pe\?\?a/g, "Peña"],
  [/Rub\?\?n/g, "Rubén"],
  [/Sol\?\?s/g, "Solís"],
  [/R\?\?os/g, "Ríos"],
  [/Le\?\?n/g, "León"],
  [/Luc\?\?a/g, "Lucía"],
  [/Mar\?\?a/g, "María"],
  [/\?\?/g, "í"],
];

export function fixUtf8String(str) {
  if (typeof str !== "string" || str === "") return str;

  let out = str;

  if (/[\u00C2\u00C3]/.test(out)) {
    try {
      const bytes = Uint8Array.from(out, (c) => c.charCodeAt(0));
      const decoded = new TextDecoder("utf-8").decode(bytes);
      if (decoded) out = decoded;
    } catch {
      /* keep original */
    }
  }

  for (const [pattern, replacement] of REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }

  return out;
}

export function fixUtf8Deep(value) {
  if (typeof value === "string") return fixUtf8String(value);
  if (Array.isArray(value)) return value.map(fixUtf8Deep);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, fixUtf8Deep(v)])
    );
  }
  return value;
}
