function attachEvents() {
  const symbols = {
    Sunny: "&#x2600",
    "Partly sunny": "&#x26C5",
    Overcast: "&#x2601",
    Rain: "&#x2614",
  };
  document.querySelector("#submit").addEventListener("click", async () => {
    document.querySelector("#forecast").style.display = "block";

    const cityName = document.querySelector("#location").value;
    const locationsObj = await (
      await fetch("http://localhost:3030/jsonstore/forecaster/locations")
    )
      .json()
      .catch(() => {
        document.querySelector("#forecast").textContent = "Error";
      });
    console.log(locationsObj);
    let cityCode = "";
    try {
      cityCode = locationsObj.find((x) => x.name === cityName).code;
    } catch (_) {
      document.querySelector("#forecast").textContent = "Error";
      return;
    }

    const currentWeather = await (
      await fetch(
        "http://localhost:3030/jsonstore/forecaster/today/" + cityCode
      )
    )
      .json()
      .catch(() => {
        document.querySelector("#forecast").textContent = "Error";
      });
    const threeDayDorcast = await (
      await fetch(
        "http://localhost:3030/jsonstore/forecaster/upcoming/" + cityCode
      )
    )
      .json()
      .catch(() => {
        document.querySelector("#forecast").textContent = "Error";
      });

    console.log(currentWeather);
    console.log(threeDayDorcast);

    CreateCurrentWeather(currentWeather);

    const upcomingDiv = document.createElement("div");
    upcomingDiv.setAttribute("class", "forecast-info");

    threeDayDorcast.forecast.forEach((weather) => {
      const span = document.createElement("span");
      span.setAttribute("class", "upcoming");
      span.appendChild(CreateSpan(`${symbols[weather.condition]}`, "symbol"));
      span.appendChild(
        CreateSpan(`${weather.low}°/${weather.high}°`, "forecast-data")
      );
      span.appendChild(CreateSpan(weather.condition, "forecast-data"));

      upcomingDiv.appendChild(span);
    });

    document.querySelector("#upcoming").appendChild(upcomingDiv);
  });

  function CreateCurrentWeather(currentWeather) {
    const spanCondition = CreateSpan("", "condition");
    spanCondition.appendChild(CreateSpan(currentWeather.name, "forecast-data"));
    spanCondition.appendChild(
      CreateSpan(
        `${currentWeather.forecast.low}°/${currentWeather.forecast.high}°`,
        "forecast-data"
      )
    );
    spanCondition.appendChild(
      CreateSpan(currentWeather.forecast.condition, "forecast-data")
    );
    const div = document.createElement("div");
    div.setAttribute("class", "forecasts");

    div.appendChild(
      CreateSpan(
        `${symbols[currentWeather.forecast.condition]}`,
        "condition",
        "symbol"
      )
    );
    div.appendChild(spanCondition);

    document.querySelector("#current").appendChild(div);
  }

  function CreateSpan(text, ...classes) {
    const span = document.createElement("span");
    span.setAttribute("class", `${classes.join(" ")}`);
    span.innerHTML = text;
    return span;
  }
}

attachEvents();
