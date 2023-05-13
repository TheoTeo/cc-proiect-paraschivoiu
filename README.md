LINK-URI
1.	Video prezentare proiect: https://youtu.be/FaawMAi6haU 
2.	Link publicare Vercel: https://cc-proiect-paraschivoiu-4ulnxkm15-theoteo.vercel.app/
3.	Link publicare Vercel pentru ruta de insert: https://cc-proiect-paraschivoiu-4ulnxkm15-theoteo.vercel.app/insert 
4.	Link repository github: https://github.com/TheoTeo/cc-proiect-paraschivoiu 

1.	Introducere

Acest proiect are ca scop realizarea unei aplicații web dezvoltată ca rezultat al informațiilor prezentate în cadrul cursului de Cloud Computing. Ca mediu de dezvoltare am utilizat Visual Studio Code, limbajul de programare JavaScript, ca mediu de execuție Node.js și ca framework de React Next.js. Pentru stocarea datelor, s-a optat pentru o bază de date din cloud non-relațională MongoDB, iar deployment-ul se realizează prin intermediul serviciilor cloud oferite de Vercel.
2.	Descriere problemă 

Aplicația web afișează o serie de curiozități despre câini care au fost introduse în baza de date prin import-ul unui fișier JSON descărcat gratuit. (Nguyen, 2020) Componenta principală utilizează hook-urile de useState și useEffect pentru gestionarea stării componentei și pentru apelarea REST API-ului în momentul în care componenta este montată. Pentru introducerea unor noi informații în baza de date, se va naviga la ruta "/insert".
3.	Descriere tehnologii cloud folosite
Cele 2 servicii cloud utilizate sunt:
•	MongoDB Atlas: este un serviciu cloud care oferă capacități de stocare și gestionare a datelor MongoDB într-un mediu scalabil și ușor de utilizat. Cu MongoDB Atlas, puteți să vă creați, să vă gestionați și să vă implementați bazele de date MongoDB în cloud, fără a vă preocupa de aspectele de infrastructură și administrare a serverelor, iar pentru importul datelor, am utilizat MongoDB Compass care este un client pentru gestionarea bazelor de date MongoDB.

•	Vercel: este un serviciu cloud care permite implementarea și găzduirea aplicațiilor web și a site-urilor statice. Găzduiește aplicația creată cu Next.js, un framework React pentru dezvoltarea aplicațiilor web.Vercel oferă o experiență simplă și rapidă de implementare, permițând dezvoltatorilor să încarce și să ruleze rapid aplicațiile lor. Acest serviciu este optimizat pentru performanță, scalabilitate și securitate.
4.	Descriere API

API REST este un stil arhitectural pentru dezvoltarea și proiectarea serviciilor web prin definirea unui set de principii și constrângeri care permit comunicarea între sistemele software. Cu ajutorul lui am trimis și primit resurse în format JSON (JavaScript Object Notation). API-ul REST utilizează metodele standard HTTP pentru a defini operațiunile care pot fi efectuate asupra resurselor. Cele mai comune metode HTTP utilizate în API-urile REST sunt:
•	GET: Obținere date ale unei resurse existente.
•	POST: Creare de resursă nouă.
•	PUT: Actualizare de resursă existentă.
•	DELETE: Ștergere de resursă existentă.

5.	Flux de date

Într-un API REST, fluxul de date urmează un model simplu client-server, în care clientul efectuează cereri către server și primește răspunsuri în funcție de acțiunile sale. Clientul inițiază o cerere HTTP către server utilizând una dintre metodele standard ale API-ului REST, cum ar fi GET, POST, PUT sau DELETE. Serverul trimite un răspuns HTTP către client. Răspunsul include un cod de stare care indică rezultatul cererii (cum ar fi 200 OK pentru succes sau 404 Not Found pentru resursă inexistentă) și un corp de răspuns care conține datele solicitate sau alte informații relevante.

5.1. Exemple de request / response
	
Exemplu GET:
Request: 
useEffect(() => {
        try {
            fetch('/api/records', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(json => setRecords(json.data));
        }
        catch (error) {
            console.log(error);
        }
    }, []);
Response: 
HTTP 200 OK { "fact": "Plato once said that "a dog has the soul of a philosopher."" }.....

5.2.	Metode HTTP

În cadrul aplicației am utilizat metodele de GET, POST și DELETE, am implementat și testat și metoda PUT, însă doar cu ajutorul aplicației Postman. 

5.3.	Autentificare și autorizare servicii utilizate (dacă este cazul)

A fost necesară autentificarea pentru conturile de GitHub, MongoDB și Vercel, iar autorizarea serviciilor a fost realizată prin salvarea în fișierul .env a datelor necesare pentru Environment Variables (pentru accesul la baza de date și la URI).
6. Capturi ecran aplicație

 ![image](https://github.com/TheoTeo/cc-proiect-paraschivoiu/assets/95938791/ed40a99f-6d4d-465a-9b0a-825fb27e261a)

Figura 1 Interfața componentei principale
 
 ![image](https://github.com/TheoTeo/cc-proiect-paraschivoiu/assets/95938791/1f3bb8a9-5ea5-4c38-a534-47148c1455c1)

Figura 2 Componenta rutei /insert și utilizarea metodei POST

 ![image](https://github.com/TheoTeo/cc-proiect-paraschivoiu/assets/95938791/b8d29963-66d9-4cbb-b08d-d88f23f227be)

Figura 3 Afișarea informației inserată de utilizator

 ![image](https://github.com/TheoTeo/cc-proiect-paraschivoiu/assets/95938791/d3178720-f68c-4b81-b639-4ee5e74cb554)

Figura 4 Ștergerea informației test

