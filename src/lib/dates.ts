/**
 * Calcula la duración entre dos fechas en formato "X meses" / "X años Y meses".
 * Acepta "Actualidad" / "Hoy" como fecha final.
 */
export function computeDuration(startStr: string, endStr: string): string | null {
	const months = monthsBetween(parseDate(startStr), parseDate(endStr));
	if (months === null) return null;
	if (months < 1) return 'Menos de 1 mes';
	if (months < 12) return `${months} ${months === 1 ? 'mes' : 'meses'}`;
	const years = Math.floor(months / 12);
	const rest = months % 12;
	if (rest === 0) return `${years} ${years === 1 ? 'año' : 'años'}`;
	return `${years} ${years === 1 ? 'año' : 'años'} ${rest} ${rest === 1 ? 'mes' : 'meses'}`;
}

/**
 * Devuelve los meses entre dos fechas, o null si no se pueden parsear.
 */
function monthsBetween(start: Date | null, end: Date | null): number | null {
	if (!start || !end) return null;
	const years = end.getFullYear() - start.getFullYear();
	const m = end.getMonth() - start.getMonth();
	let total = years * 12 + m;
	if (end.getDate() < start.getDate()) total -= 1;
	return Math.max(0, total);
}

/**
 * Parsea una fecha en formato "Mes YYYY" en español.
 * Si la cadena es "Actualidad" / "Hoy" / "Presente", devuelve la fecha actual.
 */
function parseDate(s: string): Date | null {
	const today = new Date();
	const lower = s.toLowerCase().trim();
	if (['actualidad', 'hoy', 'presente', 'actual'].includes(lower)) return today;

	const months: Record<string, number> = {
		enero: 0,
		febrero: 1,
		marzo: 2,
		abril: 3,
		mayo: 4,
		junio: 5,
		julio: 6,
		agosto: 7,
		septiembre: 8,
		setiembre: 8,
		octubre: 9,
		noviembre: 10,
		diciembre: 11
	};

	const match = s.toLowerCase().match(/([a-záéíóú]+)\s+(\d{4})/);
	if (!match) return null;
	const month = months[match[1]];
	if (month === undefined) return null;
	const year = Number(match[2]);
	return new Date(year, month, 1);
}
