// button initialization
var optionsDropdownActivate = {
  coverTrigger: false
}

function dropdownActivate() {
  document.addEventListener('DOMContentLoaded', function() {
    console.log("activating button...");
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, optionsDropdownActivate);
  });
}

// modal initialization
document.addEventListener('DOMContentLoaded', function() {
  console.log("modal initializtion...")
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});
});


