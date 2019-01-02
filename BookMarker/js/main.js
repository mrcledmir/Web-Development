//listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e)
{
  var siteName = document.getElementById('siteName').value;
  var siteURL = document.getElementById('siteURL').value;

  var Bookmark =
  {
    name: siteName,
    url: siteURL
  }

  /*local storge test

localStorage.setItem('test', 'Hello World');
console.log(localStorage.getItem('test'));
localStorage.removeItem('test');
console.log(localStorage.getItem('test'));
*/

if(localStorage.getItem('Bookmark')===null)
{
  var bookmark = [];
  bookmark.push(Bookmark);
  localStorage.setItem('bookmark' , JSON.stringify(bookmark))
}else
{
  localStorage.getItem
}

  e.preventDefault();//prevents form from submitting
}
