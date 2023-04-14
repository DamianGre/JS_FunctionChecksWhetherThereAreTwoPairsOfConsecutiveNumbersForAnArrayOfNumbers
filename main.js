/*
Napisać funkcję, która dla wprowadzonej tablicy liczb sprawdzi, czy istnieją dwie pary kolejnych 
liczb, dających ten sam iloczyn, i zwróci ich pozycje (indeksy pierwszych liczb danej trójki) dla 
pierwszej takiej powtórki
*/

function sprawdźPowtórkęIloczynów(kolekcja) {
   let hasPair = 0;
   let zbiór = new Set()
   for(let indeks = 0; indeks < kolekcja.length; indeks++){
      let wartość = kolekcja[indeks] * kolekcja[indeks+1]
      if(zbiór.has(wartość)){
          console.log("Znaleziono dwie pary kolenych liczb, które mają taki sam iloczyn. Ich indexy to: " 
          + (indeks-1) + "," + indeks + "," + (indeks+1))
          hasPair++}
      else
          zbiór.add(wartość)
   }
   if(hasPair == 0)
      console.log("NIE znaleziono dwóch par kolejnych liczb, które mają taki sam iloczyn")
}
