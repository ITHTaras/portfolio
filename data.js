const projects = [
  {
    alias: "distance",
    url: "/projects/distance",
    cat: "electronics",
    description: [
      "Die Schaltung misst die Entfernung von einem Ultraschallsensor. Wenn der Sensorausgang aktiv ist, wird mithilfe eines Zählers mit einer Frequenz von 17,8 kHz die Entfernung in cm gemessen.",
      "The circuit measures the distance from an ultrasonic sensor. When the sensor output is active, a counter with a frequency of 17.8 kHz is used to measure the distance in cm.",
    ],
    imgs: ["/images/distance.jpeg"],
  },
  {
    alias: "intrusion-alarm",
    url: "/projects/intrusion-alarm",
    cat: "electronics",
    description: [
      "Ein Einbruchsalarm überprüft ständig die Lage des Reed-Kontaktes und schaltet dementsprechend ein. Externe Bauteile (der Summer, Transistor eines logischen Gatters, das Potentiometer und dazugehörige Festwiderstände) wurden auf einer Lochrasterplatte gelötet. Zum Ausschalten muss eine vierstellige Kennnummer mithilfe eines Infrarotpults eingegeben werden. Während der Eingabe werden die Kennziffern auf einem LCD-Bildschirm abgebildet, der mithilfe des transistorisierten Logikgatters ein- oder ausgeschaltet wird. Die Komponenten werden durch einen Mikrocontroller „Arduino UNO R3“ gesteuert.",
      "An intrusion alarm continuously checks the state of a Reed sensor. Some components (passive buzzer, transistor of a logic gate, potentiometer and corresponding fixed resistors) were soldered onto a perfboard. By inputting a code consisting of four digits using an infrared controller, the alarm can be switched off. The state of the input is displayed on an LCD screen, which will be turned off when not needed, using transistor logic. This project uses an Arduino UNO R3 microcontroller.",
    ],
    imgs: ["/images/intrusion-alarm.jpg"],
  },
  {
    alias: "reaction",
    url: "/projects/reaction",
    cat: "electronics",
    description: [
      "Das Reaktionsspiel besteht aus einer einfachen Verzögerung mithilfe eines NE555 Timers. Der Timer wird beim Anlegen der Versorgungsspannung aktiviert und einer bestimmten Zeitspanne den 2. Timer auslösen, der in einem astabilen arbeitet. Somit wird mit einer hohen Frequenz ein Signal erzeugt, das einen ansteuert und somit die Zahl auf der Segmentanzeige erhöht.  Sobald der Spieler den Knopf drückt, wird der Zähler zurückgesetzt und die Zei die der Spieler benötigt hat, auf die Anzeige übertragen.",
      "The reaction game consists of a simple delay using a NE555 timer. The timer is activated after the application of the supply voltage and, after a certain period, triggers a second timer operating in an astable mode. This generates a high frequency signal, which drives a counter and increases the number on a segment display. As soon as the player presses a button, the counter is reset and the time the player needed is shown.",
    ],
    imgs: ["/images/reaction.jpg"],
  },
  {
    alias: "random",
    url: "/projects/random",
    cat: "electronics",
    description: [
      "Für den Zufallsgenerator wurde die Mangelhaftigkeit der menschlichen Reaktionszeit ausgenutzt: die Konstellation der leuchtenden LEDs verändert sich zyklisch mit einer Frequenz von 5kHz und gewährleistet somit die Ausgabe eines Ergebnisses, das jedes Mal von der Tastehaltedauer stark abhängig ist. Wird der Taster losgelassen, so wird der letzte Zahlenwert abgebildet.",
      "The randomiser is based on the deficits of the human reaction time: the current dice count oscillates with a frequency of 5kHz, what makes it impossible for us to see the current count number when the button is pressed. When the button is released, the counter stops and its value is being saved.",
    ],
    imgs: ["/images/random.PNG"],
  },
  {
    alias: "real-estate",
    url: "https://real-estate-one-kappa.vercel.app/",
    cat: "fullstack",
    imgs: ["/images/rental_home.jpg"],
  },
  {
    alias: "ecolife",
    url: "/projects/ecolife",
    cat: "fullstack",
    description: [
      "Das App „EcoLife“ habe ich als meine zweite wissenschaftliche Arbeit gemacht Es wurde später auch in einem ukrainischen Wettbewerb präsentiert\n<a class=' text-blue-300' href='/Wettbewerburkunde.pdf'> (siehe die Urkunde) </a> . <br /> Das Ziel – die Umwelt zu verbessern. Darüber hinaus kann man sich über Arten des Abfalls und der Recyclingvorschrifte informieren.",
      "The mobile app \"EcoLife\" was my second scientific research. A bit later it was presented at informatics competition in Ukraine <a class='text-blue-300' href='/Wettbewerburkunde.pdf'>(see the certificate)</a>.<br />The purpose of the app is to make the enviroment better. There is a possibility to view different types of waste and the instructions for utilization of it.",
    ],
    imgs: [
      "/images/ecolife_home.jpg",
      "/images/ecolife_1.jpg",
      "/images/ecolife_2.jpg",
      "/images/ecolife_3.jpg",
    ],
  },
];

let id = {
  "intrusion-alarm": 1,
  reaction: 2,
  random: 3,
  ecolife: 5,
  distance: 0,
};
export { projects, id };
