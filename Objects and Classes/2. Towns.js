function solve(params) {
  function creteTown(town, latitude, longitude) {
    return {
      town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };
  }
  for (const iterator of params) {
    [town, latitude, longitude] = iterator.split(" | ");
    console.log(creteTown(town, latitude, longitude));
  }
}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
