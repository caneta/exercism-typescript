export function toRna(dna: string): string {
  if (/[^CGAT]/.test(dna) || dna === "") {
    throw new Error("Invalid input DNA.");
  }
  const map: Record<string, string> = { C: "G", G: "C", A: "U", T: "A" };
  return dna.replace(/[CGAT]/g, (n) => map[n]);
}
