## Day 2 - Tema2 Aquasoft Internship
## MongoDB - alegere database
### De ce MongoDB? Pentru ca articolele nu sunt relationale din natura lor asa ca MongoDB are sens peste MySQL.
### Articolele de presa nu sunt facute din parti mai mici (nu pot fi reduse la cea mai mica forma normala).
### Majoritatea timpului un articol este alcatuit dintr-un paragraf de text si cateva linkuri sau imagini.
### Articolele pot fi structurate intr-o ordine ierarhica sun un subiect anume dar nu au nevoie de functionalitatea MySQL (Foreign Keys si Joins) deoarece articolele nu pot fi mereu create cu join din multiple parti si nici nu au nevoie de multiple subarticole cu FK.
### De asemenea MongoDB permite expansiunea pe orizontala si verticala a bazei de date.
### Un articol poate fi adaugat in database de mai multe sedii/firme deci adaugarea de diferite endpoints este necesara (expansiunea pe orizontala care nu este suportata in MySQL unde se adauga hardware pentru expansiune verticala)