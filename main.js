const LinksSocialMedia = {
  github: 'bittencourtsamuel12',
  youtube: 'UCJm31lgg85qTW0ToTUQnrsA',
  facebook: 'samuel.bittencourt6',
  instagram: 'samuelbittencourtt1'
  //falta o twitter ;-;
}

function changeSocialMediaLinks() {
  // document.getElementById('userName').textContent = 'Muka'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
    })
}
getGitHubProfileInfos()
