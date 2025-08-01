//  ! select target Element
const appContainer = document.getElementById('app')
const generateBtn = document.getElementById('generateBtn')
// ! create new html element
const createProfileCard = () => {
    // create profile card container
    const profileCard = document.createElement('div')
    // add class
    profileCard.className = 'profile-card main'
    // create profile image
    const profileImage = document.createElement('img')

    profileImage.src = 'https://cdn.pixabay.com/photo/2025/06/18/07/36/river-9666581_640.jpg' 

    // create title 
    const nameTitle = document.createElement('h3')
    nameTitle.innerText = 'Christoper Garcia'
 
    // create a paragraph element for the desc
    const profileDescription = document.createElement('p')
    profileDescription.innerText = 'A passionate web developer with experience in JavaScript and React.' 
    // ! add content to the element created
    
    // ! add classes or ids as needed


    //append everything 
    profileCard.appendChild(profileImage)
    profileCard.appendChild(nameTitle)
    profileCard.appendChild(profileDescription)
    appContainer.appendChild(profileCard)

    

}
createProfileCard()
generateBtn.addEventListener('click',createProfileCard)


// ! append element

