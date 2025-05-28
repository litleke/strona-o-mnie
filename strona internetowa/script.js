document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("info");
    const container = document.querySelector(".container");

    const informacje = {
      a: `Jeden z największych pianistów na świecie. Polski kompozytor i pianista romantyczny, znany z mazurków, nokturnów i polonezów.<br><img src="images/Chopin.jpeg"><br> Przykładowe utwory:<br><br><a href="https://www.youtube.com/watch?v=g1uLrHq9TDg" target="_blank">"Etiuda Rewolucyjna" (Op. 10 nr 12),</a> <br><a href="https://www.youtube.com/watch?v=7-9wXQpzESo" target="_blank">"Marsz Pogrzebowy" (z Sonaty b-moll),</a> <br><a href="https://www.youtube.com/watch?v=p_iI1J0bALE" target="_blank">Polonez As-dur "Heroiczny".</a>`,

      b: `Wielki niemiecki kompozytor i pianista, który tworzył mimo postępującej głuchoty. <br><img src="images/Beethoven.jpg"><br>Napisał dużo kultowych utworów takich jak: <br><br> <a href="https://www.youtube.com/watch?v=4YV4B_qxl78" target="_blank">"Oda do radości",</a> <br><a href="https://www.youtube.com/watch?v=4591dCHe_sE" target="_blank">"Sonata księżycowa",</a> <br><a href="https://www.youtube.com/watch?v=wfF0zHeU3Zs" target="_blank">"Dla Elizy".</a>`,

      c: `Francuski kompozytor. Jego muzyka charakteryzuje się niekonwencjonalnymi skalami muzycznymi i żywą kolorystyką.<br><img src="images/Debussy.jpg"><br> Napisał wielkie utwory takie jak: <br><br><a href="https://www.youtube.com/watch?v=WNcsUNKlAKw" target="_blank">"Clair de Lune",</a> <br> <a href="https://www.youtube.com/watch?v=cVYH-7QGE-A" target="_blank">"Arabesque no. 1",</a> <br><a href="https://www.youtube.com/watch?v=1rOSj44zP9M" target="_blank">"Dziewczyna o włosach jak len."</a>`
    };

    const wynikDiv = document.createElement("div");
    wynikDiv.id = "wynik";
    wynikDiv.style.marginTop = "20px";
    wynikDiv.style.fontSize = "20px";
    wynikDiv.style.textAlign = "center";
    container.appendChild(wynikDiv);

    select.addEventListener("change", function () {
      const selected = select.value;
      if (informacje[selected]) {
        wynikDiv.innerHTML = informacje[selected];
      } else {
        wynikDiv.innerHTML = "";
      }
    });
  });
