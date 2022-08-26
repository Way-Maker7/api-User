let userData = [];

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=36")
    .then((res) => res.json())
    .then((data) => (userData = data.results));
  //.then((data) => console.log(data.results));

  console.log(userData);
};

const userDisplay = async () => {
  await fetchUser();

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("de-DE", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    return newDate;
  };

  document.body.innerHTML = userData.map(
    (user) => `
  <div class= "card">

  <img src=${user.picture.large} alt="picture of ${user.name.first}"/>
  <h3>${user.name.first}</h3>
  <p>${user.location.city} , ${user.dob.age} years</p>
  <em>member since: ${dateParser(user.registered.date)}</em>
  </div>

    
    
    `
  );
};

userDisplay();
