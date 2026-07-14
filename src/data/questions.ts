export type Option = { key: string; label: string };

export type Statement = { text: string; answer: boolean }; // true = Prawda

// Optional list rendered after the mail box: an intro line + bullet points.
type Bullets = {
  bulletsIntro?: string;
  bullets?: string[];
};

export type SingleQuestion = Bullets & {
  id: number;
  type: "single";
  context?: string[];
  mail?: string[];
  question: string;
  options: Option[];
  correct: string; // option key
};

export type MultipleQuestion = Bullets & {
  id: number;
  type: "multiple";
  context?: string[];
  mail?: string[];
  question: string;
  options: Option[];
  correct: string[]; // option keys
};

export type TrueFalseQuestion = Bullets & {
  id: number;
  type: "truefalse";
  context?: string[];
  mail?: string[];
  question: string;
  statements: Statement[];
};

export type Question = SingleQuestion | MultipleQuestion | TrueFalseQuestion;

export const questions: Question[] = [
  {
    id: 1,
    type: "single",
    context: [
      "Pracujesz w firmie BrightFlow i właśnie dostajesz maila o następującej treści od swojej CEO:",
    ],
    mail: [
      "Od: Anna Nowak – CEO BrightFlow\nDo: HR Business Partner",
      "Cześć,\n\nByłam wczoraj na konferencji dla CEO i praktycznie każdy mówił o ocenach okresowych. Zastanawiam się, czy nie powinniśmy w końcu ich wdrożyć.\n\nZ drugiej strony mamy dopiero 18 osób. Nadal codziennie rozmawiam z większością zespołu, a nasz model biznesowy zmienia się praktycznie co kilka tygodni, bo wciąż szukamy najlepszego kierunku rozwoju produktu.\n\nCo o tym myślisz?\n\nAnna",
    ],
    question: "Jak będzie wyglądać Twoja odpowiedź?",
    options: [
      { key: "A", label: "Tak. Każda profesjonalna firma powinna posiadać system ocen okresowych niezależnie od etapu rozwoju." },
      { key: "B", label: "Tak. Oceny okresowe pomogą uporządkować organizację nawet wtedy, gdy model biznesowy nadal dynamicznie się zmienia." },
      { key: "C", label: "Na obecnym etapie wdrożenie ocen okresowych prawdopodobnie nie przyniesie oczekiwanej wartości. Firma jest niewielka, CEO ma bezpośredni kontakt z pracownikami, a model biznesowy nadal się stabilizuje." },
      { key: "D", label: "Najpierw należy zatrudnić dział HR, a dopiero później można rozważać wdrożenie ocen okresowych." },
    ],
    correct: "C",
  },
  {
    id: 2,
    type: "single",
    context: [
      "Pracujesz w firmie BrightFlow. Firma rozrosła się już do 48 pracowników. CEO zaprosiła Cię na spotkanie zarządu, podczas którego omawiany jest temat wdrożenia ocen okresowych. Podczas dyskusji padło kilka różnych opinii.",
    ],
    question: "Która z poniższych wypowiedzi jest najbardziej zgodna z dobrymi praktykami projektowania procesu ocen okresowych?",
    options: [
      { key: "A", label: "„Oceny okresowe powinny przede wszystkim pomóc nam lepiej kontrolować pracowników i sprawdzać, kto rzeczywiście pracuje.”" },
      { key: "B", label: "„Jeżeli wdrożymy oceny okresowe, nie będzie już potrzeby prowadzenia regularnych rozmów 1:1 ani udzielania bieżącego feedbacku.”" },
      { key: "C", label: "„Dobrze zaprojektowany proces ocen powinien pomagać porządkować oczekiwania wobec pracowników, wspierać ich rozwój oraz dostarczać danych do podejmowania lepszych decyzji biznesowych.”" },
      { key: "D", label: "„Najważniejsze jest wdrożenie dobrego formularza. Jeśli będzie dobrze przygotowany, większość problemów związanych z zarządzaniem ludźmi rozwiąże się sama.”" },
    ],
    correct: "C",
  },
  {
    id: 3,
    type: "single",
    context: [
      "Po spotkaniu zarządu CEO BrightFlow podjęła decyzję o wdrożeniu ocen okresowych i poprosiła Cię o przygotowanie planu działań.",
    ],
    question: "Która z poniższych propozycji rozpoczęcia projektu jest najbardziej zgodna z dobrymi praktykami?",
    options: [
      { key: "A", label: "CEO: „Skoro decyzja zapadła, zacznijmy od pierwszych rozmów oceniających już w przyszłym miesiącu.”" },
      { key: "B", label: "HR Business Partner: „Zanim rozpoczniemy proces, sprawdźmy, czy organizacja jest gotowa do jego wdrożenia i czy mamy odpowiednie fundamenty.”" },
      { key: "C", label: "Head of Sales: „Najpierw wybierzmy platformę do ocen. Resztę dopracujemy w trakcie.”" },
      { key: "D", label: "Dyrektor Finansowy: „Nie ma sensu tracić czasu na przygotowania. Im szybciej zaczniemy oceniać ludzi, tym szybciej zobaczymy efekty.”" },
    ],
    correct: "B",
  },
  {
    id: 4,
    type: "truefalse",
    context: [
      "Po spotkaniu zarządu Michał (HR Business Partner) przygotował roboczą notatkę z podziałem odpowiedzialności za wdrożenie procesu ocen okresowych.",
      "Przeczytaj poniższe zapisy i oceń, czy są zgodne z dobrymi praktykami przedstawionymi w Akademii.",
    ],
    question: "Fragment notatki projektowej",
    statements: [
      { text: "CEO odpowiada za określenie celu biznesowego procesu ocen oraz zapewnienie wsparcia dla jego wdrożenia.", answer: true },
      { text: "HR odpowiada za zaprojektowanie procesu, przygotowanie narzędzi oraz koordynację całego wdrożenia.", answer: true },
      { text: "Liderzy odpowiadają przede wszystkim za terminowe wypełnienie formularzy ocen. Jakość rozmowy z pracownikiem ma drugorzędne znaczenie.", answer: false },
      { text: "Pracownik powinien aktywnie przygotować się do rozmowy oraz wziąć odpowiedzialność za własny rozwój i realizację ustaleń po ocenie.", answer: true },
    ],
  },
  {
    id: 5,
    type: "single",
    context: [
      "Po zakończeniu prac nad procesem ocen okresowych Anna (CEO) przygotowała komunikat dla całej firmy:",
    ],
    mail: [
      "Od przyszłego miesiąca wdrażamy proces ocen okresowych. W najbliższych dniach HR prześle formularze oraz terminy rozmów z liderami. Udział w procesie jest obowiązkowy.",
    ],
    bulletsIntro: "Po spotkaniu kilku pracowników zaczęło zadawać pytania:",
    bullets: [
      "Po co właściwie to robimy?",
      "Czy to będzie miało wpływ na moje wynagrodzenie?",
      "Czy ktoś będzie oceniał mnie jako człowieka?",
    ],
    question: "Która odpowiedź najlepiej opisuje główny błąd popełniony w tej komunikacji?",
    options: [
      { key: "A", label: "CEO powinien najpierw przeszkolić liderów, a dopiero później poinformować o zmianie cały zespół." },
      { key: "B", label: "Komunikat koncentruje się na organizacji procesu, ale nie wyjaśnia jego celu ani znaczenia dla pracowników." },
      { key: "C", label: "Informacja została przekazana zbyt wcześnie – pracownicy powinni poznać proces dopiero tuż przed pierwszymi rozmowami." },
      { key: "D", label: "Najpierw należało zaprezentować formularz oceny, aby pracownicy wiedzieli, czego będą dotyczyć rozmowy." },
    ],
    correct: "B",
  },
  {
    id: 6,
    type: "truefalse",
    context: [
      "Po pierwszym komunikacie Michał (HR Business Partner) przygotował plan komunikacji wdrożenia procesu ocen okresowych.",
      "Zweryfikuj, czy poniższe działania zostały przypisane do właściwego etapu modelu komunikacji zmiany.",
    ],
    question: "Działanie",
    statements: [
      { text: "Wyjaśnienie, dlaczego firma wdraża oceny okresowe i jakie problemy mają one rozwiązać, jest elementem etapu „Wiem”.", answer: true },
      { text: "Odpowiadanie na pytania pracowników dotyczące wpływu ocen na wynagrodzenie i codzienną pracę należy do etapu „Rozumiem”.", answer: true },
      { text: "Szkolenie liderów z prowadzenia rozmów oceniających należy do etapu „Chcę”.", answer: false },
      { text: "Sprawdzenie, czy liderzy są przygotowani do rozmów i czy organizacja jest gotowa do rozpoczęcia procesu, należy do etapu „Mogę”.", answer: true },
    ],
  },
  {
    id: 7,
    type: "single",
    context: [
      "Karolina (Head of Development) przygotowuje się do pierwszej rozmowy oceniającej z jednym z programistów. Przed spotkaniem pokazuje Ci plan rozmowy.",
    ],
    question: "Który z poniższych planów najlepiej odzwierciedla strukturę dobrej rozmowy oceniającej opisaną w Akademii?",
    options: [
      { key: "A", label: "Omówienie realizacji celów i wyników.\nPodjęcie decyzji o podwyżce.\nUstalenie wysokości premii.\nWyznaczenie celów na kolejny okres." },
      { key: "B", label: "Omówienie realizacji celów i wyników.\nAnaliza zachowań oraz współpracy z zespołem.\nPodsumowanie absencji i wykorzystania urlopów.\nUstalenie planu rozwoju." },
      { key: "C", label: "Omówienie realizacji celów i wyników.\nOmówienie zachowań, wartości i współpracy.\nRozmowa o perspektywie pracownika i współpracy z organizacją.\nUstalenie kierunków rozwoju i kolejnych działań." },
      { key: "D", label: "Omówienie realizacji celów i wyników.\nPrzegląd obowiązków zapisanych w opisie stanowiska.\nWypełnienie formularza oceny.\nPodsumowanie najważniejszych projektów z ostatnich miesięcy." },
    ],
    correct: "C",
  },
  {
    id: 8,
    type: "truefalse",
    context: [
      "Michał (HR Business Partner) przygotował fragment instrukcji dla liderów dotyczącej prowadzenia rozmów oceniających.",
      "Zweryfikuj, czy poniższe zapisy są zgodne z dobrymi praktykami przedstawionymi w Akademii.",
    ],
    question: "Fragment instrukcji",
    statements: [
      { text: "Rozmowa oceniająca powinna łączyć perspektywę celów organizacji z perspektywą rozwoju pracownika.", answer: true },
      { text: "Najważniejszym celem rozmowy jest rozliczenie pracownika z wyników osiągniętych w minionym okresie.", answer: false },
      { text: "W rozmowie warto omawiać zarówno efekty pracy, jak i sposób współpracy oraz zachowania wpływające na funkcjonowanie zespołu.", answer: true },
      { text: "Rozmowa rozwojowa powinna zostać odłożona na kolejne spotkanie, aby nie wydłużać procesu oceny okresowej.", answer: false },
    ],
  },
  {
    id: 9,
    type: "multiple",
    context: [
      "Po zakończeniu prac nad procesem ocen Michał (HR Business Partner) przygotował pierwszą wersję formularza oceny okresowej. Przed jego wdrożeniem poprosił liderów o zgłoszenie uwag.",
    ],
    question: "Które z poniższych sugestii są zgodne z dobrymi praktykami przedstawionymi w Akademii? (Możesz wybrać więcej niż jedną odpowiedź.)",
    options: [
      { key: "A", label: "Formularz powinien zawierać tylko te informacje, które będą wykorzystywane podczas rozmowy i po jej zakończeniu." },
      { key: "B", label: "Formularz powinien zawierać możliwie dużo pytań, aby niczego nie pominąć podczas oceny." },
      { key: "C", label: "Warto dodać dodatkowe sekcje, nawet jeśli firma nie planuje z nich obecnie korzystać." },
      { key: "D", label: "Formularz powinien wynikać z wcześniej zaprojektowanego procesu ocen, a nie go zastępować." },
    ],
    correct: ["A", "D"],
  },
  {
    id: 10,
    type: "single",
    context: [
      "Podczas spotkania projektowego Anna (CEO) mówi:",
      "„Może nie komplikujmy tego. Pobierzmy gotowy formularz ocen z Internetu i zacznijmy z niego korzystać.”",
    ],
    question: "Jak odpowiesz Annie?",
    options: [
      { key: "A", label: "Dobry formularz wystarczy dopasować do firmy i można rozpocząć oceny." },
      { key: "B", label: "Najpierw projektujemy proces ocen. Formularz jest tylko narzędziem wspierającym jego realizację." },
      { key: "C", label: "Najważniejszy jest wybór odpowiedniej skali ocen. Pozostałe elementy można dopracować później." },
      { key: "D", label: "Najpierw przygotujmy formularz, a później dopasujemy do niego kryteria oceny." },
    ],
    correct: "B",
  },
  {
    id: 11,
    type: "single",
    context: [
      "Po wdrożeniu procesu ocen liderzy BrightFlow rozpoczęli wyznaczanie celów na kolejne półrocze. Michał (HR Business Partner) poprosił ich o przesłanie propozycji do weryfikacji.",
    ],
    question: "Który z poniższych celów będzie najłatwiejszy do rzetelnej oceny podczas kolejnej rozmowy okresowej?",
    options: [
      { key: "A", label: "„Pracownik powinien bardziej angażować się w pracę zespołu.”" },
      { key: "B", label: "„Pracownik powinien poprawić komunikację z klientami.”" },
      { key: "C", label: "„Do końca półrocza skrócić średni czas odpowiedzi na zgłoszenia klientów z 12 do 8 godzin, utrzymując satysfakcję klientów na poziomie minimum 90%.”" },
      { key: "D", label: "„Pracownik powinien pracować bardziej samodzielnie.”" },
    ],
    correct: "C",
  },
  {
    id: 12,
    type: "multiple",
    context: [
      "Podczas warsztatu dla liderów pojawiło się pytanie:",
      "„Co zrobić, gdy w trakcie okresu oceny zmienią się priorytety firmy i wcześniej ustalone cele przestaną być aktualne?”",
    ],
    question: "Które z poniższych odpowiedzi są zgodne z podejściem przedstawionym w Akademii? (Możesz wybrać więcej niż jedną odpowiedź.)",
    options: [
      { key: "A", label: "Jeżeli zmieniają się priorytety biznesowe, cele również mogą zostać zaktualizowane." },
      { key: "B", label: "Raz ustalonych celów nie należy zmieniać, aby zachować porównywalność ocen." },
      { key: "C", label: "Zmiana celu oznacza, że cały proces ocen został źle zaprojektowany." },
      { key: "D", label: "Proces ocen powinien być na tyle elastyczny, aby uwzględniać zmiany zachodzące w organizacji." },
    ],
    correct: ["A", "D"],
  },
  {
    id: 13,
    type: "single",
    context: [
      "Dzień przed rozpoczęciem rozmów okresowych Michał (HR Business Partner) otrzymał wiadomość od Karoliny (Head of Development).",
      "Cześć Michał,\nJutro prowadzę pierwszą rozmowę oceniającą. Pracownik osiągnął wszystkie cele, ale w ostatnich miesiącach miał kilka konfliktów z zespołem.\nJak powinnam poprowadzić tę rozmowę?\nKarolina",
    ],
    question: "Jakiej odpowiedzi Michał powinien udzielić Karolinie?",
    options: [
      { key: "A", label: "„Skup się wyłącznie na realizacji celów.”" },
      { key: "B", label: "„Omów zarówno wyniki, jak i współpracę.”" },
      { key: "C", label: "„Najpierw przedstaw końcową ocenę.”" },
      { key: "D", label: "„Nie wracaj do wcześniejszych konfliktów.”" },
    ],
    correct: "B",
  },
  {
    id: 14,
    type: "truefalse",
    context: [
      "Po szkoleniu dla liderów Michał (HR Business Partner) przygotował fragment instrukcji dotyczącej prowadzenia rozmów oceniających.",
      "Zweryfikuj poprawność poniższych zapisów.",
    ],
    question: "Fragment instrukcji",
    statements: [
      { text: "Lider powinien przygotować konkretne przykłady zachowań i sytuacji, które będą podstawą rozmowy.", answer: true },
      { text: "Rozmowa oceniająca powinna opierać się przede wszystkim na ostatnich wydarzeniach, ponieważ pracownik najlepiej je pamięta.", answer: false },
      { text: "Jednym z zadań lidera jest stworzenie przestrzeni do poznania perspektywy pracownika i prowadzenia dialogu.", answer: true },
      { text: "Jeśli lider nie ma wystarczających przykładów potwierdzających swoją ocenę, powinien opierać się na ogólnym wrażeniu ze współpracy.", answer: false },
    ],
  },
  {
    id: 15,
    type: "multiple",
    context: [
      "Michał (HR Business Partner) przygotował harmonogram pierwszego cyklu ocen okresowych. Zanim rozpocznie wdrożenie, poprosił liderów o jego ocenę.",
    ],
    question: "Które z poniższych działań powinny znaleźć się w dobrze zaplanowanym harmonogramie procesu ocen okresowych? (Możesz wybrać więcej niż jedną odpowiedź.)",
    options: [
      { key: "A", label: "Zaplanowanie czasu na przygotowanie liderów do rozmów oceniających." },
      { key: "B", label: "Przekazanie formularzy pracownikom dopiero w dniu rozmowy." },
      { key: "C", label: "Wyznaczenie czasu na przygotowanie się pracowników do rozmowy." },
      { key: "D", label: "Przeprowadzenie wszystkich rozmów w jednym dniu, aby szybciej zamknąć proces." },
    ],
    correct: ["A", "C"],
  },
  {
    id: 16,
    type: "single",
    context: [
      "W połowie pierwszego cyklu ocen okresowych Michał (HR Business Partner) otrzymał wiadomość od Tomasza (Head of Sales).",
      "Cześć Michał,\nMam dziś zaplanowane cztery rozmowy oceniające jedna po drugiej. Każdej osobie wyślę formularz tuż przed spotkaniem, żeby nie miała czasu przygotować odpowiedzi. Dzięki temu rozmowy będą bardziej spontaniczne.\nTomasz",
    ],
    question: "Co Michał powinien rekomendować Tomaszowi?",
    options: [
      { key: "A", label: "„To dobry pomysł. Dzięki temu pracownicy będą odpowiadać bardziej naturalnie.”" },
      { key: "B", label: "„Pracownik powinien mieć czas na przygotowanie się do rozmowy. To zwiększa jej wartość i jakość.”" },
      { key: "C", label: "„Najlepiej skrócić rozmowy do 15 minut i omówić tylko najważniejsze kwestie.”" },
      { key: "D", label: "„Najważniejsze jest zakończenie wszystkich rozmów zgodnie z harmonogramem.”" },
    ],
    correct: "B",
  },
  {
    id: 17,
    type: "single",
    context: [
      "Po zakończeniu pierwszego cyklu ocen Anna (CEO) spotyka się z Michałem (HR Business Partnerem).",
      "Anna:\n„Myślę, że podczas jednej rozmowy omówimy ocenę, plan rozwoju i od razu podejmiemy decyzję o podwyżce. Dzięki temu pracownik będzie miał wszystko załatwione podczas jednego spotkania.”",
    ],
    question: "Jakiej odpowiedzi udzielisz Annie?",
    options: [
      { key: "A", label: "„To dobre rozwiązanie. Jedna rozmowa skróci cały proces.”" },
      { key: "B", label: "„Jeżeli to możliwe, warto rozdzielić rozmowę rozwojową od decyzji o wynagrodzeniu.”" },
      { key: "C", label: "„Najpierw ustalmy wysokość podwyżki, a później przeprowadźmy ocenę.”" },
      { key: "D", label: "„Najważniejsze jest zakończenie procesu zgodnie z harmonogramem.”" },
    ],
    correct: "B",
  },
  {
    id: 18,
    type: "truefalse",
    context: [
      "Po zakończeniu rozmów Michał przygotował instrukcję dla liderów dotyczącą działań po ocenie okresowej.",
      "Zweryfikuj poprawność poniższych zapisów.",
    ],
    question: "Fragment instrukcji",
    statements: [
      { text: "Po rozmowie warto zapisać najważniejsze ustalenia oraz odpowiedzialności obu stron.", answer: true },
      { text: "Dokumentacja powinna być możliwie szczegółowa, nawet jeśli większość informacji nie będzie później wykorzystywana.", answer: false },
      { text: "Niska ocena pracownika powinna kończyć się jasnym planem dalszych działań oraz wsparciem ze strony lidera.", answer: true },
      { text: "Po zakończeniu rozmowy nie ma potrzeby wracać do ustaleń aż do kolejnego cyklu ocen.", answer: false },
    ],
  },
  {
    id: 19,
    type: "single",
    context: [
      "W firmie BrightFlow zakończył się pierwszy cykl ocen okresowych. Podczas spotkania podsumowującego Anna (CEO) pyta Michała (HR Business Partnera), co powinno wydarzyć się dalej.",
    ],
    question: "Która odpowiedź najlepiej odzwierciedla podejście przedstawione w Akademii?",
    options: [
      { key: "A", label: "„Teraz skupmy się na bieżących projektach. Do ustaleń z ocen wrócimy przy kolejnym cyklu za kilka miesięcy.”" },
      { key: "B", label: "„Regularnie wracajmy do ustaleń z rozmów i udzielajmy pracownikom bieżącego feedbacku.”" },
      { key: "C", label: "„Przygotujmy nową wersję formularza ocen, aby w kolejnym cyklu zebrać jeszcze więcej informacji od pracowników.”" },
      { key: "D", label: "„Poczekajmy na zakończenie kolejnego okresu oceny. Wtedy sprawdzimy, czy pracownicy zrealizowali wszystkie ustalenia.”" },
    ],
    correct: "B",
  },
  {
    id: 20,
    type: "single",
    context: [
      "Po zakończeniu pierwszego cyklu ocen Michał (HR Business Partner) analizuje przebieg procesu. Zauważa, że większość liderów przeprowadziła rozmowy zgodnie z planem, ale przez kolejne miesiące nie wracała do ustalonych działań rozwojowych.",
    ],
    question: "Jaki będzie najbardziej prawdopodobny skutek takiego podejścia?",
    options: [
      { key: "A", label: "Pracownicy będą samodzielnie realizować ustalenia, ponieważ zostały omówione podczas rozmowy." },
      { key: "B", label: "Podczas kolejnych ocen będą wracały te same problemy, ponieważ ustalenia nie zostały przełożone na codzienne działania." },
      { key: "C", label: "Proces ocen stanie się krótszy, ponieważ większość tematów została już wcześniej omówiona." },
      { key: "D", label: "Liderzy będą mogli łatwiej ocenić postępy pracowników, opierając się na poprzednich ustaleniach." },
    ],
    correct: "B",
  },
  {
    id: 21,
    type: "single",
    context: [
      "Po zakończeniu rozmowy oceniającej Karolina (Head of Development) przygotowała listę obszarów do rozwoju dla jednego z programistów:",
      "• lepsze planowanie pracy,\n• częstsze przekazywanie informacji o ryzykach,\n• rozwój umiejętności prezentacyjnych,\n• udział w szkoleniu technicznym,\n• poprawa dokumentacji projektowej,\n• skuteczniejsze delegowanie zadań.",
      "Karolina:\n„Chciałabym wpisać do planu rozwoju wszystkie te obszary. Dzięki temu niczego nie pominiemy.”",
    ],
    question: "Jakiej odpowiedzi udzielisz Karolinie?",
    options: [
      { key: "A", label: "Warto wpisać wszystkie obszary, aby plan był kompletny." },
      { key: "B", label: "Należy wybrać 1–5 najważniejszych priorytetów, a pozostałe rozłożyć na kolejne okresy lub odłożyć na później." },
      { key: "C", label: "Najpierw należy zrealizować wszystkie łatwe zadania, a dopiero później te trudniejsze." },
      { key: "D", label: "Najważniejsze jest przygotowanie szczegółowego planu dla wszystkich obszarów, nawet jeśli jego realizacja potrwa dłużej." },
    ],
    correct: "B",
  },
  {
    id: 22,
    type: "multiple",
    context: [
      "Po zakończeniu rozmów rozwojowych Michał (HR Business Partner) przygotowuje wzór 90-dniowego planu rozwoju dla liderów.",
    ],
    question: "Które elementy powinny znaleźć się w takim planie zgodnie z podejściem przedstawionym w Akademii? (Możesz wybrać więcej niż jedną odpowiedź.)",
    options: [
      { key: "A", label: "Konkretne działania, które pracownik ma zrealizować." },
      { key: "B", label: "Szczegółowy opis wszystkich obowiązków wynikających z opisu stanowiska." },
      { key: "C", label: "Termin weryfikacji postępów oraz sposób ich omówienia." },
      { key: "D", label: "Listę wszystkich projektów realizowanych przez zespół w danym kwartale." },
    ],
    correct: ["A", "C"],
  },
  {
    id: 23,
    type: "single",
    context: [
      "W firmie przeprowadzono oceny okresowe. Liderzy oceniali głównie zaangażowanie, sympatię i ogólne wrażenia z pracy. Nie odnosili się do celów strategicznych firmy.",
    ],
    question: "Jaki będzie najbardziej prawdopodobny efekt takiego podejścia?",
    options: [
      { key: "A", label: "Pracownicy będą bardziej zmotywowani do realizacji celów firmy." },
      { key: "B", label: "Oceny nie będą wspierały decyzji biznesowych." },
      { key: "C", label: "Proces stanie się krótszy i łatwiejszy do przeprowadzenia." },
      { key: "D", label: "Liderzy szybciej przygotują się do rozmów oceniających." },
    ],
    correct: "B",
  },
  {
    id: 24,
    type: "single",
    context: [
      "Po zakończeniu rozmowy oceniającej Marek (CFO) powiedział pracownikowi:",
      "„Musisz bardziej popracować nad komunikacją. Wrócimy do tego za pół roku.”",
    ],
    question: "Która odpowiedź najlepiej pokazuje, co należało zrobić zamiast tego?",
    options: [
      { key: "A", label: "Poczekać do kolejnej oceny okresowej i sprawdzić, czy sytuacja sama się poprawi." },
      { key: "B", label: "Przekazać temat do HR, aby to on przygotował plan działań." },
      { key: "C", label: "Ustalić konkretne działania, termin realizacji oraz sposób sprawdzenia postępów." },
      { key: "D", label: "Pozostawić pracownikowi pełną swobodę wyboru działań, bez ustalania terminów i oczekiwań." },
    ],
    correct: "C",
  },
  {
    id: 25,
    type: "multiple",
    context: [
      "Po kilku miesiącach od wdrożenia ocen okresowych Anna (CEO) zauważyła, że liderzy regularnie spotykają się z pracownikami, jednak w zespołach nadal pojawiają się nieporozumienia.",
      "Podczas spotkania z Michałem (HR Business Partnerem) mówi:\n„Liderzy rozmawiają z ludźmi, ale mam wrażenie, że każdy inaczej rozumie priorytety. Pracownicy często słyszą, że »mogliby robić coś lepiej«, ale rzadko wiedzą, co konkretnie mają zmienić.”",
    ],
    question: "Które działania najlepiej wspierają budowanie kultury jasnych oczekiwań opisanej w Akademii? (Możesz wybrać więcej niż jedną odpowiedź.)",
    options: [
      { key: "A", label: "Jasne komunikowanie oczekiwań i doprecyzowywanie priorytetów." },
      { key: "B", label: "Pozostawienie pracownikom pełnej swobody interpretacji ustaleń z rozmowy." },
      { key: "C", label: "Regularne wracanie do ustalonych celów i szybkie reagowanie, gdy priorytety się zmieniają." },
      { key: "D", label: "Ustalanie odpowiedzialności za konkretne działania i decyzje." },
    ],
    correct: ["A", "C", "D"],
  },
  {
    id: 26,
    type: "multiple",
    context: [
      "Podczas szkolenia dla liderów Michał (HR Business Partner) omawia model kultury organizacyjnej stworzony przez Edgara H. Scheina.",
    ],
    question: "Z jakich poziomów składa się kultura organizacyjna według tego modelu? (Możesz wybrać więcej niż jedną odpowiedź.)",
    options: [
      { key: "A", label: "Artefakty" },
      { key: "B", label: "Zasady" },
      { key: "C", label: "Wartości" },
      { key: "D", label: "Kompetencje" },
    ],
    correct: ["A", "B", "C"],
  },
  {
    id: 27,
    type: "single",
    context: [
      "Po spotkaniach z oceną roczną Anna (CEO) spotyka się z Michałem (HR Business Partnerem).",
      "Anna:\n„Przygotowałeś raport z pierwszego roku. Co powinno być dla mnie najważniejsze podczas jego analizy?”",
    ],
    question: "Który wniosek najlepiej odzwierciedla podejście przedstawione w Akademii?",
    options: [
      { key: "A", label: "Najważniejsze jest sprawdzenie, czy wszystkie formularze zostały poprawnie uzupełnione." },
      { key: "B", label: "Najważniejsze jest porównanie średnich ocen wszystkich pracowników." },
      { key: "C", label: "Najważniejsze jest zrozumienie, co dane mówią o organizacji i jakie decyzje biznesowe należy na ich podstawie podjąć." },
      { key: "D", label: "Najważniejsze jest sprawdzenie, ile czasu liderzy poświęcili na rozmowy." },
    ],
    correct: "C",
  },
  {
    id: 28,
    type: "single",
    context: [
      "Anna (CEO) i Michał (HR Business Partner) nadal są na spotkaniu z omawianiem danych ze spotkań z oceną roczną. Michał mówi:",
      "„Przeanalizowałem wyniki. W kilku zespołach pracownicy od trzech kolejnych kwartałów wskazują ten sam problem – brak jasnych priorytetów i trudności z podejmowaniem decyzji. Jednocześnie ten obszar regularnie pojawia się również podczas rozmów oceniających.”",
    ],
    question: "Jaką decyzję, zgodnie z podejściem przedstawionym w Akademii, powinna podjąć Anna?",
    options: [
      { key: "A", label: "Skupić się wyłącznie na rozmowach z pracownikami, którzy najniżej ocenili ten obszar." },
      { key: "B", label: "Poczekać do kolejnego cyklu ocen i sprawdzić, czy sytuacja poprawi się samoistnie." },
      { key: "C", label: "Potraktować powtarzający się trend jako sygnał do podjęcia działań na poziomie całej organizacji, a nie wyłącznie pojedynczych pracowników." },
      { key: "D", label: "Poprosić liderów o dokładniejsze uzasadnianie ocen w kolejnej edycji procesu." },
    ],
    correct: "C",
  },
];
