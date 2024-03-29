var users =
  [{ "id": 1, "city": "Melun", "phone": "457-689-6321", "state": "Île-de-France", "country": "France" },
  { "id": 2, "city": "Marseille", "phone": "595-860-9624", "state": "Provence-Alpes-Côte d'Azur", "country": "France" },
  { "id": 3, "city": "Le Perreux-sur-Marne", "phone": "202-415-9220", "state": "Île-de-France", "country": "France" },
  { "id": 4, "city": "Nogent-sur-Marne", "phone": "913-882-3330", "state": "Île-de-France", "country": "France" },
  { "id": 5, "city": "Paris La Défense", "phone": "351-729-7891", "state": "Île-de-France", "country": "France" },
  { "id": 6, "city": "Honolulu", "phone": "808-885-5692", "state": "Hawaii", "country": "United States" },
  { "id": 7, "city": "Bayonne", "phone": "101-942-8372", "state": "Aquitaine", "country": "France" },
  { "id": 8, "city": "Paris 07", "phone": "555-752-4754", "state": "Île-de-France", "country": "France" },
  { "id": 9, "city": "Pau", "phone": "609-362-3760", "state": "Aquitaine", "country": "France" },
  { "id": 10, "city": "Bobigny", "phone": "622-865-0641", "state": "Île-de-France", "country": "France" },
  { "id": 11, "city": "Marne-la-Vallée", "phone": "647-794-7078", "state": "Île-de-France", "country": "France" },
  { "id": 12, "city": "Dallas", "phone": "972-494-9378", "state": "Texas", "country": "United States" },
  { "id": 13, "city": "Chicago", "phone": "630-762-9113", "state": "Illinois", "country": "United States" },
  { "id": 14, "city": "Orlando", "phone": "407-752-8926", "state": "Florida", "country": "United States" },
  { "id": 15, "city": "Fort Smith", "phone": "479-111-0156", "state": "Arkansas", "country": "United States" },
  { "id": 16, "city": "Rochester", "phone": "585-756-8337", "state": "New York", "country": "United States" },
  { "id": 17, "city": "Caen", "phone": "195-531-4372", "state": "Basse-Normandie", "country": "France" },
  { "id": 18, "city": "Saint-Louis", "phone": "357-884-8985", "state": "Alsace", "country": "France" },
  { "id": 19, "city": "Chelles", "phone": "866-803-7584", "state": "Île-de-France", "country": "France" },
  { "id": 20, "city": "Rambouillet", "phone": "752-826-8112", "state": "Île-de-France", "country": "France" },
  { "id": 21, "city": "Chenôve", "phone": "600-409-5737", "state": "Bourgogne", "country": "France" },
  { "id": 22, "city": "Moulins", "phone": "337-809-7975", "state": "Auvergne", "country": "France" },
  { "id": 23, "city": "Toledo", "phone": "419-887-2860", "state": "Ohio", "country": "United States" },
  { "id": 24, "city": "Libourne", "phone": "399-888-6924", "state": "Aquitaine", "country": "France" },
  { "id": 25, "city": "Shreveport", "phone": "318-661-6225", "state": "Louisiana", "country": "United States" },
  { "id": 26, "city": "Fresno", "phone": "559-788-1629", "state": "California", "country": "United States" },
  { "id": 27, "city": "Springfield", "phone": "413-265-3735", "state": "Massachusetts", "country": "United States" },
  { "id": 28, "city": "Perpignan", "phone": "999-687-5874", "state": "Languedoc-Roussillon", "country": "France" },
  { "id": 29, "city": "Thaon-les-Vosges", "phone": "752-136-8374", "state": "Lorraine", "country": "France" },
  { "id": 30, "city": "Rungis", "phone": "859-639-6273", "state": "Île-de-France", "country": "France" },
  { "id": 31, "city": "Arcueil", "phone": "739-183-5020", "state": "Île-de-France", "country": "France" },
  { "id": 32, "city": "Longvic", "phone": "523-371-9073", "state": "Bourgogne", "country": "France" },
  { "id": 33, "city": "Annonay", "phone": "219-862-1956", "state": "Rhône-Alpes", "country": "France" },
  { "id": 34, "city": "Portland", "phone": "503-795-7075", "state": "Oregon", "country": "United States" },
  { "id": 35, "city": "Glendale", "phone": "818-241-3594", "state": "California", "country": "United States" },
  { "id": 36, "city": "Richmond", "phone": "571-995-6663", "state": "Virginia", "country": "United States" },
  { "id": 37, "city": "Mont-de-Marsan", "phone": "311-242-4139", "state": "Aquitaine", "country": "France" },
  { "id": 38, "city": "Orsay", "phone": "289-560-3882", "state": "Île-de-France", "country": "France" },
  { "id": 39, "city": "Dallas", "phone": "214-578-5012", "state": "Texas", "country": "United States" },
  { "id": 40, "city": "Lubbock", "phone": "806-351-9251", "state": "Texas", "country": "United States" },
  { "id": 41, "city": "New York City", "phone": "917-382-5466", "state": "New York", "country": "United States" },
  { "id": 42, "city": "Goussainville", "phone": "972-161-8214", "state": "Île-de-France", "country": "France" },
  { "id": 43, "city": "Nantes", "phone": "484-110-9137", "state": "Pays de la Loire", "country": "France" },
  { "id": 44, "city": "Pessac", "phone": "126-402-3607", "state": "Aquitaine", "country": "France" },
  { "id": 45, "city": "Lyon", "phone": "579-147-6861", "state": "Rhône-Alpes", "country": "France" },
  { "id": 46, "city": "Camden", "phone": "856-221-5777", "state": "New Jersey", "country": "United States" },
  { "id": 47, "city": "Saint-Maurice", "phone": "180-929-9893", "state": "Île-de-France", "country": "France" },
  { "id": 48, "city": "Paris 11", "phone": "104-987-1258", "state": "Île-de-France", "country": "France" },
  { "id": 49, "city": "Palaiseau", "phone": "351-279-7275", "state": "Île-de-France", "country": "France" },
  { "id": 50, "city": "Boca Raton", "phone": "305-594-0707", "state": "Florida", "country": "United States" },
  { "id": 51, "city": "Évry", "phone": "727-162-8766", "state": "Île-de-France", "country": "France" },
  { "id": 52, "city": "San Diego", "phone": "619-839-1375", "state": "California", "country": "United States" },
  { "id": 53, "city": "Port Saint Lucie", "phone": "772-701-0651", "state": "Florida", "country": "United States" },
  { "id": 54, "city": "El Paso", "phone": "915-393-2773", "state": "Texas", "country": "United States" },
  { "id": 55, "city": "Tacoma", "phone": "253-280-5626", "state": "Washington", "country": "United States" },
  { "id": 56, "city": "Besançon", "phone": "774-548-6408", "state": "Franche-Comté", "country": "France" },
  { "id": 57, "city": "Biloxi", "phone": "228-497-4994", "state": "Mississippi", "country": "United States" },
  { "id": 58, "city": "Shawnee Mission", "phone": "913-506-5009", "state": "Kansas", "country": "United States" },
  { "id": 59, "city": "Des Moines", "phone": "515-464-1465", "state": "Iowa", "country": "United States" },
  { "id": 60, "city": "Paris 02", "phone": "810-957-0431", "state": "Île-de-France", "country": "France" },
  { "id": 61, "city": "Grand Junction", "phone": "970-394-2612", "state": "Colorado", "country": "United States" },
  { "id": 62, "city": "Chattanooga", "phone": "423-308-1359", "state": "Tennessee", "country": "United States" },
  { "id": 63, "city": "Sarreguemines", "phone": "639-163-0855", "state": "Lorraine", "country": "France" },
  { "id": 64, "city": "Noisy-le-Grand", "phone": "289-191-3984", "state": "Île-de-France", "country": "France" },
  { "id": 65, "city": "Phoenix", "phone": "602-991-0536", "state": "Arizona", "country": "United States" },
  { "id": 66, "city": "Abbeville", "phone": "104-332-6778", "state": "Picardie", "country": "France" },
  { "id": 67, "city": "Mont-de-Marsan", "phone": "145-694-6251", "state": "Aquitaine", "country": "France" },
  { "id": 68, "city": "Louisville", "phone": "502-124-8581", "state": "Kentucky", "country": "United States" },
  { "id": 69, "city": "Denver", "phone": "303-249-5552", "state": "Colorado", "country": "United States" },
  { "id": 70, "city": "Sacramento", "phone": "916-687-8281", "state": "California", "country": "United States" },
  { "id": 71, "city": "Schaumburg", "phone": "312-581-0371", "state": "Illinois", "country": "United States" },
  { "id": 72, "city": "Charlotte", "phone": "704-609-2281", "state": "North Carolina", "country": "United States" },
  { "id": 73, "city": "Méru", "phone": "633-519-2086", "state": "Picardie", "country": "France" },
  { "id": 74, "city": "Avignon", "phone": "263-278-0404", "state": "Provence-Alpes-Côte d'Azur", "country": "France" },
  { "id": 75, "city": "Guéret", "phone": "108-525-1614", "state": "Limousin", "country": "France" },
  { "id": 76, "city": "Cachan", "phone": "830-911-5470", "state": "Île-de-France", "country": "France" },
  { "id": 77, "city": "Tours", "phone": "461-164-1779", "state": "Centre", "country": "France" },
  { "id": 78, "city": "Dallas", "phone": "214-882-8313", "state": "Texas", "country": "United States" },
  { "id": 79, "city": "Wilmington", "phone": "302-634-8058", "state": "Delaware", "country": "United States" },
  { "id": 80, "city": "El Paso", "phone": "915-655-0329", "state": "Texas", "country": "United States" },
  { "id": 81, "city": "Baltimore", "phone": "410-625-2484", "state": "Maryland", "country": "United States" },
  { "id": 82, "city": "Rennes", "phone": "753-664-8009", "state": "Bretagne", "country": "France" },
  { "id": 83, "city": "Montreuil", "phone": "219-588-8230", "state": "Île-de-France", "country": "France" },
  { "id": 84, "city": "Charlotte", "phone": "704-967-3570", "state": "North Carolina", "country": "United States" },
  { "id": 85, "city": "Libourne", "phone": "742-308-8287", "state": "Aquitaine", "country": "France" },
  { "id": 86, "city": "Nantes", "phone": "451-661-8586", "state": "Pays de la Loire", "country": "France" },
  { "id": 87, "city": "Billère", "phone": "271-582-3000", "state": "Aquitaine", "country": "France" },
  { "id": 88, "city": "Battle Creek", "phone": "269-550-0827", "state": "Michigan", "country": "United States" },
  { "id": 89, "city": "Nice", "phone": "383-992-0908", "state": "Provence-Alpes-Côte d'Azur", "country": "France" },
  { "id": 90, "city": "Dayton", "phone": "937-857-6690", "state": "Ohio", "country": "United States" },
  { "id": 91, "city": "Limoges", "phone": "333-150-5409", "state": "Limousin", "country": "France" },
  { "id": 92, "city": "Huntington Beach", "phone": "949-671-9276", "state": "California", "country": "United States" },
  { "id": 93, "city": "Fresnes", "phone": "957-275-0912", "state": "Île-de-France", "country": "France" },
  { "id": 94, "city": "Champagnole", "phone": "450-852-5048", "state": "Franche-Comté", "country": "France" },
  { "id": 95, "city": "San Diego", "phone": "619-313-2132", "state": "California", "country": "United States" },
  { "id": 96, "city": "Buffalo", "phone": "716-159-2809", "state": "New York", "country": "United States" },
  { "id": 97, "city": "Loudun", "phone": "272-211-5958", "state": "Poitou-Charentes", "country": "France" },
  { "id": 98, "city": "Rennes", "phone": "832-842-5127", "state": "Bretagne", "country": "France" },
  { "id": 99, "city": "Gaillac", "phone": "417-689-7302", "state": "Midi-Pyrénées", "country": "France" },
  { "id": 100, "city": "New Brunswick", "phone": "732-303-8169", "state": "New Jersey", "country": "United States" },
  { "id": 101, "city": "Akron", "phone": "330-401-6980", "state": "Ohio", "country": "United States" },
  { "id": 102, "city": "Bastia", "phone": "810-564-2828", "state": "Corse", "country": "France" },
  { "id": 103, "city": "Ivry-sur-Seine", "phone": "279-771-1024", "state": "Île-de-France", "country": "France" },
  { "id": 104, "city": "Villeneuve-sur-Lot", "phone": "142-369-7452", "state": "Aquitaine", "country": "France" },
  { "id": 105, "city": "Seattle", "phone": "206-304-8870", "state": "Washington", "country": "United States" },
  { "id": 106, "city": "Los Angeles", "phone": "213-600-2896", "state": "California", "country": "United States" },
  { "id": 107, "city": "Minneapolis", "phone": "612-787-8709", "state": "Minnesota", "country": "United States" },
  { "id": 108, "city": "Pau", "phone": "946-527-7184", "state": "Aquitaine", "country": "France" },
  { "id": 109, "city": "Winston Salem", "phone": "336-974-6531", "state": "North Carolina", "country": "United States" },
  { "id": 110, "city": "Cambrai", "phone": "378-965-5976", "state": "Nord-Pas-de-Calais", "country": "France" },
  { "id": 111, "city": "Tampa", "phone": "813-258-4484", "state": "Florida", "country": "United States" },
  { "id": 112, "city": "Nantes", "phone": "833-287-8608", "state": "Pays de la Loire", "country": "France" },
  { "id": 113, "city": "Sedan", "phone": "102-924-5386", "state": "Champagne-Ardenne", "country": "France" },
  { "id": 114, "city": "Le Havre", "phone": "739-504-6977", "state": "Haute-Normandie", "country": "France" },
  { "id": 115, "city": "Sacramento", "phone": "916-655-2078", "state": "California", "country": "United States" },
  { "id": 116, "city": "Los Angeles", "phone": "310-930-6619", "state": "California", "country": "United States" },
  { "id": 117, "city": "Mundolsheim", "phone": "233-130-7032", "state": "Alsace", "country": "France" },
  { "id": 118, "city": "Tacoma", "phone": "253-367-0866", "state": "Washington", "country": "United States" },
  { "id": 119, "city": "Wilkes Barre", "phone": "570-556-6648", "state": "Pennsylvania", "country": "United States" },
  { "id": 120, "city": "Kansas City", "phone": "816-204-1280", "state": "Missouri", "country": "United States" },
  { "id": 121, "city": "Saint Paul", "phone": "612-844-4767", "state": "Minnesota", "country": "United States" },
  { "id": 122, "city": "Roanoke", "phone": "540-889-8147", "state": "Virginia", "country": "United States" },
  { "id": 123, "city": "Montpellier", "phone": "409-254-0298", "state": "Languedoc-Roussillon", "country": "France" },
  { "id": 124, "city": "Detroit", "phone": "248-672-8630", "state": "Michigan", "country": "United States" },
  { "id": 125, "city": "Rouen", "phone": "172-469-2405", "state": "Haute-Normandie", "country": "France" },
  { "id": 126, "city": "Maisons-Laffitte", "phone": "135-636-9578", "state": "Île-de-France", "country": "France" },
  { "id": 127, "city": "Colombes", "phone": "864-880-9124", "state": "Île-de-France", "country": "France" },
  { "id": 128, "city": "Sotteville-lès-Rouen", "phone": "409-307-1960", "state": "Haute-Normandie", "country": "France" },
  { "id": 129, "city": "Verdun", "phone": "548-238-8755", "state": "Lorraine", "country": "France" },
  { "id": 130, "city": "Valdosta", "phone": "229-996-5549", "state": "Georgia", "country": "United States" },
  { "id": 131, "city": "Guebwiller", "phone": "112-293-1413", "state": "Alsace", "country": "France" },
  { "id": 132, "city": "Amiens", "phone": "656-200-0024", "state": "Picardie", "country": "France" },
  { "id": 133, "city": "Denver", "phone": "303-967-2884", "state": "Colorado", "country": "United States" },
  { "id": 134, "city": "Quimper", "phone": "551-463-9946", "state": "Bretagne", "country": "France" },
  { "id": 135, "city": "Minneapolis", "phone": "612-993-2212", "state": "Minnesota", "country": "United States" },
  { "id": 136, "city": "Lille", "phone": "368-113-4506", "state": "Nord-Pas-de-Calais", "country": "France" },
  { "id": 137, "city": "Montfort-sur-Meu", "phone": "865-432-7248", "state": "Bretagne", "country": "France" },
  { "id": 138, "city": "Compiègne", "phone": "128-641-1408", "state": "Picardie", "country": "France" },
  { "id": 139, "city": "Fullerton", "phone": "714-528-6776", "state": "California", "country": "United States" },
  { "id": 140, "city": "Paris 02", "phone": "680-672-6788", "state": "Île-de-France", "country": "France" },
  { "id": 141, "city": "Naperville", "phone": "630-883-3614", "state": "Illinois", "country": "United States" },
  { "id": 142, "city": "Salt Lake City", "phone": "801-312-9377", "state": "Utah", "country": "United States" },
  { "id": 143, "city": "Tassin-la-Demi-Lune", "phone": "664-102-0382", "state": "Rhône-Alpes", "country": "France" },
  { "id": 144, "city": "Villefranche-sur-Mer", "phone": "805-570-5277", "state": "Provence-Alpes-Côte d'Azur", "country": "France" },
  { "id": 145, "city": "Saint-Quentin-en-Yvelines", "phone": "470-557-9524", "state": "Île-de-France", "country": "France" },
  { "id": 146, "city": "Maromme", "phone": "830-682-0785", "state": "Haute-Normandie", "country": "France" },
  { "id": 147, "city": "Vancouver", "phone": "360-476-8048", "state": "Washington", "country": "United States" },
  { "id": 148, "city": "Seminole", "phone": "317-551-3866", "state": "Florida", "country": "United States" },
  { "id": 149, "city": "Blaye", "phone": "826-402-4284", "state": "Aquitaine", "country": "France" },
  { "id": 150, "city": "Dallas", "phone": "214-708-9699", "state": "Texas", "country": "United States" },
  { "id": 151, "city": "Rive-de-Gier", "phone": "669-560-4776", "state": "Rhône-Alpes", "country": "France" },
  { "id": 152, "city": "New Brunswick", "phone": "732-813-8016", "state": "New Jersey", "country": "United States" },
  { "id": 153, "city": "Toulouse", "phone": "881-499-7885", "state": "Midi-Pyrénées", "country": "France" },
  { "id": 154, "city": "Puteaux", "phone": "225-148-7716", "state": "Île-de-France", "country": "France" },
  { "id": 155, "city": "Challans", "phone": "154-860-1663", "state": "Pays de la Loire", "country": "France" },
  { "id": 156, "city": "Bonneuil-sur-Marne", "phone": "471-997-5125", "state": "Île-de-France", "country": "France" },
  { "id": 157, "city": "Sélestat", "phone": "586-471-1282", "state": "Alsace", "country": "France" },
  { "id": 158, "city": "Boston", "phone": "781-911-7287", "state": "Massachusetts", "country": "United States" },
  { "id": 159, "city": "Kissimmee", "phone": "407-795-0150", "state": "Florida", "country": "United States" },
  { "id": 160, "city": "Annecy", "phone": "291-494-9685", "state": "RhôTennesseene-Alpes", "country": "France" },
  { "id": 161, "city": "Creil", "phone": "524-859-5773", "state": "Picardie", "country": "France" },
  { "id": 162, "city": "Chicago", "phone": "312-221-0451", "state": "Illinois", "country": "United States" },
  { "id": 163, "city": "Knoxville", "phone": "865-172-9314", "state": "", "country": "United States" },
  { "id": 164, "city": "El Paso", "phone": "915-727-7839", "state": "Texas", "country": "United States" },
  { "id": 165, "city": "Nantes", "phone": "865-749-0323", "state": "Pays de la Loire", "country": "France" },
  { "id": 166, "city": "Sannois", "phone": "476-311-6032", "state": "Île-de-France", "country": "France" },
  { "id": 167, "city": "Saint-Ouen", "phone": "154-432-3013", "state": "Île-de-France", "country": "France" },
  { "id": 168, "city": "Cergy-Pontoise", "phone": "924-643-4180", "state": "Île-de-France", "country": "France" },
  { "id": 169, "city": "Saint-Lô", "phone": "310-590-9718", "state": "Basse-Normandie", "country": "France" },
  { "id": 170, "city": "Dijon", "phone": "592-881-5398", "state": "Bourgogne", "country": "France" },
  { "id": 171, "city": "Paris 17", "phone": "780-681-2675", "state": "Île-de-France", "country": "France" },
  { "id": 172, "city": "Boston", "phone": "617-172-6965", "state": "Massachusetts", "country": "United States" },
  { "id": 173, "city": "Arlington", "phone": "571-444-3996", "state": "Virginia", "country": "United States" },
  { "id": 174, "city": "Colombes", "phone": "500-220-2278", "state": "Île-de-France", "country": "France" },
  { "id": 175, "city": "Paris 17", "phone": "700-434-1434", "state": "Île-de-France", "country": "France" },
  { "id": 176, "city": "Besançon", "phone": "903-488-2375", "state": "Franche-Comté", "country": "France" },
  { "id": 177, "city": "Dijon", "phone": "856-346-0243", "state": "Bourgogne", "country": "France" },
  { "id": 178, "city": "Boston", "phone": "508-665-4271", "state": "Massachusetts", "country": "United States" },
  { "id": 179, "city": "Louisville", "phone": "502-651-6573", "state": "Kentucky", "country": "United States" },
  { "id": 180, "city": "Paris 13", "phone": "227-216-8107", "state": "Île-de-France", "country": "France" },
  { "id": 181, "city": "Pont-à-Mousson", "phone": "838-486-9785", "state": "Lorraine", "country": "France" },
  { "id": 182, "city": "Burbank", "phone": "818-110-3141", "state": "California", "country": "United States" },
  { "id": 183, "city": "Washington", "phone": "202-196-7965", "state": "District of Columbia", "country": "United States" },
  { "id": 184, "city": "Philadelphia", "phone": "215-310-2152", "state": "Pennsylvania", "country": "United States" },
  { "id": 185, "city": "Cernay", "phone": "908-939-4365", "state": "Alsace", "country": "France" },
  { "id": 186, "city": "Aix-en-Provence", "phone": "518-189-5124", "state": "Provence-Alpes-Côte d'Azur", "country": "France" },
  { "id": 187, "city": "Marseille", "phone": "800-156-2513", "state": "Provence-Alpes-Côte d'Azur", "country": "France" },
  { "id": 188, "city": "Wichita", "phone": "316-624-3458", "state": "Kansas", "country": "United States" },
  { "id": 189, "city": "La Motte-Servolex", "phone": "614-860-6896", "state": "Rhône-Alpes", "country": "France" },
  { "id": 190, "city": "Los Angeles", "phone": "323-782-7865", "state": "California", "country": "United States" },
  { "id": 191, "city": "Massy", "phone": "954-834-4456", "state": "Île-de-France", "country": "France" },
  { "id": 192, "city": "Sélestat", "phone": "856-299-8994", "state": "Alsace", "country": "France" },
  { "id": 193, "city": "Philadelphia", "phone": "267-546-5772", "state": "Pennsylvania", "country": "United States" },
  { "id": 194, "city": "Nice", "phone": "579-428-7394", "state": "Provence-Alpes-Côte d'Azur", "country": "France" },
  { "id": 195, "city": "Stockton", "phone": "209-577-0519", "state": "California", "country": "United States" },
  { "id": 196, "city": "Sarreguemines", "phone": "480-575-5073", "state": "Lorraine", "country": "France" },
  { "id": 197, "city": "Washington", "phone": "703-401-0723", "state": "District of Columbia", "country": "United States" },
  { "id": 198, "city": "Denton", "phone": "682-828-4313", "state": "Texas", "country": "United States" },
  { "id": 199, "city": "San Diego", "phone": "619-905-9823", "state": "California", "country": "United States" },
  { "id": 200, "city": "Maisons-Laffitte", "phone": "500-992-9322", "state": "Île-de-France", "country": "France" }]

var tr;
var cont = ["France", "United states"];
var stat = ["Île-de-France", "California", "Texas", "Lorraine", "Provence-Alpes-Côte d'Azur", "Pennsylvania", "Alsace", "Rhône-Alpes", "kansas", "Kentucky", "Massachusetts", "Bourgogne", "Franche-Comté", "Basse-Normandie", "Pays de la Loire", "florida", "picardie", "RhoTennesseeene", "Illnois", "Base-Normandie", "Rhone-Alpes", "New Jersey", "Aquitaine", "Midi-Pyrenees", "Utah", "Haute-Normandie", "Washington", "Colordo", "Bretagne"];
console.log(users.length);


// function complete(){
//       for(var i=0; i<users.length; i++)
//       {

//               tr = $('<tr/>');
//           tr.append("<td>" + users[i].id+"</td>");
//           tr.append("<td>" + users[i].city+"</td>");
//           tr.append("<td>" + users[i].phone+"</td>");
//           tr.append("<td>" + users[i].state+"</td>");
//           tr.append("<td>" + users[i].country+"</td>");
//           $('table').append(tr);


//       }

//     }
//     complete();






function myFunction() {

  var x = document.getElementById("country-list");
  console.log(x);
  var data = "<option>Select Country</option>";
  //  var option = document.createElement("option");
  for (var j = 0; j < cont.length; j++) {
    data += `<option value="${cont[j]}">${cont[j]}</option>`;
  }

  x.innerHTML = data;
}
myFunction();
function myFunction1() {

  var y = document.getElementById("state-list");
  console.log(y);
  var data = "<option>Select State</option>";
  //  var option = document.createElement("option");
  for (var k = 0; k < stat.length; k++) {


    var option = document.createElement("option");
    // console.log(obj[j]);
    data += `<option value="${stat[k]}">${stat[k]}</option>`;

  }
  y.innerHTML = data;
}
myFunction1();
function myFunction2() {


  var z = document.getElementById("city-list");
  console.log(z);
  //  var option = document.createElement("option");
  var data = "<option>Select City</option>";
  for (var q = 0; q < users.length; q++) {


    var option = document.createElement("option");
    // console.log(obj[j]);
    data += `<option value="${users[q].city}">${users[q].city}</option>`;
  }
  z.innerHTML = data;
}
myFunction2();
function changeFunction() {


  var p = document.getElementById("country-list").value;

  var r = document.getElementById("state-list").value;
  var s = document.getElementById("city-list").value;

  const headings = [
    'ID',
    'City',
    'Phone',
    'State',
    'Country'
  ];
  var temp_row = $('<tr/>');
  for (let i = 0; i < 5; i++) {
    temp_row.append("<th>" + headings[i] + "</th>");
  }
  $('table').append(temp_row);

  for (var i = 0; i < users.length; i++) {

    if (users[i].country === p) {

      tr = $('<tr/>');
      tr.append("<td>" + users[i].id + "</td>");
      tr.append("<td>" + users[i].city + "</td>");
      tr.append("<td>" + users[i].phone + "</td>");
      tr.append("<td>" + users[i].state + "</td>");
      tr.append("<td>" + users[i].country + "</td>");
      $('table').append(tr);
    }
    if (users[i].state === r) {

      tr = $('<tr/>');
      tr.append("<td>" + users[i].id + "</td>");
      tr.append("<td>" + users[i].city + "</td>");
      tr.append("<td>" + users[i].phone + "</td>");
      tr.append("<td>" + users[i].state + "</td>");
      tr.append("<td>" + users[i].country + "</td>");
      $('table').append(tr);
    }
    if (users[i].state === s) {

      tr = $('<tr/>');
      tr.append("<td>" + users[i].id + "</td>");
      tr.append("<td>" + users[i].city + "</td>");
      tr.append("<td>" + users[i].phone + "</td>");
      tr.append("<td>" + users[i].state + "</td>");
      tr.append("<td>" + users[i].country + "</td>");
      $('table').append(tr);
    }



  }

  //document.getElementById("demo").innerHTML = "You selected: " + x;
}