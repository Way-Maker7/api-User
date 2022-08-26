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

  document.body.innerHTML = userData.map(
    (user) => `
  <div class= "card">

  <img src=${user.picture.large} alt="picture of ${user.name.first}"/>
  <h3>${user.name.first}</h3>
  
  </div>

    
    
    `
  );
};

userDisplay();
