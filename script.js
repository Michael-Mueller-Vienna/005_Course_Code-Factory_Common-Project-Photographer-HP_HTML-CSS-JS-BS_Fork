const portfolio = [{
    image: "https://cdn.pixabay.com/photo/2017/05/09/03/47/buildings-2297210_960_720.jpg",
    title: "A brave new world made of steel!",
    subtitle: "Yeah we bought a place on Mars and made our summer hacienda!"
},
{
    image: "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_960_720.jpg",
    title: "A proud one holds his territory",
    subtitle: "He smelled something, and had just realised i haven't showered in a week..."
},
{
    image: "https://cdn.pixabay.com/photo/2016/10/21/14/46/fox-1758183_960_720.jpg",
    title: "It is a big world for a small ones",
    subtitle: "The Premiere was held without him....he didn't bought a ticket"
},
{
    image: "https://cdn.pixabay.com/photo/2016/11/22/20/11/photography-1850469_960_720.jpg",
    title: "Beyond space and time to work into",
    subtitle: "Nothing to brag about, one mortgage to worry about"
},
{
    image: "https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_960_720.jpg",
    title: "Eternal peace!",
    subtitle: "Superman wanted to make impression on a earth magnetic field"
},
{
    image: "https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_960_720.jpg",
    title: "Eternal peace!",
    subtitle: "Superman wanted to make impression on a earth magnetic field"
},
{
    image: "https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_960_720.jpg",
    title: "Eternal peace!",
    subtitle: "Superman wanted to make impression on a earth magnetic field"
},
{
    image: "https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_960_720.jpg",
    title: "Eternal peace!",
    subtitle: "Superman wanted to make impression on a earth magnetic field"
},
{
    image: "https://cdn.pixabay.com/photo/2014/09/16/20/52/gorilla-448731_960_720.jpg",
    title: "Countdown to extinction",
    subtitle: `Sir, would you like to repast with your imbibe? "Yes, please!"`
}]

document.getElementById("result").innerHTML = "";
for (let values of portfolio) {
    document.getElementById("result").innerHTML +=` 
        <div class="container">
            <div class="card justify-content-center align-items-bottom m-2" >
                <img src="${values.image}" class="card-img-top" style="height: 30rem; border-radius:1em;">
                <div class="card-img-overlay">
                    <h3 class="card-title"> ${values.title}</h3>
                    <p class="sub-title"> ${values.subtitle} </p>
                </div>
            </div>
        </div>`;

}