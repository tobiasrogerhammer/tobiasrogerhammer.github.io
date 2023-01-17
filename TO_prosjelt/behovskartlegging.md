
# Matte applikasjon

## Behovsanalyse

#### Hvilke utfordringer har brukeren?
# Hvilke utfordringer har brukeren?

Brukeren har utfordringer i å pugge. 
Brukeren har ikke lyst til å skrive. 
Brukeren har ikke utfordringer i å lese, men foretrekker lyd
Brukeren har utfordringer i å lære matte

#### Hvilke interesser har brukeren?
Noen av brukerens interesser er musikk, sport og spill.
Brukeren liker svar alternativer.
Brukeren er interessert i fagene engelsk og gym

## Applikasjon

#### Hva er applikasjonen?

Applikasjonen er et Matte-Spill. Det skal være et true/false spill og ligne en kahoot/quiz.
Jeg ser for meg det vil være en main page fler matte-kategorier og kanskje vanskelighetsgrader.
Når du velger en kategori får du et matte-spørsmål og 4 svar alternativer.
Det vil også være en poeng score og/eller en progresjonsbar.
Brukeren har lyst på en knapp som kan lese opp spørsmålet.
Brukeren vil ha muligheten til å få et hint.

# Ideer:
Mulighet til å velge tekst-oppgaver eller ikke tekst-oppgaver.
Se scoren sin etter spørsmålene
Scoren lagres så man kan se forbedringer

## Fremgangsmøte

#### Database

Skal lage en MYSQL - database som lagrer hvor mange poeng spilleren har etter endt spill.

  Forslag til tabell 1 - Person:

  | BrukerID       | Brukernavn    | Passord |
  | -------------- |:-------------:| -------:|
  | 1              | 20.08.1991    | 3       |

  Forslag til tabell 2 - Spill:

  | spillID        | Dato          | Poeng | Person |
  | -------------- |:-------------:| -----:| -----: |
  | 1              | 20.08.1991    | 3     | 1      |

  Person-kolonnen i Spill - tabellen er en fremmednøkkel som skal fylles
  på med primærnøkkelen fra Person-tabellen for hvert spill.
  Person-tabellen skal brukes til innlogging.

#### HTML, CSS og Javascript

- Spillet trenger en innloggingsside, som kobler opp informasjon fra databasen
med informasjonen i innloggingsfeltet.
- Stylingen er "clean", med et stort bakgrunnsbilde på alle slides.
- Spillet skal ha en velkommen side (start spillet-side) og start spillet-knapp.
- Når man har svart, så kommer det opp at brukeren har tatt riktig eller feil.
Spilleren blir "tvunget" med til neste spørsmål.
- På Hver side skal det stå hvor langt spilleren har kommet i spillet.
For eksempel 1/10 på først slide, 2/10 på andre slide.

#### Node - backend service.

- Trenger database-tilkobling, og kan både hente og oppdatere databasen.
- Node kan brukes på to måter:
1. Som backend service og API-calls.
2. Som webserver.

Dette har jeg ikke bestemt meg for enda.
