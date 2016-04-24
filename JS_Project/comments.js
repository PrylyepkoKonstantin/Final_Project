window.onload = function () {
    changeImage.onchange = function () {
      this.selected = this.options[this.selectedIndex];
      pic.src = this.selected.getAttribute('data-img');
    };
};

var commentRef = new Firebase('https://sweltering-torch-2062.firebaseio.com/');

$('#addcomment').on('click', function () {
  commentRef.push({
    name:$('#name').val(),
    email:$('#email').val(),
    subject:$('#subject').val(),
    text:$('#comment').val()
  });
  $('#name, #email, #subject, #comment').val('');
});

commentRef.on('child_added', function(snapshot) {
  let comment = snapshot.val();
  $('#commentBlock').append(`
    <li class="comment_list">
      <div class="comment_name"> ${comment.name}:</div>
      <div class="comment_email"> ${comment.email}</div>
      <div class="comment_subject"> ${comment.subject}</div>
      <div class="comment_text"> ${comment.text}</div>
    </li>
    <br>
  `);
})

// $('#deletecomment').on('click', function () {
// commentRef.on('child_removed', function(snapshot) {
//  let comment = snapshot.val();
//   $('comment_list').remove();
// });
// });