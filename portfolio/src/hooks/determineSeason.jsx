export function determineSeason(date = new Date()) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() zwraca miesiąc od 0 do 11
    const day = date.getDate();
  
    // Definicja początku każdej pory roku
    const springStart = new Date(year, 2, 1); // Marzec to miesiąc 2, ponieważ Styczeń jest 0
    const summerStart = new Date(year, 5, 1); // Czerwiec to miesiąc 5
    const autumnStart = new Date(year, 8, 1); // Wrzesień to miesiąc 8
    const winterStart = new Date(year, 11, 1); // Grudzień to miesiąc 11
  
    // Ustalenie aktualnej pory roku
    if (date >= springStart && date < summerStart) {
      return 'spring';
    } else if (date >= summerStart && date < autumnStart) {
      return 'summer';
    } else if (date >= autumnStart && date < winterStart) {
      return 'autumn';
    } else {
      // Zima rozciąga się na dwa lata, więc sprawdzamy również styczeń i luty następnego roku
      if (month < 3 || (month === 12 && day >= 1)) {
        return 'winter';
      }
    }
  
    // Niezdefiniowany przypadek, który nie powinien wystąpić, jeśli wszystkie daty są pokryte powyżej
    return 'Unknown';
  }