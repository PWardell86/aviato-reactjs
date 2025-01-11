function TripStopItem({ title, basic, setState }) {
  const setCountry = (e) => {
    setState({ country: e.target.value, city: "", activity: "" });
  };

  const setCity = (e) => {
    setState({ country: "", city: e.target.value, activity: ""});
  };

  const setActivity = (e) => {
    setState({ country: "", city: "", activity: e.target.value });
  };

  return (
    <>
      <h3>{title}</h3>
      <input placeholder="Country" onChange={setCountry} />
      <input placeholder="City" onChange={setCity}/>
      {basic ? null : <input type="text" placeholder="Activity" onChange={setActivity}/>}
    </>
  );
}

export default TripStopItem;
