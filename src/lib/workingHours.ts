export interface WorkTimePreset {
  startTime: string;
  endTime: string;
  pauseStart: string;
  pauseEnd: string;
  pauseMinutes: number;
  totalHours: number;
}

/**
 * Gibt die Normalarbeitszeit für einen Tag zurück
 * Mo-Fr: 8h, Sa-So: 0h
 */
export function getNormalWorkingHours(date: Date): number {
  const dayOfWeek = date.getDay();

  // Wochenende
  if (dayOfWeek === 0 || dayOfWeek === 6) return 0;

  // Montag - Freitag: 8 Stunden
  return 8;
}

/**
 * Gibt die Freitags-Überstunde zurück (nicht mehr relevant, bleibt für Kompatibilität)
 */
export function getFridayOvertime(_date: Date): number {
  return 0;
}

/**
 * Gibt die tatsächlichen Arbeitsstunden für einen Wochentag zurück
 * Mo-Fr: 8h, Sa-So: 0h
 */
export function getTotalWorkingHours(date: Date): number {
  return getNormalWorkingHours(date);
}

/**
 * Gibt das Wochensoll zurück: 40 Stunden
 */
export function getWeeklyTargetHours(): number {
  return 40;
}

/**
 * Gibt Standard-Arbeitszeiten für einen Tag zurück
 * Mo-Fr: 08:00-17:00, Pause 12:00-13:00, 8h
 */
export function getDefaultWorkTimes(date: Date): WorkTimePreset | null {
  const dayOfWeek = date.getDay();

  // Wochenende
  if (dayOfWeek === 0 || dayOfWeek === 6) return null;

  // Montag - Freitag: 08:00 - 17:00, Pause 12:00 - 13:00
  return {
    startTime: "08:00",
    endTime: "17:00",
    pauseStart: "12:00",
    pauseEnd: "13:00",
    pauseMinutes: 60,
    totalHours: 8,
  };
}

/**
 * Prüft ob ein Tag ein arbeitsfreier Tag ist (nur Wochenende)
 */
export function isNonWorkingDay(date: Date): boolean {
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
}
