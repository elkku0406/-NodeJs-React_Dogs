# Ensemble Koira harjoitus

Harjoituksen suoritukseen käytin expressiä, nodejs ja reactia.
Ohjelma toimii konsolisovelluksena, joka hyödyntää json tiedostoja.
Ohjelman helpotuksen suorittamiseksi nodejs serverin uudelleen käynnistys nollaa tiedostot. Serveri sisältää 2 koira oliota jsonina.

## Toiminta
sovellus sisältää 3 eri tekstinsyöttö kenttää, joihin voi syöttää numeroita ja kirjoimia ja tallentaa sen. 
Get Dogs nappi kirjoittaa konsoliin kaikki nodejs:n sisältämien koirien tiedot.
Add Dogs lisää koiran oikeanlaisen koiran lisäämiseksi Name ja Race kenttien täytyy sisältää tietoa.
Edit Dogs tarvii kaikkiin kolmeen eri tekstinsyöttö kenttiin tietoa. Nodejs muuttaa id:n mukaan nimen ja rodun.
Remove Dogs poistaa id:n mukaan jsonista pois koiran.

## Lopetus
Tässä on yksinkertaisuudessaan sovelluksen toiminta. Sovelluksen kaikki eri napit sisältävät konsoliin logituksen toiminnan varmistamiseksi. Kehityksessä tässä sovelluksessa voisi olla tietojen pysyvä säilytys, jossa muutetut tiedot säilyvät vaikka nodejs palvelin sammutettaisiin.

Minuun saa vapaasti olla yhteydessä, jos on sovelluksesta kysyttävää tai jotain muuta puhelimella tai sähköpostilla.
Terveisin,
Elias Hattukangas
040 1573886
elias.hattukangas@gmail.com
