# Day 2 - Tema2 Aquasoft Internship

## Cand un nou articol este creat cu api sau folosing direct addingArticle.js este creat si articolul si tokenurile si categoriile daca nu exista si sunt facute legaturile

## MongoDB - alegere database
### De ce MongoDB? Pentru ca articolele nu sunt relationale din natura lor asa ca MongoDB are sens peste MySQL.
### Articolele de presa nu sunt facute din parti mai mici (nu pot fi reduse la cea mai mica forma normala).
### Majoritatea timpului un articol este alcatuit dintr-un paragraf de text si cateva linkuri sau imagini.
### Articolele pot fi structurate intr-o ordine ierarhica sun un subiect anume dar nu au nevoie de functionalitatea MySQL (Foreign Keys si Joins) deoarece articolele nu pot fi mereu create cu join din multiple parti si nici nu au nevoie de multiple subarticole cu FK.
### De asemenea MongoDB permite expansiunea pe orizontala si verticala a bazei de date.
### Un articol poate fi adaugat in database de mai multe sedii/firme deci adaugarea de diferite endpoints este necesara (expansiunea pe orizontala care nu este suportata in MySQL unde se adauga hardware pentru expansiune verticala)<br/>

## Testing facut cu POSTMAN folosind scheletul din fisierul (postmanTesting_data_filler.json)
### Articolele au doar numele mandatory deoarece nu fost indicat daca sunt mandatory sau optional toate campurile.Campurile introduse pot fi doar corespunzatoare schemei date.<br/>

### Rute CRUD: 
### GET: /articles && /articles/:name
### POST: /articles
### PUT: /articles/:primary_key - aici primary key este de fap nr articolului in arrayul colectie de articole (somedb.articles[primary_key]) deoarece id dat de MongoDB este aleatoriu si greu de urmarit
### DELETE: /articles/:primary_key - aceeasi folosinta pentru primary key