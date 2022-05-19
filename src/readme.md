# Ensemble Koira harjoitus Clientin teko

Clientin saa tehtyä syöttämällä rivin:
npx create-react-app client
komentoriviin

Tämä luo perus reacti pohjan, mitä käytetään.
Repositoryn src kansio sisältää tiedostot, joilla korvataan automaattisesti luodut.

Client kansion package.json tiedostoon lisätään rivi
"proxy": "http://localhost:3001",
jolla saadaan yhteys back-endiin.

Näin saadaan valmiiksi sovelluksen React front-end
